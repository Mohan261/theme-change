import './App.css';

import React from 'react'
import { PostProvider } from './PostProvider';
import ThemeContext from './ThemeContext';

const App = () => {
  return (
    <PostProvider>
      <ThemeContext/>
    </PostProvider>
  )
}

export default App
