import styles from './CollectionItem.module.css';

function CollectionItem({ name, price, type, imageUrl }) {
    return (
        <article className={styles.collectionItem}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={require(`../../assets/images${imageUrl}`)} alt={type} />
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{`$${price}`}</p>
        </article>
    );
}

export default CollectionItem;
