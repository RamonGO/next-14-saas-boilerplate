import PageName from "@/components/ui/commons/PageName";
import React from "react";
import { Metadata } from "next";
import UpsertCompany from "../ui/UpsertCompany";
import AdminCompaniesTabs from "../ui/CompaniesTabs";

export const metadata: Metadata = {
  title: "New Company",
};

const AdminTaxModuleNewCompanyPage = () => {
  return (
    <div>
      <PageName
         isSubPage={true}
        name={"New Company"}
      />
      <UpsertCompany />
    </div>
  );
};

export default AdminTaxModuleNewCompanyPage;
