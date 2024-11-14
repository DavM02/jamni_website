import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DecorPage from './DecorPage/DecorPage'

export default function CatalogPage() {
    return (
        <Routes>
            <Route path='decor' element={<DecorPage/>} />
        </Routes>
    )
}
