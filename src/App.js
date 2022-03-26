import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import HomePgae from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import Navbar from './components/Navbar';

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/math-magicians/" element={<HomePgae />} />
      <Route path="/math-magicians/calculator" element={<CalculatorPage />} />
      <Route path="/math-magicians/quote" element={<QuotePage />} />
    </Routes>
  </>
);

export default App;
