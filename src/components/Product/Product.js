import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productData } from '../../assets/data/productData';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import styles from './Product.module.css';

function Product() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);

    useEffect(function getProduct() {
        const newProduct = productData.find(product => product.id === id);
        setProduct(newProduct);
    }, [id]);

    const [name, setName] = useState('');

    useEffect(function updateName() {
        if (product) {
            setName(product.name);
        }
    }, [product]);

    if (!product) {
        return <div></div>
    }

    return (
        <main className={styles.product}>
            <div className={styles.productLeft}>
                <figure className={styles.productFigure}>
                    <img className={styles.productImage} src={require(`../../assets/images${product.imageUrl}`)} alt='' />
                </figure>          
            </div>
            <div className={styles.productRight}>
                <h3 className={styles.productHeading}>
                    <span className={styles.productName}>{name}</span>
                    <span className={styles.productPrice}>{`$${product.price}`}</span>
                </h3>
                <p className={styles.productDescription}>{product.description}</p>
                <AddToCartButton />
            </div>
        </main>
    );
}

export default Product;