import React, { createContext, useState, useEffect } from 'react'

export const WishlistContext = createContext()

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('wishlist')
    if (stored) setWishlist(JSON.parse(stored))
  }, [])

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
  }, [wishlist])

  const addToWishlist = (product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) ? prev : [...prev, product])
  }
  const removeFromWishlist = (id) => {
    setWishlist(prev => prev.filter(p => p.id !== id))
  }
  const toggleWishlist = (product) => {
    setWishlist(prev => prev.some(p => p.id === product.id) ? prev.filter(p => p.id !== product.id) : [...prev, product])
  }

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist, toggleWishlist }}>
      {children}
    </WishlistContext.Provider>
  )
} 