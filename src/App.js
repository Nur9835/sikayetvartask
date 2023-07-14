import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {StudentProvider} from './context/StudentContext ';
import Login from './page/Login';
import Home from './page/Home';
import Students from './page/Students';
import Page404 from './page/Page404';

const App = () => {
  return (
    <div>
    <StudentProvider> 
    <Router>
       <Routes>
       <Route path="/" element={<Login />} />
       <Route path="/home" element={<Home />} />
       <Route path="/student" element={<Students />} />
       <Route path="*" element={  <Page404 /> } /> 
      </Routes>
    </Router>
    </StudentProvider>
    </div>
  );
};

export default App;
