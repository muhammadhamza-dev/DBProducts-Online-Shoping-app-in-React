import React from 'react'
import ProductCard from './components/ProductCard'

export const jewelleryProducts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    title: 'Diamond Necklace',
    rating: 5,
    prevPrice: 499.99,
    currPrice: 349.99,
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
    title: 'Gold Earrings',
    rating: 4,
    prevPrice: 199.99,
    currPrice: 149.99,
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
    title: 'Pearl Bracelet',
    rating: 4,
    prevPrice: 129.99,
    currPrice: 89.99,
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Silver Ring',
    rating: 3,
    prevPrice: 79.99,
    currPrice: 59.99,
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80',
    title: 'Ruby Pendant',
    rating: 5,
    prevPrice: 299.99,
    currPrice: 219.99,
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
    title: 'Emerald Brooch',
    rating: 4,
    prevPrice: 159.99,
    currPrice: 119.99,
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=400&q=80',
    title: 'Sapphire Anklet',
    rating: 3,
    prevPrice: 89.99,
    currPrice: 69.99,
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    title: 'Opal Hairpin',
    rating: 4,
    prevPrice: 49.99,
    currPrice: 39.99,
  },
]

function JewelleryItems() {
  return (
    <div className="mx-auto px-4 md:px-[100px] py-10">
      <h1 className="text-3xl font-bold mb-6">Jewellery Collection</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {jewelleryProducts.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

export default JewelleryItems