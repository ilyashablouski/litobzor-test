import styles from './Header.module.scss';
import NavigationMenu from '@/components/NavigationMenu';

const Header = () => {
  return (
    <header className={styles.header}>
      <NavigationMenu />
    </header>
  );
};

export default Header;
