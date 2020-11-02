import './App.css';
import Blog from './components/Blog';
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import StarfieldAnimation from 'react-starfield-animation'


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
    }

  });
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
      <StarfieldAnimation
        numParticles = '200'
        style={{
          position: 'fixed',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0,0,0,.4)',

        }}
      />
        <Blog/>
        </ThemeProvider>
    </div>
  );
}

export default App;
