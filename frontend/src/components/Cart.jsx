import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } = useContext(AppContext)
  const total = cart.reduce((sum, item) => sum + item.currPrice * item.quantity, 0)
  const navigate = useNavigate()

  if (cart.length === 0) {
    return <div className="p-8 text-xl">Your cart is empty.</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4 mb-6">
        {cart.map(item => (
          <div key={item.id} className="flex items-center gap-4 bg-white p-4 rounded shadow">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <div className="text-green-600 font-bold">PKR {item.currPrice}</div>
            </div>
            <div className="flex items-center gap-2">
              <button
                className="px-2 py-1 bg-gray-200 rounded text-lg font-bold disabled:opacity-50"
                onClick={() => decreaseQty(item.id)}
                disabled={item.quantity === 1}
              >
                -
              </button>
              <span className="px-2 text-lg">{item.quantity}</span>
              <button
                className="px-2 py-1 bg-gray-200 rounded text-lg font-bold"
                onClick={() => increaseQty(item.id)}
              >
                +
              </button>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
              onClick={() => removeFromCart(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
      <div className="text-2xl font-bold mb-6">Total: PKR {total.toFixed(2)}</div>
      <div className="flex justify-end">
        <button
          className="bg-blue-600 text-white px-8 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition"
          onClick={() => navigate('/checkout')}
        >
          Checkout
        </button>
      </div>
    </div>
  )
}

export default Cart
