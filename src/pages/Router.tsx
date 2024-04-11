/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
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
import HeaderNavbar from '../components/Common/NavBar/HeaderNavbar';

export default function Router() {
  const userState = useRecoilValue(UserAtom);
  const [isLoggedIn, setIsLoggedIn] = useState('');
  const signCheck = useRecoilValue(SignUpAtom);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // userState를 이용하여 로그인 상태를 확인하고 isLoggedIn 상태 업데이트
    setIsLoggedIn(userState && userState.email);

    const handleResize = () => {
      if (window.innerWidth < 960) {
        setIsDesktop(false);
      } else {
        setIsDesktop(true);
      }
    };
    handleResize();
    // 창 크기 조정 이벤트 수신
    window.addEventListener('resize', handleResize);

    return () => {
      // 리턴되어 클린업 함수 호출 시(언마운트 혹은 업데이트 시), 이벤트 리스너 제거
      window.removeEventListener('resize', handleResize);
    };
  }, [userState, isDesktop]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/landing" element={<Layout main={<LandingPage />} />} />
        {/* 
					1. /, /home인 경우 중복 -> 병합 
					2. 해상도에 따라 Navbar 렌더링 유무 설정 
				*/}
        {['/', '/home'].map((path) => (
          <Route
            key={path}
            path={path}
            element={
              <>
                {isLoggedIn === '' ? (
                  <Layout main={<LandingPage />} />
                ) : isLoggedIn && !isDesktop ? (
                  <Layout main={<HomePage isDesktop={isDesktop} />} navbar={<NavBar />} />
                ) : isLoggedIn && isDesktop ? (
                  <Layout header={<HeaderNavbar />} main={<HomePage isDesktop={isDesktop} />} />
                ) : null}
              </>
            }
          />
        ))}
        {/*
					1. 해상도에 따라 렌더링 컴포넌트 구분
					2. 데스크탑 사이즈인 경우 /home으로 리다이렉트
				 */}
        <Route
          path="/calendar"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout main={<CalendarPage />} navbar={<NavBar />} />
              ) : isLoggedIn && isDesktop ? (
                <Navigate to="/home" />
              ) : null}
            </>
          }
        />

        <Route
          path="/signup"
          element={
            !isDesktop ? (
              <Layout header={<Header title="" />} main={<SignupPage />} />
            ) : (
              <Layout main={<SignupPage />} />
            )
          }
        />

        <Route path="/signup/complete" element={<Layout main={<SignupCompletePage />} />} />

        <Route
          path="/userinfo"
          element={
            <>
              {signCheck.email === '' || signCheck.password === '' ? (
                <Layout main={<LandingPage />} />
              ) : // <LandingPage />
              signCheck ? (
                <Layout header={<Header title="" />} main={<UserInfoPage />} />
              ) : null}
            </>
          }
        />

        <Route
          path="/login"
          element={<Layout header={<Header title="" />} main={<LoginPage />} />}
        />

        <Route
          path="/setting"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && isDesktop ? (
                <Navigate to="/profile" />
              ) : (
                <Layout header={<Header title="설정" />} main={<SettingPage />} />
              )}
            </>
          }
        />

        <Route
          path="/profile"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout main={<ProfilePage isDesktop={isDesktop} />} navbar={<NavBar />} />
              ) : isLoggedIn && isDesktop ? (
                <Layout header={<HeaderNavbar />} main={<ProfilePage isDesktop={isDesktop} />} />
              ) : null}
            </>
          }
        />

        <Route
          path="/editUser"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout header={<Header title="정보 수정" />} main={<ProfileEditPage />} />
              ) : isLoggedIn && isDesktop ? (
                <Layout main={<ProfileEditPage />} />
              ) : null}
            </>
          }
        />

        <Route
          path="/editPassword"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout header={<Header title="비밀번호 변경" />} main={<EditPwPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout main={<EditPwPage />} />
              ) : null}
            </>
          }
        />

        <Route
          path="/fortune"
          element={
            <>
              {isLoggedIn === '' ? (
                <Layout main={<LandingPage />} />
              ) : isLoggedIn && !isDesktop ? (
                <Layout
                  header={<Header title="오늘의 운세" isFortunePage />}
                  main={<FortunePage />}
                  navbar={<NavBar />}
                />
              ) : isLoggedIn && isDesktop ? (
                <Layout header={<HeaderNavbar />} main={<FortunePage />} />
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
