import ThemeSwitcher from "./ThemeSwitcher";

const Header = ({ HandleThemeChange }) => {
  return (
    <header>
      <h1>Калькулятор</h1>
      <ThemeSwitcher HandleThemeChange={HandleThemeChange} />
    </header>
  );
};

export default Header;
