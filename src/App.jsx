import React from 'react';
import {  Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import About from './pages/About';

const App =() => {
  return (
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path= "/contact" element= {<Contact />} />
      <Route path= "/blog" element= {<Blog />} />
      <Route path= "/about" element= {<About />} />
    </Routes>

  )
}

export default App;
