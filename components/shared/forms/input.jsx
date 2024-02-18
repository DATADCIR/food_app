import React from "react";
import Input from "@/components/ui/forms/input";
const InputComponent = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  classes,
}) => {
  return (
    <div className={`w-full flex flex-col gap-3`}>
      {label ? <p className="text-yellow-light mr-3">{label}</p> : null}

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
