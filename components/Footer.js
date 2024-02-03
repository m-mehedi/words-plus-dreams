import React from "react";
import Link from "next/link";
import Image from "next/image";
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
import PinterestIcon from '@mui/icons-material/Pinterest';
import SecurityIcon from '@mui/icons-material/Security';
import PeopleIcon from '@mui/icons-material/People';
import InterestsIcon from '@mui/icons-material/Interests';
import CategoryIcon from '@mui/icons-material/Category';

const Footer = () => {
  return (
    <div className="bg-gradient-to-t from-green-500/20 dark:bg-gray-900 dark:from-green-900/30">
      <footer className="text-gray-600  dark:text-green-200 body-font">
        <div className="container px-5 pt-20 pb-3 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link href={"/"}>
              <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 dark:text-green-600">
                <Image
                  src="https://i.postimg.cc/VvXqq8pS/nv-cool.png"
                  alt=""
                  width={80}
                  height={80}
                />
              </a>
            </Link>
            <div className="mt-2 ml-2 px-1 text-sm text-gray-500 dark:text-green-300">
              <h1>Words + Dreams</h1>
              <h2 className="title-font font-medium text-gray-900 dark:text-green-600 tracking-widest text-sm mb-3"> Category
              </h2>
              <ul className="">
                <li className="hover:text-gray-800 dark:hover:text-green-800 ">
                  <a href={"/novel"}>
                    Novel
                  </a>
                </li>
                <li className="hover:text-gray-800 dark:hover:text-green-800 ">
                  <a href={"/stories"}>
                    Stories
                  </a>
                </li>
                <li className="hover:text-gray-800 dark:hover:text-green-800 ">
                  <a href={"others"}>
                    Others
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center text-sm">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4 "></div>
            {/* <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-green-600  tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className=" hover:text-gray-800 dark:hover:text-green-800">
                    First Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800 dark:hover:text-green-800">
                    Second Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800 dark:hover:text-green-800">
                    Third Link
                  </a>
                </li>
                <li>
                  <a className=" hover:text-gray-800 dark:hover:text-green-800">
                    Fourth Link
                  </a>
                </li>
              </nav>
            </div> */}
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-green-600 tracking-widest text-sm mb-3">
                <PeopleIcon /> CUSTOMER SERVICE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href={"/contact"}
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href={"/about"}
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href={"/returnpolicy"}
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    Return Policy
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-green-600 tracking-widest text-sm mb-3">
                
              <SecurityIcon/> POLICY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a
                    href={"/privacy"}
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href={"/termsNc"}
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    Terms and Conditions
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-900 dark:text-green-600 tracking-widest text-sm mb-3">
               <InterestsIcon /> SOCIALS
              </h2>
              <nav className="list-none mb-10">
                <li className="p-1">
                  <a
                    href={"https://www.facebook.com/milespb1"}
                    target="blank"
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    <FacebookIcon /> Facebook
                  </a>
                </li>
                <li className="p-1">
                  <a
                    href={"https://www.pinterest.com/milesbeauchamp/"}
                    target="blank"
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    <PinterestIcon /> Pinterest
                  </a>
                </li>
                <li className="p-1">
                  <a
                    href={"https://www.amazon.com/author/miles"}
                    target="blank"
                    className=" hover:text-gray-800 dark:hover:text-green-800"
                  >
                    <LanguageIcon /> Amazon
                  </a>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className=" p-0">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500  dark:text-green-200 text-sm text-center sm:ml-auto ">
              <a
                href="https://github.com/m-mehedi"
                rel="noopener noreferrer"
                className=" ml-1"
                target="_blank"
              >
                @MEHEDI
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
