import "./IncomeBox.css";
import InputBox from "./InputBox";

export default function IncomeBox({
  incomeSalary,
  incomeExtras,
  incomeBankBalance,
  totalIncome,
  handleIncomeSalaryChange,
  handleIncomeExtrasChange,
  handleIncomeBankBalanceChange,
}) {
  return (
    <>
      <div id="income-box">
        <h4 id="income-header">Whats coming in?</h4>
        <div className="d-flex flex-wrap">
          <InputBox
            header="Salary"
            value={incomeSalary}
            handleValueChange={handleIncomeSalaryChange}
            htmlFor="incomeSalary"
            id="incomeSalary"
          />
          <InputBox
            header="Extras"
            value={incomeExtras}
            handleValueChange={handleIncomeExtrasChange}
            htmlFor="incomeExtras"
            id="incomeExtras"
          />
          <InputBox
            header="Bank Balance"
            value={incomeBankBalance}
            handleValueChange={handleIncomeBankBalanceChange}
            htmlFor="incomeBankBalance"
            id="incomeBankBalance"
          />
          <InputBox
            header="Total"
            value={totalIncome}
            htmlFor="incomeTotal"
            id="incomeTotal"
            readOnly="readOnly"
          />
        </div>
      </div>
    </>
  );
}
