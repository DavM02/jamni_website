import React, { useCallback, useEffect, useRef, useState } from "react";

import { useSearchParams, Link } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getLength } from "../../../db/loadData";
import useFilter from "../../../hooks/useFilter";
import "./news.css";
import Pagination from "../../ui/Pagination/Pagination";
import NewsFilter from "./NewsFilter";
import NewsDisplay from "./NewsDisplay";
import FetchError from "../../ui/messages/FetchError";

export default function News() {
  const [searchParams] = useSearchParams();

  const page = parseInt(searchParams.get("page") ?? 1);

  const { data, error, isLoading, mutate } = useSWRImmutable([
    "news",
    page,
    16,
  ]);
  const { data: dataLength } = useSWRImmutable(["news"], getLength);
  const { handleFilter } = useFilter();

  useEffect(() => {
    if (!data) return;
    handleFilter(mutate);
  }, [searchParams, isLoading]);
const [offsetTop, setOffsetTop] = useState(null)

  const elemRef = useCallback((node) => {
    if(node !== null) {
      setOffsetTop(node.getBoundingClientRect().top)
    }
  }, [])

 

  return (
    <section id="news">
      <div className="container" ref={elemRef}>
        <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
          <Link to={'/'}>
            Главная
          </Link>
          <span>/</span>
          <span>новости</span>
        </div>
        <NewsFilter />
        {error ? (
          <FetchError message={error.message} />
        ) : <NewsDisplay
          isLoading={isLoading}
          searchParams={searchParams}
          data={data}
        />}
        {dataLength && (
          <Pagination
            scrollOffset={offsetTop}
            pagesCount={Math.ceil(dataLength / 16)}
          />
        )}
      </div>
    </section>
  );
}
