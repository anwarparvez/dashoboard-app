import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
  try {
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
