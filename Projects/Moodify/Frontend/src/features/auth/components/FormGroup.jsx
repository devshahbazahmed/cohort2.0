import React from "react";

export default function FormGroup({
  type,
  label,
  placeholder,
  value,
  onChange,
}) {
  return (
    <div className="form-group">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        name={label}
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
