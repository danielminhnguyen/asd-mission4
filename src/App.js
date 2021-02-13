import Main from "./layout/Main";
import { defaultTheme } from "./themes";
import { ThemeProvider } from "@material-ui/styles";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
