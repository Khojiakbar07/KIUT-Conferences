import axios from "axios";
import Article from "../../components/article/Article";
import Intro from "../../components/intro/Intro";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";

const BASE_URL = "https://conference.kiut.uz/api/apps";

const useQuery = () => new URLSearchParams(useLocation().search);

const Articles = () => {
    const [sections, setSections] = useState([]);
    const [articles, setArticles] = useState([]);
    const [totalPageCount, setTotalPageCount] = useState(0);
    const query = useQuery();
    const [page, setPage] = useState(query.get("page") || 1);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/article/section/`
                );
                setSections(data.results);

                const {
                    data: { results, page_count },
                } = await axios.get(`${BASE_URL}/article/?page=${page}`);
                setArticles(results);
                setTotalPageCount(page_count);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [page]);

    return (
        <main>
            <Intro />
            <Article articles={articles} sections={sections} />
            <Pagination
                page={page}
                setPage={setPage}
                totalPageCount={totalPageCount}
            />
        </main>
    );
};

export default Articles;
