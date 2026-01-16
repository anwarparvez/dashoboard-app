"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function DashboardHome() {
  return (
    <div className="space-y-6 p-6">

      {/* Top KPI Summary */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Kpi title="Total Revenue" value="৳ 125.6 Cr" />
        <Kpi title="Total Traffic" value="8.2 B Min" />
        <Kpi title="Active Users" value="4.8 M" />
        <Kpi title="Active Alerts" value="7" badge="Critical" />
      </div>

      {/* Service Navigation */}
      <Tabs defaultValue="igw" className="w-full">
        <TabsList className="flex flex-wrap">
          <TabsTrigger value="igw">IGW</TabsTrigger>
          <TabsTrigger value="icx">ICX</TabsTrigger>
          <TabsTrigger value="domain">Domain</TabsTrigger>
          <TabsTrigger value="pstn">PSTN + GPON</TabsTrigger>
          <TabsTrigger value="vpn">VPN</TabsTrigger>
          <TabsTrigger value="lli">LLI</TabsTrigger>
        </TabsList>

        {/* IGW Section */}
        <TabsContent value="igw" className="space-y-6">
          <SectionHeader title="IGW – Voice Services" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Kpi title="Incoming Minutes" value="6.1 M" />
            <Kpi title="Outgoing Minutes" value="5.3 M" />
            <Kpi title="ASR" value="42.3%" />
            <Kpi title="ACD" value="128 sec" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderCard title="Incoming vs Outgoing" />
            <PlaceholderCard title="Carrier-wise Minutes" />
          </div>

          <PlaceholderTable title="Carrier / Operator Details" />
        </TabsContent>

        {/* Domain Section */}
        <TabsContent value="domain" className="space-y-6">
          <SectionHeader title="Domain Services" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Kpi title="Active Domains" value="124,560" />
            <Kpi title="New Registration" value="1,230" />
            <Kpi title="Renewals" value="980" />
            <Kpi title="Expired" value="72" badge="Alert" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PlaceholderCard title="Registration Trend" />
            <PlaceholderCard title="Domain Type Split" />
          </div>
        </TabsContent>
      </Tabs>

      {/* Global Alert Strip */}
      <Card className="border-l-4 border-red-500">
        <CardContent className="p-4 text-sm">
          ⚠️ Critical Alerts: IGW Carrier Down | GPON Fault Zone-3 | NIX High Load
        </CardContent>
      </Card>

    </div>
  );
}

function Kpi({ title, value, badge }: { title: string; value: string; badge?: string }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        {badge && <Badge variant="destructive">{badge}</Badge>}
      </CardContent>
    </Card>
  );
}

function SectionHeader({ title }: { title: string }) {
  return <h2 className="text-xl font-semibold">{title}</h2>;
}

function PlaceholderCard({ title }: { title: string }) {
  return (
    <Card className="h-65 rounded-2xl flex items-center justify-center text-muted-foreground">
      {title} (Chart)
    </Card>
  );
}

function PlaceholderTable({ title }: { title: string }) {
  return (
    <Card className="rounded-2xl">
      <CardHeader>
        <CardTitle className="text-base">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-muted-foreground">
        Table will be here
      </CardContent>
    </Card>
  );
}
