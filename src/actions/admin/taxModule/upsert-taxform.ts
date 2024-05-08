"use server";
import prisma from "@/lib/db";
import { checkPermission } from "@/utils/facades/serverFacades/scurityFacade";
import { getUser, getUserByExternalId } from "@/utils/facades/serverFacades/userFacade";
import { auth } from "@clerk/nextjs";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const scope = "admin:tax:upsert";
export const upsertTaxForm = async ({
  modelId,
  payload,
}: {
  modelId?: number;
  payload: Prisma.TaxFormCreateInput | Prisma.TaxFormUpdateInput;
}) => {
  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { permissions } = await getUser(userClerk);
  const { userId } = await getUser(userClerk,"org");
  checkPermission(permissions, scope);
  try {
    await prisma.taxForm.upsert({
      where: {
        id: modelId ? modelId : 0,
      },
      update: {
        name: payload.name,
        description: payload.description,
        country: payload.country,
        informative: true,
        active: payload.active,
      },
      create: {
        name: payload.name as string,
        description: payload.description as string,
        country: payload.country as string,
        informative: true as boolean,
        active: payload.active as boolean
      },
    });

    revalidatePath("/home/settings/taxforms");
  } catch (error: any) {
    throw new Error(error.message);
  }
  redirect("/home/settings/taxforms");
};
