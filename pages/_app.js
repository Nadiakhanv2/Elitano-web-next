import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import{useEffect, useState} from 'react';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  useEffect(() => {
    console.log(" hey m cart");
    try {
      if (localStorage.getItem('cart')) {
        setCart(JSON.parse(localStorage.getItem('cart')));
      }
    }
    catch (error) {
      console.log(error);
      localStorage.clear();
    }
  }, []);

  const saveCart = (myCart) => {
    localStorage.setItem('cart', myCart);
    let subt = 0;
    let keys = Object.keys(cart);
    for (let i=0; keys.length; i++ ) {
      subt += myCart[keys[i]].price * myCart[keys[i]].qty;
    }
    setSubTotal(subt);
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
  const removeFromCart = (itemCode, qty, name, price, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].qty = cart[itemCode].qty + qty;
    } 
    if (newCart[itemCode]["qty"] <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  

  return (
    <>
      <Navbar
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
      />
      <Component
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        subTotal={subTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp
