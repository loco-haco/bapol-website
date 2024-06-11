import Navbar from './components/Navbar';
import FeaturedCarousel from './components/FeaturedCarousel';
import DailyEvents from './components/DailyEvents';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      home
      <Navbar />
      <main className="container mx-auto">
       <FeaturedCarousel />
        <DailyEvents />
      <Footer />
     </main>
    
    </div>
  );
}
