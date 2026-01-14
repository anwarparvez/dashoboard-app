import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { userSchema } from "@/lib/validators/user";

export async function POST(req: Request) {
  const body = await req.json();
  const parsed = userSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(parsed.error, { status: 400 });
  }

  const user = await prisma.user.create({
    data: parsed.data,
  });

  return NextResponse.json(user);
}

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
