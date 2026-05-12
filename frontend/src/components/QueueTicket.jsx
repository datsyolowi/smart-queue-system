import { useQueue } from "../context/QueueContext";

export default function QueueTicket() {

  const {
    lastGeneratedQueue,
    selectedService,
    waitingQueues,
  } = useQueue();

  if (!lastGeneratedQueue) {
    return (
      <div className="
        bg-zinc-900
        border
        border-dashed
        border-zinc-700
        rounded-3xl
        p-12
        text-center
      ">

        <p className="text-zinc-500 text-lg">
          Select a service to generate your queue ticket
        </p>

      </div>
    );
  }

  return (
    <div className="
      bg-gradient-to-br
      from-zinc-900
      to-black
      border
      border-cyan-400/30
      rounded-3xl
      p-12
      text-center
      shadow-2xl
      animate-pulse
    ">

      <p className="text-cyan-400 font-semibold mb-4">
        QUEUE TICKET GENERATED
      </p>

      <h1 className="text-8xl font-bold text-white mb-6">
        {`A-${lastGeneratedQueue}`}
      </h1>

      <div className="mb-8">

        <p className="text-zinc-400 mb-2">
          Selected Service
        </p>

        <h2 className="text-3xl font-semibold">
          {selectedService}
        </h2>

      </div>

      <div className="
        flex
        justify-center
        gap-12
        text-zinc-400
      ">

        <div>
          <p className="text-sm mb-1">
            People Waiting
          </p>

          <h3 className="text-2xl text-white font-bold">
            {waitingQueues.length}
          </h3>
        </div>

        <div>
          <p className="text-sm mb-1">
            Estimated Time
          </p>

          <h3 className="text-2xl text-white font-bold">
            {waitingQueues.length * 3} mins
          </h3>
        </div>

      </div>

    </div>
  );
}