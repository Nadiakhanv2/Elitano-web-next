import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Ref } from "react";
import { AiOutlineShoppingCart, AiOutlineCloseCircle } from "react-icons/ai";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full")
      ref.current.classList.add("translate-x-0")
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0")
      ref.current.classList.add("translate-x-full")
    }


  }
  const ref=useRef()
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
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex">
              <Link href={"/tshirts"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Tshirts</li>
                </a>
              </Link>
              <Link href={"/beauty"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Beauty</li>
                </a>
              </Link>
              <Link href={"/accessories"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Accessories</li>
                </a>
              </Link>
              <Link href={"/hoodies"}>
                <a className="mr-10 hover:text-gray-900">
                  <li className="text-red-500">Hoodies</li>
                </a>
              </Link>
              <Link href={"/shoes"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Shoes</li>
                </a>
              </Link>
            </ul>
          </nav>
          <div className="cart absolute  right-2  mr-5" onClick={toggleCart}>
            <AiOutlineShoppingCart className="text-3xl mt-2 text-red-500" />
          </div>
          <div ref={ref} className="sideCart absolute top-0 right-0 bg-red-100 p-10 transform transition-transform translate-x-full ">
            <h2 className="font-bold text-xl">Shopping Cart</h2>
            <span onClick={toggleCart} className="absolute top-5 right-2 cursor-pointer text-2xl text-red-500"><AiOutlineCloseCircle /></span>
            <ol>
              <li>
                <span>Tshirt - wear the comfortable outfit</span>
              </li>
            </ol>
          </div>

        </div>
      </header>

    </div>
  );
};

export default Navbar;
