import React, { useCallback, useState } from "react";
// import "./input.css";
import { formStore } from "../../../../stores/formStore";

export default function Input({ tag, ...props }) {
  const { forms } = formStore();
  const [formKey, setFormKey] = useState(null);
  const InputTag = tag ?? "input";

  const inputRef = useCallback((node) => {
    if (node !== null) {
      setFormKey(node?.closest("form")?.getAttribute("data-formkey") ?? null);
    }
  }, []);

  const error = formKey && forms?.[formKey]?.errors?.[props.name];

  const defaultValue =
    (formKey && forms?.[formKey]?.formData?.[props.name]) ?? "";

  return (
    <InputTag
      ref={inputRef}
      defaultValue={defaultValue}
      className={`main-input ${error ? "has-error" : "static"}`}
      {...props}
    />
  );
}
