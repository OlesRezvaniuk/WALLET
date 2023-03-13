import { getCurs } from 'redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { authSelector } from 'redux/auth/authSelector';
import React from 'react';
import { Chart } from 'react-google-charts';

const optionsChart = {
  title: '',
  pieHole: 0.6,
  is3D: false,
  pieSliceText: 'none',
  legend: 'none',
};

export const HomePage = () => {
  const dataChart = [
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7], // CSS-style declaration
  ];

  const user = useSelector(authSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurs());
    // eslint-disable-next-line
  }, [user.auth.token]);

  const data = () => {
    if (user.auth.curs !== null) {
      const usEu = user.auth.curs.slice(0, 2);
      return usEu;
    }
  };
  return (
    <div style={{ padding: '0px 20px' }}>
      <div>Home Page</div>
      {user.auth.curs !== null && (
        <table style={{ width: '100%', backgroundColor: 'blue' }}>
          <tr>
            <th style={{ textAlign: 'start' }}>Currency</th>
            <th style={{ textAlign: 'start' }}>Purchase</th>
            <th style={{ textAlign: 'start' }}>Sale</th>
          </tr>

          {data().map(item => {
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
      )}
      <Chart
        chartType="PieChart"
        width="100%"
        height="400px"
        data={dataChart}
        options={optionsChart}
      />
    </div>
  );
};
