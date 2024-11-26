import React, { ChangeEvent, FormEvent, useState } from "react";
import Image from "next/image";
import logo from "../../../../public/11zon_cropped.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faL,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
interface FormData {
  name: string;
  contact: string;
  email: string;
  message: string;
}

export default function Footer() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    contact: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    email: false,
    contact: false,
  });

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateContact = (contact: string): boolean => {
    const contactRegex = /^\d{10}$/;
    return contactRegex.test(contact);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();

    // Validate email and contact
    const isEmailValid = validateEmail(formData.email);
    const isContactValid = validateContact(formData.contact);

    if (!isEmailValid || !isContactValid) {
      setError({
        email: !isEmailValid,
        contact: !isContactValid,
      });
      return;
    }

    // Set Name and Message as null if not provided
    const dataToSend = {
      name: formData.name || null,
      contact: formData.contact,
      email: formData.email,
      message: formData.message || null,
    };

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbwCZiLwU-7FJGoB5VewJz_jAYTUpaseSwCGyG0XPGB2Yochzj4j5w2AFLQ6AuoESkDvbA/exec",
      {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(dataToSend),
      }
    );
    if (response) {
      setError({ email: false, contact: false });
      setFormData({
        name: "",
        contact: "",
        email: "",
        message: "",
      });
      alert("form submitted successfully");
    }
  };
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
                onClick={() =>
                  (location.href = "https://www.facebook.com/share/1B2TVmFRKr/")
                }
              />{" "}
              <FontAwesomeIcon
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faInstagram}
                onClick={() =>
                  (location.href =
                    "https://www.instagram.com/flowergarden__/profilecard/?igsh=MThkNTlqbXVjdWIxMg==")
                }
              />{" "}
              <FontAwesomeIcon
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faTwitter}
              />{" "}
              <FontAwesomeIcon
                onClick={() => (location.href = "https://wa.me/919567417334")}
                className=" me-3 hover:text-white transition-all duration-200"
                icon={faWhatsapp}
              />
            </div>
          </div>
        </div>
        <div className="2xl:w-[400px] xl:w-[350px] lg:w-[300px] md:mt-10 md:w-full lg:mt-0 sm:mt-8 xs:mt-8">
          <div className="font-bold text-xl text-white">
            GET IN <span className="text-thirdText ">TOUCH WITH US</span>
          </div>
          <div className="text-white mt-2">
            <form onSubmit={handleSubmit}>
              {/* Name */}
              <div className="mt-1">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-gray-300 py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Contact */}
              <div className="mt-1">
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium leading-6"
                >
                  Contact
                </label>
                <div className="mt-2">
                  <input
                    id="contact"
                    name="contact"
                    type="text"
                    value={formData.contact}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-gray-300 py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {error.contact && (
                    <p className="text-red-500 text-sm">
                      Invalid contact number
                    </p>
                  )}
                </div>
              </div>

              {/* Email */}
              <div className="mt-1">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="block w-full rounded-md bg-gray-300 py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                  {error.email && (
                    <p className="text-red-500 text-sm">Invalid email</p>
                  )}
                </div>
              </div>

              {/* Message */}
              <div className="mt-1">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium leading-6"
                >
                  Message
                </label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="block w-full rounded-md bg-gray-300 py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  className="bg-secText text-sm px-3 py-1 font-semibold min-w-28 rounded-full"
                >
                  SEND
                </button>
              </div>
            </form>
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
