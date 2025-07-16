import React, { useContext } from 'react'
import { FaStar } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function ProductCard({ id, image, title, rating, prevPrice, currPrice }) {
  const { addToCart } = useContext(AppContext)
  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/product/${id}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  return (
    <div
      className="bg-white w-full rounded-lg shadow p-4 cursor-pointer hover:shadow-lg transition"
      onClick={handleCardClick}
    >
      <img src={image} alt={title} className="w-full h-40 object-cover rounded" />
      <h2 className="mt-3 text-lg font-semibold text-gray-800">{title}</h2>
      <div className="flex items-center mt-2 mb-1">
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300'} />
        ))}
      </div>
      <div className="flex items-center space-x-6 mt-1">
        <span className="text-gray-400 line-through">PKR {prevPrice}</span>
        <span className="text-lg text-black">Rs.{currPrice} PKR</span>
      </div>
      <button
        className="mt-4 w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition"
        onClick={e => {
          e.stopPropagation()
          addToCart({ id, image, title, rating, prevPrice, currPrice })
        }}
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard