import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  doc,
  onSnapshot,
  setDoc,
  updateDoc,
} from "firebase/firestore";

import { db } from "../firebase";

const QueueContext = createContext();

export function QueueProvider({ children }) {

  const [currentQueue, setCurrentQueue] =
    useState(24);

  const [waitingQueues, setWaitingQueues] =
    useState([]);

  const [lastGeneratedQueue, setLastGeneratedQueue] =
    useState(null);

  const [selectedService, setSelectedService] =
    useState("");

  const queueRef = doc(db, "queues", "main");

  // REALTIME LISTENER
  useEffect(() => {

    const unsubscribe = onSnapshot(
      queueRef,
      async (snapshot) => {

        if (snapshot.exists()) {

          const data = snapshot.data();

          setCurrentQueue(data.currentQueue);

          setWaitingQueues(data.waitingQueues);

        } else {

          await setDoc(queueRef, {
            currentQueue: 24,
            waitingQueues: [25, 26, 27, 28],
          });

        }

      }
    );

    return () => unsubscribe();

  }, []);

  // CALL NEXT
  const callNextQueue = async () => {

    if (waitingQueues.length === 0) return;

    const nextQueue = waitingQueues[0];

    const updatedQueues =
      waitingQueues.slice(1);

    await updateDoc(queueRef, {
      currentQueue: nextQueue,
      waitingQueues: updatedQueues,
    });

    const announcement =
      new SpeechSynthesisUtterance(
        `Now serving A ${nextQueue}`
      );

    announcement.rate = 0.9;

    speechSynthesis.speak(announcement);
  };

  // GENERATE QUEUE
  const generateQueue = async (service) => {

    const lastQueue =
      waitingQueues[waitingQueues.length - 1]
      || currentQueue;

    const newQueue = lastQueue + 1;

    const updatedQueues = [
      ...waitingQueues,
      newQueue,
    ];

    await updateDoc(queueRef, {
      waitingQueues: updatedQueues,
    });

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