 import React, { Suspense } from 'react'
import ChunkLoading from '../../../components/ui/ChunkLoading/ChunkLoading'
import PageTransition from '../../../components/pageTransition/PageTransition'
 const DecorSections = React.lazy(() => import('./DecorSections'))
function DecorPage() {
   return (
     <div id='decor-page'>
           <Suspense fallback={<ChunkLoading/>}>
               <DecorSections/>
        </Suspense>
     </div>
   )
 }

export default React.memo(PageTransition(DecorPage))
 