import React from 'react';
import { useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';

function MainPage() {
  const location = useLocation();
  const name = new URLSearchParams(location.search).get('name');

  return (
    <div>
      <NavBar />
      <h1>Hi {name}, Welcome to SPITALAN Personal Project</h1>
      {/* Resto del contenido de la página */}
    </div>
  );
}

export default MainPage;
