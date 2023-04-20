export type LoginForm = {
  username?: string;
  password?: string;
};
export type LoginRes = {
  accessToken?: string;
};

export type LoginPayload = {
  type: string;
  payload: LoginForm;
};
