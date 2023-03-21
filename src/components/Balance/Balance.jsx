import { useSelector } from 'react-redux';
import { authSelector } from 'redux/auth/authSelector';
import { BalanceTitle, BalanceBox, BalanceValue } from './Balance.styled';

export const Balance = () => {
  const user = useSelector(authSelector);
  return (
    <BalanceBox>
      <BalanceTitle>
        YOUR BALANCE
        <BalanceValue>
          <span style={{ fontWeight: 400, marginRight: 5 }}>₴</span>
          {user.auth.user.balance.toLocaleString().replace(/,/g, ' ')}.00
        </BalanceValue>
      </BalanceTitle>
    </BalanceBox>
  );
};
