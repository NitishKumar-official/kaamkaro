

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Register from './components/auth/Register';
import Profile from './components/pages/HomeCompo/Profile';
import Categories from './components/pages/HomeCompo//Categories';
import Wishlist from './components/pages/HomeCompo/Wishlist';
import HelpCenter from './components/pages/HomeCompo/ProfileCompo/HelpCenter';
import PrivacyPolicy from './components/pages/HomeCompo/ProfileCompo/PrivacyPolicy';
import TermsCondition from './components/pages/HomeCompo/ProfileCompo/TermsCondition';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/helpcenter" element={<HelpCenter />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/termscondition" element={<TermsCondition />} />
      </Routes>
    </Router>
  );
};

export default App;

