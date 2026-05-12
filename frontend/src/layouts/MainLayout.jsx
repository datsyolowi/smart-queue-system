import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050505]
        text-white
      "
    >
      {/* CYAN ORB */}
      <div
        className="
          absolute
          top-[-150px]
          left-[-120px]
          w-[600px]
          h-[600px]
          rounded-full
          bg-cyan-400/20
          blur-[140px]
          z-0
          pointer-events-none
        "
      />

      {/* PURPLE ORB */}
      <div
        className="
          absolute
          bottom-[-200px]
          right-[-150px]
          w-[700px]
          h-[700px]
          rounded-full
         bg-indigo-500/20
          blur-[160px]
          z-0
          pointer-events-none
        "
      />

      {/* GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.04]
          z-0
          pointer-events-none
        "
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10">
        <Navbar />

        <main>{children}</main>
      </div>
    </div>
  );
}
