import React, { ReactNode } from "react";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import Link from "next/link";
import ButtonFunction from "../components/ButtonFunction";
import Search from "@/components/ui/commons/Search";
import { useLocale } from "next-intl";
import NotFound from "@/components/layouts/errors/NotFound";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import { Suspense } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import DeleteModel from "@/components/core/DeleteModel";
import { useTranslations } from "next-intl";

type Btn = {
  name: string;
  href?: string;
  icon?: React.ElementType | null;
  fn?: () => void;
};

const Button = ( btn : Btn) => {
  const t = useTranslations("AdminLayout.navigation");

  return (
    <>
      <div>
        <div className="max-w-32">
          {(btn.fn ? (
              <ButtonFunction
                btn={{
                  name: btn.name,
                  icon: btn.icon,
                  fn: btn.fn,
                }}
              />
            ) : (
              <Link href={btn.href as string} className="btn-icon ">
                {" "}
                {btn.icon &&
                  React.createElement(btn.icon, {
                    className: "h-5 w-5 text-primary",
                    "aria-hidden": "true",
                  })}
                <span>{btn.name}</span>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Button;
