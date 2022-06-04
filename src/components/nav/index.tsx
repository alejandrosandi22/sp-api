import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from 'styles/Nav.module.scss';

export default function Nav() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isActive, setIsActive] = useState<boolean>(false);
  const router = useRouter();

  const { pathname } = router;

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 50) return setIsScrolled(true);
      setIsScrolled(false);
    });
  }, []);

  const handleToggle = () => setIsActive(!isActive);

  return (
    <nav className={`${styles.nav} ${isScrolled && styles.scrolled}`}>
      <h1>SP-API</h1>
      <div
        onClick={handleToggle}
        className={`${styles.toggleWrapper} ${isActive ? styles.bg : ''}`}
      >
        <div
          className={`${styles.toggle} ${isActive ? styles.active : ''}`}
        ></div>
      </div>
      <ul className={`${isActive ? '' : styles.hidde}`}>
        <li>
          <Link href='/'>
            <a
              onClick={handleToggle}
              className={`${pathname === '/' ? styles.isActive : ''}`}
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link href='/docs'>
            <a
              onClick={handleToggle}
              className={`${pathname === '/docs' ? styles.isActive : ''}`}
            >
              Docs
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
