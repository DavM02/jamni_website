import React from 'react'
import { Link } from 'react-router-dom'
import useSWRImmutable from 'swr/immutable'
import { getLength } from '../../../../db/loadData';
export default function Article(props) {

  const { data: dataLength } = useSWRImmutable(["news"], getLength);

  const { data, error, isLoading, mutate } = useSWRImmutable([
    "news",
    Math.ceil(dataLength/16),
    16,
  ]);

  return (
      <article {...props} id="article" >
       <Link>
         <div className='row end-y'></div>
       </Link>
      </article>
  )
}
