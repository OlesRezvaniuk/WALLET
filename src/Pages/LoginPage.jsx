import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>Logo</div>
      <div>Form</div>
      <Link to="/Register">to Register</Link>
      <div>button</div>
    </div>
  );
};
