import React, { useContext } from "react";

const ProjectEntry = ({ title, text, image, link }) => {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="ProjectEntry mb-6 p-6 rounded-3xl shadow-md shadow-blue-30 dark:shadow-blue-90 dark:border dark:border-blue-70 text-blue-100 dark:text-blue-10 bg-white dark:bg-blue-90 max-w-[463px] mx-auto hover:ring-1 ring-blue-80 dark:ring-blue-50">
        {/* TITLE */}
        <h3 className="text-xl font-bold mb-6">{title}</h3>

        {/* TEXT */}
        <p className="text-base mb-6">{text}</p>

        {/* IMAGE */}
        <img className="rounded-md mb-6" src={image} alt="Project Preview" />
      </div>
    </a>
  );
};

export default ProjectEntry;
