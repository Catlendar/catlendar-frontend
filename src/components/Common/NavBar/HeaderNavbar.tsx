import { Link, useNavigate } from 'react-router-dom';
import logo from '../../../assets/icons/catlendar.svg';
import myPage from '../../../assets/icons/icon-mypage.svg';
import logout from '../../../assets/icons/icon-logout.svg';

export default function HeaderNavbar() {
  const navigate = useNavigate();

  // 로그아웃
  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  return (
    <header className="nav-wrapper">
      <ul className="ul-wrapper">
        <li className="li-wrapper">
          <Link to="/home">
            <img className="btn-logo" src={logo} alt="캣린더 로고" />
          </Link>
        </li>
      </ul>
      <ul className="ul-wrapper">
        <li className="li-wrapper">
          <Link to="/profile">
            <img className="btn-mypage" src={myPage} alt="마이페이지" />
          </Link>
        </li>
        <li className="li-wrapper">
          <button type="button" onClick={handleLogout}>
            <img className="btn-logout" src={logout} alt="로그아웃" />
          </button>
        </li>
      </ul>
    </header>
  );
}
