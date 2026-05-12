import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="px-8 py-24">

      <div className="max-w-7xl mx-auto">

        <div className="mb-16">

          <p className="text-cyan-400 font-semibold mb-4">
            SYSTEM FEATURES
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Built for Modern Queue Management
          </h2>

          <p className="text-zinc-400 max-w-2xl text-lg">
            Designed to improve customer flow, reduce waiting
            time, and streamline operations in real-time.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          <FeatureCard
            title="Real-Time Updates"
            description="Queue data instantly syncs across all connected displays and admin dashboards."
          />

          <FeatureCard
            title="Multi-Window Support"
            description="Manage multiple service windows and counters simultaneously."
          />

          <FeatureCard
            title="Analytics Dashboard"
            description="Track waiting times, queue performance, and customer flow insights."
          />

          <FeatureCard
            title="QR Queue Access"
            description="Allow users to join queues using QR codes from their mobile devices."
          />

          <FeatureCard
            title="Smart Notifications"
            description="Send automated SMS or email updates for queue status and alerts."
          />

          <FeatureCard
            title="Responsive Interface"
            description="Fully optimized for desktops, tablets, TVs, and mobile devices."
          />

        </div>

      </div>

    </section>
  );
}