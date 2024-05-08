"use client";
import useDarkTheme from "@/app/hooks/useDarkTheme";
import Table from "@/components/ui/commons/Table";
import { dark } from "@clerk/themes";

const AdminSettingsModulePage = () => {
  return (
    <div>
        <Table
        name={"Settings"}
        columns={["Settings"]}
        data={[
            {
                Settings: "Profile",
                href:"/home/settings/profile"
            },
            {
                Settings: "Organizations",
                href:"/home/settings/organizations"
            },
            {
                Settings: "Users",
                href:"/home/settings/users"
            },
            {
                Settings: "Companies",
                href:"/home/settings/companies"
            },
            {
                Settings: "Tax Forms",
                href:"/home/settings/taxforms"
            },
            {
                Settings: "Workflows",
                href:"/home/settings/workflows"
            },
            {
                Settings: "Subscriptions",
                href:"/home/settings/subscriptions"
            }]}
        />
    </div>
  );
};

export default AdminSettingsModulePage;
