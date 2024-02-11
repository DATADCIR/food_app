"use client";
import React, { useState } from "react";
import Icons from "@/components/shared/icons";
const TableComponent = ({ columns, data, perPage, classes }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };

  const nextPage = () => {
    setCurrentPage((current) => {
      if (current < Math.ceil(data.length / perPage - 1)) {
        return current + 1;
      }
      return current;
    });
  };

  const prevPage = () => {
    setCurrentPage((current) => {
      if (current > 0) {
        return current - 1;
      }
      return current;
    });
  };

  return (
    <div
      className={`flex flex-col rounded-lg overflow-hidden text-black text-xs lg:text-sm ${classes}`}
    >
      <div className="overflow-auto">
        <table className="w-full relative bg-gray-100 border-separate border-spacing-2 px-2 lg:px-10 text-center overflow-auto">
          <thead>
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
            {data.map((row, rowIndex) =>
              rowIndex >= currentPage * perPage &&
              rowIndex < (currentPage + 1) * perPage ? (
                <tr key={rowIndex} className="">
                  {columns.map((column) => (
                    <td key={column.key} className="py-2 px-4">
                      {row[column.key]}
                    </td>
                  ))}
                </tr>
              ) : null
            )}
          </tbody>
        </table>
      </div>

      <div className="flex justify-end mt-5 sm:mt-10 ">
        <div className=" flex gap-1 sm:gap-3 justify-center bg-gray-100 rounded-full px-3 py-1">
          <button
            disabled={currentPage === 0}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white text-yellow-light border border-yellow-light flex justify-center items-center"
            onClick={prevPage}
          >
            <Icons name="ChevronRight" />
          </button>
          {[...Array(Math.ceil(data.length / perPage))].map((_, index) => (
            <button
              key={index}
              className={`w-8 h-8 sm:w-12 sm:h-12 rounded-full ${
                index === currentPage
                  ? "text-white bg-yellow-light"
                  : "bg-white text-yellow-light border border-yellow-light"
              }`}
              onClick={() => handlePageClick(index)}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === Math.ceil(data.length / perPage)}
            className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-white text-yellow-light border border-yellow-light flex justify-center items-center"
            onClick={nextPage}
          >
            <Icons name="ChevronLeft" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
