import React from "react";
import { data } from "../data/data.js";

const Work = () => {
  const project = data;

  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#802774] pb-20">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 ">
            Projects
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {project.map((item, index) => (
            <div
              key={item.id}
              style={{ backgroundImage: `url(${item.image})`,height: "12rem"}}
              className=" bg-contain shadow-lg  shadow-[#020203] group container rounded-md
              flex justify-center text-center items-center mx-auto content-div hover:scale-105 duration-500"
            >
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font bold text-white tracking-wider">
                  {item.name}
                </span>
                <div className="pt-8 text-center ">
                  <a href={item.github}>
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Code
                    </button>
                  </a>

                  <a href={item.live}>
                    <button
                      className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg"
                    >
                      Live
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
