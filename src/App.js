import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import DetailPage from './Pages/DetailPage';

const App =()=> {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage />} />
        <Route index element={<LandingPage />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/detailpage" element={<DetailPage />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
