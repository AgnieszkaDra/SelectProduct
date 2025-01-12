import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import { getAvailableProducts, getProductsByCategory, getAveragePriceByCategory, sortProducts } from "../../../productSlice";
import styled from "styled-components";

const ProductList: React.FC = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: RootState) => state.products.products);

    const ProductGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 1.5rem;
    padding: 2rem;
    max-width: 1200px;
    margin: auto;
`;

const ProductCard = styled.div`
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
    padding: 1rem;
    transition: transform 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

const ProductImage = styled.img`
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 5px;
`;

const ProductInfo = styled.div`
    padding: 0.8rem 0;
`;

const ProductName = styled.h3`
    font-size: 1.2rem;
    color: #333;
    margin: 0;
`;

const ProductCategory = styled.p`
    font-size: 0.9rem;
    color: #777;
    margin: 0.5rem 0;
`;

const ProductPrice = styled.p`
    font-size: 1rem;
    font-weight: bold;
    color: #333;
`;

const Availability = styled.span<{ isAvailable: boolean }>`
    display: inline-block;
    padding: 0.4rem 0.8rem;
    border-radius: 5px;
    font-size: 0.85rem;
    font-weight: bold;
    background-color: ${(props) => (props.isAvailable ? "#28a745" : "#dc3545")};
    color: white;
`;

const AddToCartButton = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 0.6rem 1rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 1rem;
    transition: background 0.2s ease-in-out;

    &:hover {
        background: #0056b3;
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

const Button = styled.button`
    background: #007bff;
    color: white;
    border: none;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
    margin: 0.5rem;

    &:hover {
        background: #0056b3;
        transform: translateY(-2px);
    }

    &:active {
        background: #004085;
        transform: translateY(1px);
    }

    &:disabled {
        background: #ccc;
        cursor: not-allowed;
    }
`;

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    margin: 2rem 0;
`;

    return (
        <>
            <h2>Products List</h2>
            <ButtonContainer>
                <Button onClick={() => dispatch(getAvailableProducts())}>Filter Available Products</Button>
                <Button onClick={() => dispatch(getProductsByCategory("Elektronika"))}>Filter by Electronics</Button>
                <Button onClick={() => dispatch(getAveragePriceByCategory("Elektronika"))}>Average Price (Elektronika)</Button>
                <Button onClick={() => dispatch(sortProducts({ key: "name", ascending: true }))}>Sort by Name Asc</Button>
                <Button onClick={() => dispatch(sortProducts({ key: "price", ascending: false }))}>Sort by Price Desc</Button>
            </ButtonContainer>
            <ProductGrid>
                {products.map((product) => (
                    <ProductCard key={product.name}>
                        <ProductInfo>
                            <ProductName>{product.name}</ProductName>
                            <ProductCategory>{product.category}</ProductCategory>
                            <ProductPrice>${product.price}</ProductPrice>
                            <Availability isAvailable={product.isAvailable}>
                                {product.isAvailable ? "In Stock" : "Out of Stock"}
                            </Availability>
                            <AddToCartButton disabled={!product.isAvailable}>
                                {product.isAvailable ? "Add to Cart" : "Sold Out"}
                            </AddToCartButton>
                        </ProductInfo>
                    </ProductCard>
                ))}
            </ProductGrid>
        </>
    );
};

export default ProductList;