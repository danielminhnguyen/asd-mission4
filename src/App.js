import Main from "./layout/Main";
import { defaultTheme } from "./themes";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import { Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={defaultTheme}>
          <Main />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
