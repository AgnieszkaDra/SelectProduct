import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Product = {
    name: string;
    category: string;
    price: number;
    isAvailable: boolean;
    sales: number;
};

type ProductsState = {
    products: Product[];
};

const initialState: ProductsState = {
    products: [
        { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
        { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
        { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
        { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
        { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
        { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
        { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
        { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
        { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
        { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
        { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
        { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
        { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
        { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
        { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
        { name: "Smartfon", category: "Elektronika", price: 3000, isAvailable: true, sales: 11 },
        { name: "Laptop", category: "Elektronika", price: 6000, isAvailable: false, sales: 15 },
        { name: "T-shirt", category: "Odzież", price: 50, isAvailable: true, sales: 13 },
        { name: "Bluza", category: "Odzież", price: 150, isAvailable: false, sales: 99 },
        { name: "Lodówka", category: "AGD", price: 2000, isAvailable: true, sales: 22 },
    ],
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        getAvailableProducts: (state) => {
            return {
                ...state,
                products: state.products.filter((product) => product.isAvailable),
            };
        },
        getProductsByCategory: (state, action: PayloadAction<string>) => {
            return {
                ...state,
                products: state.products.filter((product) => product.category === action.payload),
            };
        },
        sortProducts: (
            state,
            action: PayloadAction<{ key: "name" | "price" | "popularity"; sort: "ASC" | "DESC" }>
        ) => {
            state.products.sort((a, b) => {
                const { key, sort } = action.payload;
        
                if (key === "name") {
                    return sort === "ASC" ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                } else if (key === "price") {
                    return sort === "ASC" ? a.price - b.price : b.price - a.price;
                } else if (key === "popularity") {
                    return sort === "ASC" ? a.sales - b.sales : b.sales - a.sales;
                }
                return 0; 
            });
        },
    },
});

export const { getAvailableProducts, getProductsByCategory, sortProducts } =
    productsSlice.actions;

export default productsSlice.reducer;