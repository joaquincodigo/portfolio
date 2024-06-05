import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ContactInfo = ({ isContactInfoHidden }) => {
  const { theme } = useContext(ThemeContext);

  const displayStatus = isContactInfoHidden ? "hidden" : "flex";

  return (
    <div
      className={`ContactInfo ${displayStatus} rounded-xl mb-6 py-3 px-3 mx-6 text-xl bg-white dark:bg-blue-90 text-blue-100 dark:text-blue-10`}
    >
      <ul>
        <li className="mb-3">
          <img src="/images/smartphone.png" alt="phone" /> 098 577 384
        </li>
        <li className="mb-3">
          <span className="">X</span> joaquin.codigo@gmail.com
        </li>
        <li className="mb-3">
          ><span className="">X</span> linkedin/username
        </li>
        <li className="mb-3">
          <span className="">X</span> github/username
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
