import React from 'react'
import { Routes, Route } from "react-router-dom"
import { HomePage, ProductList, Login, Register, CartPage, OrderPage, DashboardPage } from "./../pages"
import { ProductDetails } from '../pages/ProductDetails'
import { ProtectedRoute } from './ProtectedRoute'
export const AllRoutes = () => {
 
  return (
    <>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/cart" element={<ProtectedRoute><CartPage/></ProtectedRoute>}/>
        <Route path="/order-summary" element={<ProtectedRoute><OrderPage/></ProtectedRoute>}/>
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage/></ProtectedRoute>}/>
    </Routes>
    </>
  )
}
