import { createContext, useContext, useState } from "react";

const QueueContext = createContext();

export function QueueProvider({ children }) {

  const [currentQueue, setCurrentQueue] = useState(24);

  const [waitingQueues, setWaitingQueues] = useState([
    25,
    26,
    27,
    28,
  ]);

  const callNextQueue = () => {

    if (waitingQueues.length === 0) return;

    const nextQueue = waitingQueues[0];

    setCurrentQueue(nextQueue);

    setWaitingQueues((prev) => prev.slice(1));
  };

  const generateQueue = () => {

    const lastQueue =
      waitingQueues[waitingQueues.length - 1] || currentQueue;

    const newQueue = lastQueue + 1;

    setWaitingQueues((prev) => [...prev, newQueue]);
  };

  return (
    <QueueContext.Provider
      value={{
        currentQueue,
        waitingQueues,
        callNextQueue,
        generateQueue,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  return useContext(QueueContext);
}