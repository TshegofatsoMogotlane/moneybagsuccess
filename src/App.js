import { useContext } from "react";
import Router from "./Router";
import { GlobalStyles } from "./styles/Global.styled";
import { ThemeContext } from "./context/ThemeContext";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/theme";



function App() {
  const { theme } = useContext(ThemeContext);
  const  mode  = (theme==="light"? lightTheme: darkTheme)
  return (
    <ThemeProvider theme={mode}>
      <GlobalStyles />
      <Router />
    </ThemeProvider>
  );
}

export default App;
