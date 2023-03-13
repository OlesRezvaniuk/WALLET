// import { useState } from 'react';
// import { nanoid } from '@reduxjs/toolkit';

// const data = {
//   all: 900,
// };

// export const Schedule = () => {
//   const [circle, setCircle] = useState({
//     parts: 1,
//     deg: 360,
//     rotate: 0,
//     zIndex: 1,
//   });
//   const [data, setData] = useState({
//     parts: [
//       { id: nanoid(), summ: 900, zIndex: 99, rotate: null },
//       { id: nanoid(), summ: 900, zIndex: 98, rotate: null },
//       { id: nanoid(), summ: 300, zIndex: 97, rotate: null },
//     ],
//   });
//   const totalScore = data.parts.reduce((total, item) => {
//     return total + item.summ;
//   }, 0);
//   const [summary, setSummary] = useState(totalScore);

//   const rotateArr = () => {
//     const arr = data.parts.map(item => (item.summ / summary) * circle.deg);
//     let previousValue = 0;
//     let index = 0;

//     const mappedArr = arr.map(currentValue => {
//       const result = previousValue + currentValue;
//       previousValue = result;
//       index += 1;
//       const data = { id: nanoid(), value: result, index };
//       return data;
//     });
//     console.log(mappedArr);
//     return mappedArr;
//   };
//   rotateArr();

//   return (
//     <>
//       <button>add part + 300ua</button>
//       <button>add part - 100ua</button>
//       <div
//         style={{
//           width: 280,
//           height: 280,
//           background: 'grey',
//           position: 'relative',
//           padding: 10,
//         }}
//       >
//         <div
//           style={{
//             width: '100%',
//             height: 1,
//             backgroundColor: 'black',
//             position: 'absolute',
//             top: '50%',
//             left: 0,
//             zIndex: 1000,
//           }}
//         ></div>
//         <div
//           style={{
//             backgroundColor: 'grey',
//             width: 200,
//             height: 200,
//             borderRadius: '50%',
//             position: 'absolute',
//             transform: 'translate(-50%, -50%)',
//             left: '50%',
//             top: '50%',
//             zIndex: 100,
//           }}
//         ></div>
//         <div
//           style={{
//             position: 'absolute',
//             width: 260,
//             height: 260,
//             borderRadius: '50%',
//             backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
//               16
//             )}`,
//             transformOrigin: 'center bottom',
//             transform: 'rotate(0deg)',
//           }}
//         ></div>

//         {data.parts.length > 1 &&
//           rotateArr().map(item => {
//             return (
//               <div
//                 key={item.id}
//                 style={{
//                   position: 'absolute',
//                   width: 260,
//                   height: 130,
//                   borderTopLeftRadius: 130,
//                   borderTopRightRadius: 130,
//                   backgroundColor: `#${Math.floor(
//                     Math.random() * 16777215
//                   ).toString(16)}`,
//                   transformOrigin: 'center bottom',
//                   transform: `rotate(${item.value}deg)`,
//                   zIndex: item.index,
//                 }}
//               ></div>
//             );
//           })}
//       </div>
//       <div
//         style={{
//           marginTop: 30,
//           width: 280,
//           height: 280,
//           background: 'grey',
//           position: 'relative',
//           padding: 10,
//         }}
//       >
//         <div
//           style={{
//             width: '100%',
//             height: 1,
//             backgroundColor: 'black',
//             position: 'absolute',
//             top: '50%',
//             left: 0,
//             zIndex: 1000,
//           }}
//         ></div>
//         <div
//           style={{
//             backgroundColor: 'grey',
//             width: 200,
//             height: 200,
//             borderRadius: '50%',
//             position: 'absolute',
//             transform: 'translate(-50%, -50%)',
//             left: '50%',
//             top: '50%',
//             zIndex: 100,
//           }}
//         ></div>
//         <div
//           style={{
//             position: 'absolute',
//             width: 0,
//             height: 0,
//             borderTop: '240px solid black',
//             borderLeft: '240px solid black',
//             borderTop: '240px solid black',
//             borderLeft: '240px solid black',
//             borderRadius: '50%',

//             // backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
//             //   16
//             // )}`,
//             transformOrigin: 'center bottom',
//             transform: 'rotate(0deg)',
//           }}
//         ></div>
//       </div>
//     </>
//   );
// };
