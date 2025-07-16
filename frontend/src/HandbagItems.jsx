import React from 'react'
import ProductCard from './components/ProductCard'

export const handbagsProducts = [
  {
    id: 101,
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80',
    title: 'Classic Leather Bag',
    rating: 5,
    prevPrice: 199.99,
    currPrice: 149.99,
  },
  {
    id: 102,
    image: 'https://images.unsplash.com/photo-1526178613658-3f1622045557?auto=format&fit=crop&w=400&q=80',
    title: 'Elegant Tote',
    rating: 4,
    prevPrice: 159.99,
    currPrice: 119.99,
  },
  {
    id: 103,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    title: 'Canvas Shoulder Bag',
    rating: 4,
    prevPrice: 89.99,
    currPrice: 69.99,
  },
  {
    id: 104,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Mini Crossbody',
    rating: 3,
    prevPrice: 79.99,
    currPrice: 59.99,
  },
  {
    id: 105,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    title: 'Chic Clutch',
    rating: 5,
    prevPrice: 129.99,
    currPrice: 99.99,
  },
  {
    id: 106,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Travel Duffel',
    rating: 4,
    prevPrice: 179.99,
    currPrice: 139.99,
  },
  {
    id: 107,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Woven Basket Bag',
    rating: 3,
    prevPrice: 69.99,
    currPrice: 49.99,
  },
  {
    id: 108,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80',
    title: 'Trendy Satchel',
    rating: 4,
    prevPrice: 149.99,
    currPrice: 109.99,
  },
]

function HandbagItems() {
  return (
    <div className="mx-auto px-4 md:px-[100px] py-10">
      <h1 className="text-3xl font-bold mb-6">Handbags Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {handbagsProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default HandbagItems 