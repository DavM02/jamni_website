import React, { useMemo } from 'react'
import { Link } from 'react-router-dom'
import useSWRImmutable from 'swr/immutable'
import { getItem, getLength } from '../../../../db/loadData';
import { AnimatePresence } from 'framer-motion';
import SmoothAppearance from '../../../ui/SmoothAppearance';

export default function Article(props) {

  const { data: dataLength } = useSWRImmutable(["news"], getLength);
  const randomId = useMemo(() => [Math.floor(Math.random() * dataLength), "news"], [dataLength])
  const { data, } = useSWRImmutable(
    randomId,
    getItem
  );

  return (
    <article {...props} id="article" className='row'>

      <AnimatePresence mode='wait'>
        {data && <SmoothAppearance blur={true} className='self-end-y'>
          <Link
            to={`/news/article/${data.title.toLowerCase().replace(/\s+/g, '_')}?id=${data.id}`} >

            <span className='text-main xxxsmall-text text-gray'>Статья</span>
            <span className='text-main xxsmall-text text-black up-case'>
              <b>
                {data && data.title.split(' ').slice(0, 5).join(' ')}...
              </b>
            </span>
            <p className='text-main xxsmall-text text-black-secondary'>
              {data && data.description.split(' ').slice(0, 10).join(' ')}...
            </p>
          </Link>
        </SmoothAppearance>}
      </AnimatePresence>
    </article>
  )
}
