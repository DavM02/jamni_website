import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.svg';
import UserIcons from './UserIcons';
import SearchInput from '../../ui/SearchInput/SearchInput';
import { MainContext } from '../../../context/MainContext';
import useMediaQ from '../../../hooks/useMediaQ';
import ContactInfo from './ContactInfo';


export default function Header() {
  const query = useMediaQ('(max-width: 777px)');
  const [scroll, setScroll] = useState(true);
  const { scrollbarAccess } = useContext(MainContext);
  const [isScrollbarReady, setIsScrollbarReady] = useState(false);
  const [menu, setMenu] = useState({ open: false, backdrop: false, nested: false });

  useEffect(() => {
    if (scrollbarAccess.current) {
      setIsScrollbarReady(true);
      scrollbarAccess.current.addListener(() => {
        console.log('a')
      });
    }
  }, [scrollbarAccess]);

  useEffect(() => {
    function handleScroll(event) {
      const scrollY = event.offset.y;
      console.log(scrollY)
      setScroll(scrollY < 78);
    }

    if (isScrollbarReady) {
      const scrollbarInstance = scrollbarAccess.current;
      scrollbarInstance.addListener(handleScroll);
      return () => {
        scrollbarInstance.removeListener(handleScroll);
      };
    }
  }, [isScrollbarReady, scrollbarAccess]);

  useEffect(() => {
    if (menu.open || menu.nested) {
      setMenu({ open: false, backdrop: false, nested: false });
    }
   
  }, [query]);

  return (
    <header id='header'>
      <ContactInfo />
      <div className='menu' style={{ top: `${(!scroll && !query) ? 'calc(30px - 55px - (var(--header-container-padding)*2))' : '30px'}` }}>
        <div className='container'>
          <div className='grid-3 center-y'>
            <div className='toggle-menu'>
              <div className='menu-bars' onClick={() => setMenu({ open: true, backdrop: true })}>
                <div></div>
                <div></div>
              </div>
            </div>
            <SearchInput />
            <div className='row center-x'>
              <Link to='/' className='logo'>
                <img width={148} height={55} src={logo} alt='logo' />
              </Link>
            </div>
            <UserIcons />
          </div>
        </div>
        <Navigation
          setMenu={setMenu}
          menu={menu} />
      </div>
    </header>
  );
}
