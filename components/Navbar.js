import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mx-4 md:mb-0 ml-7">
            <Image src="/logobrand.jpg" alt="blogImg" width={100} height={80} />
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <ul className="flex">
              <Link href={"/"}>
                <a className="mr-5 hover:text-gray-900">
                  <li>Tshirts</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a className="mr-5 hover:text-gray-900">
                  <li>Hoodies</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a className="mr-10 hover:text-gray-900">
                  <li>Stickers</li>
                </a>
              </Link>
              <Link href={"/"}>
                <a className="mr-5 hover:text-gray-900">
                  <li>Mugs</li>
                </a>
              </Link>
            </ul>
          </nav>
          <div className="cart absolute  right-2  mr-5">
            <AiOutlineShoppingCart className="text-3xl mt-2" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
