import React, { useEffect, useState } from 'react'
import { DashboardOrder } from './components/DashboardOrder'
import { DashboardEmpty } from './components/DashboardEmpty'
import { getUserOrders } from '../../services'
import { useTitle } from '../../hooks/useTitle'
export const DashboardPage = () => {
  // I need to fetch data from orders for a specefic user to display it here
  const [orders, setOrders] = useState([])
  useTitle("Dashboard")
  const token = JSON.parse(sessionStorage.getItem("token"))
  const id = JSON.parse(sessionStorage.getItem("cid"))

  useEffect(() => {
    async function fetchOrders(){
      const data = await getUserOrders()
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
