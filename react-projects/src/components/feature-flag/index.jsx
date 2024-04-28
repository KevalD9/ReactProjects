import { useContext } from "react";
import { FeatureFlagsContext } from "./context";
import LightDarkTheme from "../light-dark-mode";
import TicTacToe from "../tic-tact-toe";
import RandomColor from "../random-color";
import Accordian from "../accordin";
import CustomTabs from "../tabs";
import SideMenutree from "../side-menu-tree";

const FeatureFlag = () => {
  const { loading, enableFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkTheme />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "showTreeView",
      component: <SideMenutree />,
    },
    {
      key: "showTabs",
      component: <CustomTabs />,
    },
  ];

//   function checkEnabledFlags(getCurrentKey) {
//     return enableFlags[getCurrentKey];
//   }

 
  if (loading) return <h1>Loading Data! Please Wait...</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((item) => {
        return enableFlags[item.key] ? item.component : null;
      })}
    </div>
  );
};

export default FeatureFlag;
