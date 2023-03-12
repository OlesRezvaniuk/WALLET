import { getCurs } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';

export const HomePage = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurs());
    // eslint-disable-next-line
  }, []);

  const data = user.auth.curs.slice(0, 2);
  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      <table style={{ width: '100%', backgroundColor: 'blue' }}>
        <tr>
          <th style={{ textAlign: 'start' }}>Currency</th>
          <th style={{ textAlign: 'start' }}>Purchase</th>
          <th style={{ textAlign: 'start' }}>Sale</th>
        </tr>
        {data.map(item => {
          return (
            <tr>
              <td>
                {item.currencyCodeA === 840 && 'US'}
                {item.currencyCodeA === 978 && 'EU'}
              </td>
              <td>{item.rateBuy}</td>
              <td>{item.rateSell}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
