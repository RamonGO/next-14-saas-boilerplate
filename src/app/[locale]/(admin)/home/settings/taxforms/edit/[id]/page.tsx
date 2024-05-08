import PageName from "@/components/ui/commons/PageName";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { getTaxFormDetails } from "@/actions/admin/taxModule/get-taxform-details";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import UpsertTaxForm from "../../ui/UpsertTaxForm";
import { auth } from "@clerk/nextjs";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import NotFound from "@/components/layouts/errors/NotFound";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Edit TaxForm",
};

const AdminTaxModuleEditTaxFormPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { userId } = await getUser(userClerk, "org");
  const taxform = await getTaxFormDetails(Number(params.id));
  
  const t = await getTranslations("AdminLayout.pages.taxforms");

  return (
    <div>
      {!taxform ? (
        <div className="flex justify-center items-center h-96">
          <NotFound message={t("notTaxFormsFound")} />
        </div>
      ) : (
        <div>
          <PageName name={"Edit Tax Form"} isSubPage={true} />
          <Suspense fallback={<TableLoaderSkeleton count={10} />}>
            <UpsertTaxForm taxFormId={Number(params.id)} values={taxform} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default AdminTaxModuleEditTaxFormPage;
