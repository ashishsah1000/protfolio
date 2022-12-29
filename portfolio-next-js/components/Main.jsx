import React from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Main = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600 ">
            Lets Build something
          </p>
          <h1 className="py-4 text-gray-700">
            Hi I'm <span className="text-[#5651e5]">Ashish</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full Stack Dev</h1>
          <p className="py-4 text-gray-600 max-width-[70%] m-auto">
            As a full stack developer with three years of experience, I have
            honed my skills in a variety of technologies, including Node.js,
            React, MongoDB, and Git. I am highly proficient in creating
            full-scale web applications from the ground up, utilizing my
            expertise in both front-end and back-end development to deliver
            intuitive, high-performing solutions.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
