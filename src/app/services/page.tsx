import styles from '../../styles/_services.module.scss';

const Services = () => {
  return (
    <div className={styles.services}>
      <div className="container">
        <header className={styles.header}>
          <h1>Our Services</h1>
          <p>
            At Align Care Home, we offer a variety of services designed to provide the best care and support for our residents. 
            Explore our offerings below and see how we can make life more comfortable and enjoyable.
          </p>
        </header>

        <section className={styles.serviceCards}>
          <div className={styles.card}>
            <img src="/images/personal-care.jpg" alt="Personal Care" />
            <h2>Personal Care</h2>
            <p>
              Tailored daily assistance with personal needs, ensuring our residents maintain independence and dignity.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/images/medical-support.jpg" alt="Medical Support" />
            <h2>Medical Support</h2>
            <p>
              24/7 on-site healthcare services, including medication management and routine checkups.
            </p>
          </div>

          <div className={styles.card}>
            <img src="/images/recreational-activities.jpg" alt="Recreational Activities" />
            <h2>Recreational Activities</h2>
            <p>
              Engaging programs and activities that promote mental and physical well-being.
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Discover the Align Care Home Difference</h2>
          <p>
            Ready to learn more? Schedule a tour or contact us to explore how Align Care Home can help you or your loved ones.
          </p>
          <button>Contact Us</button>
        </section>
      </div>
    </div>
  );
};

export default Services;
