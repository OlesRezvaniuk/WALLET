import { Link } from 'react-router-dom';

export const RegisterPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>Logo</div>
      <div>Form</div>
      <Link to="/Login">to Login</Link>
      <div>button</div>
    </div>
  );
};
