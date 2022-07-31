import { Link } from 'react-router-dom';
import QuantitySelector from '../QuantitySelector/QuantitySelector';
import styles from './CartItem.module.css';

function CartItem({ itemDetails, quantity, onAdd, onSubtract }) {
    const handleAdd = () => {
        onAdd(itemDetails);
    }

    const handleRemove = () => {
        onSubtract(itemDetails);
    }

    return (
        <form className={styles.cartItem}>
            <div className={styles.cartItemLeft}>
                <figure className={styles.cartItemFigure}>
                    <Link to={`/product/${itemDetails.id}`}>
                        <img className={styles.cartItemImage} src={require(`../../assets/images${itemDetails.imageUrl}`)} alt='' />
                    </Link>
                </figure>
            </div>
            <div className={styles.cartItemRight}>
                <div className={styles.cartItemDetails}>
                    <p className={styles.cartItemName}>{itemDetails.name}</p>
                    <p className={styles.cartItemPrice}>${itemDetails.price}</p>
                    <QuantitySelector quantity={quantity} onAdd={handleAdd} onSubtract={handleRemove} />
                </div>
            </div>
        </form>
    );
}

export default CartItem;