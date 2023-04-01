import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MainPage from '../pages/MainPage';
import '../styles/Global.css';

function Public() {
  return (
    <>
      <div
        className='contain'
        style={{ display: 'block', margin: '0 auto', padding: '0' }}
      >
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/main' element={<MainPage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default Public;
