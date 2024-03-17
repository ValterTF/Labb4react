import React from 'react';

import Header from './components/Header'; // Import the Header components
import Footer from './components/Footer'; // Import the Footer components

import Home from "./pages/Home"; // Import the Home components
import Company from './pages/Company'; // Import the Company components
import Support from "./pages/Support"; // Import the Home components
import Products from "./pages/Products"; // Import the Home components
import Item from "./pages/Item"; // Import the Home components
import None from "./pages/None"; // Import the Home components

import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Header /> 
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/company' element={<Company />} /> 
            <Route path='/products' element={<Products />} /> 
            <Route path='/item' element={<Item />} /> 
            <Route path='/support' element={<Support />} /> 
            <Route path='/none' element={<None />} />
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;