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
  console.log(data);
  return (
    <>
      <div>Home Page</div>
      <ul>
        <li>
          <ul style={{ display: 'flex', gap: 10, listStyle: 'none' }}>
            <li>
              <p>Currency</p>
            </li>
            <li>
              <p>Purchase</p>
            </li>
            <li>
              <p>Sale</p>
            </li>
          </ul>
        </li>
        <li>
          <ul>
            {data.map(item => {
              return (
                <li
                  style={{ display: 'flex', gap: 10 }}
                  key={item.currencyCodeA}
                >
                  <p>
                    {item.currencyCodeA === 840 && 'US'}
                    {item.currencyCodeA === 978 && 'EU'}
                  </p>

                  <p>{item.rateBuy}</p>

                  <p>{item.rateBuy}</p>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    </>
  );
};
