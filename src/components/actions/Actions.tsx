"use server";

import prisma from "@/lib";
import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

export async function changeName(id: string, name: string) {
  try {
    await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        name: name,
      },
    });
  } catch (e) {
    console.log("Hiba a nev valtoztataskor", e);
  }
  revalidatePath("/profile");
}

export async function getCurrentUser() {
  const clerkUser = await currentUser();
  const user = await prisma.user.findUnique({
    where: {
      clerkId: clerkUser?.id,
    },
  });
  return user;
}
