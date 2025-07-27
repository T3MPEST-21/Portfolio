// src/router/AppRouter.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/home/HomePage';
import ProjectsPage from '../pages/projects/ProjectPage';
import CommunityPage from '../pages/community/CommunityPage';
import Login from '../pages/Auth/Login'
import SignUp from '../pages/Auth/SignUp';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/projects" element={<ProjectsPage />} />
      <Route path="/communities" element={<CommunityPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
};

export default AppRouter;