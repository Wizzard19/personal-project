import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NameForm() {
  const [name, setName] = useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    const inputName = event.target.value;
    setName(inputName.charAt(0).toUpperCase() + inputName.slice(1));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/main?name=${name}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type='text'
          placeholder='Ingresa tu nombre'
          value={name}
          onChange={handleChange}
        />
      </label>
      <button type='submit'>Enviar</button>
    </form>
  );
}

export default NameForm;
