import React, {Dispatch, SetStateAction, useEffect, useRef} from 'react';

export type TimerProps = {
    isActive: boolean,
    setIsActive:  Dispatch<SetStateAction<boolean>>,
    seconds: number,
    setSeconds: Dispatch<SetStateAction<number>>,
}

const Timer = (props: TimerProps) => {
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    if (props.isActive) {
      timerRef.current = window.setInterval(() => {
        props.setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (!props.isActive && props.seconds !== 0) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [props.isActive, props.seconds]);

  return (
    <div>
      <div>Timer: {props.seconds}s</div>
    </div>
  );
};

export default Timer;
