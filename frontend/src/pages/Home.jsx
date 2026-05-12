import MainLayout from "../layouts/MainLayout";
import Hero from "../components/Hero";
import Features from "../components/Features";

export default function Home() {
  return (
    <MainLayout>
      <Hero />
      <Features />
    </MainLayout>
  );
}