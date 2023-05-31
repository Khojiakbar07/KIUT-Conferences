import axios from "axios";
import Article from "../../components/article/Article";
import Intro from "../../components/intro/Intro";
import { useState, useEffect } from "react";

const BASE_URL = "https://conference.kiut.uz/api/apps";

const Articles = () => {
    const [sections, setSections] = useState([]);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const { data } = await axios.get(
                    `${BASE_URL}/article/section/`
                );
                setSections(data.results);

                const {
                    data: { results },
                } = await axios.get(`${BASE_URL}/article`);
                setArticles(results);
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <main>
            <Intro />
            <Article articles={articles} sections={sections} />
        </main>
    );
};

export default Articles;
