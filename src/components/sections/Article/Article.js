
import "./article.css";
import "./media.css";
import useSWRImmutable from "swr/immutable";
import { useSearchParams, useParams } from "react-router-dom";
import { getItem } from "../../../db/loadData";
import { AnimatePresence } from "framer-motion";
import FetchError from "../../ui/messages/FetchError";
import DataLoading from "../../ui/messages/DataLoading";
import SmoothAppearance from "../../ui/SmoothAppearance";
import ArticleContent from "./ArticleContent";
import NoResults from "../../ui/messages/NoResults";
import { Link } from "react-router-dom";
export default function Article() {
  const [searchParams] = useSearchParams();
  const { title } = useParams();
  const id = parseInt(searchParams.get("id"));

  const { data, error, isLoading } = useSWRImmutable(
    [id, "news", title],
    getItem
  );

  return (
    <section id="news-article">
      <div className="container">
        <div className="row wrap center-y gap-10 xxxsmall-text text-main text-gray up-case">
          <Link to={"/"}>Главная</Link>
          <span>/</span>
          <Link to={"/news"}>Новости</Link>
          <span>/</span>
          <span className="text-black">{title.replaceAll("_", " ")}</span>
        </div>
      </div>
      <div className="container">

        <AnimatePresence mode="wait">
          {error ? (
            <FetchError message={error.message} />
          ) : data === null ? (
            <NoResults level={-1} />
          ) : data && !isLoading ? (
            <SmoothAppearance key={'article'} className="section-layout">
              <ArticleContent data={data} />
            </SmoothAppearance>
          ) : (
            <DataLoading />
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
