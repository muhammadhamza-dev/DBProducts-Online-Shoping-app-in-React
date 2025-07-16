import React from 'react'
import { Link } from 'react-router-dom'

function Breadcrumbs({ product }) {
  let category = 'Jewellery'
  if (product && product.id >= 100) category = 'Handbags'
  return (
    <nav className="text-sm text-gray-500 mb-4">
      <Link to="/" className="hover:underline">Home</Link>
      <span className="mx-2">&gt;</span>
      <Link to={`/${category.toLowerCase()}`} className="hover:underline">{category}</Link>
      <span className="mx-2">&gt;</span>
      <span className="text-black font-semibold">{product?.title}</span>
    </nav>
  )
}

export default Breadcrumbs 