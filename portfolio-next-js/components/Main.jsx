import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaStackOverflow } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen bg-black text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600 ">
            Lets Build something
          </p>
          <h1 className="py-4 text-white-700">
            Hi I'm <span className="text-[#5651e5]">Ashish</span>
          </h1>
          <h1 className="py-2 text-white-700">A Full Stack Dev</h1>

          <p className="py-4 text-gray-600 w-[60%]  m-auto">
            As a full stack developer with three years of experience, I have
            honed my skills in a variety of technologies, including Node.js,
            React, MongoDB, and Git. I am highly proficient in creating
            full-scale web applications from the ground up, utilizing my
            expertise in both front-end and back-end development to deliver
            intuitive, high-performing solutions.
          </p>

          <div className="flex items-center justify-between max-w-[330px] m-auto py-4 text-white">
            <div className="rounded  m-1 bg-[#0a66c2]  flex shadow shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <div className="mt-[1px]">
                <FaLinkedinIn size={20} />
              </div>
              <div className="flex-grow">
                <span> &nbsp;LinkedIn</span>
              </div>
            </div>
            <div className="rounded w-[140px] m-1 bg-[#161b22]  flex shadow shadow-gray-700 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <div className="mt-[1px]">
                <FaGithub size={20} />
              </div>
              <div className="flex-grow">
                <span>&nbsp;Github</span>
              </div>
            </div>
            <div className="rounded w-[200px] m-1 bg-[#F48023]  flex shadow shadow-gray-600 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
              <div className="mt-[1px]">
                <FaStackOverflow size={20} />
              </div>
              <div className="flex-grow">
                <span>&nbsp;StackOverflow</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
