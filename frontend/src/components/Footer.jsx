import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto px-4 md:px-[100px] grid grid-cols-1 md:grid-cols-3 gap-8 py-10">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold mb-2">DBProducts</h2>
          <p className="mb-4">Your one-stop shop for jewellery, handbags, and more. Quality products, best prices, and fast delivery.</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-blue-400 text-2xl"><FaFacebook /></a>
            <a href="#" aria-label="Twitter" className="hover:text-blue-300 text-2xl"><FaTwitter /></a>
            <a href="#" aria-label="Instagram" className="hover:text-pink-400 text-2xl"><FaInstagram /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-blue-500 text-2xl"><FaLinkedin /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/jewellery" className="hover:text-white">Jewellery</Link></li>
            <li><Link to="/handbags" className="hover:text-white">Handbags</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>Email: <a href="mailto:support@dbproducts.com" className="hover:text-white">support@dbproducts.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="hover:text-white">+1 234 567 890</a></p>
          <p className="mt-2">123 Market Street, City, Country</p>
        </div>
      </div>
      <div className="text-center border-t-[1px] border-gray-800 py-4 text-white text-sm">
        &copy; {new Date().getFullYear()} DBProducts. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
