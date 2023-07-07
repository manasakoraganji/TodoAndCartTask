import Home from "./components/Home"
import About from "./components/About"
import ContactForm from "./components/Contact"
import Products from "./components/Products"
import Cart from "./components/Cart"
import {BrowserRouter,Switch,Route} from "react-router-dom"
import CartContext from "./reactContext/CartContext"
import Todo from "./components/Todo"
import { useState, } from "react"
import './App.css';

const App=()=>{
  const [cartListItems,setCartListItems]=useState([])
  const updateCart=product=>{
    setCartListItems(prevState=>([...prevState,product]))
  }
  const removeCartItem=product=>{
    const updatedCartList=cartListItems.filter(eachItem=>eachItem.id!==product.id)
    setCartListItems(updatedCartList)
  }
  
  const removeAllCartItems=()=>{
    setCartListItems([])
  }
  return(
    <CartContext.Provider value={{cartList:cartListItems,
                                  setCartList:updateCart,
                                  removeItemInCart:removeCartItem,
                                  removeAllItemsInCart:removeAllCartItems}}>
      <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={ContactForm}/>
        <Route exact path="/products" component={Products}/>
        <Route exact path="/cart" component={Cart}/>
        <Route exact path="/todo" component={Todo}/>
      </Switch>
    </BrowserRouter>
    </CartContext.Provider>
  )
}

export default App;
