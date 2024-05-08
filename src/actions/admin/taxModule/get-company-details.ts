"use server";
import prisma from "@/lib/db";
export const getCompanyDetails = async (companyId: number, orgId:number) => {
  return await prisma.company.findUnique({
    where: {
      id: companyId,
      orgId: orgId,
    }
  });
};
