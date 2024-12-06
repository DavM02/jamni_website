import React, {  useEffect, } from "react";

import { useSearchParams, Link } from "react-router-dom";
import useSWRImmutable from "swr/immutable";
import { getLength } from "../../../db/loadData";
import useFilter from "../../../hooks/useFilter";
import "./news.css";
import Pagination from "../../ui/Pagination/Pagination";
import NewsFilter from "./NewsFilter";
import NewsDisplay from "./NewsDisplay";

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
 



 
   
  return (
    <section id="news">
      <div className="container" >
        <div className='row gap-10 xxxsmall-text text-main text-black up-case'>
          <Link to={'/'}>
            Главная
          </Link>
          <span>/</span>
          <span>новости</span>
        </div>
        <NewsFilter />
        <NewsDisplay
          error={error}
          isLoading={isLoading}
          searchParams={searchParams}
          data={data}
        />
        {dataLength && (
          <Pagination
            scrollOffset={350}
            pagesCount={Math.ceil(dataLength / 16)}
          />
        )}
      </div>
    </section>
  );
}
