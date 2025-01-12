import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { getAvailableProducts, getProductsByCategory, getAveragePriceByCategory, sortProducts } from "../../../productSlice";

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

    return (
        <div>
            <h2>Products List</h2>
            <button onClick={() => dispatch(getAvailableProducts())}>Filter Available Products</button>
            <button onClick={() => dispatch(getProductsByCategory("Elektronika"))}>Filter by Electronics</button>
            <button onClick={() => dispatch(getAveragePriceByCategory("Elektronika"))}>Average Price (Elektronika)</button>
            <button onClick={() => dispatch(sortProducts({ key: "name", ascending: true }))}>Sort by Name Asc</button>
            <button onClick={() => dispatch(sortProducts({ key: "price", ascending: false }))}>Sort by Price Desc</button>

            <ul>
                {products.map((product) => (
                    <li key={product.name}>
                        {product.name} - {product.category} - ${product.price} - {product.isAvailable ? "Available" : "Out of stock"}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;