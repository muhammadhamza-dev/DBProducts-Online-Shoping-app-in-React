import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext'

function Checkout() {
  const { cart } = useContext(AppContext)
  const [form, setForm] = useState({
    email: '',
    country: 'Pakistan',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    postal: '',
    phone: '',
    billingSame: true,
  })
  const shippingCost = 99
  const subtotal = cart.reduce((sum, item) => sum + item.currPrice * item.quantity, 0)
  const total = subtotal + shippingCost

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow flex flex-col md:flex-row overflow-hidden">
        {/* Left: Form */}
        <div className="flex-1 p-8">
          <h2 className="text-2xl font-bold mb-6">Contact</h2>
          <input type="email" placeholder="Email or mobile phone number" className="w-full mb-6 p-3 border rounded" value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
          <h2 className="text-2xl font-bold mb-4">Delivery</h2>
          <div className="mb-4">
            <select className="w-full p-3 border rounded mb-3" value={form.country} onChange={e => setForm(f => ({ ...f, country: e.target.value }))}>
              <option>Pakistan</option>
            </select>
            <div className="flex gap-4 mb-3">
              <input type="text" placeholder="First name" className="w-1/2 p-3 border rounded" value={form.firstName} onChange={e => setForm(f => ({ ...f, firstName: e.target.value }))} />
              <input type="text" placeholder="Last name" className="w-1/2 p-3 border rounded" value={form.lastName} onChange={e => setForm(f => ({ ...f, lastName: e.target.value }))} />
            </div>
            <input type="text" placeholder="Address" className="w-full p-3 border rounded mb-3" value={form.address} onChange={e => setForm(f => ({ ...f, address: e.target.value }))} />
            <input type="text" placeholder="Apartment, suite, etc. (optional)" className="w-full p-3 border rounded mb-3" value={form.apartment} onChange={e => setForm(f => ({ ...f, apartment: e.target.value }))} />
            <div className="flex gap-4 mb-3">
              <input type="text" placeholder="City" className="w-1/2 p-3 border rounded" value={form.city} onChange={e => setForm(f => ({ ...f, city: e.target.value }))} />
              <input type="text" placeholder="Postal code (optional)" className="w-1/2 p-3 border rounded" value={form.postal} onChange={e => setForm(f => ({ ...f, postal: e.target.value }))} />
            </div>
            <input type="text" placeholder="Phone" className="w-full p-3 border rounded mb-3" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
            <div className="flex items-center mb-3">
              <input type="checkbox" id="saveInfo" className="mr-2" />
              <label htmlFor="saveInfo" className="text-gray-600">Save this information for next time</label>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Shipping method</h2>
          <div className="mb-6">
            <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded p-3">
              <span>Standard</span>
              <span className="font-bold">Rs {shippingCost.toFixed(2)}</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Payment</h2>
          <div className="mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded p-3 font-semibold">Cash on Delivery (COD)</div>
            <div className="text-xs text-gray-500 mt-1">All transactions are secure and encrypted.</div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Billing address</h2>
          <div className="mb-6">
            <div className="flex items-center mb-2">
              <input type="radio" id="same" name="billing" checked={form.billingSame} onChange={() => setForm(f => ({ ...f, billingSame: true }))} className="mr-2" />
              <label htmlFor="same">Same as shipping address</label>
            </div>
            <div className="flex items-center">
              <input type="radio" id="diff" name="billing" checked={!form.billingSame} onChange={() => setForm(f => ({ ...f, billingSame: false }))} className="mr-2" />
              <label htmlFor="diff">Use a different billing address</label>
            </div>
          </div>
          <button className="w-full bg-blue-600 text-white py-3 rounded text-lg font-semibold hover:bg-blue-700 transition">Complete order</button>
          <div className="mt-4 text-xs text-gray-500 text-center">
            <a href="#" className="underline">Privacy policy</a>
          </div>
        </div>
        {/* Right: Order Summary */}
        <div className="w-full md:w-96 bg-gray-50 border-l p-8 flex flex-col gap-6">
          <h2 className="text-xl font-bold mb-4">Order Summary</h2>
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-16 h-16 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.title}</div>
                  <div className="text-sm text-gray-500">Qty: {item.quantity}</div>
                </div>
                <div className="font-bold">Rs {(item.currPrice * item.quantity).toFixed(2)}</div>
              </div>
            ))}
          </div>
          <div className="border-t pt-4 space-y-2">
            <div className="flex justify-between text-gray-700">
              <span>Subtotal</span>
              <span>Rs {subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-gray-700">
              <span>Shipping</span>
              <span>Rs {shippingCost.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>PKR Rs {total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout 