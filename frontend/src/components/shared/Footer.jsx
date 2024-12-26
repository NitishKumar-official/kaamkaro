import React from "react";

function Footer() {
  return (
    <>
      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-sky-100 border-t shadow-md">
        <div className="flex justify-evenly items-center py-2">
          <a href="/home">
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <div className="w-6 h-6 bg-white rounded-full mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M3 13h1v7c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-7h1a1 1 0 0 0 .707-1.707l-9-9a.999.999 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13zm7 7v-5h4v5h-4zm2-15.586 6 6V15l.001 5H16v-5c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H6v-9.586l6-6z"></path>
                </svg>
              </div>
              <span className="text-xs">Home</span>
            </div>
          </a>
          <a href="/wishlist">
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <div className="w-6 h-6 bg-white rounded-full mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 15v-3h-2v3h-3v2h3v3h2v-3h3v-2h-.937zM4 7h11v2H4zm0 4h11v2H4zm0 4h8v2H4z"></path>
                </svg>
              </div>
              <span className="text-xs">Wishlist</span>
            </div>
          </a>
          <a href="/categories">
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <div className="w-6 h-6 bg-white rounded-full mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11-6h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 6h-4V5h4v4zm-9 4H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6H5v-4h4v4zm8-6c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path>
                </svg>
              </div>
              <span className="text-xs">Categories</span>
            </div>
          </a>
          <a href="/profile">
            <div className="flex flex-col items-center text-gray-700 cursor-pointer">
              <div className="w-6 h-6 bg-white rounded-full mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 18a7.5 7.5 0 0115 0v.75H4.5V18z"
                  />
                </svg>
              </div>
              <span className="text-xs">Profile</span>
            </div>
          </a>
        </div>
      </nav>
    </>
  );
}

export default Footer;
