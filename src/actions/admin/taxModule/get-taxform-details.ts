"use server";
import prisma from "@/lib/db";
export const getTaxFormDetails = async (taxFormId: number) => {
  return await prisma.taxForm.findUnique({
    where: {
      id: taxFormId,
    }
  });
};
