import React, { lazy, Suspense } from 'react';
import ChunkLoading from '../ui/messages/ChunkLoading/ChunkLoading';
 
const withLazyLoad = (importComponent) => {
    const LazyComponent = lazy(importComponent);

    const WrappedComponent = (props) => (
        <Suspense fallback={<ChunkLoading/>}>
            <LazyComponent {...props} />
        </Suspense>
    );

    return WrappedComponent;
};

export default withLazyLoad;
