import './App.css'
import Accordian from "./components/accordin";
import RandomColor from "./components/random-color";
import StarRating from "./components/star-rating";
import LoadMoreData from "./components/load-more-data";
import SideMenutree from './components/side-menu-tree';
import LightDarkTheme from "./components/light-dark-mode"
import ScrollIndicator from './components/scroll-indicator';
import CustomTabs from "./components/tabs";
import UserProfileFinder from './components/github-profile-finder';
import SearchAutoComplete from './components/search-autocomplete-with-api';
import TicTacToe from './components/tic-tact-toe';
import FeatureFlag from './components/feature-flag';
import FeatureFlagGlobalState from './components/feature-flag/context';
import UseFetchHookTest from './components/useFetch/test';
import UseOutsideClickTest from './components/useOutsideClick/test';
import UseWindowResizeTest from './components/useWindowResize/test';
import ScrollToTopBottom from './components/scroll-indicator/scrollToTopBottom';
import ScrollToSection from './components/scroll-indicator/scrollToSection';

function App() {

  return (
    <>
      {/* Accordin Component */}
      {/* <Accordian/> */}

      {/* Random Color Generator */}
      {/* <RandomColor/> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={5}/> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData /> */}

      {/* Side Menu Tree Component */}
      {/* <SideMenutree /> */}

      {/* Light Dark Theme Toggle */}
      {/* <LightDarkTheme /> */}

      {/* Scroll Indicator Percentage Component */}
      {/* <ScrollIndicator /> */}

      {/* <ScrollToTopBottom /> */}

      <ScrollToSection/>



      {/* Custom Tabs Component */}
      {/* <CustomTabs /> */}

      {/* User Profile Finder Component */}
      {/* <UserProfileFinder /> */}

      {/* Search Auto Complete with API component*/}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe Game*/}
      {/* <TicTacToe /> */}

      {/* Feature Flag Component Using Context*/}
      {/* <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState> */}

      {/* useFetch Hook Example */}
      {/* <UseFetchHookTest/> */}

      {/* useOutsideClick Hook Example */}
      {/* <UseOutsideClickTest/> */}

      {/* useWindowResize Hook Example */}
      {/* <UseWindowResizeTest/> */}
    </>
  )
}

export default App
