import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    setSubmitted(true)
    // Here you would normally send the form data to your backend
  }

  return (
    <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
        {submitted ? (
          <div className="text-green-600 font-semibold">Thank you for contacting us! We'll get back to you soon.</div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="w-full p-3 border rounded"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="w-full p-3 border rounded"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-medium">Message</label>
              <textarea
                name="message"
                className="w-full p-3 border rounded"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send Message</button>
          </form>
        )}
      </div>
      <div className="bg-gray-50 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-2">Our Contact Information</h2>
        <p>Email: <a href="mailto:support@dbproducts.com" className="text-blue-600 hover:underline">support@dbproducts.com</a></p>
        <p>Phone: <a href="tel:+1234567890" className="text-blue-600 hover:underline">+1 234 567 890</a></p>
        <p>Address: 123 Market Street, City, Country</p>
      </div>
    </div>
  )
}

export default Contact 