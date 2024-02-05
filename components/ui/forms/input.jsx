import React from "react";

const Input = ({ type, placeholder, value, onChange, classes }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={classes}
    />
  );
};
export default Input;
