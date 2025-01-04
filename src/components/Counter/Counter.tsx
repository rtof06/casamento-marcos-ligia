"use client";
import useCountdown from "./useCountdown";

export default function Counter() {
  const [day, hour, minute, second] = useCountdown("Aug 9, 2025 10:00:00");

  return (
    <section className="text-backgound-color">
      <h1 className="title text-center">Para esse dia especial, faltam...</h1>
      <div className="flex text-center justify-center items-center gap-4">
        <div>
          <div className="bg-main-color p-3 rounded-lg font-textFont text-2xl">{day}</div>
          <h1 className="simple-text text-xl">dias</h1>
        </div>
        <div>
          <div className="bg-main-color p-3 rounded-lg font-textFont text-2xl">{hour}</div>
          <h1 className="simple-text text-xl">hrs</h1>
        </div>
        <div>
          <div className="bg-main-color p-3 rounded-lg font-textFont text-2xl">{minute}</div>
          <h1 className="simple-text text-xl">mins</h1>
        </div>
        <div>
          <div className="bg-main-color p-3 rounded-lg font-textFont text-2xl">{second}</div>
          <h1 className="simple-text text-xl">segs</h1>
        </div>
      </div>
    </section>
  );
}
