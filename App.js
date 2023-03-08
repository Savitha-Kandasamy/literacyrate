import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Form from './Form';
import Home from './Home';
import Edit from './Edit';
import Table1 from './Table';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/details" element={<Table1 />} />
      </Routes>
    </div>
  );
}

export default App;