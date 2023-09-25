import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers"
const filterInitialState = {
    productList : [],
    onlyInStock : false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null
}

const FilterContext = createContext(filterInitialState)

export const FilterProvider = ({children}) => {
    // get access to my state
    const [state, dispatch] = useReducer(filterReducer, filterInitialState)

    // create functions

    // initialize ProductList

    function initialProductList(products){
        dispatch({
            type: "PRODUCT_LIST",
            payload: {
                products: products
            }
        })
    }

    const value = {
        products: state.productList,
        initialProductList
    }
    return(
        <FilterContext.Provider  value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => {
    const context = useContext(FilterContext)
    return context;
}