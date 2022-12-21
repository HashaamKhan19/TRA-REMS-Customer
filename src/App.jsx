import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Components import
import Navbar from './components/Customer/Navbar/Navbar'
import Hero from './components/Customer/Hero/Hero'
import { CustomFooter } from './components/Customer/Footer/CustomFooter'
import { Buy } from './components/Customer/Buy/Buy'
import Listings from './components/Customer/Listings/Listings'
import { Sell } from './components/Customer/Sell/Sell'
import Exchange from './components/Customer/Exchange/Exchange'
import Rent from './components/Customer/Rent/Rent'
import { Login } from './components/Customer/Login/Login'
import { SignUp } from './components/Customer/SignUp/SignUp'
import Subscription from './components/Customer/Subscription/Subscription'
import ProductPage from './components/Customer/Buy/ProductPage'
import Booking from './components/Customer/Buy/Booking'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Listings />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/rent" element={<Rent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/subscription" element={<Subscription />} />
          <Route path="/productpage/:id" element={<ProductPage />} />
          <Route path="/booking" element={<Booking />} />
        </Routes>
        <CustomFooter />
      </Router>
    </div>
  )
}

export default App
