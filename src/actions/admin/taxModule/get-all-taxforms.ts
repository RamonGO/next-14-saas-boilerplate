"use server";
import prisma from "@/lib/db";
import { Prisma } from "@prisma/client";

export const getAllTaxForms = async ({
  args,
}: {
  args: {
    search: string;
  };
}) => {
  let whereSearch: Prisma.TaxFormWhereInput;
  whereSearch = {};

  if (args.search) {
    whereSearch = {
      name: {
        contains: args.search,
      },
    };
  }
  return {
    data: await prisma.taxForm.findMany({
      where: {
        ...whereSearch,
      },
      orderBy: {
        name: "asc",
      },
    }),
  };
};
