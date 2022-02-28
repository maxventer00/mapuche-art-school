import './App.css';
import Routes from "./core/routes";
import { ThemeProvider } from '@mui/material/styles';
import theme from './core/theme';
import Footer from "./containers/Shared/footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Routes />

      </div>
    </ThemeProvider>
  );
}

export default App;
