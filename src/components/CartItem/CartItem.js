import styles from './CartItem.module.css';

function CartItem({ item, quantity }) {

    return (
        <form className={styles.cartItem}>
            <div className={styles.cartItemLeft}>
                <figure className={styles.cartItemFigure}>
                    <img className={styles.cartItemImage} src={require(`../../assets/images${item.imageUrl}`)} alt='' />
                </figure>
            </div>
            <div className={styles.cartItemRight}>
                <div className={styles.cartItemDetails}>
                    <p className={styles.cartItemName}>{item.name}</p>
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