import styles from '../../styles/_contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contact}>
      <div className="container">
        <h1>Contact Us</h1>
        <p>We’d love to hear from you! Please fill out the form below, and we’ll get in touch as soon as possible.</p>

        <div className={styles.formContainer}>
          <form>
            <div className={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Your Email" required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows={5} placeholder="Your Message" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>

          <div className={styles.contactInfo}>
            <h2>Our Contact Details</h2>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> info@alignresidence.com</p>
            <p><strong>Address:</strong> 123 Align St., Careville, State 56789</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
