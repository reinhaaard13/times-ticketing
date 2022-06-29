import React, { useEffect, useState } from 'react';

import styles from './Header.module.css';

const Header = () => {
  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScroll(window.scrollY > 50);
    }

    window.addEventListener('scroll', onScroll)
    
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, [])

  return (
    <div className={`${styles.header} ${scroll && styles.scrolled}`}>
      <div className="container p-2">
        <h1 className='font-bold text-xl logo'>TIMES <span className='font-normal'>Ticketing</span></h1>
      </div>
    </div>
  );
}
 
export default Header;