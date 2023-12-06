import { useState, useEffect } from "react";
import "./MonthView.css";
import IncomeBox from "./IncomeBox/IncomeBox";
import TopBanner from "./TopBanner/TopBanner";
import EssentialBox from "./EssentialBox/EssentialBox";

export default function MonthView() {
  /* INCOME BOX */

  const localValue = localStorage.getItem("income");
  const income = JSON.parse(localValue);

  const [incomeSalary, setIncomeSalary] = useState(
    income.incomeSalary == null ? "" : income.incomeSalary
  );

  const [incomeExtras, setIncomeExtras] = useState(
    income.incomeExtras == null ? "" : income.incomeExtras
  );

  const [incomeBankBalance, setIncomeBankBalance] = useState(
    income.incomeBankBalance == null ? "" : income.incomeBankBalance
  );

  const handleIncomeSalaryChange = (e) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "" || re.test(e.target.value)) {
      setIncomeSalary(e.target.value);
    }
  };

  const handleIncomeExtrasChange = (e) => {
    const re = /^[0-9\b]+$/;
    const value = e.target.value;
    if (value === "" || re.test(e.target.value)) {
      setIncomeExtras(e.target.value);
    }
  };

  const handleIncomeBankBalanceChange = (e) => {
    const re = /^[0-9\b]+$/;
    const value = e.target.value;
    if (value === "" || re.test(e.target.value)) {
      setIncomeBankBalance(e.target.value);
    }
  };

  const totalIncome =
    (isNaN(parseInt(incomeSalary)) ? "" : parseInt(incomeSalary)) +
    (isNaN(parseInt(incomeExtras)) ? "" : parseInt(incomeExtras)) +
    (isNaN(parseInt(incomeBankBalance)) ? "" : parseInt(incomeBankBalance));

  /* USE EFFECT */
  useEffect(() => {
    const userIncome = {
      incomeSalary,
      incomeExtras,
      incomeBankBalance,
      totalIncome,
    };

    localStorage.setItem("income", JSON.stringify(userIncome));
  }, [incomeSalary, incomeExtras, incomeBankBalance, totalIncome]);

  /* ESSENTIALS BOX */
  /* ITEM INPUT BOX */
  /* ITEM INPUT ARRAY */

  const essentialItemList = [
    { id: 0, header: "Council tax", cost: 0 },
    { id: 1, header: "Housing costs", cost: 0 },
    { id: 2, header: "Gas/Electric", cost: 0 },
    { id: 4, header: "Water", cost: 0 },
    { id: 5, header: "Mobile phone", cost: 0 },
    { id: 6, header: "Broadband", cost: 0 },
    { id: 7, header: "Tv license", cost: 0 },
    { id: 8, header: "Car insurance", cost: 0 },
    { id: 9, header: "Home insurance", cost: 0 },
    { id: 10, header: "Fuel", cost: 0 },
    { id: 11, header: "Food", cost: 0 },
    { id: 12, header: "Savings", cost: 0 },
  ];

  const [essentialItems, setEssentialItems] = useState(essentialItemList);

  const handleEssentialItemHeaderChange = (e) => {
    const newHeader = e.target.value;
    const changeHeader = essentialItems.map((header) => {
      if (essentialItems.header !== newHeader) {
        return header;
      } else {
        return newHeader;
      }
    });
    setEssentialItems(changeHeader);
  };

  return (
    <>
      <div className="container-fluid text-center vh-100">
        <TopBanner totalIncome={totalIncome} />
        {/*IncomeBox */}
        <div className="row g-2">
          <div className="col-xl-9 align-self-start">
            <IncomeBox
              incomeSalary={incomeSalary}
              incomeExtras={incomeExtras}
              incomeBankBalance={incomeBankBalance}
              totalIncome={totalIncome}
              handleIncomeSalaryChange={handleIncomeSalaryChange}
              handleIncomeExtrasChange={handleIncomeExtrasChange}
              handleIncomeBankBalanceChange={handleIncomeBankBalanceChange}
            />
            <div className="d-flex justify-content-start ms-3">
              <h4 id="outgoing-title">What&apos;s going out?</h4>
            </div>
            <div className="row g-2">
              <div className="col-lg-8 ">
                {/*ESSENTIAL BOX BEGIN */}
                <EssentialBox 
                itemList = {essentialItemList}
                handleItemHeaderChange={handleEssentialItemHeaderChange}/>
              </div>
              <div className="col-lg-4">
                <div className="d-flex" id="debts-box">
                  <h4 className="box-header">Debts... </h4>
                </div>
              </div>
            </div>
          </div>

          <div className="col-xl-3">
            <div className="d-flex flex-column">
              <div className="d-flex" id="day-to-day-costs-box">
                <h4 className="box-header">Day to day costs... </h4>

                <button className="align-self-start ms-auto add-new-btn">
                  +
                </button>
              </div>
              <div className="col-xl-3 ">
                <div className="d-flex" id="action-plan-box">
                  <h4 className="box-header">Action plan... </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
