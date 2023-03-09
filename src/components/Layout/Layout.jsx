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

const data = {
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const Layout = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  console.log(user.auth.token);

  const handleLogout = () => {
    dispatch(logoutUserOperation(user.auth.token));
    console.log('handle loyout');
  };

  return (
    <>
      <>
        <LayoutBox>
          <LogoImg
            onClick={() => {
              dispatch(loginUserOperation(data));
              console.log('login');
            }}
          />
          <UserName>{user.auth.user.username}</UserName>
          <LogoutButton onClick={handleLogout}>
            <ExitIcon />
            Exit
          </LogoutButton>
        </LayoutBox>
      </>
      <Outlet />
    </>
  );
};
