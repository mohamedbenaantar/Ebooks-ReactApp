// getUser getUserOrder createOrder
function getSessionInfo(){
   const token = JSON.parse(sessionStorage.getItem("token"))
   const cid = JSON.parse(sessionStorage.getItem("cid"))
   return {token: token, id: cid}
}
export async function getUser(){
    const browseData = getSessionInfo()
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browseData.id}`,{
                method: "GET",
                headers: {"Content-Type": "application/json", Authorization: `Bearer ${browseData.token}`}
            })
    const data = await response.json()
    return data
}

export async function getUserOrders(){
    const browseData = getSessionInfo()
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user.id=${browseData.id}`,{
        method: "GET",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browseData.token}`}
      })
    const data = await response.json()

    return data
}

export async function createOrder({cartList, total, user}){
    const browseData = getSessionInfo()
    const order = {
        orderProducts: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user: {
            // name: event.target.name.value,
            name: user.name,
            email: user.email,
            id: user.id
        } 
    }
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${browseData.token}`},
        body: JSON.stringify(order)
    })
    const data = await response.json()
    return data
}