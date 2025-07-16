import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Home'
import JewelleryItems from './JewelleryItems'
import HandbagItems from './HandbagItems'
import { AppContextProvider } from './context/AppContext'
import { WishlistProvider } from './context/WishlistContext'
import Header from './components/header'
import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'
import Footer from './components/footer'
import Checkout from './components/Checkout'
import Contact from './components/Contact'

function App() {
  return (
    <AppContextProvider>
      <WishlistProvider>
        <Router>
          <Header />
          <div className="bg-[#FFF5EF]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jewellery" element={<JewelleryItems />} />
              <Route path="/handbags" element={<HandbagItems />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </WishlistProvider>
    </AppContextProvider>
  )
}

export default App
