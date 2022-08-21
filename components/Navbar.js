import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
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
              <Link href={"/hoodies"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Hoodies</li>
                </a>
              </Link>
              <Link href={"/stickers"}>
                <a className="mr-10 hover:text-gray-900">
                  <li className="text-red-500">Stickers</li>
                </a>
              </Link>
              <Link href={"/mugs"}>
                <a className="mr-5 hover:text-gray-900">
                  <li className="text-red-500">Mugs</li>
                </a>
              </Link>
            </ul>
          </nav>
          <div className="cart absolute  right-2  mr-5">
            <AiOutlineShoppingCart className="text-3xl mt-2 text-red-500" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
