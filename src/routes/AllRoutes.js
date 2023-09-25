import React from 'react'
import { Routes, Route } from "react-router-dom"
import { HomePage, ProductList } from "./../pages"
import { ProductDetails } from '../pages/ProductDetails'
export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
    </Routes>
    </>
  )
}
