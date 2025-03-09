
import { Route, Routes } from "react-router-dom";
import ArticlePage from "./ArticlePage/ArticlePage";
import NewsPage from "./NewsPage";
import NoFound from "../NoFound/NoFound";
function NewsRoute() {
    return (

        <Routes>
            <Route path='/' element={<NewsPage />} />
            <Route path="/article/:title" element={<ArticlePage />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    );
}

export default NewsRoute;


