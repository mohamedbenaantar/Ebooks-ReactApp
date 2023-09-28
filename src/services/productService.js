// getProductList getProductDetails getFeaturedList
import { useLocation } from 'react-router-dom'

export async function getProductList(searchTerm) {
    
    const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm: ""}`)
    const data = await response.json()

    return data
}

export async function getProductDetails(id) {
    const response = await fetch(`http://localhost:8000/products/${id}`)
    const data = await response.json()
    
    return data
    
}

export async function getFeaturedList() {
    const response =await fetch("http://localhost:8000/featured_products")
    const data = await response.json()

    return data
}
