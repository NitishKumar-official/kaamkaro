import React from "react";
import Header from "../../../shared/Header";
import Footer from "../../../shared/Footer";


const TermsCondition = () => {
  return (
    <>
    <Header/>
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Main Wrapper */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 bg-white shadow-md">
          <div className="py-6 px-4">
            <nav className="space-y-4">
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Introduction
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Your New Landing Pages
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Process and Timescales
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Meet Amy
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Your Investment
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Your Guarantee
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500"
              >
                Next Steps
              </a>
              <a
                href="#"
                className="block text-gray-700 font-medium hover:text-blue-500 border-l-4 border-blue-500 pl-2"
              >
                Terms and Conditions
              </a>
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1 bg-gray-50">
          {/* Header */}
          <header className="bg-blue-900 text-white py-8 px-4 md:px-8">
            <h1 className="text-3xl font-bold">Terms and Conditions</h1>
          </header>

          {/* Content */}
          <section className="py-10 px-4 md:px-8">
            <p className="text-gray-700 mb-6">
              This Agreement for design services is between{" "}
              <span className="font-semibold">{`{{brand_company_name}}`}</span> ("Designer") and{" "}
              <span className="font-semibold">{`{{company_name}}`}</span> ("Client"), for
              the performance of the services described in the proposal sent to
              Client on Proposal delivery date ("Proposal"). The parties,
              therefore, agree as follows:
            </p>

            <h2 className="text-2xl font-bold text-gray-800 mt-8 mb-4">
              Basic Terms and Conditions
            </h2>

            {/* Definitions Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  1. DEFINITIONS
                </h3>
                <p className="text-gray-700">
                  As used herein and throughout this Agreement:
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>1.1 Agreement</strong> means the entire content of
                  this Basic Terms and Conditions document, the Proposal
                  document(s), Schedule A, together with any other Supplements
                  designated below, together with any exhibits or schedules
                  hereto.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>1.2 Client Content</strong> means all materials,
                  information, photography, writings, and other creative
                  content provided by Client for use in the preparation of
                  and/or incorporation in the Deliverables.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>1.3 Copyrights</strong> means the property rights in
                  original works of authorship, expressed in a tangible medium
                  of expression, as defined and enforceable under [US/UK/EU]
                  Copyright Law.
                </p>
                <p className="text-gray-700 mt-2">
                  <strong>1.4 Deliverables</strong> means the services and work
                  product specified in the Proposal to be delivered by Designer
                  to Client, in the form and media specified in the Proposal.
                </p>
              </div>

              <div>
                <p className="text-gray-700">
                  <strong>1.5 Designer Tools</strong> means all design tools
                  developed and/or utilized by Designer in performing the
                  Services, including pre-existing and newly developed software,
                  web authoring tools, type fonts, and application tools, which
                  remain the exclusive property of Designer.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default TermsCondition;
