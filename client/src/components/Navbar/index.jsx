import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import "./navbar.scss";
import { BasketItemContext } from '../../context/BasketItemContext';
const Navbar = () => {
  const {basketItem}=useContext(BasketItemContext)
  return (
  <>
    <div className='headr'>
      <div className="container">
        <div className="row">
            <div className="col-3">
                <div className="logo">
                    <img  src='https://preview.colorlib.com/theme/capitalshop/'></img>
                </div>
            </div>
            <div className="col-6">
              <div className="pages">
              <ul>
                    <li>
                     <Link to="/Home">Home</Link>
                    </li>
                    <li>
                     <Link to="/Add">Add</Link>
                    </li>
                    <li>Women</li>
                    <li>Men</li>
                    <li>Baby Collection</li>
                    <li>Pages</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
              </div>
            </div>
            <div className="col-3">
                <div className="icons">
                    <ul>
                        <li>
                            <SearchIcon></SearchIcon>
                        </li>
                        <li>
                            <PersonIcon></PersonIcon>
                        </li>
                        <Link to='/Basket'>
                            <ShoppingBasketIcon></ShoppingBasketIcon>
                            <span>{basketItem.length}</span>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Navbar
