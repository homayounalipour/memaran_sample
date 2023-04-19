import TextField from "@mui/material/TextField";
import { ConfirmationModal } from "./ConfirmationModal";

export function PaymentInput() {
  return (
    <>
      <ConfirmationModal payment visible={true} />
      <div className="px-20 py-9">
        <div className="flex flex-col gap-5">
          <TextField
            // id="Title"
            label="Card Number"
            InputLabelProps={{
              shrink: true,
            }}
            placeholder="1234-4567-8900-0000"
            inputProps={{
              style: {
                // background: "red",
                marginLeft: 80,
                marginRight: 50,
              },
            }}
            inputMode="numeric"
            style={{ width: 358, paddingBottom: 15 }}
          />
          <TextField
            // id="Title"
            label="CVV"
            InputLabelProps={{
              shrink: true,
            }}
            inputMode="numeric"
            style={{ width: 358, paddingBottom: 15 }}
          />
          <div className="flex gap-12">
            <TextField
              // id="Title"
              label="Year"
              InputLabelProps={{
                shrink: true,
              }}
              inputMode="numeric"
              style={{ width: 170, paddingBottom: 15 }}
            />
            <TextField
              // id="Title"
              label="Month"
              InputLabelProps={{
                shrink: true,
              }}
              inputMode="numeric"
              style={{ width: 170 }}
            />
          </div>
          <TextField
            // id="Title"
            label="E-pass"
            InputLabelProps={{
              shrink: true,
            }}
            inputMode="numeric"
            style={{ width: 358 }}
          />
          <div className="flex pt-2 gap-4">
            <button className="border  border-[#FE5B3A] text-[#FE5B3A] w-[171px] h-[43px] leading-5 text-base font-normal rounded-md ">
              Cancel
            </button>
            <button className="bg-[#FE5B3A] rounded-md w-[171px] h-[43px] leading-5 text-base font-normal text-white">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
