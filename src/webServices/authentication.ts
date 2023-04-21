export type LoginForm = {
  username?: string;
  password?: string;
};
export type LoginRes = {
  token?: string;
};

export type LoginPayload = {
  type: string;
  payload: LoginForm;
};
