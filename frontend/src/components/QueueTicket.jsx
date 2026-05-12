export default function QueueTicket() {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-10 text-center">

      <p className="text-zinc-400 mb-4 text-lg">
        Your Queue Number
      </p>

      <h1 className="text-7xl font-bold text-cyan-400 mb-6">
        A-025
      </h1>

      <div className="flex justify-center gap-8 text-zinc-400">

        <div>
          <p className="text-sm mb-1">
            Waiting
          </p>

          <h3 className="text-2xl text-white font-semibold">
            12
          </h3>
        </div>

        <div>
          <p className="text-sm mb-1">
            Estimated Time
          </p>

          <h3 className="text-2xl text-white font-semibold">
            15 mins
          </h3>
        </div>

      </div>

    </div>
  );
}