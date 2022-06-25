import "./formInput.styles.scss";

const FormInput = ({ label, inputOptions }) => {
  return (
    <div className="group">
      <input className="formInput" {...inputOptions} />
      {label && (
        <label
          className={`${inputOptions.length ? "shrink" : ""} formInputLabel`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
