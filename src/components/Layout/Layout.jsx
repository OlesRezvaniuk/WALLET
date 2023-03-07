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

export const Layout = () => {
  const user = useSelector(authSelector);
  console.log(user.auth.user.username);

  const handleLogout = () => {
    console.log('handle loyout');
  };

  return (
    <>
      <>
        <LayoutBox>
          <LogoImg />
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
