import { useState } from "react";
import "./MonthView.css";
import IncomeBox from "../incomeBox/IncomeBox";

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
        <div className="row month-box-row align-items-center">
          <div className="col-4  p-3 d-flex flex-column">
            <h4 id="date-year">2023</h4>
            <div className="d-flex justify-content-around mt-2">
              <i className="fa-solid fa-arrow-left fa-lg"></i>

              <i className="fa-solid fa-arrow-right fa-lg"></i>
            </div>
          </div>
          <div className="col-4  p-3 ">
            <h3 id="app-title">Budget planner</h3>
          </div>
          <div className="col-4 p-3 d-flex flex-column ">
            <h5 id="profit-loss">profit/loss</h5>
            <h4 id="profit-loss">{totalIncome}</h4>
          </div>
        </div>
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
              <div className="col ">
                <h4>whats going out?</h4>
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
