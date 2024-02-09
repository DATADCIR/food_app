"use client";
import React from "react";
const CheckboxGroup = ({ items, classes, children, handleCheckboxClick }) => {
  return (
    <div className={`flex flex-col ${classes}`}>
      {items.map((item) => (
        <div key={item.id}>{React.cloneElement(children, { item })}</div>
      ))}
    </div>
  );
};
export default CheckboxGroup;
