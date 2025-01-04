"use client";
import { useState, useEffect } from "react";

export default function useCountdown(date: string) {
  const [day, setDay] = useState<number>(0);
  const [hour, setHour] = useState<number>(0);
  const [minute, setMinute] = useState<number>(0);
  const [second, setSecond] = useState<number>(0);

  useEffect(() => {
    const countdown = () => {
      const countDate = new Date(date).getTime();
      const now = new Date().getTime();

      const interval = countDate - now;

      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;

      const dayNumber = Math.floor(interval / day);
      const hourNumber = Math.floor((interval % day) / hour);
      const minuteNumber = Math.floor((interval % hour) / minute);
      const secondNumber = Math.floor((interval % minute) / second);

      setDay(dayNumber);
      setHour(hourNumber);
      setMinute(minuteNumber);
      setSecond(secondNumber);
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return [day, hour, minute, second];
}
