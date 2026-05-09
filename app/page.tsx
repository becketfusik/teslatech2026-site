import Hero from '@/components/Hero';
import TrustSignals from '@/components/TrustSignals';
import FeaturedSpeakers from '@/components/FeaturedSpeakers';
import Agenda from '@/components/Agenda';
import Pitch from '@/components/Pitch';
import Pricing from '@/components/Pricing';
import WalkAway from '@/components/WalkAway';
import AudienceSegments from '@/components/AudienceSegments';
import Hotel from '@/components/Hotel';
import Speakers from '@/components/Speakers';
import Vendors from '@/components/Vendors';
import FAQ from '@/components/FAQ';
import TtnAbout from '@/components/TtnAbout';
import Footer from '@/components/Footer';
import StickyCTA from '@/components/StickyCTA';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustSignals />
      <FeaturedSpeakers />
      <Agenda />
      <Pitch />
      <Pricing />
      <WalkAway />
      <AudienceSegments />
      <Hotel />
      <Speakers />
      <Vendors />
      <FAQ />
      <TtnAbout />
      <Footer />
      <StickyCTA />
    </main>
  );
}
