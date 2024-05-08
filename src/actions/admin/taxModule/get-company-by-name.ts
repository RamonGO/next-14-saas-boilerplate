"use server";
import prisma from "@/lib/db";
export const getCompanyByName = async (name: string) => {
  return await prisma.company.findFirst({
    where: {
      name: name,
    },
  });
};
