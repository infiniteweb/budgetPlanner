import "./InputBox.css";

export default function InputBox({
  header,
  value,
  handleValueChange,
  htmlFor,
  id,
  readOnly,
}) {
  return (
    <div className="d-flex flex-column income-input-box">
      <label className="income-label" htmlFor={htmlFor}>
        {header}
      </label>
      <div className="d-flex">
        <span className="input-pound">£</span>
        <input
          className="input-input"
          id={id}
          value={value}
          onChange={handleValueChange}
          readOnly={readOnly}
        />
      </div>
    </div>
  );
}
