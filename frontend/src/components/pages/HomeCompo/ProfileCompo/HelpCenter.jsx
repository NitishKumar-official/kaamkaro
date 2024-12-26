import React from "react";
import Header from "../../../shared/Header";
import Footer from "../../../shared/Footer";

const HelpCenter = () => {
  return (
    <>
      <Header />
      <div className="bg-blue-700 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-16 px-4">
          <h1 className="text-4xl font-semibold text-white">
            Hi. How can we help?
          </h1>
          <div className="mt-6 relative mx-auto max-w-lg">
            <input
              type="text"
              placeholder="Find answers..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none"
            />
            <div className="mt-3 flex justify-center gap-2 text-sm text-white">
              <span className="px-2 py-1 bg-blue-500 rounded-full">
                invoices
              </span>
              <span className="px-2 py-1 bg-blue-500 rounded-full">
                payments
              </span>
              <span className="px-2 py-1 bg-blue-500 rounded-full">
                returns
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <main className="bg-white rounded-t-3xl -mt-6 px-4 py-10 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="text-center border rounded-md py-8 px-6">
              <div className="text-yellow-500 mb-4 text-4xl">💡</div>
              <h2 className="text-lg font-semibold">Getting started</h2>
              <p className="text-gray-500 mt-2">
                Understand how to make the most of your Help Center
              </p>
            </div>
            {/* Card 2 */}
            <div className="text-center border rounded-md py-8 px-6 shadow-md">
              <div className="text-green-500 mb-4 text-4xl">🖼️</div>
              <h2 className="text-lg font-semibold">Design and styling</h2>
              <p className="text-gray-500 mt-2">
                Create a look-and-feel that perfectly matches your brand
              </p>
            </div>
            {/* Card 3 */}
            <div className="text-center border rounded-md py-8 px-6">
              <div className="text-purple-500 mb-4 text-4xl">📖</div>
              <h2 className="text-lg font-semibold">Creating content</h2>
              <p className="text-gray-500 mt-2">
                Learn how to deliver amazing content to your visitors
              </p>
            </div>
          </div>

          {/* Featured Articles */}
          <section className="mt-12">
            <h3 className="text-lg font-semibold">Featured articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Understanding our theming framework</li>
                <li>Using Google fonts in your theme</li>
                <li>Using tabs to organize content</li>
              </ul>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Previewing theme changes locally</li>
                <li>Rendering HTML using JavaScript</li>
                <li>Organizing knowledge base content</li>
              </ul>
            </div>
          </section>

          {/* Contact Section */}
          <section className="mt-12 text-center">
            <h3 className="text-lg font-semibold">Get in touch</h3>
            <p className="text-gray-500 mt-2">
              If you need further assistance, contact our support team.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default HelpCenter;
