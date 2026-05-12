import { createContext, useContext, useState, useEffect } from "react";

const QueueContext = createContext();

export function QueueProvider({ children }) {
  const [currentQueue, setCurrentQueue] = useState(() => {
    const saved = localStorage.getItem("currentQueue");
    return saved ? JSON.parse(saved) : 24;
  });

  const [waitingQueues, setWaitingQueues] = useState(() => {
    const saved = localStorage.getItem("waitingQueues");

    return saved ? JSON.parse(saved) : [25, 26, 27, 28];
  });

  const [lastGeneratedQueue, setLastGeneratedQueue] = useState(null);

  const [selectedService, setSelectedService] = useState("");

  useEffect(() => {
    localStorage.setItem("currentQueue", JSON.stringify(currentQueue));

    localStorage.setItem("waitingQueues", JSON.stringify(waitingQueues));
  }, [currentQueue, waitingQueues]);

  const callNextQueue = () => {
    console.log("CALL NEXT CLICKED");

    if (waitingQueues.length === 0) return;

    const nextQueue = waitingQueues[0];

    setCurrentQueue(nextQueue);

    setWaitingQueues((prev) => prev.slice(1));
  };
  const generateQueue = (service) => {
    const lastQueue = waitingQueues[waitingQueues.length - 1] || currentQueue;

    const newQueue = lastQueue + 1;

    setWaitingQueues((prev) => [...prev, newQueue]);

    setLastGeneratedQueue(newQueue);

    setSelectedService(service);
  };

  return (
    <QueueContext.Provider
      value={{
        currentQueue,
        waitingQueues,
        callNextQueue,
        generateQueue,
        lastGeneratedQueue,
        selectedService,
      }}
    >
      {children}
    </QueueContext.Provider>
  );
}

export function useQueue() {
  return useContext(QueueContext);
}
