import {
  CreditCardIcon,
  DocumentTextIcon,
  HomeIcon,
  BuildingLibraryIcon,
  TicketIcon,
  UsersIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

import { useTranslations } from "next-intl";

export const useNavigation = () => {
  const t = useTranslations("AdminLayout.navigation");
  const tSuperAmin = useTranslations("SuperAdminLayout.navigation");

  const adminNavigation = [
    {
      sectionName: t("general"),
      items: [
        { name: t("dashboard"), href: "/home", icon: HomeIcon, current: true },
        { name: t("companies"), href: "/home/companies", icon: BuildingLibraryIcon, current: false },
        { name: t("taxFilings"), href: "/home/taxfilings", icon: DocumentTextIcon, current: false },
        { name: t("calendar"), href: "/home/calendar", icon: CalendarIcon, current: false },
      ],
    },
    {
      sectionName: t("examples"),
      items: [
        {
          name: t("exampleOne"),
          href: "/home/examples",
          icon: DocumentTextIcon,
          current: false,
        },
      ],
    }
  ];
  const superAdminNavigation = [
    {
      sectionName: tSuperAmin("general"),
      items: [
        {
          name: tSuperAmin("dashboard"),
          href: "/admin",
          icon: HomeIcon,
          current: true,
        },
        {
          name: tSuperAmin("users"),
          href: "/admin/users",
          icon: UsersIcon,
          current: false,
        },
      ],
    },
    {
      sectionName: tSuperAmin("billing"),
      items: [
        {
          name: tSuperAmin("plans"),
          href: "/admin/billing/plans/plans",
          icon: CreditCardIcon,
          current: true,
        },
        {
          name: tSuperAmin("suscriptions"),
          href: "/admin/billing/subscriptions",
          icon: BuildingLibraryIcon,
          current: false,
        },
        {
          name: tSuperAmin("invoices"),
          href: "/admin/billing/invoices",
          icon: DocumentTextIcon,
          current: false,
        },
        {
          name: tSuperAmin("coupons"),
          href: "/admin/billing/coupons",
          icon: TicketIcon,
          current: false,
        },
      ],
    },
  ];

  return { adminNavigation, superAdminNavigation };
};
