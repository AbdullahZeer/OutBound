import './App.css';
import React, { Component }  from 'react';
import Blog from './components/Blog';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";


function App() {

  const darkTheme = createMuiTheme({
    typography: {
      fontFamily: `'Comfortaa', cursive`,
      fontSize: 9,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500
    },
    palette: {
      type: "dark",
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 2560,
      },
    },

  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <Blog/>
        </ThemeProvider>
    </div>
  );
}

export default App;
