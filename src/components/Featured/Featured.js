import styles from './Featured.module.css';
import { productData } from '../../assets/data/data';
import CollectionItem from '../CollectionItem/CollectionItem';

function Featured() {
    return (
        <section className={styles.featured}>
            <h3 className={styles.featuredHeader}>Featured Collections</h3>
            <div className={styles.featuredCollection}>
                {productData.map(product => product.featured ? <CollectionItem key={product.id} {...product} /> : null)}
            </div>
        </section>
    );
}

export default Featured;