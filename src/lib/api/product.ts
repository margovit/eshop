export const fetchProducts = async () => {
    return fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
}