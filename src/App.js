import React, { useState } from 'react';
import Login from './Login';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';

export default function App() {

  return (
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/layout/*" element={<Layout />} />
      </Routes>
  );
}
