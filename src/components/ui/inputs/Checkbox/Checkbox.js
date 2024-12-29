// import "./checkbox.css";
export default function Checkbox({ label, checked, children, ...props }) {
  return (
    <>
      <div className="custom-checkbox">
        <input 
        checked={checked}
        {...props}

          type="checkbox" />
        <div className="input-state"></div>
      </div>
      {label && (
        <label htmlFor={props.id}>
          <p
            className="text-main xxsmall-text"
            style={{
              color: `${checked ? "var(--black)" : "var(--gray-text)"}`,
            }}
          >
            {children}
          </p>
        </label>
      )}
    </>
  );
}
