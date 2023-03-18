import { getCurs } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';

export const Currency = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurs());
    // eslint-disable-next-line
  }, [user.auth.token]);
  const data = () => {
    if (user.auth.curs !== null) {
      const CurrencyData = user.auth.curs.slice(0, 2);
      return CurrencyData;
    }
  };
  return (
    <>
      {user.auth.curs !== null && (
        <table style={{ width: '100%', backgroundColor: 'burlywood' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'start' }}>Currency</th>
              <th style={{ textAlign: 'start' }}>Purchase</th>
              <th style={{ textAlign: 'start' }}>Sale</th>
            </tr>
          </thead>
          <tbody>
            {data().map(item => {
              return (
                <tr key={item.currencyCodeA}>
                  <td>
                    {item.currencyCodeA === 840 && 'US'}
                    {item.currencyCodeA === 978 && 'EU'}
                  </td>
                  <td>{item.rateBuy}</td>
                  <td>{item.rateSell}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};