import "./TopBanner.css";

export default function MonthTopBanner({ totalIncome }) {
  return (
    <>
      <div className="row month-box-row align-items-center">
        <div className="col-lg-4">
          <div className="d-flex justify-content-center mt-2">
            <i className="fa-solid fa-arrow-left fa-lg mt-auto "></i>
            <h4 id="date-year">January</h4>
            <i className="fa-solid fa-arrow-right fa-lg mt-auto "></i>
          </div>
        </div>
        <div className="col d-flex justify-content-lg-start justify-content-center mt-sm-3  ">
          <h4 className="app-title ">Budget planner</h4>
        </div>
      </div>
    </>
  );
}
