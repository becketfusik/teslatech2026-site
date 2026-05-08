import Hero from '@/components/Hero';
import Pitch from '@/components/Pitch';
import Speakers from '@/components/Speakers';
import Agenda from '@/components/Agenda';
import Pricing from '@/components/Pricing';
import Hotel from '@/components/Hotel';
import Vendors from '@/components/Vendors';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Pitch />
      <Speakers />
      <Agenda />
      <Pricing />
      <Hotel />
      <Vendors />
      <FAQ />
      <Footer />
    </main>
  );
}
