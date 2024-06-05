import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ContactInfo = ({ isContactInfoHidden }) => {
  const { theme } = useContext(ThemeContext);

  const displayStatus = isContactInfoHidden ? "hidden" : "flex";

  return (
    <div
      className={`ContactInfo ${displayStatus} rounded-xl mb-6 py-3 px-3 text-xl bg-white`}
    >
      <ul>
        <li>
          <span className="font-bold mb-3">X</span> 098 577 384
        </li>
        <li>
          <span className="font-bold mb-3">X</span> joaquin.codigo@gmail.com
        </li>
        <li>
          <span className="font-bold mb-3">X</span> linkedin/username
        </li>
        <li>
          <span className="font-bold mb-3">X</span> github/username
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
