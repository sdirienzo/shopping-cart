import CartItem from '../CartItem/CartItem';
import styles from './Cart.module.css';

function Cart({ cart, onAdd, onRemove }) {

    return (
        <main className={styles.cart}>
            <h3 className={styles.cartHeading}>Shopping Cart</h3>
            <section className={styles.cartItems}>
                {cart.map(item => (
                    <CartItem key={item.item.id} {...item} />
                ))}
            </section>
        </main>
    )
}

export default Cart;