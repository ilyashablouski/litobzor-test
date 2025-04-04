import Link from 'next/link';

const NavigationMenu = () => {
  return (
    <nav className="navigation">
      <Link href="/products">Products</Link>
      <Link href="/users">Users</Link>
    </nav>
  );
};

export default NavigationMenu;
