import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./lib/ScrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import Destinations from "./pages/Destinations";
import DestinationDetail from "./pages/DestinationDetail";

import ProductDetails from "./pages/ProductDetails";
import Products from "./pages/Products";
import Book from "./pages/Book";
import BookingConfirmation from "./pages/BookingConfirmation";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />

        {/* DESTINATIONS */}
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/destinations/:slug" element={<DestinationDetail />} />

        {/* PRODUCTS */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/type/:type" element={<Products />} />
        <Route path="/products/:slug" element={<ProductDetails />} />
        <Route path="/book/:slug" element={<Book />} />
        <Route path="/booking-confirmation" element={<BookingConfirmation />} />

        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
