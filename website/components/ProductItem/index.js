import Skeleton from '@mui/material/Skeleton'
import {AiFillStar} from "react-icons/ai"
import "./index.css"
const ProductItem=(props)=>{
    const {product,isLoading,setCartList}=props

    const clickOnAddCartButton=()=>{
        setCartList(product)
    }
    

return(
        <div className='product-item' >
            <div className='flexing-product-image'>
                {isLoading
                ? <Skeleton  animation="wave"  className="product-image" variant="rounded"/>
                : <img className='product-image' src={product.thumbnail} alt={product.title}/>}
            </div>
            <div>
                {isLoading
                ? <Skeleton  animation="wave"  className="price" variant="rounded"/>
                :<h2 className='price'>{product.price}</h2>
                }
            </div>
            <div>
                {isLoading
                ? <Skeleton  animation="wave"  className='rating' variant='rounded'/>
                : (
                    <div className='star-rating-container'>
                        <p className='star'><AiFillStar/></p>
                        <p>{product.rating}</p>
                    </div>
                )}
            </div>
            <div>
                {isLoading
                ? <Skeleton  animation="wave"  className='description' variant='rounded'/>
                : <p className='description'>{product.description}</p>}
            </div>
            <div className='add-to-cart-button-container'>
                {isLoading
                ? <Skeleton  animation="wave"  className='add-to-cart-button' variant='rounded'/>
                : <button onClick={clickOnAddCartButton} className='add-to-cart-button btn'>Add to Cart</button>}
            </div>
        </div>
        
    )
}
    export default ProductItem