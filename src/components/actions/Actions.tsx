"use server";

import prisma from "@/lib";

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
}
