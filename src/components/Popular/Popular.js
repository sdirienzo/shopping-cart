import styles from './Popular.module.css';
import { productData } from '../../assets/data/data';
import CollectionItem from '../CollectionItem/CollectionItem';

function Popular() {
    return (
        <section className={styles.popular}>
            <h3 className={styles.popularHeader}>Popular Collections</h3>
            <div className={styles.popularCollection}>
                {productData.map(product => product.popular ? <CollectionItem key={product.id} {...product} /> : null)}
            </div>
        </section>
    );
}

export default Popular;