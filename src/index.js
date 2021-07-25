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



// const Alwan = () => {
//   return <p>Nama Saya Alwan Hafidzin Firdaus</p>
// }
// ReactDOM.render(<Alwan/> , document.getElementById('root'));
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// const name= 'Alwan';
// const element = <h1>Nama Saya Alwan, {name}</h1>;
// ReactDOM.render(
//   element, document.getElementById('root')
// );

// function formaterName(user){
//   return user.firstName + ' ' + user.lastName;
// }
// const user = {
//   firstName: 'Alwan',
//   lastName : 'Hafidzin'
// }

// const element = (
//   <h1>Halo, {formaterName(user)}</h1>
// );

// ReactDOM.render(
//   element, document.getElementById('root')
// );

// function cek (list) {
//   return list.jurusanDepan + ' ' + list.jurusanBelakang
// }
// const list = {
//   jurusanDepan : 'Sistem',
//   jurusanBelakang : 'Informasi'
// }
// // const element = (<h1>Nama Saya Alwan dari Jurusan, {cek(list)}</h1>);
// // ReactDOM.render(
// //   element , document.getElementById('root')
// // );

// function getJurusan(list){
//   if(list){
//     return <h1>LOl</h1>;
//   }else{
//     return <h1>Loh</h1>;
//   }
// }
// const element = (getJurusan(list));
// ReactDOM.render(
//    element, document.getElementById('root')
// );


//Atribut JSX :tanda kutip untuk menentukan string literal sebagai atribut

// const literal = <h1>Tes Aja</h1>;
// ReactDOM.render(
//   literal , document.getElementById('root')
// );


//Atribut kurung kurawal untuk menyematkan ekspresi di javascript

// const user = {
//   url : 'github.com'
// }
// const kurawal = <h1>Link github adalah : {user.url}</h1>;

// ReactDOM.render(
//   kurawal , document.getElementById('root')
// )



//Tidak Memiliki element anak bisa ditutup secara langsung misal <img />

const url = {
  link : 'github.com'
}
const tanpaTag = <img src={url.link} />;
ReactDOM.render(
  tanpaTag , document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
