import {LoginPic} from "../assets/images/index";
import TextField from "@mui/material/TextField";
import {Controller, useForm} from "react-hook-form";
import {LoginForm, loginFormYup} from "../validators/login";
import {LogoApp} from "../component/LogoApp";
import {useCallback} from "react";
import {useLogin} from "../store/modules/auth/login";
import {TGuard, WithGuard} from "../component/hoc/WithGuard";

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

  return (
    <div className="bg-blue-700 h-[100vh] pt-20">
      <div className="grid grid-cols-2 rounded-md bg-white m-auto w-[80vw] h-[80vh]">
        <div className="flex justify-center p-14 items-center items-center ">
          <img src={LoginPic} alt="LoginPic" />
        </div>
        <form
          className="flex justify-center items-center gap-2 flex-col"
          onSubmit={handleSubmit(handleLogin)}
        >
          <LogoApp />
          <p className="text-2xl text-[#6F11E1] leading-7 font-extrabold">
            Welcome back
          </p>
          <p className="text-xs w-[300px] text-center font-normal leading-4 pt-5">
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
                      InputLabelProps={{
                        shrink: true,
                      }}
                      inputProps={{
                        style: { borderColor: "yellow" },
                      }}
                      style={{ width: 332, paddingBottom: 20 }}
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
                      style={{ width: 332 }}
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
              className="bg-[#6F11E1] w-[10vw] h-[5vh] text-white font-medium text-base leading-5 rounded"
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

export { LoginPageHoc as LoginPage }
