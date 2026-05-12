export default function FeatureCard({
  title,
  description,
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300 hover:-translate-y-1">

      <div className="w-14 h-14 bg-cyan-400/10 rounded-2xl flex items-center justify-center mb-6">
        <div className="w-6 h-6 bg-cyan-400 rounded-full"></div>
      </div>

      <h3 className="text-2xl font-semibold mb-4">
        {title}
      </h3>

      <p className="text-zinc-400 leading-relaxed">
        {description}
      </p>

    </div>
  );
}