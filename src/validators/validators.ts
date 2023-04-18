import * as Yup from "yup";

export const validator = {
  email: (required = true) =>
    required
      ? Yup.string().email("error.email").required("error.Required")
      : Yup.string().email("error.email"),

  string: (required: boolean = false, message: string = "error.Required") =>
    required ? Yup.string().required(message) : Yup.string(),

  url: (required: boolean = false, message: string = "error.Required") =>
    required ? Yup.string().required(message) : Yup.string(),

  price: (required = true) =>
    required
      ? Yup.string()
          .test("type", "error.priceNumber", (value) => !isNaN(value as any))
          .required("error.priceRequired")
      : Yup.string().test(
          "type",
          "error.priceNumber",
          (value) => !isNaN(value as any)
        ),

  password: (required = true) =>
    required
      ? Yup.string()
          .min(8, "error.passLength")
          .required("error.PasswordFieldRequired")
      : Yup.string().min(8, "error.passLength"),
};
