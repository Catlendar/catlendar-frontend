import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import LandingPage from './LandingPage/LandingPage';
import SignupPage from './SignupPage/SignupPage';
import LoginPage from './LoginPage/LoginPage';
import SignupCompletePage from './SignupPage/SignupCompletePage';
import SettingPage from './SettingPage/SettingPage';
import ProfileEditPage from './ProfilePage/ProfileEditPage';
import EditPwPage from './ProfilePage/EditPwPage';
import CalendarPage from './CalendarPage/CalendarPage';
import FortunePage from './FortunePage/FortunePage';
import ErrorPage from './ErrorPage/ErrorPage';
import UserInfoPage from './SignupPage/UserInfoPage';
import Header from '../components/Common/Header/Header';
import NavBar from '../components/Common/NavBar/NavBar';
import ApiPage from './ApiPage';
import ProfilePage from './ProfilePage/ProfilePage';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/signup"
          element={
            <>
              <Header title="" />
              <SignupPage />
            </>
          }
        />
        <Route path="/signup/complete" element={<SignupCompletePage />} />
        <Route
          path="/signup/userinfo"
          element={
            <>
              <Header title="" />
              <UserInfoPage />
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              <Header title="" />
              <LoginPage />
            </>
          }
        />

        <Route
          path="/setting"
          element={
            <>
              <Header title="설정" />
              <SettingPage />
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              <ProfilePage />
              <NavBar />
            </>
          }
        />
        <Route
          path="/profile/edit"
          element={
            <>
              <Header title="정보 수정" />
              <ProfileEditPage />
            </>
          }
        />
        <Route
          path="/profile/editPassword"
          element={
            <>
              <Header title="비밀번호 변경" />
              <EditPwPage />
            </>
          }
        />

        <Route path="/home" element={<HomePage />} />
        <Route
          path="/calendar"
          element={
            <>
              <CalendarPage />
              <NavBar />
            </>
          }
        />
        <Route path="/fortune" element={<FortunePage />} />
        <Route path="/api" element={<ApiPage />} />

        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
