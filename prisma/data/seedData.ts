import { Role } from "@prisma/client";
import { hashSync } from "bcryptjs";

export const seedData = {
  users: [
    {
      name: "Admin User",
      email: "admin@btcl.gov.bd",
      password: hashSync("123456", 10),
      role: Role.ADMIN,
    },
    {
      name: "Manager User",
      email: "manager@btcl.gov.bd",
      password: hashSync("123456", 10),
      role: Role.MANAGER,
    },
    {
      name: "Operations User",
      email: "ops@btcl.gov.bd",
      password: hashSync("123456", 10),
      role: Role.OPERATOR,
    },
    {
      name: "Viewer User",
      email: "viewer@btcl.gov.bd",
      password: hashSync("123456", 10),
      role: Role.VIEWER,
    },
  ],
  customers: [
    {
      id: "cust-1",
      name: "Grameenphone Limited",
      customerType: "MNO",
      status: "ACTIVE",
    },
    {
      id: "cust-2",
      name: "Bangladesh Election Commission",
      customerType: "GOVT",
      status: "ACTIVE",
    },
    {
      id: "cust-3",
      name: "BTCL Alaap",
      customerType: "IPTSP",
      status: "ACTIVE",
    },
  ],

  vpnClients: [
    {
      customerId: "cust-2",   // must exist in customers
      activeLinks: 448,
      totalBandwidth: 899,
    },
  ],

  bandwidthCapacity: [
    {
      linkType: "SEA-ME-WE-4",
      capacityGb: 230,
      direction: "Upstream",
    },
    {
      linkType: "SEA-ME-WE-5",
      capacityGb: 260,
      direction: "Upstream",
    },
    {
      linkType: "ITC",
      capacityGb: 720,
      direction: "Upstream",
    },
  ],

  serviceSubscriptions: [
    {
      customerId: "cust-1",
      serviceType: "IGW",
      accessType: "International Voice",
      active: true,
    },
    {
      customerId: "cust-2",
      serviceType: "VPN",
      accessType: "Govt Secure Network",
      active: true,
    },
    {
      customerId: "cust-3",
      serviceType: "ALAAP",
      accessType: "OTT + IPTSP",
      active: true,
    },
  ],

  trafficStats: [
    {
      trafficType: "IGW",
      direction: "Outgoing",
      operatorName: "Grameenphone",
      totalCalls: 3522,
      totalMinutes: 2396.23,
      reportDate: new Date("2026-01-01"),
    },
    {
      trafficType: "IGW",
      direction: "Incoming",
      operatorName: "Robi Axiata",
      totalCalls: 644594,
      totalMinutes: 2313688.75,
      reportDate: new Date("2026-01-01"),
    },
  ],

  alaapStats: [
    {
      metric: "new_signup_24h",
      value: BigInt(1240),
      reportDate: new Date("2026-01-01"),
    },
    {
      metric: "total_signup",
      value: BigInt(1400000),
      reportDate: new Date("2026-01-01"),
    },
  ],

  bills: [
    {
      customerId: "cust-1",
      amount: 4097600,
      vat: 614600,
      totalAmount: 4712200,
      billMonth: "2025-12",
      status: "PAID",
    },
    {
      customerId: "cust-2",
      amount: 13485000,
      vat: 2010000,
      totalAmount: 15495000,
      billMonth: "2025-12",
      status: "DUE",
    },
  ],

  regionalFinance: [
    {
      region: "CGM_DTR_NORTH",
      dgmOffice: "DGM Phones, Gulshan",
      issuedAmount: 7054063465,
      collected: 6209246498,
      dueAmount: 844816967,
      reportDate: new Date("2025-12-31"),
    },
    {
      region: "CGM_SOUTHERN",
      dgmOffice: "DGM Telecom, Khulna",
      issuedAmount: 1128815880,
      collected: 532398094,
      dueAmount: 596417786,
      reportDate: new Date("2025-12-31"),
    },
  ],
};
