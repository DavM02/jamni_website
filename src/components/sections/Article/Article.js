import React from 'react';
import './article.css';
import useSWRImmutable from 'swr/immutable';
import { useSearchParams, useParams } from 'react-router-dom';
import { getArticle } from '../../../db/loadData';
import { AnimatePresence } from 'framer-motion';
import FetchError from '../../ui/messages/FetchError';
import DataLoading from '../../ui/messages/DataLoading';
import SmoothAppearance from '../../ui/SmoothAppearance';
import ArticleContent from './ArticleContent';
import { Link } from 'react-router-dom';
export default function Article() {
  const [searchParams] = useSearchParams();
  const { title } = useParams();
  const id = parseInt(searchParams.get('id'));

  const { data, error, isLoading } = useSWRImmutable([id, title], getArticle);

  return (
    <section id="news-article">
      <div className="container">
        <div className='row wrap center-y gap-10 xxxsmall-text text-main text-gray up-case'>
          <Link to={'/'}>
            Главная
          </Link>
          <span>/</span>
          <Link to={'/news'}>
            Новости
          </Link>
          <span>/</span>
          <span className='text-black'>{title.replaceAll('_', ' ')}</span>
        </div>
        <AnimatePresence mode="wait">
          {error ? (
            <FetchError message={error.message} />
          ) : data && !isLoading ? (
            <SmoothAppearance className="section-layout">
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
