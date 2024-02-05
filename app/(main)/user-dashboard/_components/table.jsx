// components/TableComponent.js

import React from "react";

const TableComponent = ({ columns, data }) => {
  return (
    <div className="rounded-lg overflow-hidden text-black ">
      <table className="min-w-full bg-gray-100 border-separate border-spacing-2 px-10 text-center">
        <thead className="">
          <tr>
            {columns.map((column) => (
              <th key={column.key} className="py-2 px-4 font-semibold">
                {column.label}
              </th>
            ))}
          </tr>
          {/* Empty row for spacing */}
          <tr className="h-4">
            {columns.map((column) => (
              <th key={`spacer-${column.key}`} className="py-2 px-4"></th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} className="">
              {columns.map((column) => (
                <td key={column.key} className="py-2 px-4">
                  {row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
