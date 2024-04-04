/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaStar } from "react-icons/fa";
import './style.css';

export default function StarRating({ noOfStars }) {

    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }
  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }
  function handleMouseLeave() {
    setHover(rating);
  }
  return (
    <div>
      {
        // Array() can be called with or without new. Both create a new Array instance.
        // With Array(5) it will create  an array of length 5, but not fill the elements in that array yet.
        Array(noOfStars)
          .fill()
          .map((_, index) => {
            index += 1;
            return (
              <FaStar
                key={index}
                size={40}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                className={ index <= (hover || rating) ? "active" : "inactive" }
              />
            );
          })
      }
    </div>
  );
}
