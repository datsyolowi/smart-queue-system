import { useEffect, useState } from "react";

export default function LiveClock() {

  const [time, setTime] = useState(new Date());

  useEffect(() => {

    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);

  }, []);

  return (
    <div className="text-right">

      <h2 className="text-3xl font-bold">
        {time.toLocaleTimeString()}
      </h2>

      <p className="text-zinc-400">
        {time.toLocaleDateString()}
      </p>

    </div>
  );
}