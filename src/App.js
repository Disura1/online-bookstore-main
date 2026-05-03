import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './Customer/Home';
import Books from './Customer/Books';
import BookDetails from './Customer/BookDetails';
import Cart from './Customer/Cart';
import SignUp from './Customer/signup';
import Register from './Customer/Register';
import Wishlist from './Customer/Wishlist';
import Profile from './Customer/Profile';
import Contact from './Customer/Contact';
import Cashier from './Admin/Cashier';
import Lendings from './Admin/Lendings';
import Promotions from './Admin/Promotions';
import Setting from './Admin/Setting';


function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Wishlist" element={<Wishlist />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cashier" element={<Cashier />} />
        <Route path="/Lendings" element={<Lendings />} />
        <Route path="/Promotions" element={<Promotions />} />
        <Route path="/Setting" element={<Setting />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;