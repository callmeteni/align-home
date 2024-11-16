import styles from '../styles/_home.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to Align Care Home</h1>
          <p>
            Experience exceptional care and comfort in a warm, welcoming environment. 
            Discover a place where every individual feels valued and supported.
          </p>
          <button>Schedule a Tour</button>
        </div>
      </header>

      {/* About Section */}
      <section className={styles.about}>
        <div className="container">
          <h2>Why Choose Align Care Home?</h2>
          <p>
            At Align Care Home, we are committed to delivering the highest level of care and creating a vibrant, supportive community for our residents.
          </p>
          <div className={styles.features}>
            <div className={styles.card}>
              <img src="/images/quality-care.jpg" alt="Quality Care" />
              <h3>Quality Care</h3>
              <p>Personalized services tailored to meet your unique needs.</p>
            </div>
            <div className={styles.card}>
              <img src="/images/vibrant-community.jpg" alt="Vibrant Community" />
              <h3>A Vibrant Community</h3>
              <p>Engage in meaningful activities and form lasting connections.</p>
            </div>
            <div className={styles.card}>
              <img src="/images/modern-facilities.jpg" alt="Modern Facilities" />
              <h3>Modern Facilities</h3>
              <p>Enjoy state-of-the-art amenities in a comfortable environment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className={styles.cta}>
        <h2>Discover the Align Care Home Difference</h2>
        <p>
          Ready to experience Align Care Home? Contact us to learn more or schedule a visit today.
        </p>
        <button>Contact Us</button>
      </section>
    </div>
  );
};

export default Home;
