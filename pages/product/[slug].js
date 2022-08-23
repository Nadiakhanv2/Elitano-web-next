import { useRouter } from "next/router";
import { useState } from "react";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import {
  RiFacebookFill,
  RiTwitterFill,
  RiWhatsappFill,
  RiHeartLine,
} from "react-icons/ri";

const Slug = ({addToCart}) => {
  const router = useRouter();
  const { slug } = router.query;
  const [pin, setPin] = useState();
  const [service, setService] = useState();
  
  const checkServiceAbility = async () => {
    let pins = await fetch(' http://localhost:3000/api/pincode')
    let pinJson = await pins.json();
    if (pinJson.includes(parseInt(pin))) {
      setService(true);
    } else {
      setService(false);
    }
  }

  const checkPin = (e) => {
    setPin(e.target.value);
  }

  return (
    <>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src="https://image.made-in-china.com/2f0j00sFuEOoIGYhrf/High-Quality-Combed-Cotton-Ladies-T-Shirt.jpg"
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                GlamorWeek
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                Glamor by Wearing a T-Shirt ( XL/Red )
              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  <AiFillStar className="w-5 h-5 text-red-500" />
                  <AiFillStar className="w-5 h-5 text-red-500" />
                  <AiFillStar className="w-5 h-5 text-red-500" />
                  <AiFillStar className="w-5 h-5 text-red-500" />
                  <AiOutlineStar className="w-5 h-5 text-red-500" />
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <RiFacebookFill className="w-5 h-5" />
                  </a>
                  <a className="text-gray-500">
                    <RiTwitterFill className="w-5 h-5" />
                  </a>
                  <a className="text-gray-500">
                    <RiWhatsappFill className="w-5 h-5" />
                  </a>
                </span>
              </div>
              <p className="leading-relaxed">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric
                sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
                juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
                seitan poutine tumeric. Gastropub blue bottle austin listicle
                pour-over, neutra jean shorts keytar banjo tattooed umami
                cardigan.
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span className="mr-3">Color</span>
                  <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                  <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                </div>
                <div className="flex ml-6 items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative">
                    <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-red-200 focus:border-red-500 text-base pl-3 pr-10">
                      <option>SM</option>
                      <option>M</option>
                      <option>L</option>
                      <option>XL</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <RiHeartLine className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ₨ 5800
                </span>
                <button className="flex ml-4 text-white bg-red-500 border-0 py-2 md:px-4 px-2 focus:outline-none hover:bg-red-600 rounded">
                  Buy Now
                </button>
                <button
                  onClick={() => {
                    addToCart(
                      slug,
                      1,
                      899,
                      "T Shirt for Men(XL,Red)",
                      "XL",
                      "Red"
                    );
                  }}
                  className="flex ml-4 text-white bg-red-500 border-0 py-2 md:px-4 px-2 focus:outline-none hover:bg-red-600 rounded"
                >
                  Add to Cart
                </button>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <RiHeartLine className="w-5 h-5" />
                </button>
              </div>
              <div className="pin flex mt-6 text-sm space-x-2">
                <input
                  onChange={checkPin}
                  type="text"
                  placeholder="Enter Your Pincode"
                  className="px-2 border-2 border-gray-300 rounded-md focus:outline-none"
                />
                <button
                  onClick={checkServiceAbility}
                  className="text-white ml-2 bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded-lg"
                >
                  Check
                </button>
              </div>
              {!service && service != null && (
                <div className="text-green-300 mt-4 text-sm">
                  <span>Sorry ! Code not delievered</span>
                </div>
              )}
              {service && service != null && (
                <div className="text-indigo-300 mt-4 text-sm">
                  <span>Yay ! Code deliever successfully</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Slug;
