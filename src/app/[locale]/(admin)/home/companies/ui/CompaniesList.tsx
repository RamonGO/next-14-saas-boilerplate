import { getAllCompanies } from "@/actions/admin/taxModule/get-all-companies";
import NotFound from "@/components/layouts/errors/NotFound";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import { Suspense } from "react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";
import DeleteModel from "@/components/core/DeleteModel";
import { deleteCompany } from "@/actions/admin/taxModule/delete-company";
import { traslateData } from "@/utils/facades/frontendFacades/parseValuesFacade";
import { useLocale } from "next-intl";
import { auth } from "@clerk/nextjs";
import Search from "@/components/ui/commons/Search";
import { useTranslations } from "next-intl";
import { getUser, getUserByExternalId } from "@/utils/facades/serverFacades/userFacade";
import { useState } from "react";

import Table from "@/components/ui/commons/Table";

const CompanyList = async ({ query }: { query: string }) => {
  const t = useTranslations("AdminLayout.navigation");
  const search = query || "";

  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { userId } = await getUser(userClerk, "org");

  const { data } = await getAllCompanies({
    args: {
      search,
      userId,
    },
  });
  const locale = useLocale();

  return (
    <div>
        <div>
          <Table
            name={"Company"}
            path={"/home/companies"}
            btn1={{
              name: t("btnCompanies"),
              href: "/home/companies/add",
            }}
            columns={["name", "taxId", "country"]}
            data={data}
            hasHeader
            Actions={{
              editPath:"/home/companies/edit/",
              deleteFnc: deleteCompany,
            }}
            hasSearchBar
          />
        </div>
    </div>
  );
};

export default CompanyList;
