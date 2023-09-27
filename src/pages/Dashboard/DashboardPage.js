import React, { useEffect, useState } from 'react'
import { DashboardOrder } from './components/DashboardOrder'
import { DashboardEmpty } from './components/DashboardEmpty'
export const DashboardPage = () => {
  // I need to fetch data from orders for a specefic user to display it here
  const [orders, setOrders] = useState([])
  
  const token = JSON.parse(sessionStorage.getItem("token"))
  const id = JSON.parse(sessionStorage.getItem("cid"))

  useEffect(() => {
    async function fetchOrders(){
      const response = await fetch(`http://localhost:8000/660/orders?user.id=${id}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
      })
      const data = await response.json()
      setOrders(data)
    }
    fetchOrders()
  }, [])
  return (
    <main>
      <section>
          <p className="text-3xl text-center underline underline-offset-2 dark:text-slate-100">Dashboard Page</p>
      </section>

      <section>
        { orders.length && orders.map((order)=> (
          <DashboardOrder key={order.id} order={order}/>
        ))}

      </section>

      <section>
          {!orders.length && <DashboardEmpty/>}
      </section>
    </main>
  )
}
