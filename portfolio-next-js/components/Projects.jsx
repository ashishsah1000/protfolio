import React from "react";
import { FcMusic, FcEngineering } from "react-icons/fc";
import { FaGithub, FaClock } from "react-icons/fa";

export default function Projects() {
  return (
    <div className="bg-black w-[100vw] h-[100vh]">
      <div className=" ">
        <div className="timeline">
          <div className="container left">
            <div className="content p-4">
              <div className="flex space-x-2">
                <h2 className="flex text-[#e91e63]">
                  <FcMusic />{" "}
                  <span className="relative top-[-2px]">Music Player</span>
                </h2>
              </div>
              <div className="flex space-x-2 ml-2 mt-2 text-gray-600">
                <FaClock size={20} />
                <span className="font-thin text-sm">4 weeks</span>
              </div>

              <p className="mt-3">
                For the frontend design of my music player web app, I used{" "}
                <b>React </b>
                and <b>Redux</b> to manage the state of the application and
                create a smooth and responsive user interface. I also integrated
                <b> Stripe</b> to handle the payment processing for premium
                subscriptions.
              </p>
              <div className=" mt-3 flex justify-center">
                <a
                  className="p-3 bg-white  text-yellow-600 flex"
                  href="https://github.com/ashishsah1000/rapidmusicplayer"
                >
                  <FaGithub size={24} /> &nbsp;Have a look on project
                </a>
              </div>
            </div>
          </div>
          <div className="container right">
            <div className="content p-4">
              <div className="flex space-x-2">
                <h2 className="flex">
                  <FcEngineering />{" "}
                  <span className="relative top-[-2px]">Form Builder</span>
                </h2>
              </div>
              <div className="flex space-x-2 ml-2 mt-2 text-gray-600">
                <FaClock size={20} />
                <span className="font-thin text-sm">4 Months</span>
              </div>

              <p className="mt-3">
                For the frontend design of my music player web app, I used{" "}
                <b>React </b>
                and <b>Redux</b> to manage the state of the application and
                create a smooth and responsive user interface. I also integrated
                <b> Stripe</b> to handle the payment processing for premium
                subscriptions.
              </p>
              <div className=" mt-3 flex justify-center">
                <a
                  className="p-3 bg-white  text-yellow-600 flex"
                  href="https://github.com/ashishsah1000/rapidmusicplayer"
                >
                  <FaGithub size={24} /> &nbsp;Have a look on project
                </a>
              </div>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2020</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>2019</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container left">
            <div className="content">
              <h2>2018</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
          <div className="container right">
            <div className="content">
              <h2>20017</h2>
              <p>
                Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
                admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
                quis iuvaret expetendis his, te elit voluptua dignissim per,
                habeo iusto primis ea eam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
