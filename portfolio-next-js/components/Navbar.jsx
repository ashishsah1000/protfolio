import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNavFunction = () => {
    console.log("handle nav was called ");
    setNav(!nav);
  };
  const myLoader = ({ src }) => {
    return "https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png";
  };
  return (
    <div className="fixed w-full h-20 bg-black shadow-xl z-[100]">
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Image
          loader={myLoader}
          src="https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png"
          height="50"
          width="80"
          alt="/"
        />
        <div>
          <ul className="hidden md:flex text-[#5651e5] font-bold">
            <Link href="/">
              <li className="ml-10 text-sm  uppercase border-b border-[transparent] hover:border-b hover:border-[#5651e5] ease-in-out duration-1000">
                Home
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase border-b border-[transparent] hover:border-b hover:border-[#5651e5] ease-in-out duration-1000">
                About
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase border-b border-[transparent] hover:border-b hover:border-[#5651e5] ease-in-out duration-1000">
                Skills
              </li>
            </Link>
            <Link href="/">
              <li className="ml-10 text-sm uppercase border-b border-[transparent] hover:border-b hover:border-[#5651e5] ease-in-out duration-1000">
                Projects
              </li>
            </Link>
          </ul>
          <div
            className="md:hidden cursor-pointer"
            onClick={() => {
              setNav(!nav);
            }}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/50" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%]  ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Image
                loader={myLoader}
                src="https://upload.wikimedia.org/wikipedia/commons/6/6f/HP_logo_630x630.png"
                height="50"
                width="80"
                alt="/"
              />
              <div
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
                onClick={() => {
                  setNav(!nav);
                }}
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                Let's build something legendary together
              </p>
            </div>
          </div>
          <div>
            <ul>
              <Link href="/">
                <li className="py-4 text-sm">Home</li>
                <li className="py-4 text-sm">About</li>
                <li className="py-4 text-sm">Skills</li>
                <li className="py-4 text-sm">Projects</li>
                <li className="py-4 text-sm">Contacts</li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>
            </div>
            <div className="flex items-center justify-content-between my-4 w-full sm:w-[80%]">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaLinkedinIn />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <FaGithub />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <AiOutlineMail />
              </div>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
