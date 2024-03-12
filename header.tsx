"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";

function Header(): React.JSX.Element {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = (): void => {
    setShowDropdown((prevState) => !prevState);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (
        showDropdown &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        event.target !== document.querySelector(".menu-icon")
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <div className="rounded-xl h-20 max-w-[100rem] px-5 flex mx-auto justify-between items-center">
     <Link href={"/"}>

      
      <h1 className="text-white font-semibold text-3xl cursor-pointer">
        Krafters
      </h1>
     </Link>
      <div className="flex items-center justify-between">
        <TiThMenu
          className="md:hidden text-3xl cursor-pointer menu-icon"
          onClick={toggleDropdown}
        />

        {showDropdown && (
          <div ref={dropdownRef} className="dropdown relative md:hidden">
            <div
              className="absolute inset-0 z-10 bg-gray-800 opacity-50"
              onClick={toggleDropdown}
            ></div>
            <div className="absolute right-0 mt-6 w-52 h-34 bg-white rounded-md shadow-lg z-20 ">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Home
              </Link>
              <Link
                href="/"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                Developer
              </Link>
              <Link
                href="/about"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
              >
                About
              </Link>
            </div>
          </div>
        )}

        <Link
          href="/"
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          Home
        </Link>
        <Link
          href="/"
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          Developer
        </Link>
        <Link
          href="/about"
          className="rounded-lg px-3 py-2 glow hidden md:block text-base mr-8 ease-in-out duration-500 font-semibold "
        >
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
