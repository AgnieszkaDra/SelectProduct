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
        getAveragePriceByCategory: (state, action: PayloadAction<string>) => {
            const categoryProducts = state.products.filter((product) => product.category === action.payload);
            const averagePrice =
                categoryProducts.length > 0
                    ? categoryProducts.reduce((sum, product) => sum + product.price, 0) / categoryProducts.length
                    : 0;
            console.log(`Average price for ${action.payload}:`, averagePrice);
            return state;
        },
        sortProducts: (state, action: PayloadAction<{ key: "name" | "price"; ascending: boolean }>) => {
            state.products.sort((a, b) => {
                if (action.payload.key === "name") {
                    return action.payload.ascending ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name);
                } else {
                    return action.payload.ascending ? a.price - b.price : b.price - a.price;
                }
            });
        },
    },
});

export const { getAvailableProducts, getProductsByCategory, getAveragePriceByCategory, sortProducts } =
    productsSlice.actions;

export default productsSlice.reducer;