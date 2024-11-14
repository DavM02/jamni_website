import React, { memo } from 'react'
import PageTransition from '../../components/pageTransition/PageTransition'
import About from '../../components/sections/About/About'
console.log('a')
 function NewsPage() {
  return (
    <div id='news-page'> 
      <About/>
    </div>
  )
}


export default memo(PageTransition(NewsPage))