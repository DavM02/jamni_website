import arrowLeft from "../../../assets/icons/pagination-arrow-left.svg";
import arrowRight from "../../../assets/icons/pagination-arrow-right.svg";
 import usePagination from "../../../hooks/usePagination";
export default function Pagination({ pagesCount, scrollElem }) {
  const { pages, activePage, handlePagination } = usePagination(
    pagesCount,
    scrollElem
  );
 
  return (
    <div className="pagination">
      <div className="row gap-30 center-y end-x">
        <div className="prev" onClick={() => handlePagination(activePage - 1)}>
          <img src={arrowLeft} alt="prev" />
        </div>
        <ul className="row gap-10 xsmall-text text-main">
          {pages.map((el, i) => (
            <li
              style={{ pointerEvents: el !== "..." ? "all" : "none" }}
              className={
                activePage == el && el !== "..." ? "active" : "inactive"
              }
              onClick={() => handlePagination(el)}
              key={i}
            >
              {el}
            </li>
          ))}
        </ul>
        <div className="next" onClick={() => handlePagination(activePage + 1)}>
          <img src={arrowRight} alt="next" />
        </div>
      </div>
    </div>
  );
}
