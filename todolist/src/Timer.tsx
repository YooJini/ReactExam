import { useState } from "react";

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  setInterval(() => {
    setTime(new Date());
  }, 1000);

  return (
    <div>
      <h2>현재 시각: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;

// const Timer: React.FC = () => {
//     const [seconds, setSeconds] = useState<number>(0);
  
//     return (
//       <div>
//         <h2>타이머: {seconds}초</h2>
//         <button
//           onClick={() => {
//             setInterval(() => {
//               setSeconds((prev) => prev + 1);
//             }, 1000);
//           }}
//         >시작</button>
//       </div>
//     );
//   };
  
//   export default Timer;
