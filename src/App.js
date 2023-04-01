import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Public from './Routes/Public';

function App() {
  return (
    <BrowserRouter>
      <Public />
    </BrowserRouter>
  );
}

export default App;
