import React, { useContext } from 'react'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { WishlistContext } from '../context/WishlistContext'

function WishlistButton({ product }) {
  const { wishlist, toggleWishlist } = useContext(WishlistContext)
  const isWishlisted = wishlist.some(p => p.id === product.id)
  return (
    <button onClick={() => toggleWishlist(product)} aria-label="Wishlist" className="text-red-500 text-xl hover:scale-110 transition">
      {isWishlisted ? <FaHeart /> : <FaRegHeart />}
    </button>
  )
}

export default WishlistButton 