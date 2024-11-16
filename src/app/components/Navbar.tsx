import Link from 'next/link';
import styles from '../../styles/_navbar.module.scss';

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link href="/">Align Care Home</Link>
        </div>
        <ul className={styles.navLinks}>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
