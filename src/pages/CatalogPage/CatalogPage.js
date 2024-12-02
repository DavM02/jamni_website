import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import DecorPage from './DecorPage/DecorPage'
import NoFound from '../NoFound/NoFound'

export default function CatalogPage() {
    const location = useLocation();

 
    if (location.pathname === '/catalog') {
        return <NoFound />;
    }

    return (
        <Routes>
            <Route path='/decor' element={<DecorPage />} />
            <Route path="*" element={<NoFound />} />
        </Routes>
    );
}
