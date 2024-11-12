import { Link } from 'react-router-dom';
import arrow from '../../../assets/icons/arrow-up.svg';
import Backdrop from '../../ui/Backdrop/Backdrop';

export default function NestedList({ menu, setMenu }) {
 
 
    const isTouchDevice = () => {
        return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    };

   
    const handleClick = (e) => {
        e.preventDefault();
        if (isTouchDevice()) {
            if (window.innerWidth > 777) {
                setMenu((prev) => ({ ...prev, backdrop: !prev.backdrop, nested: !prev.nested }))
               
            } else {
                setMenu((prev) => ({ ...prev, nested: !prev.nested }))
                
            }
        } else if (window.innerWidth <= 777) {
            setMenu((prev) => ({ ...prev, nested: !prev.nested }))
    
        }
        
    };

    return (
        <>
            <li
                onClick={handleClick}  
                onMouseEnter={() => {
                    if (!isTouchDevice() && window.innerWidth > 777) {
                        setMenu((prev) => ({ ...prev, backdrop: true, nested: true }))
                    }
                }}
                onMouseLeave={() => { 
                    if (!isTouchDevice() && window.innerWidth > 777) {
                        setMenu((prev) => ({ ...prev, backdrop: false, nested: false }))
                    }
                }}
            >
                <Link className='row-inline center-y gap-10'>
                    каталог
                    <img
                        className='arrow-up'
                        style={{ transform: menu.nested ? 'rotate(180deg)' : 'none' }}
                        src={arrow}
                        alt='arrow'
                    />
                </Link>
                <ul
                    id='catalog-list'
                    className={`row s-between ${menu.nested ? 'active' : 'inactive'}`}
                >
                    <li>
                        <ul>
                            <li><Link>Диваны</Link></li>
                            <li><Link>Кровати</Link></li>
                            <li><Link>Пуфы и банкетки</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link>Кресла</Link></li>
                            <li><Link>Стулья</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link>Бескаркасная мебель</Link></li>
                            <li><Link>Уличная мебель</Link></li>
                            <li><Link>Постельное белье</Link></li>
                        </ul>
                    </li>
                    <li>
                        <ul>
                            <li><Link>Декор</Link></li>
                            <li><Link>Шторы</Link></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <Backdrop value={menu.backdrop} style={{ zIndex: menu.open ? '1' : '-1' }} root={'header'} />
        </>
    );
}
