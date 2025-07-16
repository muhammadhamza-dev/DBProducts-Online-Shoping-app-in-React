import React, { useContext, useState } from 'react'
import { FaSearch, FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import SearchBox from './SearchBox'
import logo from '../assets/logo.png' // adjust path if needed

function Header() {
  const { cartCount } = useContext(AppContext)
  const [showSearch, setShowSearch] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const menuLinks = (
    <ul className="flex flex-col md:flex-row md:space-x-8 text-lg font-medium text-black">
      <li>
        <Link to="/" className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Home</Link>
      </li>
      <li>
        <Link to="/jewellery" className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Jewellery</Link>
      </li>
      <li>
        <Link to="/handbags" className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Handbags</Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-blue-600 cursor-pointer" onClick={() => setMenuOpen(false)}>Contact</Link>
      </li>
    </ul>
  )

  return (
    <>
      <header className="w-full bg-[#FFF5EF] shadow relative z-20">
        <div className='bg-black flex justify-center p-1'>
            <p className='font-bold text-white'>Cash On Delivery All Over Pakistan</p>
        </div>
        <div className="mx-auto px-4 md:px-[100px] flex items-center justify-between py-3">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0 text-2xl font-bold text-gray-800">
            <Link to="/"><img className='w-30 h-20' src={logo} alt="dbproducts" /></Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden md:flex flex-1 justify-center">
            {menuLinks}
          </nav>
          {/* Icons */}
          <div className="flex items-center space-x-6 text-xl text-black">
            <button className="hover:text-blue-600" aria-label="Search" onClick={() => setShowSearch(v => !v)}>
              <FaSearch />
            </button>
            <Link to="/cart" className="hover:text-blue-600 relative" aria-label="Cart">
              <FaShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">{cartCount}</span>
              )}
            </Link>
            {/* Mobile Menu Icon */}
            <button
              className="md:hidden hover:text-blue-600"
              aria-label="Menu"
              onClick={() => setMenuOpen(v => !v)}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {menuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#FFF5EF] shadow z-30">
            <div className="px-6 py-4">
              {menuLinks}
            </div>
          </div>
        )}
      </header>
      <SearchBox
        show={showSearch}
        onClose={() => setShowSearch(false)}
        onNavigate={id => navigate(`/product/${id}`)}
      />
    </>
  )
}

export default Header