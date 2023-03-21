import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { BalanceTitle } from './Balance.styled';

export const Balance = () => {
  const user = useSelector(authSelector);
  return (
    <div>
      <BalanceTitle>
        YOUR BALANCE
        <span>₴ {user.auth.user.balance}</span>
      </BalanceTitle>
    </div>
  );
};
