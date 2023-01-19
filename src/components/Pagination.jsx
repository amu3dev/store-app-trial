import _ from "lodash";
import PropTypes from "prop-types";
const Pagination = (props) => {
  const { itemsCount, itemsPerPage, currentPage, onPageChange } = props;

  const pagesCount = Math.ceil(itemsCount / itemsPerPage);

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            {/* <a className="page-link" onClick={() => props.onPageChange(page)}>
              {page}
            </a> */}
            <button
              type="button"
              className={
                `btn btn-outline-primary btn-sm m-1` +
                (currentPage === page ? " active" : "")
              }
              onClick={() => onPageChange(page)}>
              {page}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.prototype = {
  itemsCount: PropTypes.number.isRequired,
  itemsPerPage: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
