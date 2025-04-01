import { SyntheticEvent, ChangeEvent, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Outlet } from 'react-router';

function App() {


  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;