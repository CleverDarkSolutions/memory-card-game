import React, {Dispatch, SetStateAction, useEffect, useRef, useState} from 'react';

export type TimerProps = {
    isActive: boolean,
    setIsActive:  Dispatch<SetStateAction<boolean>>
}

const Timer = (props: TimerProps) => {
  const [seconds, setSeconds] = useState(0);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (props.isActive) {
      timerRef.current = window.setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!props.isActive && seconds !== 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [props.isActive, seconds]);

  return (
    <div>
      <div>Timer: {seconds}s</div>
    </div>
  );
};

export default Timer;
