import { motion, AnimatePresence } from "framer-motion";

export default function DisplayCard({
  title,
  value,
}) {
  return (
    <div
      className="
        relative
        overflow-hidden
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-10
        text-center
      "
    >

      {/* GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-cyan-400/5
          blur-3xl
          pointer-events-none
        "
      />

      <p className="text-zinc-400 text-xl mb-4 relative">
        {title}
      </p>

      <AnimatePresence mode="wait">

        <motion.h1
          key={value}
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 20,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 1.2,
            y: -20,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            text-7xl
            font-bold
            text-cyan-400
            animate-pulse
          "
        >
          {value}
        </motion.h1>

      </AnimatePresence>

    </div>
  );
}