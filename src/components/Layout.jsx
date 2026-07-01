import { useLocation } from 'react-router-dom';
import TopBar from './TopBar';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

export default function Layout({ children }) {
  const { pathname } = useLocation();
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <TopBar />
      <Navbar />
      <main key={pathname} className="flex-1 page-animate">{children}</main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
