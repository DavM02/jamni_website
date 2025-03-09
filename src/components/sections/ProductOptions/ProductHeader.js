
import { Link } from 'react-router-dom'
export default function ProductHeader({ catalog, collection, name}) {
  return (
      <div className="row wrap gap-10 xxxsmall-text text-main text-gray up-case">
          <Link to={"/"}>Главная</Link>
          <span>/</span>
          <Link to={`/catalog/${catalog}`}>каталог</Link>
          <span>/</span>
      <Link to={`/catalog/${catalog}?collection=${collection}`}>{collection}</Link>
          <span className="text-black-secondary">/</span>
          <span className="text-black-secondary">{name}</span>
      </div>
  )
}
