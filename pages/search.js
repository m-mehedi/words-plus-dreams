/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React from "react";
import Book from "../models/Book";
import mongoose from "mongoose";
import Link from "next/link";
import { capitalize } from "@mui/material";

const Search = ({ books }) => {
  const router = useRouter();
  console.log(books);
  //   var regex = new RegExp(router.query.title,'i')
  //   console.log(regex)
  return (
    <div className="min-h-[50vh] dark:bg-gray-900">
      <div className="text-xl font-normal  dark:text-gray-300 px-20 pt-10">
        Showing search results for{" "}
        <span className="text-2xl font-semibold">
          &#34;{router.query.title}&#34;
        </span>
      </div>
      {!books.length && <div className="px-20 pt-2 text-xl dark:text-gray-300">No Result found</div>}
      <div>
        <section className="text-gray-600 body-font dark:bg-gray-900">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4 justify-center space-y-4">
              {books.map((item) => {
                return (
                  <Link
                    passHref={true}
                    key={item._id}
                    href={`/product/${item.slug}`}
                  >
                    <div className="lg:w-1/4 md:w-1/2 p-10 w-full cursor-pointer shadow-lg hover:scale-125 hover:bg-white dark:hover:bg-gray-700 dark:bg-gray-900 duration-500">
                      <a className="block relative rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="h-[30vh] md:h-[35vh] m-auto  block"
                          src={item.img}
                        />
                      </a>
                      <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 dark:text-gray-200 text-xs tracking-widest title-font mb-1">
                        {capitalize(item.category) }
                      </h3>
                        <h2 className="text-gray-900 dark:text-white title-font text-lg font-medium">
                          {item.title}
                        </h2>
                        <h2 className="text-gray-700 dark:text-white title-font text-base font-medium">
                          {item.author}
                        </h2>
                        <p className="mt-1 dark:text-white">₹{item.price}</p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query)
  var regex = new RegExp(context.query.title, "i");
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let books = await Book.find({ title: regex });
  return {
    props: { books: JSON.parse(JSON.stringify(books)) }, // will be passed to the page component as props
  };
}

export default Search;
