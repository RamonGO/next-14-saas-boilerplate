"use server";
import prisma from "@/lib/db";
export const getTaxFormByName = async (name: string) => {
  return await prisma.taxForm.findFirst({
    where: {
      name: name,
    },
  });
};
