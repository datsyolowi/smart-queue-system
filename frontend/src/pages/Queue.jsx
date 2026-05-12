import MainLayout from "../layouts/MainLayout";
import QueueTicket from "../components/QueueTicket";
import ServiceCard from "../components/ServiceCard";

export default function Queue() {
  return (
    <MainLayout>

      <section className="px-8 py-20">

        <div className="max-w-7xl mx-auto">

          {/* HEADER */}
          <div className="mb-16">

            <p className="text-cyan-400 font-semibold mb-4">
              CUSTOMER QUEUE
            </p>

            <h1 className="text-5xl font-bold mb-6">
              Get Your Queue Number
            </h1>

            <p className="text-zinc-400 text-lg max-w-2xl">
              Select a service below to receive your queue ticket
              and estimated waiting time.
            </p>

          </div>

          {/* SERVICE CARDS */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">

            <ServiceCard
              title="General Services"
              description="Customer assistance and general inquiries."
            />

            <ServiceCard
              title="Priority Lane"
              description="Senior citizens, PWDs, and priority transactions."
            />

            <ServiceCard
              title="Payments"
              description="Billing, payments, and cashier transactions."
            />

          </div>

          {/* QUEUE TICKET */}
          <QueueTicket />

        </div>

      </section>

    </MainLayout>
  );
}