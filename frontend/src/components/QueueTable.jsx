export default function QueueTable() {
  const queues = [
    {
      number: "A-021",
      service: "Payments",
      status: "Completed",
    },
    {
      number: "A-022",
      service: "General Services",
      status: "Waiting",
    },
    {
      number: "A-023",
      service: "Priority Lane",
      status: "Serving",
    },
  ];

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden">

      <div className="p-6 border-b border-zinc-800">
        <h2 className="text-2xl font-semibold">
          Queue Activity
        </h2>
      </div>

      <table className="w-full">

        <thead className="bg-black/40 text-zinc-400">
          <tr>
            <th className="text-left p-5">Queue No.</th>
            <th className="text-left p-5">Service</th>
            <th className="text-left p-5">Status</th>
          </tr>
        </thead>

        <tbody>

          {queues.map((queue, index) => (
            <tr
              key={index}
              className="border-t border-zinc-800"
            >
              <td className="p-5 font-semibold">
                {queue.number}
              </td>

              <td className="p-5 text-zinc-300">
                {queue.service}
              </td>

              <td className="p-5">

                <span className="
                  bg-cyan-400/10
                  text-cyan-400
                  px-4
                  py-1
                  rounded-full
                  text-sm
                ">
                  {queue.status}
                </span>

              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}