import { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const categories = [
  'Popular',
  'USA',
  'Europe',
  'Asia',
  'Africa & Middle East',
  'Australia & the Pacific',
  'Islands',
  'More +',
];

const destinations = [
  {
    id: 1,
    name: 'Golden Bridge',
    location: 'Bà Nà Hills, Vietnam',
    image: '/images/dest-golden-bridge.jpg',
    category: 'Asia',
  },
  {
    id: 2,
    name: 'Dubrovnik',
    location: 'Croatia',
    image: '/images/dest-dubrovnik.jpg',
    category: 'Europe',
  },
  {
    id: 3,
    name: 'Hot Air Balloons',
    location: 'Cappadocia, Turkey',
    image: '/images/dest-cappadocia.jpg',
    category: 'Europe',
  },
  {
    id: 4,
    name: 'Sydney Harbour Bridge',
    location: 'Australia',
    image: '/images/dest-sydney.jpg',
    category: 'Australia & the Pacific',
  },
];

export default function Destinations() {
  const [activeCategory, setActiveCategory] = useState('Popular');
  const [filteredDestinations, setFilteredDestinations] = useState(destinations);
  const sectionRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (activeCategory === 'Popular') {
      setFilteredDestinations(destinations);
    } else {
      setFilteredDestinations(
        destinations.filter((d) => d.category === activeCategory)
      );
    }
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const reveals = sectionRef.current?.querySelectorAll('.reveal');
    reveals?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="destinations"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="reveal text-3xl lg:text-4xl font-bold text-[#2D2D2D]">
            Top Destinations
          </h2>
          <a
            href="#"
            className="reveal inline-flex items-center gap-2 text-sm font-medium text-[#E86C45] hover:text-[#D55A35] transition-colors duration-200 group"
            style={{ transitionDelay: '100ms' }}
          >
            Explore all destinations
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Filter Tabs */}
        <div
          ref={tabsRef}
          className="reveal flex gap-2 overflow-x-auto pb-4 mb-8 scrollbar-hide"
          style={{ transitionDelay: '150ms' }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#E86C45] text-white'
                  : 'bg-[#FFF5ED] text-[#6B6B6B] hover:bg-[#E86C45]/10 hover:text-[#E86C45]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Destinations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDestinations.map((destination, index) => (
            <div
              key={destination.id}
              className="reveal group cursor-pointer"
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-4">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-lg font-semibold text-[#2D2D2D] group-hover:text-[#E86C45] transition-colors duration-200">
                {destination.name}
              </h3>
              <p className="text-sm text-[#6B6B6B]">{destination.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
