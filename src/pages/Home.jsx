import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Services from '../components/Services';
import KeyServices from '../components/KeyServices';
import AboutEduflair from '../components/AboutEduflair';
import Testimonials from '../components/Testimonials';
import PhotoGallery from '../components/PhotoGallery';
import NeedAssistance from '../components/NeedAssistance';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <KeyServices />
        <AboutEduflair />
        <Testimonials />
        <PhotoGallery />
        <NeedAssistance />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
