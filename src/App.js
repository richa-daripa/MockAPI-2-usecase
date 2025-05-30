import React from 'react';
import Login from './Login';
import Layout from './Layout';
import Details from './Details';
import AddInfo from './AddInfo';
import { Route, Routes } from 'react-router-dom';

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
