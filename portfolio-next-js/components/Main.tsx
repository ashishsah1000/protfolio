import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Navbar from "./Navbar";

const Main = () => {
  let backgroundImage =
    "https://images.unsplash.com/photo-1451188502541-13943edb6acb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80";
  return (
    <div className="w-full h-screen bg-black text-center flex">
      <div
        className="w-[100vw]  md:block overflow-hidden "
        style={{ background: `url(${backgroundImage})` }}
      >
        <div className="w-[100vw] h-[100vh] md:block bg-gradient-to-l from-black  to-[rgba(22,22,22,.5)] overflow-hidden ">
          <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center ">
            <div>
              <p className="uppercase tracking-widest text-sm text-gray-600 ">
                A lot lies beyond Oppertunites
              </p>
              <h1 className="py-4 text-white-700 font-thin text-10xl">
                Hello this is{" "}
                <span className="text-orange-700">Flekenstine</span>
              </h1>

              <p className="py-4 text-gray-400 w-[60%]  m-auto tracking-widest antialiased hover:subpixel-antialiased">
                This is Ashish, I have honed my skills in a variety of
                technologies, including Node.js, React, MongoDB, and Git.
              </p>

              <div className="flex items-center justify-between max-w-[130px] m-auto py-4 text-white">
                <div className="rounded  m-1 bg-[#0a66c21e]  flex shadow  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <div className="mt-[1px]">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div className="flex-grow"></div>
                </div>
                <div className="rounded  m-1 bg-[#161b22]  flex shadow  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <div className="mt-[1px]">
                    <FaGithub size={20} />
                  </div>
                  <div className="flex-grow"></div>
                </div>
                <div className="rounded  m-1 bg-[#f481232e]  flex shadow  p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <div className="mt-[1px]">
                    <FaStackOverflow size={20} />
                  </div>
                  <div className="flex-grow"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
