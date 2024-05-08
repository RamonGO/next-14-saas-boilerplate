"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getAllCompanies = async ({
  args,
}: {
  args: {
    userId: number;
    search: string;
  };
}) => {
  const { userId } = args;
  let whereSearch: Prisma.CompanyWhereInput;
  whereSearch = {};

  if (args.search) {
    whereSearch = {
      name: {
        contains: args.search,
      },
    };
  }
  return {
    data: await prisma.company.findMany({
      where: {
        ...whereSearch,
        orgId: userId,
      },
      orderBy: {
        name: "asc",
      },
    }),
  };
};
