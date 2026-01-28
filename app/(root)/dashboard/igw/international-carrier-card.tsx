"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const internationalCarrierData = [
  { name: "ETISALAT UAE", minutes: 1418.12 },
  { name: "STC Saudi", minutes: 2188.6 },
  { name: "Telecom MY", minutes: 330.3 },
  { name: "Singtel", minutes: 376.63 },
];

export default function IGWIntCrrierChart() {
  return (
    <Card className="rounded-2xl shadow-sm">
      <CardHeader>
        <CardTitle className="text-lg">
          International Carrier – Total Minutes
        </CardTitle>
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
  );
}
