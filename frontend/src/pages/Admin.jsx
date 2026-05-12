import MainLayout from "../layouts/MainLayout";

import StatCard from "../components/StatCard";
import QueueTable from "../components/QueueTable";

import { useQueue } from "../context/QueueContext";

export default function Admin() {

  const {
    currentQueue,
    waitingQueues,
    callNextQueue,
  } = useQueue();

  return (
    <MainLayout>

      <section className="px-8 py-20">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-16">

            <div>

              <p className="text-cyan-400 font-semibold mb-4">
                ADMIN DASHBOARD
              </p>

              <h1 className="text-5xl font-bold">
                Queue Management
              </h1>

            </div>

            <button
              onClick={() => {
                console.log("CALL NEXT CLICKED");
                callNextQueue();
              }}
              className="
                bg-cyan-400
                text-black
                px-6
                py-3
                rounded-2xl
                font-semibold
                hover:bg-cyan-300
                hover:scale-105
                active:scale-95
                transition
                duration-200
              "
            >
              Call Next
            </button>

          </div>

          {/* STATS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">

            <StatCard
              title="Now Serving"
              value={`A-${currentQueue}`}
            />

            <StatCard
              title="Waiting"
              value={waitingQueues.length}
            />

            <StatCard
              title="Completed"
              value="126"
            />

            <StatCard
              title="Active Windows"
              value="4"
            />

          </div>

          {/* TABLE */}
          <QueueTable />

        </div>

      </section>

    </MainLayout>
  );
}