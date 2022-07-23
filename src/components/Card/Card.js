import { Link } from 'react-router-dom';
import styles from './Card.module.css';

function Card({ id, name, price, imageUrl }) {
    return (
        <article className={styles.card}>
            <figure className={styles.cardFigure}>
                <Link to={`/product/${id}`}>
                    <img className={styles.cardImage} src={require(`../../assets/images${imageUrl}`)} alt='' />
                </Link>
                <figcaption className={styles.cardCaption}>
                    <p className={styles.cardName}>{name}</p>
                    <p className={styles.cardPrice}>{`$${price}`}</p>
                </figcaption>
           </figure>
        </article>
    );
}

export default Card;