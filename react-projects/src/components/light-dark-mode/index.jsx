import useLocalStorage from "./useLocalStorage";
import "./style.css";

const LightDarkTheme = () => {
    const [theme, setTheme] = useLocalStorage("theme", "Light");

    function handleToggleTheme(){
        setTheme(theme === "Light" ? "Dark" : "Light");
    }

  return (
    <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
            <p> {theme} Theme </p>
            <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
    </div>
  )
}

export default LightDarkTheme
