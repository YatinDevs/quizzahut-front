import React from "react";
import { AiOutlineDribbble } from "react-icons/ai";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FiArrowRight, FiCopy } from "react-icons/fi";
import { Link } from "react-router-dom";
function ContactUs() {
  return (
    <div className="bg-white m-5 relative dark:bg-[#212121] shadow-md rounded-xl lg:max-w-5xl mx-4 md:mx-auto md: max-w-2xl xs:mx-4 lg:px-0 ">
      <div className="p-2 lg:mx-4">
        <div className=" lg:p-6 p-3">
          <div className="flex justify-between  w-full">
            <div className="flex items-center gap-x-2 font-InterRe">
              <div className="w-[6px] h-[6px] rounded-full  bg-[#6b6b6b]" />
              <h1 className="text-neutral-700 dark:text-[#C0C0C0] max-md:text-xl text-xl font-InterRe font-bold">
                Contact US
              </h1>
            </div>

            <div className="bg-[#F6F8FA] dark:bg-[#115e3b] h-6 w-6 lg:w-fit lg:px-3 rounded-full flex items-center justify-center gap-x-2">
              <div className="w-2 h-2 rounded-full animate-ping dark:animate-none bg-[#28C780]" />
              <p className="text-[#2b9364] hidden lg:flex text-xs font-semibold uppercase ">
                Available for work
              </p>
            </div>
          </div>

          <div className="mt-9">
            <h1 className="text-4xl font-InterBo">Project Ideas</h1>
            <div className="flex flex-row justify-between xs:flex-col ">
              <p className="dark:text-[#C0C0C0] my-5">
                Got an idea and need help? Reach out now
              </p>
              <Link
                href={
                  "https://drive.google.com/file/d/1vu_2Cb3BbndXsRdJXiI6s5imm9XxADo8/view"
                }
              >
                <div className="border-neutral-300 dark:border-neutral-700/50  shadow-md mb-4 border  w-fit h-8 px-2 rounded-md flex items-center gap-x-2 ">
                  <FiCopy className="" />
                  <span className="text-neutral-700 dark:text-white  font-semibold">
                    Copy Details
                  </span>
                </div>
              </Link>
            </div>

            <div>
              <div className="w-full flex gap-x-4">
                <input
                  className="w-1/2 p-3 outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 
                  bg-[#F1F4F8]
                  placeholder-zinc-600"
                  type="text"
                  placeholder="Name"
                />
                <input
                  className="w-1/2 p-3
                  
                  outline-none border-none rounded-lg dark:bg-[#2C2C2C]/40 bg-[#F1F4F8] placeholder-zinc-600"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mt-2">
                <textarea
                  name=""
                  id=""
                  cols="40"
                  className="w-full p-3 
                  bg-[#F1F4F8]
                  
                  outline-none border-none  dark:bg-[#2C2C2C]/40 placeholder-zinc-600 rounded-lg"
                  rows="6"
                  placeholder="Message"
                ></textarea>
              </div>

              <button className="w-full p-3 rounded-lg text-white dark:bg-neutral-700 bg-black dark:hover:bg-neutral-800 transition-all ease-in-out duration-500 mt-4 font-InterBo">
                Submit Inquiry
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
