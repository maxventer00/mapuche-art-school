import "./App.css";
import Routes from "./core/routes";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./core/theme";
import Footer from "./containers/Shared/footer";
import { useState, createContext, Dispatch, SetStateAction } from "react";

type AppContextState = { language: string };

const LanguageContextDefault = {
  language: "English",
  setLanguage: (language: AppContextState) => {},
};

export const LanguageContext: any = createContext(LanguageContextDefault);

function App() {
  const [language, setLanguage] = useState(LanguageContextDefault.language);
  const value = { language, setLanguage };

  return (
    <LanguageContext.Provider value={value}>
      <ThemeProvider theme={theme}>
        <div className="App">
          <Routes />
        </div>
      </ThemeProvider>
    </LanguageContext.Provider>
  );
}

export default App;
