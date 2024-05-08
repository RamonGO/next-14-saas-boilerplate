import PageName from "@/components/ui/commons/PageName";
import React from "react";
import { Metadata } from "next";
import UpsertTaxForm from "../ui/UpsertTaxForm";

export const metadata: Metadata = {
  title: "New Tax Form",
};

const AdminTaxModuleNewCompanyPage = () => {
  return (
    <div>
      <PageName
        isSubPage={true}
        name={"New Tax Form"}
      />
      <UpsertTaxForm />
    </div>
  );
};

export default AdminTaxModuleNewCompanyPage;
