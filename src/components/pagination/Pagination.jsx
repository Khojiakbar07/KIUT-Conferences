import { v4 as uuidv4 } from "uuid";
import "./Pagination.scss";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect } from "react";

const Pagination = ({ page, totalPageCount, setPage }) => {
    const arr = Array.from({ length: totalPageCount }, (_, i) => i + 1);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    const handleChangePage = (num) => {
        setPage(num);
    };

    const handlePrev = () => {
        if (page > 1) {
            setPage((state) => state - 1);
            navigate(`${pathname}?page=${page - 1}`);
        } else {
            setPage(1);
        }
    };

    const handleNext = () => {
        if (page !== totalPageCount) {
            setPage((state) => state + 1);
            navigate(`${pathname}?page=${page + 1}`);
        }
    };

    return (
        <div className="pagination">
            <button
                onClick={handlePrev}
                className={`pagination-btn ${
                    page === 1 ? "disabled" : "active"
                }`}
            >
                <FiChevronLeft />
            </button>
            <ol className="pagination-list">
                {arr.map((num) => (
                    <li className="pagination-item" key={uuidv4()}>
                        <Link
                            onClick={() => handleChangePage(num)}
                            className={`pagination-link ${
                                +page === num ? "active" : ""
                            }`}
                            to={`${pathname}?page=${num}`}
                        >
                            {num}
                        </Link>
                    </li>
                ))}
            </ol>
            <button
                className={`pagination-btn ${
                    page !== totalPageCount ? "active" : "disabled"
                }`}
                onClick={handleNext}
            >
                <FiChevronRight />
            </button>
        </div>
    );
};

export default Pagination;
