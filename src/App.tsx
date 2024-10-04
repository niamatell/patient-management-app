import React from 'react';
import background from './assets/Background.png';
import Login from './pages/login';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddForm from './pages/addForm';
import Profile from './pages/profile';
import TablePage from './pages/tablePage';

import './App.css';


function App() {
  return (
    <div className="min-h-screen bg-cover bg-center p-[20px]"
     style={{ backgroundImage: `url(${background})` }}>
         <Navbar />
         <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/patients" element={<TablePage />} />
        <Route path="/addpatient" element={<AddForm />} />
        <Route path="/patient/:id" element={<Profile />} />
      </Routes>
    </Router>
    </div>

  );
}

export default App;
