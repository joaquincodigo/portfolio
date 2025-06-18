import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const CopyButton = ({ stringToCopy }) => {
  const { theme } = useContext(ThemeContext);

  const handleClick = () => {
    // todo
  };

  return (
    <button
      className="[hover:hover]:hover:bg-blue-10 p-[1px] rounded-md text-blue-90"
      onClick={handleClick}
    >
      <svg
      className="w-[1.2vw]"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-6"
      >
        <g transform="scale(-1,1) translate(-24,0)">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
          />
        </g>
      </svg>
    </button>
  );
};

export default CopyButton;
