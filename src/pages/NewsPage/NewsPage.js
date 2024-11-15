import React, { memo } from 'react'
import PageTransition from '../../components/PageTransition/PageTransition'
import About from '../../components/sections/About/About'
console.log('a')
function NewsPage() {
  return (
    <div id='news-page'>
      <About />
    </div>
  )
}


export default PageTransition(memo(NewsPage))