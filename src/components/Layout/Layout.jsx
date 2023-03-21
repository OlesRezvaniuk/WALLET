import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import {
  LayoutBox,
  ContentContainer,
  LogoImg,
  ExitIcon,
  LogoutButton,
  UserName,
  NavBox,
  LinkStyled,
  HomeIcon,
  StatisticIcon,
  CurrencyIcon,
  ContentTopContainer,
} from './Layout.styled';
import { authSelector } from 'redux/auth/authSelector';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUserOperation } from 'redux/auth/authOperations';
import { loginUserOperation } from 'redux/auth/authOperations';
import { Currency } from 'components/Currency/Currency';
import { Balance } from 'components/Balance/Balance';

const data = {
  email: 'oles3@gmail.com',
  password: 'qwerty',
};

export const Layout = () => {
  const [screen, setScreen] = useState(true);
  const [currentLink, setCurrentLink] = useState({
    home: true,
    statistics: false,
    currency: false,
  });
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  const token = user.auth.token;

  const handleLogout = () => {
    dispatch(logoutUserOperation(token));
  };

  useEffect(() => {
    function handleResize() {
      setScreen(window.innerWidth >= 597);
    }

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      <ContentContainer
        style={{
          backgroundColor: '#f5f8ff',
          position: 'relative',
          // padding: '0px 20px',
        }}
      >
        <ContentTopContainer>
          <NavBox>
            <LinkStyled
              style={{
                opacity: currentLink.home ? '1' : '0.75',
                fontWeight: currentLink.home ? '700' : '400',
              }}
              onClick={() => {
                setCurrentLink({
                  home: true,
                  statistics: false,
                  currency: false,
                });
              }}
              to="/"
            >
              <HomeIcon />
              {screen && <p>Home</p>}
            </LinkStyled>
            <LinkStyled
              style={{
                opacity: currentLink.statistics ? '1' : '0.75',
                fontWeight: currentLink.statistics ? '700' : '400',
              }}
              onClick={() => {
                setCurrentLink({
                  home: false,
                  statistics: true,
                  currency: false,
                });
              }}
              to="/Statistics"
            >
              <StatisticIcon />
              {screen && <p>Statistics</p>}
            </LinkStyled>
            {!screen && (
              <button
                style={{
                  border: 'none',
                  background: 'transparent',
                  opacity: currentLink.currency ? '1' : '0.75',
                  cursor: 'pointer',
                }}
                type="button"
                onClick={() => {
                  setCurrentLink({
                    home: false,
                    statistics: false,
                    currency: true,
                  });
                }}
              >
                <CurrencyIcon />
              </button>
            )}
          </NavBox>
          {currentLink.currency ? (
            <Currency />
          ) : (
            <>
              <Balance />
              {screen && <Currency />}
            </>
          )}
        </ContentTopContainer>
        {!currentLink.currency && <Outlet />}
      </ContentContainer>
    </>
  );
};
