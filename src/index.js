import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

//Konstanta yang dipanggil
// const HelloWord = () =>{
//   return <p>HelloWord</p>
// }
// const Test= () =>{
//   return <p>Cuma Tes Aja</p>
// }
// ReactDOM.render(<Test/>, document.getElementById('root'));
//React Dom untuk render component
// ReactDOM.render(<HelloWord />, document.getElementById('root'));



const Alwan = () => {
  return <p>Nama Saya Alwan Hafidzin Firdaus</p>
}
ReactDOM.render(<Alwan/> , document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
