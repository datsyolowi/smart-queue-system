export default function ServiceCard({
  title,
  description,
}) {
  return (
    <button className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 text-left hover:border-cyan-400/40 hover:-translate-y-1 transition duration-300">

      <h3 className="text-2xl font-semibold mb-3">
        {title}
      </h3>

      <p className="text-zinc-400">
        {description}
      </p>

    </button>
  );
}