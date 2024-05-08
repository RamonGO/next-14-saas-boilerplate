import React from "react";
import ChevronRightIcon from "@heroicons/react/24/outline/ChevronRightIcon";
import Link from "next/link";
import ButtonFunction from "../components/ButtonFunction";
import Button from "@/components/ui/commons/Button";
import Search from "@/components/ui/commons/Search";
import { useLocale } from "next-intl";
import NotFound from "@/components/layouts/errors/NotFound";
import TableLoaderSkeleton from "@/components/ui/loaders/TableLoaderSkeleton";
import { Suspense } from "react";
import { PencilIcon } from "@heroicons/react/24/outline";
import DeleteModel from "@/components/core/DeleteModel";
import { useTranslations } from "next-intl";
import { redirect } from "next/navigation";

type Btn = {
  name: string;
  href?: string;
  icon?: React.ElementType | null;
  fn?: () => void;
};
type Actions = {
  editPath?: string;
  deleteFnc?: (modelId: number, primaryModelId?: number | undefined) => void;
};

type TableProps = {
  name: string;
  path?: string;
  btn1?: Btn;
  columns: string[];
  data: any[];
  hasHeader?: boolean;
  hasSearchBar?: boolean;
  hasSorted?: boolean;
  Actions?: Actions;
};

const Table = ({
  name,
  btn1,
  columns,
  data,
  hasHeader,
  hasSearchBar,
  hasSorted,
  Actions,
}: TableProps) => {
  const t = useTranslations("AdminLayout.navigation");

  return (
    <>
      <div>
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="grid grid-cols-2">
                {hasSearchBar && (
                  <Search placeholder={t("search" + name + "ByName")} />
                )}
                <div className="mb-3 justify-self-end">
                  <div>
                    <div className="max-w-32">
                      {btn1 && <Button {...btn1} />}
                    </div>
                  </div>
                </div>
              </div>
              <Suspense fallback={<TableLoaderSkeleton count={10} />}>
                <div className="border rounded-lg overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    {hasHeader && (
                      <thead className="bg-gray-50">
                        <tr>
                          {columns.map((column, index) => (
                            <th
                              key={index}
                              scope="col"
                              className="px-6 py-3 text-start text-xs font-medium text-gray-800 uppercase"
                            >
                              {column}
                            </th>
                          ))}
                          {Actions && (
                            <th
                              scope="col"
                              className="px-6 py-3 text-end text-xs font-medium text-gray-800 uppercase"
                            >
                              Actions
                            </th>
                          )}
                        </tr>
                      </thead>
                    )}
                    <tbody className="divide-y divide-gray-200">
                      {data.length === 0 ? (
                        <tr>
                          <td
                            colSpan={columns.length}
                            className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-400"
                          >
                            No results found
                          </td>
                        </tr>
                      ) : (
                        data.map((row, index) => (
                          <tr key={index} className="hover:bg-gray-50">
                            {columns.map((column, columnIndex) => (
                              <td
                                key={columnIndex}
                                className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800"
                              >
                                {row.href ? (
                                  <Link href={row.href}
                                  className="block w-full h-full"
                                >
                                  {row[column]}
                                  </Link>
                                ) : (
                                  row[column]
                                )}
                              </td>
                            ))}
                            {Actions && (
                              <td className="whitespace-nowrap px-3 py-2 text-sm flex space-x-3 items-center justify-end">
                                <Link
                                  href={`${Actions.editPath}/${row.id}`}
                                  className="btn-icon text-sm"
                                >
                                  <PencilIcon className="w-3 h-3" />
                                  <span className="sr-only">Edit</span>
                                </Link>
                                <DeleteModel
                                  modelId={row.id}
                                  deleteAction={
                                    Actions.deleteFnc
                                      ? Actions.deleteFnc
                                      : () => {
                                          return undefined;
                                        }
                                  }
                                />
                              </td>
                            )}
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Table;
