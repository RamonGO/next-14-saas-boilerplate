import PageName from "@/components/ui/commons/PageName";
import React from "react";
import { Metadata } from "next";
import CompaniesList from "./ui/CompaniesList";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "companies",
};

const CompaniesPage = ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const t = useTranslations("AdminLayout.navigation");
  return (
    <div>
      <PageName
        name={t("companies")}
      />
      <CompaniesList  query={query}/>
    </div>
  );
};

export default CompaniesPage;
