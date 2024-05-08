import NewForm, { Field } from "@/components/core/NewForm";
import { upsertCompany } from "@/actions/admin/taxModule/upsert-company";

const UpsertCompany = ({ companyId, values }: { companyId?: number; values?: any }) => {
  const formInfo = {
    name: "Create Company",
    description: "Create a new company for your organization",
  };

  const fields: Field[] = [
    {
      name: "name",
      label: "Name",
      type: "text",
      hasLanguageSupport: false,
      required: true,
    },
    {
      name: "taxId",
      label: "Tax ID",
      type: "text",
      required: true,
      hasLanguageSupport: false,
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      required: true,
      options: [
        {
          optionName: "ES",
          optionValue: "ES",
        },
        {
          optionName: "UK",
          optionValue: "UK",
        },
      ],
    },
  ];

  return (
    <>
      <NewForm
        values={values ?? []}
        info={formInfo}
        fields={fields}
        modelToUpdate={companyId}
        onSubmit={upsertCompany}
      />
    </>
  );
};

export default UpsertCompany;
