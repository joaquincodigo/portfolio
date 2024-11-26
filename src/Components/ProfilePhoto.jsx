import React from "react";

const ProfilePhoto = () => {
  return (
    <div className="ProfilePhoto w-32 h-32 mb-9 mx-auto">
      <img
        className="rounded-full w-full h-full ring-2 p-0.5 ring-blue-30 dark:ring-blue-70"
        src="images/ProfilePic.jpg"
        alt="Profile"
      />
    </div>
  );
};

export default ProfilePhoto;


