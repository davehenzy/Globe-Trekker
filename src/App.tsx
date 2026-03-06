import Header from './sections/Header';
import Hero from './sections/Hero';
import Destinations from './sections/Destinations';
import Stories from './sections/Stories';
import Highlights from './sections/Highlights';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      <Header />
      <main>
        <Hero />
        <Destinations />
        <Stories />
        <Highlights />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
