import React from "react";
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ContactInfo = ({ isContactInfoHidden }) => {
  const { theme } = useContext(ThemeContext);

  const displayStatus = isContactInfoHidden ? "hidden" : "flex";

  const GITHUB_DARKBLUE_ICON = "/images/contactIcons/github_darkblue.svg";
  const GITHUB_PALEBLUE_ICON = "/images/contactIcons/github_paleblue.svg";
  const LINKEDIN_DARKBLUE_ICON = "/images/contactIcons/linkedin_darkblue.svg";
  const LINKEDIN_PALEBLUE_ICON = "/images/contactIcons/linkedin_paleblue.svg";
  const MAIL_DARKBLUE_ICON = "/images/contactIcons/mail_dark_blue.svg";
  const MAIL_PALEBLUE_ICON = "/images/contactIcons/mail_paleblue.svg";
  const PHONE_DARKBLUE_ICON = "/images/contactIcons/phone_darkblue.svg";
  const PHONE_PALEBLUE_ICON = "/images/contactIcons/phone_paleblue.svg";

  return (
    <div
      className={`ContactInfo ${displayStatus} rounded-xl mb-6 py-3 px-3 mx-auto text-xl bg-white dark:bg-blue-90 text-blue-100 dark:text-blue-10`}
    >
      <ul className="flex flex-col space-y-2.5">
        <li>
          <img
            className="w-6 align-middle me-3 hidden min-[402px]:inline-block"
            src={theme === "dark" ? PHONE_PALEBLUE_ICON : PHONE_DARKBLUE_ICON}
            alt="phone"
          />
          <span className="align-middle">098 577 384</span>
        </li>
        <li>
          <img
            className="w-6 align-middle me-3 hidden min-[402px]:inline-block"
            src={theme === "dark" ? MAIL_PALEBLUE_ICON : MAIL_DARKBLUE_ICON}
            alt="mail"
          />
          <a
            className="align-middle hover:underline"
            href="mailto:joaquin.codigo@gmail.com"
          >
            joaquin.codigo@gmail.com
          </a>
        </li>
        <li>
          <img
            className="w-6 align-middle me-3 hidden min-[402px]:inline-block"
            src={
              theme === "dark" ? LINKEDIN_PALEBLUE_ICON : LINKEDIN_DARKBLUE_ICON
            }
            alt="linkedin"
          />
          <a
            href="http://www.linkedin.com/in/joaquincodigo"
            target="_blank"
            rel="noopener noreferrer"
            className="align-middle hover:underline"
          >
            linkedin.com/in/joaquincodigo
          </a>
        </li>
        <li>
          <img
            className="w-6 align-middle me-3 hidden min-[402px]:inline-block"
            src={theme === "dark" ? GITHUB_PALEBLUE_ICON : GITHUB_DARKBLUE_ICON}
            alt="github"
          />
          <a
            href="http://www.github.com/joaquincodigo"
            target="_blank"
            rel="noopener noreferrer"
            className="align-middle hover:underline"
          >
            github.com/joaquincodigo
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
