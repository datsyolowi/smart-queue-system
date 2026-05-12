import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Monitor,
  Ticket,
  House,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav
      className="
        sticky
        top-0
        z-50
        backdrop-blur-xl
        bg-black/60
        border-b
        border-zinc-800/50
        px-8
        py-4
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-white text-2xl font-bold tracking-wide">
          QueueSys
        </h1>

        <div className="flex gap-3 text-zinc-300">

          <Link
            to="/"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              hover:bg-zinc-800
              hover:text-white
              transition
              duration-200
            "
          >
            <House size={18} />
            Home
          </Link>

          <Link
            to="/queue"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              hover:bg-zinc-800
              hover:text-white
              transition
              duration-200
            "
          >
            <Ticket size={18} />
            Queue
          </Link>

          <Link
            to="/admin"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              hover:bg-zinc-800
              hover:text-white
              transition
              duration-200
            "
          >
            <LayoutDashboard size={18} />
            Admin
          </Link>

          <Link
            to="/display"
            className="
              flex
              items-center
              gap-2
              px-4
              py-2
              rounded-xl
              hover:bg-zinc-800
              hover:text-white
              transition
              duration-200
            "
          >
            <Monitor size={18} />
            Display
          </Link>

        </div>

      </div>
    </nav>
  );
}