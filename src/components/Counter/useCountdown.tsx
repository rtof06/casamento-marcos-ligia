"use client";
import { useState, useEffect } from "react";

export default function useCountdown(date: string) {
  const [day, setDay] = useState<string>("00");
  const [hour, setHour] = useState<string>("00");
  const [minute, setMinute] = useState<string>("00");
  const [second, setSecond] = useState<string>("00");

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

      // Format numbers to always have 2 digits
      setDay(String(dayNumber).padStart(2, "0"));
      setHour(String(hourNumber).padStart(2, "0"));
      setMinute(String(minuteNumber).padStart(2, "0"));
      setSecond(String(secondNumber).padStart(2, "0"));
    };

    const intervalId = setInterval(countdown, 1000);

    return () => clearInterval(intervalId);
  }, [date]);

  return [day, hour, minute, second];
}
