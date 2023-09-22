import React, { createContext, useState } from "react";
const Post = createContext();
const PostProvider = ({ children }) => {
  const [theme, setTheme] = useState(true);
  const toggleTheme = () => {
    setTheme(!theme);
  };
  return (
    <Post.Provider value={{ theme, toggleTheme }}>{children}</Post.Provider>
  );
};

export { PostProvider, Post };
