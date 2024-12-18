import React from 'react'
import { Link } from 'react-router-dom'
export default function ProductHeader({catalog, name}) {
  return (
      <div className="row wrap gap-10 xxxsmall-text text-main text-gray up-case">
          <Link to={"/"}>Главная</Link>
          <span>/</span>
          <Link to={"/catalog"}>каталог</Link>
          <span>/</span>
          <Link to={`/catalog/decor?collection=${catalog}`}>{catalog}</Link>
          <span className="text-black">/</span>
          <span className="text-black">{name}</span>
      </div>
  )
}
