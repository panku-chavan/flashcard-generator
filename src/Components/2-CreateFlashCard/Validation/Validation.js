// we use Yup utility function "validate" to verify if object are valid(satisfies schema and validations)

import * as Yup from "yup";

// Define object schema and its validation.
// Create validator object using Yup with expected schema and validation.
export const Validation = Yup.object().shape({
  group_id: Yup.string(),
  group_name: Yup.string()
    .max(30, "Group name must be less than 30 characters.")
    .required("Please enter GroupName."),
  group_description: Yup.string()
    .min(10, "Group description must be less than 10 characters.")
    .max(100, "Group description must be less than 100 characters.")
    .required("Please enter description."),
  group_image: Yup.mixed()
    .required("Please Upload Image."),

  cards: Yup.array().of(
    Yup.object().shape({
      card_id: Yup.string(),
      card_name: Yup.string()
        .max(20, "Term must be less than 20 characters.")
        .required("Please enter term."),
      card_description: Yup.string()
        .min(20, "Definition must be gretter than 20 characters.")
        .max(500, "Definition must be less than 500 characters.")
        .required("Please enter definition.")
    })
  ),
});


