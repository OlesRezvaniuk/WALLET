import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

const data = {
  all: 900,
};

export const Schedule = () => {
  const [circle, setCircle] = useState({
    parts: 1,
    deg: 360,
    rotate: 0,
    zIndex: 1,
  });
  const [data, setData] = useState({
    parts: [
      { id: nanoid(), summ: 900, zIndex: 99, rotate: null },
      { id: nanoid(), summ: 900, zIndex: 98, rotate: null },
      { id: nanoid(), summ: 300, zIndex: 97, rotate: null },
      { id: nanoid(), summ: 300, zIndex: 97, rotate: null },
    ],
  });
  const totalScore = data.parts.reduce((total, item) => {
    return total + item.summ;
  }, 0);
  const [summary, setSummary] = useState(totalScore);

  const firstRotate = (data.parts[0].summ / summary) * circle.deg;

  const rotate = data.parts.reduce((total, item) => {
    return total + (item.summ / summary) * circle.deg;
  }, 0);

  const omg = () => {
    const map = data.parts
      .map(item => (item.summ / summary) * circle.deg)
      .splice(1, data.parts.length);
    console.log(map);
    return map;
  };
  omg();

  return (
    <>
      <button>add part + 300ua</button>
      <button>add part - 100ua</button>
      <div
        style={{
          width: 280,
          height: 280,
          background: 'grey',
          position: 'relative',
          padding: 10,
        }}
      >
        <div
          style={{
            width: '100%',
            height: 1,
            backgroundColor: 'black',
            position: 'absolute',
            top: '50%',
            left: 0,
            zIndex: 1000,
          }}
        ></div>
        <div
          style={{
            backgroundColor: 'grey',
            width: 200,
            height: 200,
            borderRadius: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            left: '50%',
            top: '50%',
            zIndex: 100,
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            width: 260,
            height: 260,
            borderRadius: '50%',
            backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
              16
            )}`,
            transformOrigin: 'center bottom',
            transform: 'rotate(0deg)',
          }}
        ></div>

        {data.parts.length > 1 &&
          data.parts.map(item => {
            return (
              <div
                key={item.id}
                style={{
                  position: 'absolute',
                  width: 260,
                  height: 130,
                  borderTopLeftRadius: 130,
                  borderTopRightRadius: 130,
                  backgroundColor: `#${Math.floor(
                    Math.random() * 16777215
                  ).toString(16)}`,
                  transformOrigin: 'center bottom',
                  transform: `rotate(${(item.summ / summary) * circle.deg}deg)`,
                  zIndex: item.zIndex,
                }}
              ></div>
            );
          })}
      </div>
    </>
  );
};
