import "./index.css"
import {AiFillCloseCircle} from "react-icons/ai"
const CartListItem=props=>{
    const {cartItem,removeItemInCart}=props
    const {title,brand,price,thumbnail}=cartItem
    const clickOnRemoveButton=()=>{
        removeItemInCart(cartItem)
    }
    return(
        <li className="cart-list-item">
            <div className="thumbnail-title-brand-container">
                <div>
                    <img className="thumbnail" alt={title} src={thumbnail}/>
                </div>
                <div>
                    <h2>{title}</h2>
                    <p>{brand}</p>
                </div>
            </div>
            <div className="price-container">
                <h3>${price} /-</h3>
                <button onClick={clickOnRemoveButton} className="remove-button">
                    <AiFillCloseCircle className="remove-icon"/>
                </button>
            </div>
        </li>
    )
}
export default CartListItem