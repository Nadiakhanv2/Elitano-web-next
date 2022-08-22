import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import{useState} from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const saveCart = (myCart) => {
    localStorage.setItem('cart', myCart);
  }
  const addToCart = (itemCode , qty , name , price , size , variant ) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } else {
      newCart[itemCode]= {qty : 1, price , name , size , variant}
    }
    setCart(newCart);
    saveCart(newCart);
  }
  const clearCart = () => {
    setCart({});
    saveCart({});
  }
  

  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp
