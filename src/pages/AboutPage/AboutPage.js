import React, { memo, Suspense } from 'react'
import PageTransition from '../../components/pageTransition/PageTransition'
import ChunkLoading from '../../components/ui/ChunkLoading/ChunkLoading'
const AboutSections = React.lazy(() => import('./AboutSections'))
function AboutPage() {
    return (
        <div id='about-page' >

            <Suspense fallback={<ChunkLoading/>}>
                <AboutSections />
            </Suspense>

        </div>
    )
}
export default memo(PageTransition(AboutPage))