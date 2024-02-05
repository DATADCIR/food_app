import React from "react";
import Input from "@/components/ui/forms/input";
const InputComponent = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes,
  inputClasses,
}) => {
  return (
    <div className={`w-full flex flex-col gap-3`}>
      <p className="text-yellow-light mr-3">{label}</p>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        classes={classes}
      />
    </div>
  );
};
export default InputComponent;
