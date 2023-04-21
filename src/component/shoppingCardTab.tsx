import { CheckBox } from "../kit/CheckBox";
import { Hr } from "../kit/Hr";
import { useCallback, useState } from "react";
import { Tabs } from "./Tabs";
import { Tab } from "./Tab";

export type Loan = {
  month: number;
  percent: number;
};

const loanDatas: Loan[] = [
  {
    month: 3,
    percent: 20,
  },
  {
    month: 6,
    percent: 10,
  },
  {
    month: 12,
    percent: 5,
  },
];

export enum PaymentTab {
  Cash = "Cash",
  Loan = "Loan",
}

export function ShoppingCardTab() {
  const [activeTab, setActiveTab] = useState<PaymentTab>(PaymentTab.Cash);

  const [selectedLoan, setSelectedLoan] = useState<Loan | null>(null);

  const handleChangeLoan = useCallback((loan: Loan) => {
    setSelectedLoan(loan);
  }, []);

  return (
    <div className={`border rounded-lg shadow-lg ${activeTab === PaymentTab.Loan && selectedLoan ? 'max-h-[531px]' : 'max-h-[286px]'}`}>
      <div
        className=" border bg-[#E4E4E4] h-[9vh] p-2 rounded-t-md flex justify-between items-center px-2
          font-medium leading-5 text-base"
      >
        <button
          type="button"
          onClick={() => setActiveTab(PaymentTab.Cash)}
          className={`${
            activeTab === PaymentTab.Cash && "bg-[#6F11E1] text-white"
          } flex-1 h-full rounded-lg flex justify-center items-center cursor-pointer`}
        >
          cash
        </button>
        <button
          type="button"
          onClick={() => setActiveTab(PaymentTab.Loan)}
          className={`${
            activeTab === PaymentTab.Loan && "bg-[#6F11E1] text-white"
          } flex-1 h-full rounded-lg flex justify-center items-center cursor-pointer`}
        >
          loan
        </button>
      </div>
      <Tabs tab={activeTab}>
        <Tab tab={PaymentTab.Cash}>
          <div className="flex justify-evenly items-center pt-8">
            <span className="leading-5 text-base font-bold">Total Amount:</span>
            <span className="leading-5 text-base font-medium">$1.620</span>
          </div>
          <div className="flex justify-center pt-24 ">
            <button className="bg-[#FD6644] rounded-md px-4 py-2 leading-5 text-base font-normal text-white">
              Proceed to Check Out
            </button>
          </div>
        </Tab>
        <Tab tab={PaymentTab.Loan}>
          <>
            {loanDatas.map((data, index) => (
              <div key={index}>
                <div className="flex flex-col justify-center items-center pt-3">
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex justify-center ">
                      <CheckBox value={data} checked={data.month === selectedLoan?.month} name={data.month.toString()} id={data.month.toString()} onChange={() => handleChangeLoan(data)} />
                    </div>
                    <div className="flex  gap-2">
                      <span className="leading-4 text-base font-medium">
                        {data.month} month
                      </span> -
                      <span className="text-sm text-[#A8A8A8] font-medium leading-4">
                        {data.percent}%
                      </span>
                      <span className="text-sm text-[#A8A8A8] font-medium leading-4">
                        intersts
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <>
              {selectedLoan && (
                <div className="pt-4">
                  <Hr />
                </div>
              )}
              <div className="flex gap-12 justify-center pt-4">
                {selectedLoan && (
                  <>
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
                    <div
                      className="flex justify-center"
                      style={{ paddingBottom: selectedLoan ? 60 : 10 }}
                    >
                      <button className="bg-[#FD6644] rounded-md px-4 py-2 leading-5 text-base font-normal text-white">
                        Proceed to Check Out
                      </button>
                    </div>
                  </>
                )}
              </div>
            </>
          </>
        </Tab>
      </Tabs>
    </div>
  );
}
