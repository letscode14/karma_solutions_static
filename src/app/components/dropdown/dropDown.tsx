import React, { useEffect, useRef } from "react";
import { useMenu } from "@/app/context/MenuContext";

const DropdownMenu: React.FC = () => {
  const { isOpen, toggleMenu } = useMenu();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        isOpen
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, toggleMenu]);

  return (
    <div className="relative">
      <div
        ref={dropdownRef}
        className={`fixed top-0 left-0 w-full bg-black/90 text-white z-40 transform ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <ul className="flex flex-col ms-4 gap-4 py-8">
          <li className="text-lg font-semibold hover:underline">
            <a href="#home" onClick={toggleMenu}>
              Home
            </a>
          </li>
          <li className="text-lg font-semibold hover:underline">
            <a href="#about" onClick={toggleMenu}>
              About Us
            </a>
          </li>
          <li className="text-lg font-semibold hover:underline">
            <a href="#services" onClick={toggleMenu}>
              Services
            </a>
          </li>
          <li className="text-lg font-semibold hover:underline">
            <a href="#works" onClick={toggleMenu}>
              Works
            </a>
          </li>
          <li className="text-lg font-semibold hover:underline">
            <a href="#contact" onClick={toggleMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownMenu;
