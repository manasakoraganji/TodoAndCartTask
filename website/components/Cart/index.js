import Navbar from "../Navbar"
import CartContext from "../../reactContext/CartContext"
import {Link} from "react-router-dom"
import CartListItem from "../CartListItem"
import "./index.css"
const Cart=()=>(
    <CartContext.Consumer>
        {value=>{
            const {cartList,removeItemInCart,removeAllItemsInCart}=value
            const displayEmptyCartListView=()=>(
                <div className="cart-empty-view-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                    className="cart-empty-image"
                    alt="cart empty"
                  />
                  <h1 className="cart-empty-heading">Your Cart Is Empty</h1>
              
                  <Link to="/products">
                    <button type="button" className="shop-now-btn">
                      Shop Now
                    </button>
                  </Link>
                </div>
              )

            const getTotalPrice=()=>{
                let totalValue=0
                cartList.forEach(eachItem=>{
                    totalValue=totalValue+eachItem.price
                })
                return totalValue.toString()
            }
            const clickedOnRemoveAllItemsButton=()=>{
                removeAllItemsInCart()
            }

            const  displayCartListItems=()=>{
                return(
                    <div className="cart-page-body">
                    <h1 className="cart-heading">Cart</h1>
                    <div className="remove-all-items-container">
                        <button className="remove-all-items-button" onClick={clickedOnRemoveAllItemsButton} >Remove all Items</button>
                    </div>
                    <ul>
                        {cartList.map(eachItem=><CartListItem key={eachItem.id} cartItem={eachItem} removeItemInCart={removeItemInCart}/>)}
                    </ul>
                    
                    <div className="checkout-parent-container">
                        <div className="checkout-container">
                            <h1>Order Total:<span>$ {getTotalPrice()}/-</span></h1>
                            <p><span>{cartList.length.toString()}</span> Items in Cart</p>
                        </div>
                    </div>
                    </div>
                )
            }

            return(
                <div className="cart-page">
                    <Navbar/>
                    {cartList.length===0?displayEmptyCartListView():displayCartListItems()}
                    
                </div>
                
            )
        }}
    </CartContext.Consumer>
)
export default Cart