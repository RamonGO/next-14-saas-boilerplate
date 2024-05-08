import PageName from "@/components/ui/commons/PageName";
import React from "react";
import { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "Tax Filings",
};

const TaxFilingsPage = () => {
  const t = useTranslations("AdminLayout.navigation");
  return (
    <div>
      <PageName
        name={t("taxFilingsTitle")}
        btn1={{
          name: t("btntaxFilings"),
          href: "/home/taxfilings",
        }}
      />
    </div>
  );
};

export default TaxFilingsPage;
