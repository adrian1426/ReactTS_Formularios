import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import logo from '../logo.svg';
import RegisterPage from '../pages/RegisterPage';

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className='main-layout'>
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink
                to='/'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/users'
                className={({ isActive }) => isActive ? 'nav-active' : ''}
              >
                Users
              </NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/' element={<RegisterPage />} />
          <Route path='/about' element={<h1>About</h1>} />
          <Route path='/users' element={<h1>Users</h1>} />

          <Route path='/*' element={<Navigate to='/' replace />} />
        </Routes>

      </div>
    </BrowserRouter>
  );
};

export default Navigation;