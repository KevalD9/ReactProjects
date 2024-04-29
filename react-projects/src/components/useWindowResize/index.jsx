import { useLayoutEffect, useState } from "react";

const useWindowResize = () => {
  const [windowResize, setWindowResize] = useState({
    width: 0,
    height: 0,
  });

  useLayoutEffect(() => {

    function handleResize(){
        setWindowResize({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      };

  }, []);

  return windowResize;
};

export default useWindowResize;
