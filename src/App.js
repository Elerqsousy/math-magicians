import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CalculatorPage from './pages/CalculatorPage';
import HomePgae from './pages/HomePage';
import QuotePage from './pages/QuotePage';
import Navbar from './components/Navbar';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePgae />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="/quote" element={<QuotePage />} />
        </Routes>
      </>
    );
  }
}

export default App;
