import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { validator } from "./validators";

export type PaymentForm = {
  cardNumber?: string;
  cvv2?: string;
  year?: string;
  month?: string;
  ePass?: string;
};

export const PaymentSchema = () =>
  yup.object({
      cardNumber: validator.string(true),
      cvv2: validator.string(true),
      year: validator.string(true),
      month: validator.url(true),
      ePass: validator.url(true),
  });

export const PaymentYup = () => yupResolver(PaymentSchema());
