import { SyntheticEvent, ChangeEvent, useState } from 'react';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import { ToastContainer } from "react-toastify";
import { UserProvider } from './Context/useAuth';

function App() {


  return (
    <>
      <UserProvider>
        <Navbar />
        <Outlet />
        <ToastContainer />
      </UserProvider>
    </>
  );
}

export default App;