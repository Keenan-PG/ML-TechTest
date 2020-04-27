import React from 'react';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="wrapper">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="pagination__item">
            <a onClick={() => paginate(number, currentPage)} href="#" id={number} className="pagination__link">
              {number}
            </a>
          </li>
        ))}
      </ul>
      <div className="pageCount">
        0{ currentPage } <span>|</span> 0{ pageNumbers.length }
      </div>
    </div>
  );
};

export default Pagination;