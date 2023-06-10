import axios from "axios";
import Article from "../../components/article/Article";
import Intro from "../../components/intro/Intro";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://conference.kiut.uz/api/apps";

const useQuery = () => new URLSearchParams(useLocation().search);

const Articles = () => {
    const [sections, setSections] = useState([]);
    const [articles, setArticles] = useState([]);
    const { pathname } = useLocation();
    const query = useQuery();
    const section = query.get("section") || 3;

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/article/section/`
                );
                setSections(data);

                const RESPONSE = await axios.get(
                    `${BASE_URL}/article/?section=${section}`
                );
                setArticles(RESPONSE?.data?.results);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [section]);

    return (
        <main>
            <Intro />
            <Article
                articles={articles}
                sections={sections}
                title="Tashkent International Pedagogical Forum – Education: A Look Into The Future (TIPF 2023)"
                pathname={pathname}
            />
        </main>
    );
};

export default Articles;
