/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import useOutsideClick from ".";

const UseOutsideClickTest = () => {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();
  useOutsideClick(ref, () => setShowContent(false));
  
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is Random Content.</h1>
          <p>
            Please click outside of this to close this. It won't close if you
            click inside of this content
          </p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
};

export default UseOutsideClickTest;
