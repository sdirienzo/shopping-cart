import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { productData } from '../../assets/data/productData';
import Cards from "../Cards/Cards";

function Shop() {
    let { category } = useParams();
    
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
        <main>
            <h3>{`All ${heading}`}</h3>
            <Cards cards={products} />
        </main>
    );
}

export default Shop;