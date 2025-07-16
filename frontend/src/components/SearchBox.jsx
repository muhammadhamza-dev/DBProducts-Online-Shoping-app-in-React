import React, { useState, useEffect } from 'react'
import { jewelleryProducts } from '../JewelleryItems'
import { handbagsProducts } from '../HandbagItems'

function SearchBox({ show, onClose, onNavigate }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    if (!show) {
      setSearchTerm('')
      setResults([])
      return
    }
    if (searchTerm.trim() === '') {
      setResults([])
      return
    }
    const allProducts = [...jewelleryProducts, ...handbagsProducts]
    const filtered = allProducts.filter(p =>
      p.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    setResults(filtered)
  }, [searchTerm, show])

  if (!show) return null

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex flex-col items-center z-10 relative">
      <input
        type="text"
        className="w-full max-w-xl p-3 border rounded focus:outline-none focus:ring"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        autoFocus
      />
      {searchTerm && (
        <div className="w-full max-w-xl bg-white border mt-2 rounded shadow divide-y divide-gray-100">
          {results.length === 0 ? (
            <div className="p-4 text-gray-500">No products found.</div>
          ) : (
            results.map(product => (
              <div
                key={product.id}
                className="p-4 hover:bg-blue-50 cursor-pointer flex items-center gap-4"
                onClick={() => {
                  setSearchTerm('')
                  setResults([])
                  onClose()
                  onNavigate(product.id)
                }}
              >
                <img src={product.image} alt={product.title} className="w-12 h-12 object-cover rounded" />
                <span className="font-medium">{product.title}</span>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  )
}

export default SearchBox 