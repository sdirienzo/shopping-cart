import styles from './Card.module.css';

function Card({ id, name, price, imageUrl, onClick }) {

    const handleClick = () => {
        onClick(id);
    }

    return (
        <article className={styles.card} onClick={handleClick}>
            <figure className={styles.cardFigure}>
                <img className={styles.cardImage} src={require(`../../assets/images${imageUrl}`)} alt='' />
                <figcaption className={styles.cardCaption}>
                    <p className={styles.cardName}>{name}</p>
                    <p className={styles.cardPrice}>{`$${price}`}</p>
                </figcaption>
           </figure>
        </article>
    );
}

export default Card;