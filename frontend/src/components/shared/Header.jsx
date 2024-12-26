import React from 'react';
import Logo from "../image/logo.png";

function Header() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 flex justify-between items-center px-4 py-3  bg-sky-400 text-gray-100">
        <div className="flex items-center space-x-2">
          <img
            src={Logo} // Replace with your logo URL
            alt="Logo"
            className="w-32 h-14 rounded-md" // Adjust size as needed
          />
          <div className="text-xl font-bold text-black"></div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <span className="absolute -top-2 -right-2 bg-red-500 text-xs text-gray-100 rounded-full px-1.5">
              2
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
              <circle cx="10.5" cy="19.5" r="1.5"></circle>
              <circle cx="17.5" cy="19.5" r="1.5"></circle>
            </svg>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.486 2 2 6.486 2 12v4.143C2 17.167 2.897 18 4 18h1a1 1 0 0 0 1-1v-5.143a1 1 0 0 0-1-1h-.908C4.648 6.987 7.978 4 12 4s7.352 2.987 7.908 6.857H19a1 1 0 0 0-1 1V18c0 1.103-.897 2-2 2h-2v-1h-4v3h6c2.206 0 4-1.794 4-4 1.103 0 2-.833 2-1.857V12c0-5.514-4.486-10-10-10z"></path>
          </svg>
        </div>
      </header>

      {/* Content Below Header */}
      <div className="pt-16">
        {/* Your main content goes here */}
      </div>
    </>
  );
}

export default Header;
