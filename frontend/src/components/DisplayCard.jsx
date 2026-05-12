export default function DisplayCard({
  title,
  value,
}) {
  return (
    <div className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-3xl
      p-10
      text-center
    ">

      <p className="text-zinc-400 text-xl mb-4">
        {title}
      </p>

      <h1 className="text-7xl font-bold text-cyan-400">
        {value}
      </h1>

    </div>
  );
}