import React, { useEffect, useState } from "react";
import { FaCamera } from "react-icons/fa";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfileDetails = async () => {
      try {
        const res = await fetch("https://popxbackend.com/api/profile");
        const data = await res.json();
        if (res.ok) {
          setProfileData(data);
        } else {
          console.log("Error in fetching Profile data");
        }
      } catch (error) {
        console.log("ERROR DURING API CALLS:", error);
      }
    };
    fetchProfileDetails();
  }, []);

  return (
    <div className="bg-[#f4f4f4] w-full h-[100vh]">
      <h1 className="bg-white p-4 text-[1.25rem] font-[400]">
        Account Settings
      </h1>
      <div className="flex flex-col p-4 gap-y-4">
        <div className="flex gap-x-4 mt-8">
          {/* image section  */}
          <div className="h-[85px] w-[85px] bg-black rounded-full relative">
            <img
              className="object-cover w-full h-full rounded-full"
              src="https://img.freepik.com/free-photo/closeup-young-female-professional-making-eye-contact-against-colored-background_662251-651.jpg"
              alt=""
            />
            <div className="absolute bg-purple-500 w-[30px] h-[30px] bottom-0 right-0 rounded-full flex items-center justify-center">
              <FaCamera className="text-white" />
            </div>
          </div>

          {/* name and gmail section  */}
          <div className="flex flex-col ">
            <p className="font-semibold"> Marry Does </p>
            <p> Marry@Gmail.com </p>
          </div>
        </div>
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipcing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
    </div>
  );
};

export default Profile;
