import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import BMICalculator from './Bmicalculator';
import MortgageCalculator from './MortgageCalculator';
// import App from './App';
// import RegistrationForm from './RegistrationForm';
// import RegisterForm from './RegisterForm';
// import RegisterForm from './RegisterForm';
// import ControlledForm from './ControlledForm';
// import UncontrolledForm from './UncontrolledForm';
// import Parent from './Parent';
// import ParentComponent from './ParentComponent';
// import ParentComponent from './ParentComponent';
// import LocationDisplay from './LocationDisplay';
// import Navi from './Routes/Navi';
// import Root from './Routes/Root';
// import Home from './Routes/Home';
// import About from './Routes/About';
// import Contact from './Routes/Contact';
// import NoPage from './Routes/NoPage';
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Root />,
//     children:[
//       { index: true, element: <Home />},
//       { path: "about", element: <About />},
//       { path: "contact", element: <Contact />},
//       { path: "*", element: <NoPage />}
//     ],
//   },
// ]);
// ReactDOM.createRoot(document.getElementById('root')).render(
// <RouterProvider router={router} />
// );

// import Param from './Param';
// import ControlledForm from './ControlledForm';
// import UncontrolledForm from './UncontrolledForm';
// import RegistrationForm from './RegistrationForm';
// import RegisterForm from './RegisterForm';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
   <BMICalculator />
    <MortgageCalculator />
    {/* <RegistrationForm />
    <RegisterForm /> */}
     {/* <ControlledForm /> 
     <br /> 
      <UncontrolledForm /> */}
       {/* <RegisterForm /> */}
    {/* <Parent />
    <ParentComponent />  */}

     
     {/* <RegisterForm /> */}
   
    {/* <BrowserRouter>
      <LocationDisplay />
      <Navi />
      <Param />
    </BrowserRouter> */}
 </React.StrictMode>
);


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
   
//   </React.StrictMode>
// );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
