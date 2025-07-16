import React, { useContext, useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { FaStar, FaSearchPlus, FaTimes } from 'react-icons/fa'
import { AppContext } from '../context/AppContext'
import { jewelleryProducts } from '../JewelleryItems'
import { handbagsProducts } from '../HandbagItems'
import Breadcrumbs from './Breadcrumbs'
import WishlistButton from './WishlistButton'
import ShareButtons from './ShareButtons'
import ReviewForm from './ReviewForm'
import ProductCard from './ProductCard'

// Combine all products
const allProducts = [...jewelleryProducts, ...handbagsProducts]

const reviewsDemo = [
  { name: 'Eman Fatima', rating: 5, comment: 'Ino product mujhy bohat achi lgi hn. Jazakumullah.' },
  { name: 'Sazia Sajid', rating: 5, comment: 'DB Product... you are excellent 👍' },
  { name: 'Nasha Mukhtar', rating: 5, comment: '5-star rating.' },
]

const bundles = jewelleryProducts.slice(1, 3)

// Example variants for demo
const demoVariants = [
  {
    color: 'Silver',
    price: 1499,
    stock: 3,
    images: [
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    ],
  },
  {
    color: 'Gold',
    price: 1699,
    stock: 0,
    images: [
      'https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80',
    ],
  },
]

function getDeliveryEstimate() {
  const days = 2 + Math.floor(Math.random() * 3)
  const date = new Date()
  date.setDate(date.getDate() + days)
  return date.toLocaleDateString('en-PK', { weekday: 'short', month: 'short', day: 'numeric' })
}

function ProductDetails() {
  const { id } = useParams()
  const navigate = useNavigate()
  const { addToCart } = useContext(AppContext)
  const product = allProducts.find(p => p.id === Number(id))
  const [quantity, setQuantity] = useState(1)
  const [selectedColor, setSelectedColor] = useState(demoVariants[0].color)
  const variant = demoVariants.find(v => v.color === selectedColor)
  const [selectedImg, setSelectedImg] = useState(variant.images[0])
  const [zoomOpen, setZoomOpen] = useState(false)
  const [reviews, setReviews] = useState(reviewsDemo)
  const [cartAnim, setCartAnim] = useState(false)
  const [recent, setRecent] = useState([])

  // Determine category and related products
  const isJewellery = product && product.id < 100
  const relatedProducts = (isJewellery ? jewelleryProducts : handbagsProducts)
    .filter(p => p.id !== product.id)
    .slice(0, 4)

  // Recently viewed logic
  useEffect(() => {
    let viewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
    viewed = viewed.filter(pid => pid !== product.id)
    viewed.unshift(product.id)
    if (viewed.length > 8) viewed = viewed.slice(0, 8)
    localStorage.setItem('recentlyViewed', JSON.stringify(viewed))
    setRecent(viewed.map(pid => allProducts.find(p => p.id === pid)).filter(Boolean))
    // eslint-disable-next-line
  }, [product?.id])

  // Update selected image when color changes
  useEffect(() => {
    setSelectedImg(variant.images[0])
  }, [selectedColor])

  if (!product) {
    return <div className="p-8">Product not found.</div>
  }

  // Animated add to cart
  const handleAddToCart = () => {
    setCartAnim(true)
    setTimeout(() => setCartAnim(false), 700)
    addToCart({ ...product, quantity, color: selectedColor, price: variant.price })
  }

  // Buy it now
  const handleBuyNow = () => {
    addToCart({ ...product, quantity, color: selectedColor, price: variant.price })
    navigate('/checkout')
  }

  // Bundle add all
  const handleAddBundle = () => {
    bundles.forEach(b => addToCart({ ...b, quantity: 1 }))
  }

  return (
    <div className="bg-[#FFF5EF] min-h-screen py-8">
      <div className="px-4 md:px-[100px] flex flex-col md:flex-row gap-10">
        {/* Gallery */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="relative group cursor-zoom-in" onClick={() => setZoomOpen(true)}>
            <img src={selectedImg} alt={product.title} className={`w-full h-96 object-cover rounded shadow ${cartAnim ? 'animate-bounce' : ''}`} />
            <div className="absolute bottom-2 right-2 bg-white/80 rounded-full p-2 opacity-0 group-hover:opacity-100 transition"><FaSearchPlus className="text-xl text-gray-700" /></div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {variant.images.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`thumb${i}`}
                className={`h-20 object-cover rounded cursor-pointer border-2 ${selectedImg === img ? 'border-blue-500' : 'border-transparent'}`}
                onClick={() => setSelectedImg(img)}
              />
            ))}
          </div>
        </div>
        {/* Details */}
        <div className="flex-1">
          <Breadcrumbs product={product} />
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl font-bold">{product.title}</h2>
            <WishlistButton product={product} />
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500 flex items-center">
              <FaStar className="inline" /> 4.7
            </span>
            <span className="text-gray-500 text-sm">({reviews.length} reviews)</span>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl font-bold">PKR {variant.price}</span>
            <span className="bg-black text-white text-xs px-2 py-1 rounded">Sale</span>
            {variant.stock === 0 && <span className="ml-2 text-red-600 font-semibold">Out of Stock</span>}
            {variant.stock > 0 && variant.stock <= 3 && <span className="ml-2 text-orange-500 font-semibold">Only {variant.stock} left!</span>}
          </div>
          <div className="mb-2 text-sm text-gray-600">Delivery by <span className="font-semibold text-black">{getDeliveryEstimate()}</span></div>
          <div className="mb-4">
            <span className="font-semibold">Color:</span>
            {demoVariants.map(v => (
              <button
                key={v.color}
                className={`ml-2 w-6 h-6 rounded-full border-2 ${selectedColor === v.color ? 'border-black' : 'border-gray-300'}`}
                style={{ background: v.color === 'Silver' ? '#e5e5e5' : '#e6c200' }}
                onClick={() => setSelectedColor(v.color)}
              />
            ))}
          </div>
          <div className="mb-4 flex items-center gap-2">
            <span className="font-semibold">Quantity:</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={variant.stock === 0}>-</button>
            <span className="px-3">{quantity}</span>
            <button className="px-2 py-1 border rounded" onClick={() => setQuantity(q => q + 1)} disabled={variant.stock === 0 || quantity >= variant.stock}>+</button>
          </div>
          <div className="flex gap-2 mb-4">
            <button className="flex-1 bg-black text-white py-3 rounded font-semibold hover:bg-gray-800 transition disabled:opacity-50" onClick={handleAddToCart} disabled={variant.stock === 0}>Add to cart</button>
            <button className="flex-1 border border-black text-black py-3 rounded font-semibold hover:bg-gray-100 transition" disabled={variant.stock === 0} onClick={handleBuyNow}>Buy it now</button>
          </div>
          <ShareButtons product={product} />
          <p className="text-gray-700 mb-4 mt-4">This Trinity Charm Set features three delicate pendant necklaces, each showcasing a unique symbol: a butterfly, a heart, and a clover. Designed specifically for girls, these necklaces combine meaningful motifs that represent transformation, love, and luck. Crafted with attention to detail, the set offers versatile layering options, making it an elegant accessory for everyday wear or special occasions. Its lightweight design ensures comfortable wear, while the symbolic charms add a personal touch to any outfit.</p>
        </div>
      </div>
      {/* Zoom Modal */}
      {zoomOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50" onClick={() => setZoomOpen(false)}>
          <div className="relative">
            <img src={selectedImg} alt="zoom" className="max-h-[80vh] max-w-[90vw] rounded shadow-lg" />
            <button className="absolute top-2 right-2 bg-white rounded-full p-2 shadow" onClick={e => { e.stopPropagation(); setZoomOpen(false); }}>
              <FaTimes className="text-xl text-gray-700" />
            </button>
          </div>
        </div>
      )}
      {/* Reviews */}
      <div className="px-4 md:px-[100px] mx-auto mt-12 bg-white rounded-lg p-8">
        <h3 className="text-xl font-bold mb-4">Customer Reviews</h3>
        <div className='flex justify-between gap-20 '>
        <div className="flex items-center gap-4 mb-6">
          <span className="text-8xl font-bold">{(reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)}</span>
          <div className="flex flex-col gap-1">
            {[5,4,3,2,1].map(star => (
              <div key={star} className="flex items-center gap-2">
                <span className="w-8 text-right">{star}</span>
                <div className="w-32 h-2 bg-gray-200 rounded">
                  <div className="h-2 bg-yellow-400 rounded" style={{ width: `${(reviews.filter(r => r.rating === star).length / reviews.length) * 100}%` }} />
                </div>
              </div>
            ))}
          </div>
          <span className="text-gray-500">{reviews.length} reviews</span>
        </div>
        <div className='w-full'>
          <ReviewForm onAddReview={r => setReviews([r, ...reviews])} />
        </div>
        </div>
        
        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-gray-50 p-4 rounded shadow flex flex-col  gap-2">
              <span className="font-semibold">{r.name}</span>
              <span className="flex items-center text-yellow-500">{[...Array(r.rating)].map((_, i) => <FaStar key={i} />)}</span>
              <span className=" text-gray-700">{r.comment}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Related Products */}
      <div className="px-4 md:px-[100px] mx-auto mt-12">
        <h3 className="text-xl font-bold mb-4">You may also like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {relatedProducts.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
      
    </div>
  )
}

export default ProductDetails 