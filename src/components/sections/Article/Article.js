import React from 'react'
import './article.css'
import useSWRImmutable from 'swr/immutable'
import { useSearchParams, useParams } from 'react-router-dom'
import { getArticle } from '../../../db/loadData'
export default function Article() {
    const [searchParams] = useSearchParams()
    const { title } = useParams()
    const id = parseInt(searchParams.get('id'))
    
    const { data, error, loading, mutate } = useSWRImmutable([id, title], getArticle)
    console.log(data)
  return (
    <section id='news-article'>
         
      </section>
  )
}
