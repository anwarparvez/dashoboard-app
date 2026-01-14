import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { seedData } from "./data/seedData";



const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Seeding database...");

  prisma.user.deleteMany();
  prisma.customer.deleteMany();
  prisma.vPNClient.deleteMany();
  prisma.bandwidthCapacity.deleteMany();
  prisma.serviceSubscription.deleteMany();
  prisma.trafficStat.deleteMany();
  prisma.alaapStat.deleteMany();
  prisma.bill.deleteMany();
  prisma.regionalFinance.deleteMany();
  

  await prisma.user.createMany({
    data: seedData.users,
    skipDuplicates: true,
  });

  await prisma.customer.createMany({
    data: seedData.customers,
    skipDuplicates: true,
  });

  await prisma.bandwidthCapacity.createMany({
    data: seedData.bandwidthCapacity,
  });

  await prisma.serviceSubscription.createMany({
    data: seedData.serviceSubscriptions,
  });


    await prisma.vPNClient.createMany({
      data: seedData.vpnClients,
    });
  

  await prisma.trafficStat.createMany({
    data: seedData.trafficStats,
  });

  await prisma.alaapStat.createMany({
    data: seedData.alaapStats,
  });

  await prisma.bill.createMany({
    data: seedData.bills,
  });

  await prisma.regionalFinance.createMany({
    data: seedData.regionalFinance,
  });

  console.log("✅ Database seeded successfully");
}

main()
  .catch((e) => {
    console.error("❌ Seed error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
