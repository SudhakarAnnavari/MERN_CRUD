import React from 'react';
import {Routes, Route, } from 'react-router-dom';
import Home from './components/Home/Home';
import UpdateForm from './components/UpdateForm/UpdateForm';
import CreateForm from './components/CreateForm/CreateForm';

const App = () => {
  return (
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/create' Component={CreateForm} />
        <Route path='/update/:id' Component={UpdateForm}/>
      </Routes>
  );
};

export default App;
