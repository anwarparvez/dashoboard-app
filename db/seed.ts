import "dotenv/config";
import { prisma } from "./prisma";
import { seedData } from "../prisma/data/seedData";

async function main() {
  console.log("🌱 Seeding database...");

  /* ===============================
     CLEAN DATABASE (ORDER MATTERS)
  ================================ */
  await prisma.$transaction([
    prisma.session.deleteMany(),
    prisma.account.deleteMany(),

    prisma.vPNClient.deleteMany(),
    prisma.serviceSubscription.deleteMany(),
    prisma.bill.deleteMany(),
    prisma.regionalFinance.deleteMany(),

    prisma.trafficStat.deleteMany(),
    prisma.alaapStat.deleteMany(),
    prisma.bandwidthCapacity.deleteMany(),

    prisma.customer.deleteMany(),
    prisma.user.deleteMany(),
  ]);

  console.log("🧹 Old data cleared");

  /* ===============================
     USERS
  ================================ */
  await prisma.user.createMany({
    data: seedData.users,
    skipDuplicates: true,
  });

  /* ===============================
     CUSTOMERS
  ================================ */
  await prisma.customer.createMany({
    data: seedData.customers,
    skipDuplicates: true,
  });

  /* ===============================
     BANDWIDTH
  ================================ */
  await prisma.bandwidthCapacity.createMany({
    data: seedData.bandwidthCapacity,
  });

  /* ===============================
     SERVICE SUBSCRIPTIONS
  ================================ */
  await prisma.serviceSubscription.createMany({
    data: seedData.serviceSubscriptions,
  });

  /* ===============================
     VPN CLIENTS
  ================================ */
  await prisma.vPNClient.createMany({
    data: seedData.vpnClients,
  });

  /* ===============================
     TRAFFIC STATS
  ================================ */
  await prisma.trafficStat.createMany({
    data: seedData.trafficStats,
  });

  /* ===============================
     ALAAP STATS
  ================================ */
  await prisma.alaapStat.createMany({
    data: seedData.alaapStats,
  });

  /* ===============================
     BILLING
  ================================ */
  await prisma.bill.createMany({
    data: seedData.bills,
  });

  /* ===============================
     REGIONAL FINANCE
  ================================ */
  await prisma.regionalFinance.createMany({
    data: seedData.regionalFinance,
  });

  console.log("✅ Database seeded successfully");
}

/* ===============================
   EXECUTION
================================ */
main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
