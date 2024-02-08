import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LandingPage from './LandingPage/LandingPage';
import SignupPage from './SignupPage/SignupPage';
import LoginPage from './LoginPage/LoginPage';
import SignupCompletePage from './SignupPage/SignupCompletePage';
import SettingPage from './SettingPage/SettingPage';
import ProfilePage from './ProfilePage/ProfilePage';
import ProfileEditPage from './ProfilePage/ProfileEditPage';
import EditPwPage from './ProfilePage/EditPwPage';
import CalendarPage from './CalendarPage/CalendarPage';
import FortunePage from './FortunePage/FortunePage';
import ErrorPage from './ErrorPage/ErrorPage';
import UserInfoPage from './SignupPage/UserInfoPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/complete" element={<SignupCompletePage />} />
        <Route path="/signup/userinfo" element={<UserInfoPage />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/setting" element={<SettingPage />} />

        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/profile/editPassword" element={<EditPwPage />} />

        <Route path="/home" element={<HomePage />} />
        <Route path="/calendar" element={<CalendarPage />} />
        <Route path="/fortune" element={<FortunePage />} />

        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
