import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { PrivateRoute, PublicRoute } from 'routes/routes';
import { Layout } from './Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { currentUserOperation } from 'redux/auth/authOperations';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';
import { HomePage } from 'Pages/HomePage/HomePage';
import { StatisticsPage } from 'Pages/StatisticsPage/StatisticsPage';
import {
  getUserTransactionsSummary,
  getTransactionsCategories,
  getUserTransactions,
} from 'redux/transactions/transactionsOperations';

export const App = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelector);

  useEffect(() => {
    if (user.auth.isLogin) {
      dispatch(currentUserOperation());
      dispatch(getTransactionsCategories());
      dispatch(
        getUserTransactionsSummary({
          month: new Date().getMonth() + 1,
          year: new Date().getFullYear(),
        })
      );

      dispatch(getUserTransactions());
    }
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route
        path="/Login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="/Register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<HomePage />} />
        <Route path="/Statistics" element={<StatisticsPage />} />
      </Route>
    </Routes>
  );
};
