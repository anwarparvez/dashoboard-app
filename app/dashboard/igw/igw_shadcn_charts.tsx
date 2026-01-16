"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const localOperatorData = [
  { name: "Grameenphone", calls: 3522, minutes: 2396.23 },
  { name: "Robi", calls: 3983, minutes: 2187.98 },
  { name: "Banglalink", calls: 288, minutes: 191.03 },
  { name: "Alaap", calls: 175, minutes: 82.43 },
  { name: "Teletalk", calls: 166, minutes: 266.63 }
];

const internationalCarrierData = [
  { name: "ETISALAT UAE", minutes: 1418.12 },
  { name: "STC Saudi", minutes: 2188.6 },
  { name: "Telecom MY", minutes: 330.3 },
  { name: "Singtel", minutes: 376.63 }
];

export default function IGWCharts() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">Local Operator – Total Calls</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={localOperatorData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="calls" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg">International Carrier – Total Minutes</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={internationalCarrierData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="minutes" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
