import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
      <Row className="wrapper">
        <Col>
        </Col>
        <Col className="text-center">
          <ul className="paging">
            {pageNumbers.map((number, i) => (
              <li key={number} className="pagination__item">
                <a onClick={() => paginate(number, currentPage)} href="#" id={number} 
                className={"pagination__link " + (i < 1 ? 'is-active' : ' ')}>
                  {number}
                </a>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="text-right">
          <div className="pageCount">
            <b>0{ currentPage } </b><span>|</span> 0{ pageNumbers.length }
          </div>
        </Col>
      </Row>
  );
};

export default Pagination;