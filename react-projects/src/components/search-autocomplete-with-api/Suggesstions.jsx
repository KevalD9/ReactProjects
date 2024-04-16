/* eslint-disable react/prop-types */
const Suggesstions = ({ data, handleClick }) => {
  return (
    <ul>
      {data && data.length
        ? data.map((item, index) => <li onClick={handleClick} key={index}>{item}</li>)
        : "No User Found" }
    </ul>
  );
};

export default Suggesstions;
