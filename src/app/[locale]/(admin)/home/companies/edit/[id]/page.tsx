import PageName from "@/components/ui/commons/PageName";
import React, { Suspense } from "react";
import { Metadata } from "next";
import { getCompanyDetails } from "@/actions/admin/taxModule/get-company-details";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import UpsertCompany from "../../ui/UpsertCompany";
import { auth } from "@clerk/nextjs";
import { getUser } from "@/utils/facades/serverFacades/userFacade";
import NotFound from "@/components/layouts/errors/NotFound";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Edit Company",
};

const AdminTaxModuleEditCompanyPage = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { userId } = await getUser(userClerk, "org");
  const company = await getCompanyDetails(Number(params.id), userId);
  
  const t = await getTranslations("AdminLayout.pages.companies");

  return (
    <div>
      {!company ? (
        <div className="flex justify-center items-center h-96">
          <NotFound message={t("notCompaniesFound")} />
        </div>
      ) : (
        <div>
          <PageName name={"Edit Company"} isSubPage={true} />
          <Suspense fallback={<TableLoaderSkeleton count={10} />}>
            <UpsertCompany companyId={Number(params.id)} values={company} />
          </Suspense>
        </div>
      )}
    </div>
  );
};

export default AdminTaxModuleEditCompanyPage;
