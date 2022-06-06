import { useEffect, useState } from 'react';
import styles from 'styles/Sidebar.module.scss';

export default function Sidebar({ handleHidde, hidde }: any) {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) return setIsScrolled(true);
      setIsScrolled(false);
    });
  }, []);

  return (
    <nav
      className={`${styles.nav} ${isScrolled && styles.scrolled} ${
        hidde && styles.hidde
      }`}
    >
      <ul>
        <li>
          <a href='#products'>All Products</a>
        </li>
        <li>
          <a href='#kits'>Kits</a>
        </li>
        <li>
          <a href='#training'>Training</a>
        </li>
        <li>
          <a href='#lifestyle'>Lifestyle</a>
        </li>
        <li>
          <a href='#accesories'>Accesories</a>
        </li>
        <li>
          <a href='#teams'>Teams</a>
        </li>
        <li onClick={() => handleHidde()}>
          <i
            className={`${
              hidde ? 'fal fa-angle-double-right' : 'fal fa-angle-double-left'
            }`}
          ></i>
        </li>
      </ul>
    </nav>
  );
}
