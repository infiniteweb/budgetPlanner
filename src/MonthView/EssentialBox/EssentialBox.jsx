import "./EssentialBox.css";

export default function EssentialBox({ handleItemHeaderChange, itemList }) {
  return (
    <>
      <div className="flex-fill" id="essentials-box">
        <div className="d-flex flex-wrap ">
          <div className="d-flex flex-column">
            <div className="d-flex responsive">
              <h4 className="box-header">Essentials... </h4>
              <button className="add-new-btn" id="essentials-add-new">
                +
              </button>
            </div>
            <div id="essentials-items-box">
              {itemList.map((item) => (
                <div
                  key={item.id}
                  className="d-flex essentials-input responsive"
                >
                  <input
                    className="item-label"
                    type="text"
                    defaultValue={item.header}
                    onChange={handleItemHeaderChange}
                  />
                  <span className="item-pound">£</span>
                  <input
                    className="money-input"
                    type="text"
                    defaultValue={item.cost}
                  />
                </div>
              ))}
            </div>
            <div className="d-flex " id="essential-items-total ">
              <span className="d-flex justify-content-start item-label ">
                Total
              </span>
              <span className="item-pound ">£</span>
              <span className="d-flex money-input " id="essentials-total-value">
                0
              </span>
            </div>
          </div>
          <div className="d-flex flex-column flex-fill responsive ">
            <h4 className="box-header">Savings ideas? </h4>
            <textarea className="savings-textarea h-100" />
          </div>
        </div>
      </div>
    </>
  );
}
