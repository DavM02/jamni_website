import React from 'react'
import Intro from '../../../components/sections/Intro/Intro'
import bg from '../../../assets/img_22.webp'
import { useParams } from 'react-router-dom'
import MoreArticles from '../../../components/sections/MoreArticles/MoreArticles'
import Article from '../../../components/sections/Article/Article'
export default function ArticleSections() {
    const {title} = useParams()
  return (
    <>
      <Intro 
      bg={bg}
      id="article-intro"
      posY={'85%'}
        headline={title.replaceAll('_', ' ')}
      />
      <Article/>
      <MoreArticles/>
    </>
  )
}
