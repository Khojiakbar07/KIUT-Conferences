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
    const query = useQuery();
    const section = query.get("section") || sections?.[0]?.id;
    const { pathname } = useLocation();

    const isNamanganR = pathname === "/publications/namangan";

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}${
                        isNamanganR ? "/namangan-article/" : "/article/"
                    }section/`
                );
                setSections(data);

                const RESPONSE = await axios.get(
                    `${BASE_URL}${
                        isNamanganR ? "/namangan-article/" : "/article/"
                    }?section=${section}`
                );
                setArticles(RESPONSE?.data?.results);
            } catch (error) {
                console.log(error);
            }
        })();
    }, [section, isNamanganR]);

    return (
        <main>
            <Intro />
            <Article
                articles={articles}
                sections={sections}
                title={
                    isNamanganR
                        ? "Socio-economic Development of Regions: International Experience, Problems, and Solutions"
                        : "Tashkent International Pedagogical Forum – Education: A Look Into The Future (TIPF 2023)"
                }
            />
        </main>
    );
};

export default Articles;
