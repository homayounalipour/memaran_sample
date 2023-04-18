import { LoginPic } from "../assets/images/index";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";
import { LoginForm, loginFormYup } from "../validators/login";
import { LogoApp } from "../component/LogoApp";

export function LoginPage() {
  const { control, handleSubmit } = useForm<LoginForm>({
    defaultValues: {
      Username: "",
      Password: "",
    },
    mode: "all",
    reValidateMode: "onChange",
    resolver: loginFormYup(),
  });

  return (
    <div className="bg-blue-700 h-[100vh] pt-20">
      <div className="grid grid-cols-2 rounded-md bg-white m-auto w-[80vw] h-[80vh]">
        <div className="flex justify-center p-14 items-center items-center ">
          <img src={LoginPic} alt="LoginPic" />
        </div>
        <div className="flex justify-center items-center gap-2 flex-col">
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
              name="Username"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <TextField
                      {...field}
                      id="Username"
                      label="Username"
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
              name="Password"
              control={control}
              render={({ field, fieldState }) => {
                return (
                  <>
                    <TextField
                      {...field}
                      id="Password"
                      label="Password"
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
          <div className="pt-16 ">
            <button className="bg-[#6F11E1] w-[10vw] h-[5vh] text-white font-medium text-base leading-5 rounded">
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
