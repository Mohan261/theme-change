import React, { useContext } from "react";
import { Post } from "./PostProvider";

const ThemeContext = () => {
  const { theme, toggleTheme } = useContext(Post);
  return (
    <div className={theme ? "light" : "dark"}>
      <p>ThemeContext</p>
      <button onClick={toggleTheme}>{theme ? "light" : "dark"}</button>
    </div>
  );
};

export default ThemeContext;
