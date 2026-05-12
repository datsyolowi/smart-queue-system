import DisplayCard from "../components/DisplayCard";
import LiveClock from "../components/LiveClock";

import { useQueue } from "../context/QueueContext";

export default function Display() {

  const {
    currentQueue,
    waitingQueues,
  } = useQueue();

  return (
    <div className="bg-black min-h-screen text-white p-10">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-12">

          <div>

            <p className="text-cyan-400 font-semibold mb-3">
              LIVE DISPLAY
            </p>

            <h1 className="text-5xl font-bold">
              Now Serving
            </h1>

          </div>

          <div className="flex items-center gap-6">

            <div
              className="
                bg-green-500/20
                text-green-400
                px-6
                py-2
                rounded-full
                text-lg
                flex
                items-center
                gap-2
              "
            >

              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

              System Online

            </div>

            <LiveClock />

          </div>

        </div>

        {/* MAIN DISPLAY */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">

          <DisplayCard
            title="Queue Number"
            value={`A-${currentQueue}`}
          />

          <DisplayCard
            title="Window"
            value="04"
          />

        </div>

        {/* UPCOMING */}
        <div
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-10
          "
        >

          <h2 className="text-3xl font-semibold mb-8">
            Upcoming Queue
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

            {waitingQueues.map((queue, index) => (
              <div
                key={index}
                className="
                  bg-black
                  border
                  border-zinc-800
                  rounded-2xl
                  p-6
                  text-center
                "
              >

                <p className="text-zinc-400 mb-2">
                  Next
                </p>

                <h3 className="text-4xl font-bold">
                  {`A-${queue}`}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}