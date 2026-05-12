import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="px-8 py-24">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >

          <p className="text-cyan-400 font-semibold mb-4">
            MODERN QUEUE MANAGEMENT
          </p>

          <h1 className="text-6xl font-bold leading-tight mb-6">
            Smart Queueing
            <span className="text-cyan-400"> System</span>
          </h1>

          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-xl">
            A modern real-time queue management platform designed
            for businesses, clinics, schools, and service centers.
          </p>

          <div className="flex gap-4">

            <button
              className="
                bg-cyan-400
                text-black
                px-6
                py-3
                rounded-xl
                font-semibold
                hover:bg-cyan-300
                hover:scale-105
                active:scale-95
                transition
                duration-200
              "
            >
              Get Started
            </button>

            <button
              className="
                border
                border-zinc-700
                px-6
                py-3
                rounded-xl
                hover:border-zinc-500
                hover:bg-zinc-900
                transition
                duration-200
              "
            >
              Live Demo
            </button>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
            bg-zinc-900
            border
            border-zinc-800
            rounded-3xl
            p-8
            shadow-2xl
          "
        >

          <div className="flex items-center justify-between mb-8">

            <h2 className="text-2xl font-semibold">
              Queue Dashboard
            </h2>

            <div className="bg-green-500/20 text-green-400 px-4 py-1 rounded-full text-sm">
              Live
            </div>

          </div>

          <div className="space-y-4">

            <div className="
              bg-black
              rounded-2xl
              p-6
              border
              border-zinc-800
            ">

              <p className="text-zinc-400 mb-2">
                Now Serving
              </p>

              <h1 className="text-5xl font-bold text-cyan-400">
                A-024
              </h1>

            </div>

            <div className="grid grid-cols-2 gap-4">

              <div className="
                bg-black
                rounded-2xl
                p-6
                border
                border-zinc-800
              ">

                <p className="text-zinc-400 mb-2">
                  Waiting
                </p>

                <h2 className="text-3xl font-bold">
                  18
                </h2>

              </div>

              <div className="
                bg-black
                rounded-2xl
                p-6
                border
                border-zinc-800
              ">

                <p className="text-zinc-400 mb-2">
                  Active Windows
                </p>

                <h2 className="text-3xl font-bold">
                  4
                </h2>

              </div>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}