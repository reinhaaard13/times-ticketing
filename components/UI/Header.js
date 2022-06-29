/* eslint-disable @next/next/no-img-element */
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
      <div className="container p-2 flex items-center justify-between">
        <h1 className='font-bold text-xl logo'>TIMES <span className='font-normal'>Ticketing</span></h1>
        <div className={styles.profile}>
          <p>Reinhard Kevin</p>
          <div className={styles.avatar}>
            <img src="https://picsum.photos/200" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
 
export default Header;