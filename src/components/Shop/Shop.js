import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { productData } from '../../assets/data/productData';
import Cards from '../Cards/Cards';
import styles from './Shop.module.css'

function Shop() {
    const { category } = useParams();
    
    const [heading, setHeading] = useState("");

    useEffect(function updateHeading() {
        setHeading(category)
    }, [category]);

    const [products, setProducts] = useState([]);

    useEffect(function getProducts() {
        const newProducts = productData.filter(product => product.category === category);
        setProducts(newProducts);
    }, [category]);

    return (
        <main className={styles.shop}>
            <h3 className={styles.shopHeading}>{`All ${heading}`}</h3>
            <Cards cards={products} />
        </main>
    );
}

export default Shop;