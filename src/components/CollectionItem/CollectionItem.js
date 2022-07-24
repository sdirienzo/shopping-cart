import { Link } from 'react-router-dom';
import styles from './CollectionItem.module.css';

function CollectionItem({ id, name, price, type, imageUrl }) {
    return (
        <article className={styles.collectionItem}>
            <div className={styles.imageContainer}>
                <Link to={`/product/${id}`}>
                    <img className={styles.image} src={require(`../../assets/images${imageUrl}`)} alt={type} />
                </Link>
            </div>
            <p className={styles.name}>{name}</p>
            <p className={styles.price}>{`$${price}`}</p>
        </article>
    );
}

export default CollectionItem;
