import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IGWCharts from "./igw/igw_shadcn_charts";

async function getDashboardSummary() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/dashboard/summary`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch dashboard data");
  }

  return res.json();
}

export default async function DashboardPage() {
  const data = await getDashboardSummary();

  return (
    <>
      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Total Users</CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-bold">{data.users}</CardContent>
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

      <div className="mt-8" >
      <IGWCharts/>
      </div>
    </>
  );
}
