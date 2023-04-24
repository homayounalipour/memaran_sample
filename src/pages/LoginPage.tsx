import { LoginPic } from "../assets/images/index";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { LoginForm, loginFormYup } from "../validators/login";
import { LogoApp } from "../component/LogoApp";
import { useCallback } from "react";
import { useLogin } from "../store/modules/auth/login";
import { TGuard, WithGuard } from "../component/hoc/WithGuard";
import { useMediaQuery } from "../hooks/mediaQueryHooks";

function LoginPage() {
  const { dispatchLogin, error } = useLogin();
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: loginFormYup(),
  });
  const handleLogin = useCallback(
    (data: LoginForm) => {
      console.log(data);
      dispatchLogin({
        ...data,
        username: data.username,
        password: data.password,
      });
    },
    [dispatchLogin]
  );

  const isSm = useMediaQuery("(max-width:768px)");

  return (
    <div
      className=" bg-gradient-to-r from-[#0021CE]
             from-0% via-[#6F11E1] via-35% to-[#6F11E1] to-81% h-[100vh]  pt-20 max-sm:py-2 "
    >
      <div
        className="grid grid-cols-2 rounded-md bg-white m-auto w-[80vw] h-[80vh]
        max-sm:w-[298px] max-sm:h-[656px]  max-sm:flex max-sm:justify-center "
      >
        <div className="flex justify-center p-14 items-center items-center max-sm:hidden ">
          <img src={LoginPic} alt="LoginPic" />
        </div>
        <form
          className="flex justify-center items-center gap-2 flex-col  max-sm:pt-10 "
          onSubmit={handleSubmit(handleLogin)}
        >
          <LogoApp />
          <p className="text-2xl text-[#6F11E1] leading-7 font-extrabold">
            Welcome back
          </p>
          <p className="text-xs w-[300px] text-center font-normal  max-sm:px-4 leading-4 pt-5">
            A Lorem Ipsum text generator is specifically designed to generate a
            dummy text or placeholder text.
          </p>
          <div className="pt-16 flex justify-center items-center flex-col">
            <Controller
              name="username"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <TextField
                      {...field}
                      id="username"
                      label="username"
                      className="max-sm:w-[264px] min-sm:h-[64px]"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        style: { borderColor: "yellow" },
                      }}
                      style={{ width: isSm ? "264px" : 332, paddingBottom: 20 }}
                    />
                    {fieldState.isTouched && fieldState?.error?.message ? (
                      <p
                        style={{
                          fontSize: 12,
                          color: "red",
                          paddingBottom: 20,
                        }}
                      >
                        {fieldState.error.message}
                      </p>
                    ) : null}
                  </>
                );
              }}
            />
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <TextField
                      {...field}
                      id="password"
                      label="password"
                      InputLabelProps={{
                        shrink: true,
                      }}
                      style={{ width: isSm ? "264px" : 332 }}
                    />
                    {fieldState.isTouched && fieldState?.error?.message ? (
                      <p
                        style={{
                          fontSize: 12,
                          color: "red",
                          paddingTop: 20,
                        }}
                      >
                        {fieldState.error.message}
                      </p>
                    ) : null}
                  </>
                );
              }}
            />
          </div>
          {error ? (
            <p
              style={{
                fontSize: 12,
                color: "red",
                paddingTop: 20,
              }}
            >
              {error.message}
            </p>
          ) : null}
          <div className="pt-16 ">
            <button
              type="submit"
              className="bg-[#6F11E1] w-[185px] h-[5vh] max-sm:w-[265px] max-sm:h-[43px] text-white font-medium text-base leading-5 rounded"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

const LoginPageHoc = WithGuard(LoginPage, TGuard.LoggedOut);

export { LoginPageHoc as LoginPage };
