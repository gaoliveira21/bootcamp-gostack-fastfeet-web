import React from 'react';
import ReactPaginate from 'react-paginate';
import PropTypes from 'prop-types';

import './styles.css';

function Pagination({ currentPage, totalPages, setCurrentPage }) {
  return (
    <ReactPaginate
      initialPage={currentPage}
      pageCount={totalPages}
      pageRangeDisplayed={3}
      marginPagesDisplayed={3}
      previousLabel={
        <button type="button" className="control-button">
          Anterior
        </button>
      }
      nextLabel={
        <button type="button" className="control-button">
          Próximo
        </button>
      }
      onPageChange={({ selected }) => setCurrentPage(selected)}
      containerClassName="paginate-continer"
      pageClassName="page"
      pageLinkClassName="page-link"
      activeClassName="page-active"
      activeLinkClassName="page-link-active"
    />
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Pagination;
