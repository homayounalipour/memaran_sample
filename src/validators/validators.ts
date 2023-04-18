import * as Yup from "yup";

export const validator = {
  email: (required = true) =>
    required
      ? Yup.string().email("error.email").required("error.Required")
      : Yup.string().email("error.email"),

  password: (required = true) =>
    required
      ? Yup.string()
          .min(8, "error.passLength")
          .required("error.PasswordFieldRequired")
      : Yup.string().min(8, "error.passLength"),
};
