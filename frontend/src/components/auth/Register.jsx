import React, { useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

const Register = () => {
  // const history = useHistory();

  // State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    pincode: "",
  });

  // State for form errors
  const [errors, setErrors] = useState({});

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate the form data
  const validateForm = () => {
    let validationErrors = {};
    if (!formData.firstName)
      validationErrors.firstName = "First Name is required";
    if (!formData.lastName) validationErrors.lastName = "Last Name is required";
    if (!formData.email) validationErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      validationErrors.email = "Email is invalid";
    if (!formData.phone) validationErrors.phone = "Phone number is required";
    if (!formData.pincode) validationErrors.pincode = "Pincode is required";

    setErrors(validationErrors);
    return Object.keys(validationErrors).length === 0;
  };

  // Handle form submission
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!validateForm()) return;

  //   const formDataToSubmit = new FormData();
  //   formDataToSubmit.append("firstName", formData.firstName);
  //   formDataToSubmit.append("lastName", formData.lastName);
  //   formDataToSubmit.append("email", formData.email);
  //   formDataToSubmit.append("phone", formData.phone);
  //   formDataToSubmit.append("pincode", formData.pincode);

  //   try {
  //     const response = await axios.post(
  //       "http://localhost:8000/api/users/register",
  //       formDataToSubmit
  //     );

  //     if (response.status === 201) {
  //       // Redirect to the home page after successful registration
  //       window.location.href = response.data.redirect; // Redirect to the home page
  //     } else {
  //       console.error("Error:", response.data.message);
  //     }
  //   } catch (error) {
  //     console.error("There was an error registering the user!", error);
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    try {
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        formData, // Send the plain JSON object
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.status === 201) {
        window.location.href = response.data.redirect; // Redirect to the home page
      } else {
        console.error("Error:", response.data.message);
      }
    } catch (error) {
      console.error("There was an error registering the user!", error);
    }
  };
  

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gradient-to-r from-pink-500 to-orange-500 text-white">
      {/* Welcome Section */}
      <div className="w-full lg:w-1/3 flex flex-col justify-center items-center p-10 text-center">
        <h1 className="text-3xl lg:text-4xl font-bold mb-4">Welcome</h1>
        <p className="text-md lg:text-lg mb-6">
          You are 30 seconds away from earning your own money!
        </p>
        <button
          className="px-6 py-2 bg-white text-orange-500 font-semibold rounded-md hover:bg-gray-200"
          onClick={() => window.history.back()}
        >
          Go Back
        </button>
      </div>

      {/* Form Section */}
      <div className="w-full lg:w-2/3 bg-white text-black rounded-t-2xl lg:rounded-l-2xl p-6 lg:p-10">
        {/* Toggle Buttons */}
        <div className="flex justify-center lg:justify-end space-x-4 mb-6">
          <button className="px-4 py-2 bg-orange-500 text-white rounded-full font-medium">
            Basic
          </button>
          <button className="px-4 py-2 bg-gray-200 text-black rounded-full font-medium hover:bg-orange-100">
            Details
          </button>
        </div>

        <h2 className="text-xl lg:text-2xl font-semibold mb-6 text-center lg:text-left">
          Register Here
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name *"
              value={formData.firstName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
            <input
              type="text"
              name="lastName"
              placeholder="Last Name *"
              value={formData.lastName}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email *"
              value={formData.email}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            <input
              type="text"
              name="phone"
              placeholder="Your Phone *"
              value={formData.phone}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.phone && <p className="text-red-500">{errors.phone}</p>}
          </div>

          {/* pincode */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {errors.district && (
              <p className="text-red-500">{errors.district}</p>
            )}
            <input
              type="text"
              name="pincode"
              placeholder="Pincode *"
              value={formData.pincode}
              onChange={handleChange}
              className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-orange-500 text-white font-medium rounded-md hover:bg-orange-600"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
