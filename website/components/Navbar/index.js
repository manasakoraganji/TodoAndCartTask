import { Component } from "react"
import { withRouter,Link } from "react-router-dom"
import {BsThreeDotsVertical} from "react-icons/bs"
import "./index.css"

class Navbar extends Component{
    state={showMenuOptions:false}

    toogleMode=()=>{
        this.setState(prevState=>({showMenuOptions:!prevState.showMenuOptions}))
    }
    getListOfMenuOptions=()=>{
    return(
        <div className="menu-container">
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/">
            Home
            </Link>
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/todo">
            Todo
            </Link>
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/products">
            Products
            </Link>
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/cart">
            Cart
            </Link>
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/contact">
            Contact
            </Link>
            <Link onClick={this.toogleMode} className="menu-option-list-item" to="/about">
            About
            </Link>
        </div>
    )}

    render(){
        const {showMenuOptions}=this.state
            return(
                <>
            <div className="navbar-container">
                <Link to="/" >
                    <button type="button" className="website-logo-button">
                        <img className="website-logo" alt="website logo" src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"/>
                    </button>
                </Link>
                <div className="navigation-buttons-and-logout-container">
                    <div className="navigation-buttons-container">
                        <Link to="/" >
                        <button type="button" className="navigation-button">
                            Home
                        </button>
                        </Link>
                        <Link to="/todo" >
                            <button type="button" className="navigation-button">
                                Todo
                            </button>
                        </Link>
                        <Link to="/products" >
                            <button type="button" className="navigation-button">
                                Products
                            </button>
                        </Link>
                        <Link to="/cart" >
                            <button type="button" className="navigation-button">
                                Cart
                            </button>
                        </Link>
                        <Link to="/contact" >
                            <button type="button" className="navigation-button">
                                Contact
                            </button>
                        </Link>
                        <Link to="/about" >
                            <button type="button" className="navigation-button">
                                About
                            </button>
                        </Link>
                    </div>
                    <button className="menu-button" onClick={this.toogleMode}><BsThreeDotsVertical/></button>
                </div>
            </div>
            {showMenuOptions && this.getListOfMenuOptions()}
            </>
            )
        }
}
export default withRouter(Navbar)