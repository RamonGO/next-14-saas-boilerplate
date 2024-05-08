import NewForm, { Field } from "@/components/core/NewForm";
import { upsertTaxForm } from "@/actions/admin/taxModule/upsert-taxform";

const UpsertTaxForm = ({ taxFormId, values }: { taxFormId?: number; values?: any }) => {
  const formInfo = {
    name: "Create Tax Forms",
    description: "Create a new tax form for your organization",
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
      name: "description",
      label: "Description",
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
    }
  ];

  return (
    <>
      <NewForm
        values={values ?? []}
        info={formInfo}
        fields={fields}
        modelToUpdate={taxFormId}
        onSubmit={upsertTaxForm}
      />
    </>
  );
};

export default UpsertTaxForm;
