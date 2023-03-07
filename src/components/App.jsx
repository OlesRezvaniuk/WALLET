import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';
import { PrivateRoute, PublicRoute } from 'routes/routes';

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
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
        path="/home"
        element={
          <PrivateRoute>
            <>Home page</>
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
