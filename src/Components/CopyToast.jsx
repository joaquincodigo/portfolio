import { useContext } from "react";
import ThemeContext from "./ThemeContext";
import LanguageContext from "./LanguageContext";
import { useToast } from "./ToastContext";

const CopyToast = () => {
  const { theme } = useContext(ThemeContext);
  const { language } = useContext(LanguageContext);
  const { textToClipboard, visible } = useToast();

  const message =
    language === "en" ? " copied to the clipboard" : " copiado al portapapeles";

  return (
    <div
      className={`min-h-14 w-100vh flex items-center fixed bottom-4 left-1/2 -translate-x-1/2 z-50
        px-8 py-4 md:px-4 md:py-2 rounded-full transition-all duration-300 transform
        ${
          theme === "dark"
            ? "bg-blue-70 text-white shadow-md"
            : "bg-blue-10 text-blue-90 border shadow-md shadow-blue-80/50"
        }
        ${
          visible
            ? "opacity-100 translate-y-0"
            : "opacity-0 pointer-events-none translate-y-2"
        }
      `}
    >
      <p>
        <span className="font-bold">{textToClipboard}</span>
        {message}
      </p>
    </div>
  );
};

export default CopyToast;
