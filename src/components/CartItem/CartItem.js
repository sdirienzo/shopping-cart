import { Link } from 'react-router-dom';
import styles from './CartItem.module.css';

function CartItem({ itemDetails, quantity }) {

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
                    <div className={styles.cartItemOrderDetails}>
                        <button className={styles.carItemRemoveBtn}>-</button>
                        <input className={styles.cartItemOrderQuantity} type="number" value={quantity} />
                        <button className={styles.carItemAddBtn}>+</button>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default CartItem;