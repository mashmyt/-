import { ThemeButton } from "../../styledComponents/ThemeSwitching.styled.js";
import { basic, light, dark } from "../../styledComponents/Theme.styled.js";
import ThemeNumbers from "./ThemeNumbers.js";

const ThemeButtons = (props) => {
  return (
    <nav className="theme-toggle">
      <ThemeNumbers />
      <section className="theme-value">
        <ThemeButton
          aria-label="basic"
          className="theme-btn basic active"
          onClick={(e) => props.HandleThemeChange(basic, e)}
        ></ThemeButton>

        <ThemeButton
          aria-label="light"
          className="theme-btn light"
          onClick={(e) => props.HandleThemeChange(light, e)}
        ></ThemeButton>

      </section>
    </nav>
  );
};

export default ThemeButtons;
