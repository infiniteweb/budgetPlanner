import "./TopBanner.css";

export default function MonthTopBanner({ totalIncome }) {
  return (
    <>
      <div className="row month-box-row align-items-center">
        <div className="col p-3  ">
          <div className="d-flex justify-content-around mt-2">
            <i className="fa-solid fa-arrow-left fa-lg mt-auto ms-5"></i>
            <h4 id="date-year">January</h4>
            <i className="fa-solid fa-arrow-right fa-lg mt-auto me-5"></i>
          </div>
        </div>
        <div className="col mt-sm-3 d-flex justify-content-start me-5">
          <h4 className="app-title ">Budget planner</h4>
        </div>
        <div className="col p-3">
          <div className="d-flex justify-content-start align-items-end mt-sm-2">
            <h4 className="me-2" id="profit-loss">
              Net
            </h4>
            <span id="total-pound">£</span>
            <span id="profit-loss-total">{totalIncome}</span>
          </div>
        </div>
      </div>
    </>
  );
}
