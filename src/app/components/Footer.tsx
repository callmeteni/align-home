import styles from '../../styles/_footer.module.scss';


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© 2024 Align Care Home. All rights reserved.</p>
        <p>Follow us on:</p>
        <div className={styles.socialIcons}>
          {/* Replace with actual social links */}
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
