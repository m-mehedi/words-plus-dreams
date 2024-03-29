import React, { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import ToggleBtn from "./ToggleBtn";
import PersonIcon from '@mui/icons-material/Person';

import {
  AiOutlineCloseCircle,
  AiOutlineShoppingCart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsFillCartCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SideBar = ({
  logout,
  user,
  cart,
  addToCart,
  removeFromCart,
  clearCart,
  subTotal,
}) => {
  const [profileDropdown, setProfileDropdown] = useState(false);

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.remove("hidden");
      ref.current.classList.add("translate-x-0");
    } else if (ref.current.classList.contains("translate-x-0")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full","hidden");
    }
  };
  const ref = useRef();
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="cart flex absolute right-0 top-4 mx-4 cursor-pointer items-center">
        {user.value && (
          <Link href={"/profile"} className="items-center">
            <a
              className="mx-2 pt-0"
              onMouseEnter={() => setProfileDropdown(true)}
              onMouseLeave={() => setProfileDropdown(false)}
              onTouchStart={() => setProfileDropdown(true)}
            >
              <PersonIcon className="text-3xl dark:text-green-300" />
              {/* <Image
                height={30}
                width={30}
                src="/logged-in.png"
                alt="User Logged In"
              /> */}
            </a>
          </Link>
        )}
        {profileDropdown && (
          <div
            onMouseEnter={() => setProfileDropdown(true)}
            onMouseLeave={() => setProfileDropdown(false)}
            className="bg-green-50 rounded-md w-20 h-24 text-sm p-2 dark:text-green-600 dark:bg-gray-700 absolute top-6 right-8"
          >
            <ul className="">
              <li className="pb-1 hover:text-gray-500 dark:hover:text-green-200 font-bold">
                <Link href="/profile">Profile</Link>
              </li>
              <li className="pb-1 hover:text-gray-500 dark:hover:text-green-200 font-bold">
                <Link href="/contact">Contact</Link>
              </li>
              <li className="pb-1 hover:text-gray-500 dark:hover:text-green-200 font-bold">
                <Link href="/about">About</Link>
              </li>
              <li className=" hover:text-gray-500 dark:hover:text-green-200 font-bold">
                <a onClick={logout}>Logout</a>
              </li>
            </ul>
          </div>
        )}
        {!user.value && (
          <Link href={"/login"}>
            <a>
              <MdAccountCircle className="text-xl mx-2 md:text-2xl dark:text-green-300" />
            </a>
          </Link>
        )}


        {/* <AiOutlineShoppingCart
          onClick={toggleCart}
          className="text-3xl dark:text-green-300 "
        /> */}

      <ToggleBtn />

      </div>
      <div
        ref={ref}
        className={`sidebar w-72 h-[100vh]  absolute top-0 right-0 bg-green-100 dark:bg-green-600  px-6 py-10 transform transition-transform ${
          Object.keys(cart).length === 0 ? "translate-x-full hidden" : "translate-x-0"
        }`}
        // overflow-y-scroll
      >
        <h2 className="text-center font-bold text-xl">Words+Dreams</h2>

        <span
          onClick={toggleCart}
          className="absolute top-2 right-2 cursor-pointer "
        >
          <AiOutlineCloseCircle className="text-2xl text-green-600 dark:text-black" />
        </span>
        <ol className="list-decimal font-bold">
          {Object.keys(cart).length == 0 && (
            <div className="my-4 text-base font-bold">
              No Items present in the cart
            </div>
          )}
          {Object.keys(cart).map((k) => {
            return (
              <li key={k}>
                <div className="item flex my-5">
                  <div className="w-2/3 font-bold">{cart[k].name}</div>
                  <div className="w-1/3 font-semibold flex items-center justify-center text-xl ">
                    <AiOutlineMinusCircle
                      onClick={() => {
                        removeFromCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].author
                        );
                      }}
                      className="mx-2 text-xl text-green-600 cursor-pointer dark:text-black "
                    />
                    {cart[k].qty}
                    <AiOutlinePlusCircle
                      onClick={() => {
                        addToCart(
                          k,
                          1,
                          cart[k].price,
                          cart[k].name,
                          cart[k].author
                        );
                      }}
                      className="mx-2 text-xl cursor-pointer text-green-600 dark:text-black"
                    />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
        <div className="my-2 font-bold">SubTotal : $ {subTotal} </div>
        <div className="flex">
          <Link href={"/checkout"}>
            <button className="flex mr-4 text-white dark:font-semibold dark:text-green-500 bg-green-500 dark:bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 dark:hover:bg-gray-600 rounded text-lg">
              {" "}
              <BsFillCartCheckFill className="m-1" /> Checkout{" "}
            </button>
          </Link>
          <button
            className="flex text-white dark:font-semibold dark:text-green-500 bg-green-500 dark:bg-gray-800 border-0 py-2 px-2 focus:outline-none hover:bg-green-600 dark:hover:bg-gray-600 rounded text-lg"
            onClick={clearCart}
          >
            {" "}
            Clear Cart{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
