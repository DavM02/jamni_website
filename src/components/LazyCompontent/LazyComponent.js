import React, { Suspense } from 'react';
import ChunkLoading from '../ui/messages/ChunkLoading/ChunkLoading';
 
const LazyComponent = ({ path }) => {
    const Sections = React.lazy(() => import("../../pages/NewsPage/NewsSections"))
    return <Suspense fallback={<ChunkLoading />}>
        <Sections />
    </Suspense>
}

export default LazyComponent