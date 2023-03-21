import { getCurs } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';
import {
  CurrencyBox,
  CurrencyTable,
  CurrencyTableThead,
  CurrencyTableTheadTh,
  CurrencyTableTbody,
  CurrencyTableTbodyTd,
} from './Currency.styled';

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
    <CurrencyBox>
      {user.auth.curs !== null && (
        <CurrencyTable>
          <CurrencyTableThead>
            <tr>
              <CurrencyTableTheadTh>Currency</CurrencyTableTheadTh>
              <CurrencyTableTheadTh>Purchase</CurrencyTableTheadTh>
              <CurrencyTableTheadTh>Sale</CurrencyTableTheadTh>
            </tr>
          </CurrencyTableThead>
          <CurrencyTableTbody>
            {data().map(item => {
              return (
                <tr key={item.currencyCodeA}>
                  <CurrencyTableTbodyTd>
                    {item.currencyCodeA === 840 && 'US'}
                    {item.currencyCodeA === 978 && 'EU'}
                  </CurrencyTableTbodyTd>
                  <CurrencyTableTbodyTd>{item.rateBuy}</CurrencyTableTbodyTd>
                  <CurrencyTableTbodyTd>{item.rateSell}</CurrencyTableTbodyTd>
                </tr>
              );
            })}
            <tr style={{ height: 50 }}></tr>
          </CurrencyTableTbody>
        </CurrencyTable>
      )}
    </CurrencyBox>
  );
};
