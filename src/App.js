import './App.css';
import TicTacToe from './TicTacToe';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import themes from './themes';

const defaultTheme = Object.keys(themes)[0];

function App() {
  const [selectedTheme, setSelectedTheme] = useState(defaultTheme);
  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <TicTacToe/>
    </ThemeProvider>
  );
}

export default App;
