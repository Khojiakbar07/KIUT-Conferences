import axios from "axios";
import Article from "../../components/article/Article";
import Intro from "../../components/intro/Intro";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const BASE_URL = "https://conference.kiut.uz/api/apps";

const useQuery = () => new URLSearchParams(useLocation().search);

const ArticlesNamangan = () => {
    const [sections, setSections] = useState([]);
    const [articles, setArticles] = useState([]);
    const query = useQuery();
    const section = query.get("section") || sections?.[0]?.id;

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/namangan-article/section/`
                );
                setSections(data);

                const RESPONSE = await axios.get(
                    `${BASE_URL}/namangan-article/?section=${section}`
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
                title="Socio-economic Development of Regions: International Experience, Problems, and Solutions"
            />
        </main>
    );
};

export default ArticlesNamangan;
