import { useEffect } from 'react';

export const Chart = ({ data }) => {
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
    if (data) {
      const canvas = document.querySelector('#radialChart');
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');

        let startR = 0;
        // eslint-disable-next-line
        data.items.map(item => {
          let endR = (2 * Math.PI * Math.abs(item.total)) / data.summary;
          drawPieSlice(
            ctx,
            150,
            150,
            150,
            startR,
            endR + startR,
            `${item.color}`
          );
          startR += (Math.PI * 2 * Math.abs(item.total)) / data.summary;
          endR += startR;
        });
        drawCircle(ctx, 150, 150, 100, 0, Math.PI * 2, '#fff');
        // drawLine(ctx, 100, 100, 200, 200);
        // drawLine(ctx, 100, 200, 200, 100);
      }
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
    </>
  );
};
