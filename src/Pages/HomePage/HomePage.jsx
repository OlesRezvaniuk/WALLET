import { getCurs } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';

export const HomePage = () => {
  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurs());
  }, []);

  const data = user.auth.curs.slice(0, 2);

  console.log(data);

  return (
    <>
      <div>Home Page</div>
      <div>
        curs
        {data.map(item => {
          return <p key={item.currencyCodeA}>{item.currencyCodeA}|</p>;
        })}
      </div>
    </>
  );
};
