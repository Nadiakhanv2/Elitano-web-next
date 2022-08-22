import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";
import {
  AiOutlineShoppingCart,
  AiOutlineCloseCircle,
  AiFillPlusCircle,
  AiFillMinusCircle,
} from "react-icons/ai";
import {
  BsFillBagCheckFill
} from "react-icons/bs";

const Navbar = ({ cart, addToCart, clearCart, subTotal, removeFromCart }) => {
  console.log(cart, addToCart, clearCart, subTotal, removeFromCart);
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <div>
      <header className="text-gray-600 body-font shadow-md mb-1">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <Link href={"/"}>
            <a className="flex title-font font-medium items-center text-gray-900 mx-4 md:mb-0 ml-7">
              <Image
                src="/logobrand.jpg"
                alt="blogImg"
                width={100}
                height={80}
              />
            </a>
          </Link>
          <nav className="md:ml-2 md:mr-2 flex flex-wrap items-start text-base justify-start">
            <ul className="flex font-bold">
              <Link href={"/tshirts"}>
                <a className="mr-5 hover:text-red-500">
                  <li className="text-gray-900">Tshirts</li>
                </a>
              </Link>
              <Link href={"/beauty"}>
                <a className="mr-5 hover:text-red-500">
                  <li>Beauty</li>
                </a>
              </Link>
              <Link href={"/accessories"}>
                <a className="mr-5 hover:text-red-500">
                  <li>Accessories</li>
                </a>
              </Link>
              <Link href={"/hoodies"}>
                <a className="mr-10 hover:text-red-500">
                  <li>Hoodies</li>
                </a>
              </Link>
              <Link href={"/shoes"}>
                <a className="mr-5 hover:text-red-500">
                  <li>Shoes</li>
                </a>
              </Link>
            </ul>
          </nav>
          <div className="cart absolute  right-2  mr-5" onClick={toggleCart}>
            <AiOutlineShoppingCart className="text-3xl mt-2 text-red-500 cursor-pointer" />
          </div>
          <div
            ref={ref}
            className="sideCart absolute top-0 h-full right-0 bg-red-100 px-10 py-10 transform transition-transform translate-x-full "
          >
            <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
            <span
              onClick={toggleCart}
              className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500"
            >
              <AiOutlineCloseCircle />
            </span>
            <ol className="list-decimal font-semibold">
              {Object.keys(cart).map((k) => {
                return (
                  <li key={k}>
                    <div className="item flex my-5">
                      <div className="w-2/3 ">{cart[k].name}</div>
                      <div className="w-1/3  flex justify-center items-center text-lg">
                        <AiFillMinusCircle className="cursor-pointer text-red-500" />
                        <span className="mx-1">{cart[k].qty}</span>
                        <AiFillPlusCircle className="cursor-pointer text-red-500" />
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="flex">
              <button className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded">
                <BsFillBagCheckFill className="m-1" /> Checkout
              </button>
              <button
                onClick={clearCart}
                className="flex mr-2 text-white bg-red-500 border-0 py-2 px-2 focus:outline-none hover:bg-red-600 rounded"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
