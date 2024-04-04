/* eslint-disable react/prop-types */
import MenuList from "./MenuList"
import menus from "./data"
import "./style.css"

export default function SideMenutree(){

  console.log(menus);

  return (
    <div className="tree-view-container">
      <MenuList list={menus}/>
    </div>
  )
}


