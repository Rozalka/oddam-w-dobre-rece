import React from "react";
import "../Pagination/pagination.scss";

function Pagination({ infoPerPage, totalInfos, paginate }) {
  const pageNumbers = [];

  function addFrame(number) {
    var element = document.getElementsByClassName("page-item");
    element.classList.toggle("add-frame");
  }

  for (let i = 1; i <= Math.ceil(totalInfos / infoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <button className="pagination-btn" onClick={() => paginate(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Pagination;
