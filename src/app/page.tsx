import Header from '@/components/layout/Header';
import Hero from '@/components/landing/Hero';
import ProblemSection from '@/components/landing/ProblemSection';
import Pricing from '@/components/landing/Pricing';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ProblemSection />
      <Pricing />
      <Footer />
    </main>
  );
}
