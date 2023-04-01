import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import '../styles/Global.css';

function Public() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default Public;
