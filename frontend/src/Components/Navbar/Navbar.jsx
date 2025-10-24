import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

const Navbar = () => {
  const [menu, setMenu] = useState("shop")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const {getTotalCartItems} = useContext(ShopContext);
 
  const handleNavClick = (menuItem) => {
    setMenu(menuItem)
    setMobileMenuOpen(false)
  }

  return (
    <>
      <div className='navbar'>
        {/* Mobile Hamburger Menu Button */}
        <button 
          className='hamburger-menu'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className='nav-logo'>
          <img src={logo} alt="" />
          <p>SHOPPER</p>
        </div>

        <ul className='nav-menu'>
          <li onClick={() => setMenu("shop")}>
            <Link style={{ textDecoration: 'none' }} to="/">Shop</Link>
            {menu === "shop" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("men")}>
            <Link style={{ textDecoration: 'none' }} to="/men">Men</Link>
            {menu === "men" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("women")}>
            <Link style={{ textDecoration: 'none' }} to="/women">Women</Link>
            {menu === "women" ? <hr /> : <></>}
          </li>
          <li onClick={() => setMenu("kids")}>
            <Link style={{ textDecoration: 'none' }} to="/kids">Kids</Link>
            {menu === "kids" ? <hr /> : <></>}
          </li>
        </ul>

        <div className='nav-login-cart'>
          {localStorage.getItem('auth-token')
           ? <button className="nav-login-btn" onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
           : <Link to='/login'><button>Login</button></Link>
          }
          <Link to="/cart"><img src={cart_icon} alt="" /></Link>
          <div className='nav-cart-count'>{getTotalCartItems()}</div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className='mobile-menu-overlay' onClick={() => setMobileMenuOpen(false)} />
      )}

      {/* Mobile Side Menu */}
      <div className={`mobile-side-menu ${mobileMenuOpen ? 'open' : ''}`}>
        <div className='mobile-menu-header'>
          <div className='mobile-menu-logo'>
            <img src={logo} alt="" />
            <p>SHOPPER</p>
          </div>
          <button className='close-menu' onClick={() => setMobileMenuOpen(false)}>×</button>
        </div>

        <ul className='mobile-menu-items'>
          <li onClick={() => handleNavClick("shop")} className={menu === "shop" ? "active" : ""}>
            <Link to="/">Shop</Link>
          </li>
          <li onClick={() => handleNavClick("men")} className={menu === "men" ? "active" : ""}>
            <Link to="/men">Men</Link>
          </li>
          <li onClick={() => handleNavClick("women")} className={menu === "women" ? "active" : ""}>
            <Link to="/women">Women</Link>
          </li>
          <li onClick={() => handleNavClick("kids")} className={menu === "kids" ? "active" : ""}>
            <Link to="/kids">Kids</Link>
          </li>
        </ul>

        <div className='mobile-menu-footer'>
          <Link to="/login">
            <button className='mobile-login-btn' onClick={() => setMobileMenuOpen(false)}>Login</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navbar