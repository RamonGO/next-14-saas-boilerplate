"use client";
import Tabs from "@/components/core/Tabs";
import { CpuChipIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

const AdminCompaniesTabs = () => {
  const tabs = [
    {
      path: "/home/companies/details",
      label: "Details",
      icon: ShoppingBagIcon,
    },
    {
      path: "/home/companies/taxforms",
      label: "Taxforms",
      icon: CpuChipIcon,
    },
  ];
  return (
    <div>
      <Tabs tabs={tabs} />
    </div>
  );
};

export default AdminCompaniesTabs;
