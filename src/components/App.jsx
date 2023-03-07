import { Routes, Route } from 'react-router-dom';
import { LoginPage } from 'Pages/LoginPage/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage/RegisterPage';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
    </Routes>
  );
};
