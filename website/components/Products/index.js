import {Component} from "react"
import  ProductItem from "../ProductItem"
import Navbar from "../Navbar"
import CartContext from "../../reactContext/CartContext";
import "./index.css"

class Products extends Component{
    state={isLoading:true,productsList:[]}

    componentDidMount(){
        this.getProducts()
    }
    getProducts=async()=>{
        const url="https://dummyjson.com/products"
        const response=await fetch(url)
        const data=await response.json()
        this.setState({isLoading:false,productsList:data.products})
        
    }

    render(){
        const {isLoading,productsList}=this.state
        const products=productsList.length===0?Array.apply(null,Array(10)):productsList
    return(
            <CartContext.Consumer>
                {value=>
                {   const{setCartList}=value
                    return(
                        <div className="products-page">
                            <Navbar/>
                            <h1>Products</h1>
                            <div className="list-of-products">
                            {products.map((product,index)=><ProductItem key={index} product={product} isLoading={isLoading} setCartList={setCartList}/>)}
                            </div>

                        </div>
                    )
                }
                }
            </CartContext.Consumer>
        )
}
}
export default Products