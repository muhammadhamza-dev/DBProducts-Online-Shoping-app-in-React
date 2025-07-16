import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function ReviewForm({ onAddReview }) {
  const [name, setName] = useState('')
  const [rating, setRating] = useState(5)
  const [comment, setComment] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = e => {
    e.preventDefault()
    if (!name || !comment) return
    onAddReview({ name, rating, comment })
    setSubmitted(true)
    setName('')
    setRating(5)
    setComment('')
    setTimeout(() => setSubmitted(false), 2000)
  }

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded shadow mb-6">
      <div className="mb-2 font-semibold">Write a Review</div>
      <div className="flex items-center gap-2 mb-2">
        {[1,2,3,4,5].map(star => (
          <button type="button" key={star} onClick={() => setRating(star)} className={star <= rating ? 'text-yellow-500' : 'text-gray-300'}>
            <FaStar />
          </button>
        ))}
        <span className="ml-2">{rating} Stars</span>
      </div>
      <input type="text" placeholder="Your Name" className="w-full p-2 border rounded mb-2" value={name} onChange={e => setName(e.target.value)} required />
      <textarea placeholder="Your Review" className="w-full p-2 border rounded mb-2" value={comment} onChange={e => setComment(e.target.value)} required rows={3} />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Submit</button>
      {submitted && <div className="text-green-600 mt-2">Thank you for your review!</div>}
    </form>
  )
}

export default ReviewForm 