import React, { useState } from 'react';
import Login from './Login';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import Details from './Details';
import AddInfo from './AddInfo';

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/layout" element={<Layout />}>
        <Route index element={<Details />} />
        <Route path="/layout/*" element={<AddInfo />} />
      </Route>
    </Routes>
  );
}
