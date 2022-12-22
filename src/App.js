import React from 'react';
import Home from './components/Home';
import Message from './components/Message';
import './App.css';
import './view.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/message" element={<Message />} />
      </Routes>
    </BrowserRouter> 
    
  );
}

export default App; 
