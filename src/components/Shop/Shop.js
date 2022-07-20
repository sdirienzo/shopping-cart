import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { productData } from '../../assets/data/productData';
import Cards from "../Cards/Cards";

function Shop() {
    let { category } = useParams();
    
    const [heading, setHeading] = useState("");

    useEffect(()=> {
        updateHeading();
    }, []);

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const updateHeading = () => {
        setHeading(category)
    }

    const getProducts = () => {
        const newProducts = productData.filter(product => product.category === category);

        setProducts(newProducts);
    }

    return (
        <main>
            <h3>{`All ${heading}`}</h3>
            <Cards cards={products} />
        </main>
    );
}

export default Shop;