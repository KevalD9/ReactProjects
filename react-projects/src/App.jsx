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

      {/* Light Dark Theme Toggle */}
      {/* <ScrollIndicator /> */}

      {/* Custom Tabs Component */}
      {/* <CustomTabs /> */}

      {/* User Profile Finder Component */}
      {/* <UserProfileFinder /> */}

      {/* Search Auto Complete with API component*/}
      {/* <SearchAutoComplete /> */}

      {/* Tic Tac Toe Game*/}
      {/* <TicTacToe /> */}

      {/* Feature Flag Component Using Context*/}
      <FeatureFlagGlobalState>
        <FeatureFlag />
      </FeatureFlagGlobalState>
    </>
  )
}

export default App
