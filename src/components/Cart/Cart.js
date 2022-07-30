import { useEffect, useState } from 'react';
import CartItem from '../CartItem/CartItem';
import CheckoutButton from '../CheckoutButton/CheckoutButton';
import styles from './Cart.module.css';

function Cart({ cart, onAdd, onRemove }) {
    const [total, setTotal] = useState(0);

    useEffect(function calculateTotal() {
        const newTotal = cart.reduce(function (prevValue, currItem) {
            return prevValue + (currItem.itemDetails.price * currItem.quantity);
        }, 0);

        setTotal(newTotal);
    }, [cart]);

    return (
        <main className={styles.cart}>
            <h3 className={styles.cartHeading}>Shopping Cart</h3>
            <section className={styles.cartItems}>
                {cart.map(item => (
                    <CartItem key={item.itemDetails.id} {...item} />
                ))}
            </section>
            <section className={styles.cartCheckout}>
                <div className={styles.cartTotalContainer}>
                    <span className={styles.cartTotalLabel}>Total:</span>
                    <span className={styles.cartTotal}>${total}</span>
                </div>
                <CheckoutButton />
            </section>
        </main>
    )
}

export default Cart;