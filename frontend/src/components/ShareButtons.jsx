import React from 'react'
import { FaWhatsapp, FaFacebook, FaTwitter } from 'react-icons/fa'

function ShareButtons({ product }) {
  const url = window.location.href
  const text = encodeURIComponent(product.title)
  return (
    <div className="flex gap-3 mt-2">
      <a href={`https://wa.me/?text=${text}%20${url}`} target="_blank" rel="noopener noreferrer" aria-label="Share on WhatsApp" className="text-green-500 text-2xl hover:scale-110"><FaWhatsapp /></a>
      <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Facebook" className="text-blue-600 text-2xl hover:scale-110"><FaFacebook /></a>
      <a href={`https://twitter.com/intent/tweet?text=${text}&url=${url}`} target="_blank" rel="noopener noreferrer" aria-label="Share on Twitter" className="text-blue-400 text-2xl hover:scale-110"><FaTwitter /></a>
    </div>
  )
}

export default ShareButtons 