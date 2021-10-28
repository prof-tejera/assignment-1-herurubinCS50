import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch/Stopwatch";
import Countdown from "../components/timers/Countdown/Countdown";
import XY from "../components/timers/XY/XY";
import Tabata from "../components/timers/Tabata/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
  
`;

const TimerTitle = styled.div`
  border-bottom: 1rem;
  margin-bottom: 1rem;
  font-weight: 200;
`;

function App() {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch /> },
    { title: "Countdown", C: <Countdown /> },
    { title: "XY", C: <XY currentRoundTime={[60, 60, 60, 12, 0]} secondsPerRound={[60, 60, 60, 60, 60]} rounds={5} /> },
    { title: "Tabata", C: <Tabata
        intervals={4}
        secondsPerActiveRound={[300, 300, 300, 300]}
        secondsPerRestRound={[60, 60, 60, 60]}
        currentActiveRoundTime={[300, 300, 32, 0]}
        currentRestRoundTime={[60, 60, 0, 0]}
      /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
}

export default App;
