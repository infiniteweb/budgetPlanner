import { useState } from "react";
import "./MonthView.css";
import IncomeBox from "./IncomeBox/IncomeBox";
import TopBanner from "./TopBanner/TopBanner";

export default function MonthView() {
  const [incomeSalary, setIncomeSalary] = useState("");
  const handleIncomeSalaryChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIncomeSalary(e.target.value);
    }
  };

  const [incomeExtras, setIncomeExtras] = useState("");
  const handleIncomeExtrasChange = (e) => {
    const re = /^[0-9\b]+$/;
    const value = e.target.value;
    if (value === "" || re.test(e.target.value)) {
      setIncomeExtras(e.target.value);
    }
  };

  const [incomeBankBalance, setIncomeBankBalance] = useState("");
  const handleIncomeBankBalanceChange = (e) => {
    const re = /^[0-9\b]+$/;
    const value = e.target.value;
    if (value === "" || re.test(e.target.value)) {
      setIncomeBankBalance(e.target.value);
    }
  };

  const totalIncome =
    (isNaN(parseInt(incomeSalary)) ? 0 : parseInt(incomeSalary)) +
    (isNaN(parseInt(incomeExtras)) ? 0 : parseInt(incomeExtras)) +
    (isNaN(parseInt(incomeBankBalance)) ? 0 : parseInt(incomeBankBalance));

  return (
    <>
      <div className="container-fluid text-center d-flex flex-column vh-100">
        <TopBanner totalIncome={totalIncome} />
        {/*IncomeBox */}
        <div className="row">
          <div className="d-flex flex-wrap">
            <div className="d-flex flex-column">
              <div className="col d-flex flex-column">
                <IncomeBox
                  incomeSalary={incomeSalary}
                  incomeExtras={incomeExtras}
                  incomeBankBalance={incomeBankBalance}
                  totalIncome={totalIncome}
                  handleIncomeSalaryChange={handleIncomeSalaryChange}
                  handleIncomeExtrasChange={handleIncomeExtrasChange}
                  handleIncomeBankBalanceChange={handleIncomeBankBalanceChange}
                />
              </div>
              <div className="col d-flex justify-content-start ms-3">
                <h4  id="outgoing-title">whats going out?</h4>
              </div>
            </div>
            <div className="col ">
              <div className="div2">hi</div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-6 ">
            <div className="div1">hi</div>
          </div>
          <div className="col-sm-3 ">
            <div className="div2">hi</div>
          </div>
          <div className="col-sm-3 ">
            <div className="div2">hi</div>
          </div>
        </div>
        {/*IncomeBox */}
      </div>
    </>
  );
}
