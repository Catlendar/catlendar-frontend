/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { UserAtom } from '../atom/UserAtom';
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
import ProfilePage from './ProfilePage/ProfilePage';
import { SignUpAtom } from '../atom/SignUpAtom';
import Layout from '../components/Layout/Layout';

export default function Router() {
  const userState = useRecoilValue(UserAtom);
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const signCheck = useRecoilValue(SignUpAtom);

  console.log(userState);
  useEffect(() => {
    // userState를 이용하여 로그인 상태를 확인하고 isLoggedIn 상태 업데이트
    setIsLoggedIn(userState && userState.email);
  }, [userState]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <Layout main={<HomePage />} navbar={<NavBar />} />
              ) : null}
            </>
          }
        />
        <Route
          path="/landing"
          element={
            <>
              <LandingPage />
            </>
          }
        />
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
          path="/userinfo"
          element={
            <>
              {signCheck.email === '' || signCheck.password === '' ? (
                <Layout main={<LandingPage />} />
              ) : // <LandingPage />
              signCheck ? (
                <>
                  <Header title="" />
                  <UserInfoPage />
                </>
              ) : null}
            </>
          }
        />

        <Route
          path="/login"
          element={
            <>
              {/* <Header title="" /> */}
              <Layout header={<Header title="" />} main={<LoginPage />} />
            </>
          }
        />

        <Route
          path="/setting"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <Header title="설정" />
                  <SettingPage />
                </>
              ) : null}
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <ProfilePage />
                  <NavBar />
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="/editUser"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <Header title="정보 수정" />
                  <ProfileEditPage />
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="/editPassword"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <Header title="비밀번호 변경" />
                  <EditPwPage />
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="/home"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <HomePage /> <NavBar />
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="/calendar"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <CalendarPage /> <NavBar />
                </>
              ) : null}
            </>
          }
        />
        <Route
          path="/fortune"
          element={
            <>
              {isLoggedIn === '' ? (
                <LandingPage />
              ) : isLoggedIn ? (
                <>
                  <FortunePage />
                  <NavBar />
                </>
              ) : null}
            </>
          }
        />
        <Route path="*" element={<ErrorPage />} />

        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
