import { CartEmpty } from "./components/CartEmpty"
import { CartList } from "./components/CartList"
export const CartPage = () => {
    const cartLength = 0
  return (
    <main>
        {cartLength ? <CartEmpty/> :  <CartList/>}
    </main>
  )
}
