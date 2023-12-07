import "../../styles.css";

export default function EssentialBox({ handleItemHeaderChange, itemList }) {
  return (
    <>
      <div className="flex-fill" id="essentials-box">
        <div className="d-flex flex-column">
          <div className="d-flex">
            <h4 className="box-header item-label flex-fill">Essentials... </h4>
            <button className="add-new-btn" id="essentials-add-new">
              +
            </button>
          </div>
          <div id="essentials-items-box">
            {itemList.map((item) => (
              <div key={item.id} className="d-flex essentials-input ">
                <input
                  className="item-label flex-fill"
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
          <div className="d-flex align-items-center mt-2" id="essential-items-total">
            <span className="d-flex  item-label flex-fill ">
              Total
            </span>
            <span className="item-pound ">£</span>
            <span className="d-flex money-input " id="essentials-total-value">
              0
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
