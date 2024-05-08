"use server";
import prisma from "@/lib/db";
import { checkPermission } from "@/utils/facades/serverFacades/scurityFacade";
import { getUser, getUserByExternalId } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const scope = "admin:tax:upsert";
export const upsertCompany = async ({
  modelId,
  payload,
}: {
  modelId?: number;
  payload: Prisma.CompanyCreateInput | Prisma.CompanyUpdateInput;
}) => {
  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { permissions } = await getUser(userClerk);
  const { userId } = await getUser(userClerk,"org");
  checkPermission(permissions, scope);
  try {
    await prisma.company.upsert({
      where: {
        id: modelId ? modelId : 0,
      },
      update: {
        name: payload.name,
        taxId: payload.taxId,
        country: payload.country,
        orgId: userId,
      },
      create: {
        name: payload.name as string,
        taxId: payload.taxId as string,
        country: payload.country as string,
        orgId: userId,
      },
    });

    revalidatePath("/home/companies");
  } catch (error: any) {
    throw new Error(error.message);
  }
  redirect("/home/companies");
};
