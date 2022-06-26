import LearnMoreButton from '../LearnMoreButton/LearnMoreButton';
import styles from './About.module.css';

function About() {
    return (
        <section className={styles.about}>
            <h3 className={styles.aboutHeader}>About Us</h3>
            <p className={styles.aboutDescription}>
                Since launching in 2013, we've made it our mission to make great style easy,
                long-lasting and well-priced. We work directly with our manufacturers to produce unique,
                durable pieces using high-quality materials.
                This direct relationship means we can bring you beautiful modern furniture and decor at unrivaled value.
            </p>
            <LearnMoreButton />
        </section>
    );
}

export default About;