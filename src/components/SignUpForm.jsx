import React, { useState } from "react";
import IconButton from "./IconButton";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    password: "",
    companyName: "",
    isAgency: "",
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleCheckboxChange = (value) => {
    setSignUpData((prevData) => ({
      ...prevData,
      isAgency: value,
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const apiUrl = "https://popxbackend.com/api/signup"; 

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData), 
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Signup successful:", result);
      } else {
        console.error("Signup failed:", result);
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <form className="flex flex-col ml-3 gap-y-8 w-[85%] mt-4" onSubmit={handleSubmit}>
      {/* Full Name */}
      <div className="flex flex-col relative">
        <label htmlFor="fullName" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[100px] pl-2">
          Full Name <sup className="absolute top-3 text-red-500">*</sup>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={signUpData.fullName}
          onChange={handleInputChange}
          className="border-2 p-2 rounded-md focus:border-[#8057f2] outline-none text-[#767676] bg-[#f4f4f4]"
        />
      </div>

      {/* Phone Number */}
      <div className="flex flex-col relative">
        <label htmlFor="phoneNumber" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[140px] pl-2">
          Phone Number <sup className="absolute top-3 text-red-500">*</sup>
        </label>
        <input
          type="text"
          id="phoneNumber"
          name="phoneNumber"
          value={signUpData.phoneNumber}
          onChange={handleInputChange}
          className="border-2 p-2 rounded-md focus:border-[#8057f2] outline-none text-[#767676] bg-[#f4f4f4]"
        />
      </div>

      {/* Email Address */}
      <div className="flex flex-col relative">
        <label htmlFor="emailAddress" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[135px] pl-2">
          Email Address <sup className="absolute top-3 text-red-500">*</sup>
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={signUpData.emailAddress}
          onChange={handleInputChange}
          className="border-2 p-2 rounded-md focus:border-[#8057f2] outline-none text-[#767676] bg-[#f4f4f4]"
        />
      </div>

      {/* Password */}
      <div className="flex flex-col relative">
        <label htmlFor="password" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[90px] pl-2">
          Password <sup className="absolute top-3 text-red-500">*</sup>
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={signUpData.password}
          onChange={handleInputChange}
          className="border-2 p-2 rounded-md focus:border-[#8057f2] outline-none text-[#767676] bg-[#f4f4f4]"
        />
      </div>

      {/* Company Name */}
      <div className="flex flex-col relative">
        <label htmlFor="companyName" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[145px] pl-2">
          Company Name <sup className="absolute top-3 text-red-500">*</sup>
        </label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={signUpData.companyName}
          onChange={handleInputChange}
          className="border-2 p-2 rounded-md focus:border-[#8057f2] outline-none text-[#767676] bg-[#f4f4f4]"
        />
      </div>

      {/* Are you an agency? */}
      <div className="flex flex-col">
        <label className="text-lg font-medium">Are you an agency?</label>
        <div className="flex space-x-4 mt-2">
          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              id="isAgencyYes"
              name="isAgency"
              value="yes"
              checked={signUpData.isAgency === "yes"}
              onChange={() => handleCheckboxChange("yes")}
              className="w-5 h-5 appearance-none border-2 border-[#8057f2] rounded-full cursor-pointer
                         relative after:content-[''] after:w-2 after:h-2 after:rounded-full 
                         after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 
                         after:bg-[#8057f2] after:scale-0 checked:after:scale-100 transition-all duration-200"
            />
            <span>Yes</span>
          </label>

          <label className="flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              id="isAgencyNo"
              name="isAgency"
              value="no"
              checked={signUpData.isAgency === "no"}
              onChange={() => handleCheckboxChange("no")}
              className="w-5 h-5 appearance-none border-2 border-[#8057f2] rounded-full cursor-pointer
                         relative after:content-[''] after:w-2 after:h-2 after:rounded-full 
                         after:absolute after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 
                         after:bg-[#8057f2] after:scale-0 checked:after:scale-100 transition-all duration-200"
            />
            <span>No</span>
          </label>
        </div>
      </div>

      {/* Submit Button */}
      <IconButton 
        text="Create Account"
        customClass="bg-[#5D2DE6] text-lg font-semibold text-white p-y-2 mt-56" 
      />
    </form>
  );
};

export default SignUpForm;
