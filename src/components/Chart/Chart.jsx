import { useEffect, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';

export const Chart = () => {
  const [data, setData] = useState({
    parts: [
      { id: nanoid(), summ: 900, zIndex: 99, rotate: null },
      { id: nanoid(), summ: 460, zIndex: 98, rotate: null },
      { id: nanoid(), summ: 355, zIndex: 97, rotate: null },
      { id: nanoid(), summ: 3522, zIndex: 97, rotate: null },
    ],
  });
  // eslint-disable-next-line
  const [summary, setSummary] = useState(
    data.parts.reduce((total, item) => {
      return total + item.summ;
    }, 0)
  );

  function drawPieSlice(
    ctx,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color
  ) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
  }

  function drawCircle(
    ctx,
    centerX,
    centerY,
    radius,
    startAngle,
    endAngle,
    color
  ) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, true);
    ctx.moveTo(110, 75);
    ctx.closePath();
    ctx.fill();
  }

  function draw() {
    const canvas = document.querySelector('#radialChart');
    if (canvas.getContext) {
      const ctx = canvas.getContext('2d');

      let startR = 0;
      // eslint-disable-next-line
      data.parts.map(item => {
        let endR = (2 * Math.PI * item.summ) / summary;
        drawPieSlice(
          ctx,
          150,
          150,
          150,
          startR,
          endR + startR,
          `#${Math.floor(Math.random() * 16777215).toString(16)}`
        );
        startR += (Math.PI * 2 * item.summ) / summary;
        endR += startR;
      });
      drawCircle(ctx, 150, 150, 100, 0, Math.PI * 2, '#fff');
      // drawLine(ctx, 100, 100, 200, 200);
      // drawLine(ctx, 100, 200, 200, 100);
    }
  }

  useEffect(() => {
    draw();
    // eslint-disable-next-line
  }, [data]);

  return (
    <>
      <canvas
        style={{ marginTop: 30 }}
        id="radialChart"
        width="300"
        height="300"
      ></canvas>
      <button
        onClick={() => {
          setData({
            ...data,
            parts: [
              ...data.parts,
              { id: nanoid(), summ: 198, zIndex: 87, rotate: null },
            ],
          });
        }}
      >
        add part + 300ua
      </button>
      <button>add part - 100ua</button>
    </>
  );
};
