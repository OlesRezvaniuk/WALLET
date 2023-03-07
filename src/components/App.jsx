import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { PrivateRoute, PublicRoute } from 'routes/routes';
import { Layout } from './Layout/Layout';

export const App = () => {
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
        <Route index element={<>Home Page</>} />
        <Route path="/Statistics" element={<>Statistics Page</>} />
      </Route>
    </Routes>
  );
};
