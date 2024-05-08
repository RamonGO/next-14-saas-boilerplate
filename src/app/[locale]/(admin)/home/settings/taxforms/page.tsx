import PageName from "@/components/ui/commons/PageName";
import React from "react";
import { Metadata } from "next";
import TaxformsList from "./ui/TaxFormsList";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "taxforms",
};

const TaxFormsPage = ({
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
        name={t("taxforms")}
        isSubPage
      />
      <TaxformsList  query={query}/>
    </div>
  );
};

export default TaxFormsPage;
