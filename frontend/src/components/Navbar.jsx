import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-zinc-950 border-b border-zinc-800 px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <h1 className="text-white text-2xl font-bold">
          QueueSys
        </h1>

        <div className="flex gap-6 text-zinc-300">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>

          <Link to="/queue" className="hover:text-white transition">
            Queue
          </Link>

          <Link to="/admin" className="hover:text-white transition">
            Admin
          </Link>

          <Link to="/display" className="hover:text-white transition">
            Display
          </Link>
        </div>

      </div>
    </nav>
  );
}