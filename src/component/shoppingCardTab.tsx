import { CheckBox } from "../kit/CheckBox";
import { Hr } from "../kit/Hr";
import { useState } from "react";

const loanDatas = [
  {
    month: "3 month - ",
    percent: "20%",
    intersts: "intersts",
    // checked: true,
  },
  {
    month: "6 month - ",
    percent: "10% ",
    intersts: "intersts",
    // checked: false,
  },
  {
    month: "12 month - ",
    percent: "5% ",
    intersts: "intersts",
    // checked: false,
  },
];

export function ShoppingCardTab() {
  const [cashTab, setCashTab] = useState(true);
  const [loanTab, setLoanTab] = useState(false);

  const [checked, setChecked] = useState(false);

  const handleCashTab = () => {
    setCashTab(true);
    setLoanTab(false);
  };
  const handleLoanTab = () => {
    setLoanTab(true);
    setCashTab(false);
  };

  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="border rounded-lg shadow-lg">
      <div
        className=" border bg-[#E4E4E4]  h-[9vh] rounded-t-md flex justify-between items-center px-2
          font-medium leading-5 text-base"
      >
        {cashTab ? (
          <div
            onClick={handleCashTab}
            className="bg-[#6F11E1] w-[172px] h-[47px] rounded-lg flex justify-center cursor-pointer "
          >
            <button className="items-stretch text-white">cash</button>
          </div>
        ) : (
          <div
            onClick={handleCashTab}
            className=" w-[172px] h-[47px] rounded-lg flex justify-center cursor-pointer"
          >
            <button>cash</button>
          </div>
        )}
        {loanTab ? (
          <div
            onClick={handleLoanTab}
            className="bg-[#6F11E1] w-[172px] h-[47px] rounded-lg flex justify-center cursor-pointer"
          >
            <button className="items-stretch text-white">loan</button>
          </div>
        ) : (
          <div
            onClick={handleLoanTab}
            className=" w-[172px] h-[47px] rounded-lg flex justify-center cursor-pointer"
          >
            <button>loan</button>
          </div>
        )}
      </div>
      {cashTab ? (
        <>
          <div className="flex justify-evenly items-center pt-8">
            <span className="leading-5 text-base font-bold">Total Amount:</span>
            <span className="leading-5 text-base font-medium">$1.620</span>
          </div>
          <div className="flex justify-center pt-24 ">
            <button className="bg-[#FD6644] rounded-md px-4 py-2 leading-5 text-base font-normal text-white">
              Proceed to Check Out
            </button>
          </div>
        </>
      ) : null}

      <div>
        <>
          {loanTab
            ? loanDatas.map((data, index) => (
                <div key={index}>
                  <div className="flex flex-col justify-center items-center pt-8">
                    <div className="flex items-center justify-center gap-2">
                      <div className="flex justify-center ">
                        <CheckBox onChange={handleChange} />
                      </div>
                      <div className="flex  gap-2  ">
                        <span className="leading-4 text-base font-medium">
                          {data.month}
                        </span>
                        <span className="text-sm text-[#A8A8A8] font-medium leading-4">
                          {data.percent}
                        </span>
                        <span className="text-sm text-[#A8A8A8] font-medium leading-4">
                          {data.intersts}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : null}
          {checked && loanTab && (
            <div className="pt-4">
              <Hr />
            </div>
          )}
          <div className="flex gap-12 justify-center pt-4">
            {checked && loanTab ? (
              <div className="py-8 flex gap-8">
                <div className="border-[10px] flex flex-col items-center rounded-full w-[100px] h-[100px]">
                  <span className="flex justify-end">$1.620</span>
                  <span className="flex justify-start">$800</span>
                </div>
                <div className="flex flex-col justify-center gap-2">
                  <div className="flex gap-2 items-center ">
                    <div className="border-2 bg-[#6F11E1] rounded-full w-[15px] h-[15px] " />
                    <span>Total Price</span>
                  </div>
                  <div className="flex gap-2 items-center ">
                    <div className="border-2 bg-[#FD6644] rounded-full w-[15px] h-[15px] " />
                    <span>intersts</span>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
          {loanTab ? (
            <div
              className="flex justify-center"
              style={{ paddingBottom: checked ? 60 : 10 }}
            >
              <button className="bg-[#FD6644] rounded-md px-4 py-2 leading-5 text-base font-normal text-white">
                Proceed to Check Out
              </button>
            </div>
          ) : null}
        </>
      </div>
    </div>
  );
}
