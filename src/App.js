import React,{useState} from 'react';
import Login from './Login';
import Layout from './Layout';
import Details from './Details';
import AddInfo from './AddInfo';
import { Route, Routes } from 'react-router-dom';

export default function App() {
  const[loggedin,setLoggedin]=useState(false);

  return (
    <Routes>
      <Route path="/" element={<Login setLoggedin={setLoggedin}/>} />
      <Route path="/layout" element={<Layout setLoggedin={setLoggedin} loggedin={loggedin}/>}>
        <Route index element={<Details />} />
        <Route path="/layout/*" element={<AddInfo />} />
      </Route>
    </Routes>
  );
}
