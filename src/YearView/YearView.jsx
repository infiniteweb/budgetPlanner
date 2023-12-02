import "./YearView.css";

export default function YearVeiw() {
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
            <h4 id="profit-loss">+£2300</h4>
          </div>
        </div>
        <div className="row  flex-grow-1 month-box-row">
          <div className="col-6 col-sm-3 d-flex flex-column justify-content-center div2 month-box-col ">
            <div className="month-box d-flex flex-column">
              <h5 className="month-name">January</h5>
              <hr className="month-name-underline"></hr>
            </div>
          </div>
          <div className="col-6 col-sm-3 month-box-col">
            <div className="month-box d-flex flex-column">
              <h5 className="month-name">February</h5>
              <hr className="month-name-underline"></hr>
            </div>
          </div>
          <div className="col-6 col-sm-3 month-box-col">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 div3 month-box-col">
            <div className="month-box">hi</div>
          </div>
        </div>
        <div className="row flex-grow-1 month-box-row">
          <div className="col-6 col-sm-3 month-box-col ">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 month-box-col ">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 month-box-col ">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 month-box-col">
            <div className="month-box">hi</div>
          </div>
        </div>
        <div className="row flex-grow-1 month-box-row">
          <div className="col-6 col-sm-3 month-box-col">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 month-box-col ">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3  month-box-col">
            <div className="month-box">hi</div>
          </div>
          <div className="col-6 col-sm-3 month-box-col ">
            <div className="month-box">hi</div>
          </div>
        </div>
        <div className="row">
          <div className="p-1"></div>
        </div>
      </div>
    </>
  );
}
