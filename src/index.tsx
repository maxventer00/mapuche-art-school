import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import '../src/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./i18n";
ReactDOM.render(
  <React.StrictMode>
    <style>{"\
    .css-1160xiw-MuiPaper-root-MuiDrawer-paper {\
      background: 0 !important;\
      top: 4rem !important;\
      box-shadow: none !important;\
    }\
    .css-1vfk20j-MuiTypography-root {\
      margin: 0 !important;\
      font-family: Lato,Prata !important;\
      font-weight: 500 !important;\
      font-size: 1.2rem !important;\
      line-height: 1.5 !important;\
      display: block !important;\
    }\
    .css-185z3ai-MuiPaper-root {\
      margin-bottom: 0.75% !important;\
    }\
    "}</style>
    <Suspense fallback={<div>Loading...</div>}>
    <App />
    </Suspense>
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
