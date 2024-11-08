import React from "react";
import Image from "next/image";
import logo from "../../../../public/11zon_cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="bg-footer h-fit 2xl:px-28 xl:px-20 lg:px-10  sm:py-12 xs:py-7 md:px-20 sm:px-12 xs:px-4">
      <div className=" lg:flex justify-between ">
        <div className="">
          <div className="flex  items-end">
            <div className="flex items-center">
              <Image
                className="xl:w-20 lg:w-16 md:w-20 sm:w-16  xs:w-16 "
                alt=""
                src={logo}
              />
            </div>

            <div
              className="flex flex-col justify-end 
            xl:text-4xl lg:text-3xl 
            md:text-4xl sm:text-3xl xs:text-2xl text-white pt-2  sm:ms-3 md:ms-4 xs:ms-2 font-bold"
            >
              <div>
                {" "}
                <span>Karma </span>
                <span className="text-secText">Solutions</span>
              </div>

              <div className="md:text-sm sm:text-xs xs:text-xs   font-medium mt-1 xs:mt-0">
                “From Gardens to Guarding – We’ve Got You Covered.”
              </div>
            </div>
          </div>
          <div className="sm:mt-10 xs:mt-6 sm:ms-5 xs:ms-2">
            <div className="max-w-[330px] flex">
              <FontAwesomeIcon
                className="text-secText me-3 text-xl"
                icon={faLocationDot}
              />
              <span className="text-white">
                {`Padannayil (H) Peoples Road Palluruthy Kochi  ,kerala , 682006`}{" "}
              </span>
            </div>
            <div className="max-w-[300px] mt-2 flex items-center">
              <FontAwesomeIcon
                className="text-secText me-3 text-xl"
                icon={faPhone}
              />
              <span className="text-white">{`99615-89022 ,95674-17334`} </span>
            </div>
            <div className="max-w-[300px] mt-3 items-center  flex">
              <FontAwesomeIcon
                className="text-secText me-3 text-xl"
                icon={faEnvelope}
              />
              <span className="text-white">karmaflower6644@gmail.com</span>
            </div>
            <div className="max-w-[300px] mt-5  items-center text-gray-400 text-[26px] flex">
              <FontAwesomeIcon
                className=" me-3 hover:text-white  transition-all duration-200"
                icon={faFacebook}
              />{" "}
              <FontAwesomeIcon
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faInstagram}
              />{" "}
              <FontAwesomeIcon
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faTwitter}
              />{" "}
              <FontAwesomeIcon
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faWhatsapp}
              />
            </div>
          </div>
        </div>

        <div
          className="2xl:w-[400px] xl:w-[350px] lg:w-[300px] 
        md:mt-10 md:w-full 
      lg:mt-0 
        sm:mt-8 xs:mt-8"
        >
          <div className="font-bold text-xl text-white">
            GET IN <span className="text-thirdText ">TOUCH WITH US</span>
          </div>
          <div className="text-white mt-2 ">
            <div className=" mt-1 ">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Name
              </label>
              <div className="mt-2 ">
                <div className="flex rounded-md bg-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block rounded-md  flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>{" "}
            <div className="sm:col-span-4 mt-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Contact
              </label>
              <div className="mt-2">
                <div className="flex bg-gray-300 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block rounded-md bg-gray-300 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Email
              </label>
              <div className="mt-2">
                <div className="flex bg-gray-300 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block rounded-md bg-gray-300 flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-4 mt-1">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6"
              >
                Message
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 w-full">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    className="block h-24 flex-1 border-0 rounded-md bg-gray-300  py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-4 x">
              <button className="bg-secText text-sm px-3 py-1  font-semibold min-w-28 rounded-full">
                SEND
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center   mt-6 mb-2">
        <div>
          {" "}
          <span className="text-secText font-bold lg:text-xl xl:text-2xl md:text-2xl sm:text-xl xs:text-lg">
            CALL US :
          </span>{" "}
          <span className="text-white xs:text-xl sm:text-2xl lg:text-2xl xl:text-3xl md:text-3xl font-bold">
            {" "}
            +91 99615-89022
          </span>
        </div>
        <div className="text-white xs:text-sm sm:text-base">{`“Trust the Best for Excellence Every Time”`}</div>
      </div>
    </div>
  );
}
