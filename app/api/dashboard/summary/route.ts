import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/db/prisma";

export async function GET() {
  try {
    /* ===============================
       AUTHENTICATION
    ================================ */
    const session = await getServerSession(authOptions);

    if (!session) {
      console.error("No session found");
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    /* ===============================
       RBAC AUTHORIZATION
       Allowed: ADMIN, MANAGER
    ================================ */
    const allowedRoles = ["ADMIN", "MANAGER"];

    if (!allowedRoles.includes(session.user.role)) {
      console.error("Forbidden role:", session.user.role);
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    /* ===============================
       DASHBOARD AGGREGATIONS
    ================================ */
    const [
      totalUsers,
      totalCustomers,
      totalBandwidth,
      totalVpnClients,
      totalRevenue,
      totalDue,
    ] = await Promise.all([
      prisma.user.count(),
      prisma.customer.count(),

      prisma.bandwidthCapacity.aggregate({
        _sum: { capacityGb: true },
      }),

      prisma.vPNClient.count(),

      prisma.bill.aggregate({
        _sum: { totalAmount: true },
        where: { status: "PAID" },
      }),

      prisma.bill.aggregate({
        _sum: { totalAmount: true },
        where: { status: "DUE" },
      }),
    ]);

    return NextResponse.json({
      users: totalUsers,
      customers: totalCustomers,
      bandwidthGb: totalBandwidth._sum.capacityGb ?? 0,
      vpnClients: totalVpnClients,
      revenue: totalRevenue._sum.totalAmount ?? 0,
      due: totalDue._sum.totalAmount ?? 0,
    });
  } catch (error) {
    console.error("Dashboard summary error:", error);
    return NextResponse.json(
      { error: "Failed to load dashboard summary" },
      { status: 500 }
    );
  }
}
