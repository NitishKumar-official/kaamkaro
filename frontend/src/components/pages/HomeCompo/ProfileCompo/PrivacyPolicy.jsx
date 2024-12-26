import React from "react";
import Header from "../../../shared/Header";
import Footer from "../../../shared/Footer";


const PrivacyPolicy = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="bg-green-50 py-10 text-center px-4">
        <h1 className="text-3xl font-bold text-gray-800">Privacy Policy</h1>
        <p className="text-gray-600 mt-2">How Sudhnil handles your data</p>
        <p className="text-gray-500 mt-1 text-sm">Updated December 26, 2024</p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 py-10 md:px-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar */}
          <aside className="md:w-1/4 space-y-4">
            <h2 className="text-lg font-semibold">Introduction</h2>
            <nav className="space-y-2">
              <a
                href="#"
                className="block text-gray-800 hover:text-blue-600 font-medium"
              >
                Our values
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600"
              >
                Why we process your information
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600"
              >
                Your rights over your information
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600"
              >
                Where we send your information
              </a>
              <a
                href="#"
                className="block text-gray-600 hover:text-blue-600"
              >
                How long do we retain your information
              </a>
            </nav>
          </aside>

          {/* Main Content */}
          <section className="md:w-3/4 space-y-6">
            <h2 className="text-2xl font-bold">Introduction</h2>
            <p className="text-gray-700">
              In our mission to make commerce better for everyone at Sudhnil, we
              collect and use information about you, our:
            </p>
            <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  merchants using Sudhnil
                </a>{" "}
                to power your business
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  customers
                </a>{" "}
                who shop at a Sudhnil-powered business
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  partners
                </a>{" "}
                who develop apps for merchants, build stores, or refer potential
                entrepreneurs
              </li>
              <li>
                <a href="/" className="text-blue-600 hover:underline">
                  users of Sudhnil apps
                </a>{" "}
                and services like Shop or Shop Pay
              </li>
              <li>
                Visitors to Sudhnil websites or anyone contacting{" "}
                <a href="/" className="text-blue-600 hover:underline">
                Sudhnil support
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default PrivacyPolicy;
