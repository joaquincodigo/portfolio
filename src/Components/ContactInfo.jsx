import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import CopyButton from "./CopyButton";

const ContactInfo = ({ isContactInfoHidden }) => {
  const { theme } = useContext(ThemeContext);

  const displayStatus = isContactInfoHidden ? "hidden" : "flex";

  const GITHUB_DARKBLUE_ICON = "images/contactIcons/github_darkblue.svg";
  const GITHUB_PALEBLUE_ICON = "images/contactIcons/github_paleblue.svg";
  const LINKEDIN_DARKBLUE_ICON = "images/contactIcons/linkedin_darkblue.svg";
  const LINKEDIN_PALEBLUE_ICON = "images/contactIcons/linkedin_paleblue.svg";
  const MAIL_DARKBLUE_ICON = "images/contactIcons/mail_dark_blue.svg";
  const MAIL_PALEBLUE_ICON = "images/contactIcons/mail_paleblue.svg";
  const PHONE_DARKBLUE_ICON = "images/contactIcons/phone_darkblue.svg";
  const PHONE_PALEBLUE_ICON = "images/contactIcons/phone_paleblue.svg";

  return (
    <div
      className={`ContactInfo ${displayStatus} rounded-xl mb-6 py-3 px-3 mx-auto text-xl bg-white dark:bg-blue-90 text-blue-100 dark:text-blue-10`}
    >
      <ul className="flex flex-col space-y-2.5">
        <li>
          <img
            className="w-4 [min-width:387px]:w-6 align-middle me-3 inline-block"
            src={theme === "dark" ? PHONE_PALEBLUE_ICON : PHONE_DARKBLUE_ICON}
            alt="phone"
          />
          <span className="align-middle me-1">(+598) 98 577 384</span>
          <span className="relative top-[3px] align-middle ">
            <CopyButton stringToCopy={"(+598) 98 577 384"} />
          </span>
        </li>
        <li>
          <img
            className="w-4 [min-width:387px]:w-6 me-3 inline-block"
            src={theme === "dark" ? MAIL_PALEBLUE_ICON : MAIL_DARKBLUE_ICON}
            alt="mail"
          />
          <span className="align-middle me-1 max-[385px]:hidden">
            joaquin.codigo@gmail.com
          </span>
          <span className="align-middle me-1 min-[385px]:hidden">
            joaquin.codigo@gmai...
          </span>
          <span className="relative top-[3px] align-middle">
            <CopyButton stringToCopy={"joaquin.codigo@gmail.com"} />
          </span>
        </li>
        <li>
          <img
            className="w-4 [min-width:387px]:w-6 me-3 inline-block"
            src={
              theme === "dark" ? LINKEDIN_PALEBLUE_ICON : LINKEDIN_DARKBLUE_ICON
            }
            alt="linkedin"
          />
          <span className="align-middle me-1">
            <span className="align-middle me-1 max-[385px]:hidden">
              linkedin.com/in/joaquincodigo
            </span>
            <span className="align-middle me-1 min-[385px]:hidden">
              linkedin.com/in/joa...
            </span>
          </span>
          <span className="relative top-[3px] align-middle">
            <CopyButton stringToCopy={"linkedin.com/in/joaquincodigo"} />
          </span>
        </li>
        <li>
          <img
            className="w-4 [min-width:387px]:w-6 me-3 inline-block"
            src={theme === "dark" ? GITHUB_PALEBLUE_ICON : GITHUB_DARKBLUE_ICON}
            alt="github"
          />
          <span className="align-middle me-1 max-[385px]:hidden">
            github.com/joaquincodigo
          </span>
          <span className="align-middle me-1 min-[385px]:hidden">
            github.com/joaquinc...
          </span>
          <span className=" relative top-[3px] align-middle">
            <CopyButton stringToCopy={"github.com/joaquincodigo"} />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
