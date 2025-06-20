import { useEffect, useState } from "react";

/*
Used for changing the sources of the images of the project
according to the width of the viewport. On very narrow 
devices images get cropped and it looks bad. We are using
square image in those cases.
*/

const useIsMobile = (breakpoint = 490) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
