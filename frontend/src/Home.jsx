import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from './components/ProductCard'
import { jewelleryProducts } from './JewelleryItems'
import { handbagsProducts } from './HandbagItems'
import banner from './assets/banner.png'
function Home() {
  return (
    <>
      {/* Banner */}
      <div className="w-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center mb-10">
        <img src={banner} alt="banner" />
      </div>
      {/* Featured Jewellery and Handbags */}
      <section className='mx-auto px-4 md:px-[100px] pb-10'>
        <h2 className="text-3xl font-bold mb-6">Featured Jewellery</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {jewelleryProducts.slice(0, 8).map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="flex justify-center mb-12">
          <Link to="/jewellery">
            <button className="bg-black text-white px-8 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition">View More</button>
          </Link>
        </div>
        <h2 className="text-3xl font-bold mb-6 mt-12">Featured Handbags</h2>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {handbagsProducts.slice(0, 4).map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link to="/handbags">
            <button className="bg-black text-white px-8 py-3 rounded text-lg font-semibold hover:bg-blue-700 transition">View More</button>
          </Link>
        </div>
      </section>
    </>
  )
}

export default Home
