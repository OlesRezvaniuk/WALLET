import { Outlet } from 'react-router-dom';
import {
  LayoutBox,
  LogoImg,
  ExitIcon,
  LogoutButton,
  UserName,
} from './Layout.styled';
import { authSelector } from 'redux/auth/authSelector';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserOperation } from 'redux/auth/authOperations';
import { loginUserOperation } from 'redux/auth/authOperations';
import { NavLink } from 'react-router-dom';
import { Currency } from 'components/Currency/Currency';

const data = {
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const Layout = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  const token = user.auth.token;

  const handleLogout = () => {
    dispatch(logoutUserOperation(token));
  };

  return (
    <>
      <LayoutBox>
        <LogoImg
          onClick={() => {
            dispatch(loginUserOperation(data));
          }}
        />
        <UserName>{user.auth.user.username}</UserName>
        <LogoutButton onClick={handleLogout}>
          <ExitIcon />
          Exit
        </LogoutButton>
      </LayoutBox>
      <div>
        <div>
          Navigation
          <NavLink to="/">Home</NavLink>
          <NavLink to="/Statistics">Statistics</NavLink>
          <Currency />
        </div>
        <Outlet />
      </div>
    </>
  );
};
