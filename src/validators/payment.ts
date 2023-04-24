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
    cardNumber: validator.beNumber(),
    cvv2: validator.beNumber(),
    year: validator.beNumber(),
    month: validator.beNumber(),
    ePass: validator.beNumber(),
  });

export const PaymentYup = () => yupResolver(PaymentSchema());
