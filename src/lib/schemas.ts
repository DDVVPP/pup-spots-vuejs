import { toTypedSchema } from "@vee-validate/yup";
import * as yup from "yup";

export const rawAddSpotSchema = yup.object({
  name: yup
    .string()
    .required("Try a name with at least 3 characters.")
    .min(3, "Try a name with at least 3 characters.")
    .default(""),
  address: yup.string().required("Address is required").default(""),
  notes: yup
    .string()
    .notRequired()
    .when({
      is: (val: string) => val?.length > 0,
      then: (schema) =>
        schema.min(12, "Your notes need at least 12 characters."),
    })
    .default(""),
  category: yup
    .array()
    .of(yup.string().required())
    .min(1, "Please select at least one category")
    .default([]),
  badge: yup.array().of(yup.string().required()).default([]),
});
export const addSpotSchema = toTypedSchema(rawAddSpotSchema);
