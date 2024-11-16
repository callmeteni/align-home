import styles from '../../styles/_about.module.scss';

const About = () => {
  return (
    <div className={styles.about}>
      <div className="container">
        <header className={styles.header}>
          <h1>About Align Care Home</h1>
          <p>
            At Align Care Home, we are dedicated to providing exceptional care and creating a warm, welcoming environment for our residents. Our mission is to ensure that every individual feels valued, respected, and supported.
          </p>
        </header>

        <section className={styles.features}>
          <div className={styles.card}>
            <img src="/images/community.jpg" alt="Our Community" />
            <h2>A Vibrant Community</h2>
            <p>
              Experience a lively and engaging atmosphere where residents form meaningful connections and enjoy a sense of belonging.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/images/care-team.jpg" alt="Our Care Team" />
            <h2>Compassionate Care</h2>
            <p>
              Our dedicated and professional staff are here to provide personalized care tailored to meet the unique needs of each resident.
            </p>
          </div>
          <div className={styles.card}>
            <img src="/images/facilities.jpg" alt="Our Facilities" />
            <h2>Exceptional Facilities</h2>
            <p>
              Enjoy state-of-the-art amenities and a comfortable living environment designed to enhance daily life.
            </p>
          </div>
        </section>

        <section className={styles.cta}>
          <h2>Join the Align Care Home Family</h2>
          <p>
            Discover the Align Care Home difference. Contact us today to learn more about our services and schedule a visit.
          </p>
          <button>Contact Us</button>
        </section>
      </div>
    </div>
  );
};

export default About;
