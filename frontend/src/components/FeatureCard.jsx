import { motion } from "framer-motion";

import {
  Activity,
  LayoutDashboard,
  BarChart3,
  QrCode,
  Bell,
  MonitorSmartphone,
} from "lucide-react";

const icons = {
  "Real-Time Updates": Activity,
  "Multi-Window Support": LayoutDashboard,
  "Analytics Dashboard": BarChart3,
  "QR Queue Access": QrCode,
  "Smart Notifications": Bell,
  "Responsive Interface": MonitorSmartphone,
};

export default function FeatureCard({
  title,
  description,
}) {

  const Icon = icons[title];

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: 40,
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ duration: 0.5 }}
      whileHover={{
        y: -8,
      }}
      className="
        group
        relative
        overflow-hidden
        bg-zinc-900
        border
        border-zinc-800
        rounded-3xl
        p-8
        transition
        duration-300
        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.08)]
      "
    >

      {/* GLOW EFFECT */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-br
          from-cyan-400/0
          via-cyan-400/0
          to-cyan-400/5
          opacity-0
          group-hover:opacity-100
          transition
          duration-500
        "
      />

      {/* ICON */}
      <div
        className="
          relative
          w-14
          h-14
          bg-cyan-400/10
          rounded-2xl
          flex
          items-center
          justify-center
          mb-6
          group-hover:bg-cyan-400/20
          transition
        "
      >

        <Icon
          size={28}
          className="
            text-cyan-400
            group-hover:scale-110
            transition
            duration-300
          "
        />

      </div>

      {/* TITLE */}
      <h3
        className="
          relative
          text-2xl
          font-semibold
          mb-4
        "
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className="
          relative
          text-zinc-400
          leading-relaxed
        "
      >
        {description}
      </p>

    </motion.div>
  );
}