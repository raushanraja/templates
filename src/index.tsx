/* @refresh reload */
import { render } from "solid-js/web";
import App from "./App";
import './styles.css'
import { createThemeStore, ThemeContext } from "./Stores/Theme";

render(() => {
    const [theme, setTheme] = createThemeStore();
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <App />
        </ThemeContext.Provider>
    )
}, document.getElementById("root") as HTMLElement);
