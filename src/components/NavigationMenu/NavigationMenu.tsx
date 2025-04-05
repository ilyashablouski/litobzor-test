'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './NavigationMenu.module.scss';

const NavigationMenu = () => {
  const pathname = usePathname();

  return (
    <nav className={styles.navigation}>
      <Link
        href="/products"
        className={`${styles.navigationLink} ${pathname === '/products' || pathname === '/' ? styles.active : ''}`}
      >
        Products
      </Link>
      <Link
        href="/users"
        className={`${styles.navigationLink} ${pathname === '/users' ? styles.active : ''}`}
      >
        Users
      </Link>
    </nav>
  );
};

export default NavigationMenu;
