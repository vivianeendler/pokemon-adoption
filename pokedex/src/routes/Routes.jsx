import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from '../pages/home/Home';
import Pokedex from '../pages/pokedex/Pokedex';
import NotFound from '../pages/notFound/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const RoutesWrapper = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default RoutesWrapper;