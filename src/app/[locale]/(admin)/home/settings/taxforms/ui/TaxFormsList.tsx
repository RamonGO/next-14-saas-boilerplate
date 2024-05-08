import { getAllTaxForms } from "@/actions/admin/taxModule/get-all-taxforms";
import NotFound from "@/components/layouts/errors/NotFound";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import { Suspense } from "react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/outline";
import DeleteModel from "@/components/core/DeleteModel";
import { deleteTaxform } from "@/actions/admin/taxModule/delete-taxform";
import { traslateData } from "@/utils/facades/frontendFacades/parseValuesFacade";
import { useLocale } from "next-intl";
import { auth } from "@clerk/nextjs";
import Search from "@/components/ui/commons/Search";
import { useTranslations } from "next-intl";
import { getUser, getUserByExternalId } from "@/utils/facades/serverFacades/userFacade";
import { useState } from "react";

import Table from "@/components/ui/commons/Table";

const TaxFormsList = async ({ query }: { query: string }) => {
  const t = useTranslations("AdminLayout.navigation");
  const search = query || "";

  const userClerk = auth();
  if (!userClerk) throw new Error("client clerk not found");
  const { userId } = await getUser(userClerk, "org");

  const { data } = await getAllTaxForms({
    args: {
      search,
    },
  });
  const locale = useLocale();

  return (
    <div>
        <div>
          <Table
            name={"TaxForms"}
            path={"/home/settings/taxforms"}
            btn1={{
              name: t("btnTaxforms"),
              href: "/home/settings/taxforms/add",
            }}
            columns={["name", "description", "country"]}
            data={data}
            hasHeader
            Actions={{
              editPath:"/home/settings/taxforms/edit/",
              deleteFnc: deleteTaxform,
            }}
            hasSearchBar
          />
        </div>
    </div>
  );
};

export default TaxFormsList;
