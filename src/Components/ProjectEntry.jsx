import React, { useContext } from "react";

const ProjectEntry = ({ title, text, image, link, tags }) => {

  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div className="ProjectEntry mb-6 p-6 rounded-3xl shadow-md shadow-blue-30 dark:shadow-blue-90 dark:border dark:border-blue-70 text-blue-100 dark:text-blue-10 bg-white dark:bg-blue-90 max-w-[463px] mx-auto hover:ring-1 transition-all duration-200 ring-blue-80 dark:ring-blue-50">
        {/* TITLE */}
        <h3 className="text-xl font-bold mb-6">{title}</h3>

        {/* TEXT */}
        <p className="text-base mb-6">{text}</p>

        {/* IMAGE */}
        <img className="rounded-md mb-6" src={image} alt="Project Preview" />

        {/* TAGS */}
        <div className="items-start flex flex-wrap w-100">
        {tags.map((tag, index) => (
          <span className="bg-blue-20 shadow-sm shadow-blue-50 dark:bg-blue-70 text-sm px-1 me-2 mb-2 whitespace-nowrap rounded rounded-ml" key={index}>{tag}</span>
        ))}
        </div>

      </div>
    </a>
  );
};

export default ProjectEntry;
