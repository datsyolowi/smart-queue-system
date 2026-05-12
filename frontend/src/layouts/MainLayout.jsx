import Navbar from "../components/Navbar";

export default function MainLayout({ children }) {
  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      <main>
        {children}
      </main>
    </div>
  );
}