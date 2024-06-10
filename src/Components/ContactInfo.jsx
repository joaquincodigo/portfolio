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

  const contactInfo = [
    {
      iconDark: PHONE_PALEBLUE_ICON,
      iconLight: PHONE_DARKBLUE_ICON,
      text: "098 577 384",
      alt: "phone",
    },
    {
      iconDark: MAIL_PALEBLUE_ICON,
      iconLight: MAIL_DARKBLUE_ICON,
      text: "joaquin.codigo@gmail.com",
      alt: "mail",
    },
    {
      iconDark: LINKEDIN_PALEBLUE_ICON,
      iconLight: LINKEDIN_DARKBLUE_ICON,
      text: "linkedin.com/in/joaquincodigo",
      alt: "linkedin",
    },
    {
      iconDark: GITHUB_PALEBLUE_ICON,
      iconLight: GITHUB_DARKBLUE_ICON,
      text: "github.com/joaquincodigo",
      alt: "github",
    },
  ];

  return (
    <div
      className={`ContactInfo ${displayStatus} rounded-xl mb-6 py-3 px-3 mx-auto text-xl bg-white dark:bg-blue-90 text-blue-100 dark:text-blue-10`}
    >
      <ul className="flex flex-col space-y-2.5">
        {contactInfo.map((info, index) => (
          <li className="" key={index}>
            <img
              className="w-6 align-middle me-3 hidden min-[402px]:inline-block"
              src={theme === "dark" ? info.iconDark : info.iconLight}
              alt={info.alt}
            />
            <span className="align-middle">{info.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
