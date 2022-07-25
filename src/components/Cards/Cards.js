import Card from '../Card/Card';
import styles from './Cards.module.css'

function Cards({ cards }) {
    return (
        <section className={styles.cards}>
            {cards.map(card => (
                <Card key={card.id} {...card} />
            ))}
        </section>
    );
}

export default Cards;