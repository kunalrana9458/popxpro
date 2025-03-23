import React, { useState } from "react";
import IconButton from "./IconButton";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = "https://example.com/api/login"; 

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const result = await response.json();
      if (response.ok) {
        console.log("Login successful:", result);
      } else {
        console.error("Login failed:", result);
      }
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <form className="flex flex-col ml-3 gap-y-8 w-[85%] mt-8" onSubmit={handleSubmit}>
    {/* email addresd */}
      <div className="flex flex-col relative">
        <label htmlFor="emailAddress" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[135px] pl-2">
          Email Address
        </label>
        <input
          type="email"
          id="emailAddress"
          name="emailAddress"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="border-2 p-2 bg-[#f4f4f4] rounded-md focus:border-[#8057f2] outline-none text-[#767676]"
        />
      </div>

      {/* password  */}
      <div className="flex flex-col relative">
        <label htmlFor="password" className="absolute -top-3 text-[#8057f2] font-semibold bg-[#f4f4f4] left-2 w-[90px] pl-2">
          Password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          className="border-2 p-2 rounded-md bg-[#f4f4f4] focus:border-[#8057f2] outline-none text-[#767676]"
        />
      </div>

      {/* button for submission  */}
      <IconButton
        customClass='bg-[#767676] text-lg font-semibold opacity-[60%] text-[#f4f4f4] p-y-2'
        text='Login' 
      />
    </form>
  );
};

export default LoginForm;
