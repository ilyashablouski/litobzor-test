'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
  // Get the current pathname (e.g., '/products' or '/users')
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <Link
        href="/products"
        className={`${styles.navigationLink} ${pathname === '/products' || pathname === '/' ? styles.active : ''}`}
      >
        Товары
      </Link>
      <Link
        href="/users"
        className={`${styles.navigationLink} ${pathname === '/users' ? styles.active : ''}`}
      >
        Пользователи
      </Link>
    </nav>
  );
};

export default NavigationMenu;
