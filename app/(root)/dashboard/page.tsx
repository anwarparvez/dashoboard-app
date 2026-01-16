import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { prisma } from "@/db/prisma";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IGWCharts from "./igw/igw_shadcn_charts";

export default async function DashboardPage() {
  /* ===============================
     AUTHENTICATION
  ================================ */
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  /* ===============================
     RBAC (Adjust if needed)
  ================================ */
  if (!["ADMIN", "MANAGER"].includes(session.user.role)) {
    redirect("/unauthorized");
  }

  /* ===============================
     DASHBOARD DATA (SERVER-SIDE)
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

  const data = {
    users: totalUsers,
    customers: totalCustomers,
    bandwidthGb: totalBandwidth._sum.capacityGb ?? 0,
    vpnClients: totalVpnClients,
    revenue: totalRevenue._sum.totalAmount ?? 0,
    due: totalDue._sum.totalAmount ?? 0,
  };

  /* ===============================
     UI
  ================================ */
  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {data.users}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Customers</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {data.customers}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Bandwidth Capacity (Gbps)</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {data.bandwidthGb}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>VPN Clients</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">
            {data.vpnClients}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Revenue</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-green-600">
            ৳ {data.revenue.toLocaleString()}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Total Due</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold text-red-600">
            ৳ {data.due.toLocaleString()}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8">
        <IGWCharts />
      </div>
    </>
  );
}
