"use client";
import ListGroup from "./ListGroup";
import React, { useState } from "react";
import Icons from "../icons";
const Pagination = ({ items, classes, children, perPage }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (index) => {
    setCurrentPage(index);
  };
  const nextPage = () => {
    setCurrentPage((current) => {
      if (current < Math.ceil(items.length / perPage - 1)) {
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
    <div className={`${classes}`}>
      {React.cloneElement(children, {
        items: items.slice(currentPage * perPage, (currentPage + 1) * perPage),
      })}
      <div className="flex items-center justify-center lg:w-1/2 mr-auto gap-3 bg-white rounded-full px-2 py-1 ">
        <button
          className="w-12 h-12 rounded-full bg-white text-yellow-light border border-yellow-ligh flex justify-center items-center"
          onClick={prevPage}
        >
          <Icons name="ChevronRight" />
        </button>
        {[...Array(Math.ceil(items.length / perPage))].map((_, index) => (
          <button
            key={index}
            className={`w-12 h-12 rounded-full ${
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
          className="w-12 h-12 rounded-full bg-white text-yellow-light border border-yellow-ligh flex justify-center items-center"
          onClick={nextPage}
        >
          <Icons name="ChevronLeft" />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
