import { Link } from 'react-router-dom';
import NestedList from './NestedList'; 
import userIcon from '../../../assets/icons/user.svg'
import heartIcon from '../../../assets/icons/heart.svg'

export default function Navigation({ menu, setMenu }) {



  return (
    <div className='navigation' style={{ left: menu.open ? '0' : '-100%' }}>
      <div className='mobile-header row center-y s-between'>
        <div className={`menu-bars ${menu.open ? 'active' : 'inactive'}`} onClick={() => setMenu({open: false, backdrop: false})}>
          <div></div>
          <div></div>
        </div>
        <div className='icons row gap-25'>
          <div className='icon'>
            <img src={userIcon} alt='user-icon' />
          </div>
          <div className='icon'>
            <img src={heartIcon} alt='heart-icon' />
          </div>
        </div>
      </div>
      <nav className='row center-x'>
        <ul className='row gap-70 text-main xsmall-text text-black up-case'>
          <NestedList setMenu={setMenu} menu={menu}/>  
          <li>
            <Link 
            onClick={() =>   setMenu({ open: false, backdrop: false, nested: false })}
            to={'news'}>новости</Link>
          </li>
          <li>
            <Link 
              onClick={() => setMenu({ open: false, backdrop: false, nested: false })}

            to={'about'}>о нас</Link>
          </li>
          <li>
            <Link>отзывы</Link>
          </li>
          <li>
            <Link>контакты</Link>
          </li>
        </ul>
      </nav>
      <div className='column gap-5'>
        <a href="tel:+79160257790" className='text-main text-black xxxsmall-text'>+7 (916) 025-77-90</a>
        <a href="tel:+74951501091" className='text-main text-black xxxsmall-text'>+7 (495) 150-10-91</a>
      </div>
    </div>
  );
}
