import React from 'react';
import background from './assets/Background.png';
import Login from './pages/login';
import Navbar from './components/navbar';

import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-cover bg-center p-[20px]"
     style={{ backgroundImage: `url(${background})` }}>
         <Navbar />
        <Login />
    </div>

  );
}

export default App;
