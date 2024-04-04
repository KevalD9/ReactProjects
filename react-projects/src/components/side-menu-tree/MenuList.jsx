/* eslint-disable react/prop-types */

import MenuItem from "./MenuItem";
import "./style.css"

const MenuList = ({ list }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => {
            return <MenuItem key={index} item={listItem} />;
          })
        : null}
    </ul>
  );
};

export default MenuList;
