import React from 'react';
import { HomeView } from './views/HomeView';
import { Routes, Route } from 'react-router-dom';
import { ApplicationPage } from './components/ApplicationPage/ApplicationPage';
import { CategoryView } from './views/CategoryView';
import { FourZeroFourView } from './views/FourZeroFourView';


export default function NavigationRouter() {
  return <Routes>
    <Route path="/" element={<HomeView />} />
    <Route path="apps/:id" element={<ApplicationPage />} />
    <Route path="category/:id" element={<CategoryView />} />
    <Route path="*" element={<FourZeroFourView />} />
  </Routes>;
}
