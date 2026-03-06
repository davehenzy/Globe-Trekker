import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const heroImages = [
  { src: '/images/hero-cathedral.jpg', alt: 'European cathedral architecture', className: 'col-span-2 row-span-2' },
  { src: '/images/hero-temple.jpg', alt: 'Ancient Asian temple', className: 'col-span-2 row-span-1' },
  { src: '/images/hero-village.jpg', alt: 'European coastal village', className: 'col-span-1 row-span-1' },
  { src: '/images/hero-mountain.jpg', alt: 'Mountain landscape', className: 'col-span-1 row-span-1' },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

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
      className="relative min-h-screen bg-[#FDF8F3] pt-[72px] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="order-2 lg:order-1">
            <h1 className="reveal text-4xl sm:text-5xl lg:text-[56px] font-bold text-[#2D2D2D] leading-[1.1] tracking-tight mb-6">
              Discover the{' '}
              <span className="text-[#E86C45]">World's Hidden</span>{' '}
              Wonders
            </h1>
            <p className="reveal text-base lg:text-lg text-[#6B6B6B] leading-relaxed mb-8 max-w-lg" style={{ transitionDelay: '100ms' }}>
              Find the unique moments and hidden gems that guidebooks often overlook. 
              From rare encounters to remarkable destinations, we help you uncover the 
              spark that turns every trip into a cherished story.
            </p>
            <div className="reveal" style={{ transitionDelay: '200ms' }}>
              <Button
                className="bg-[#E86C45] hover:bg-[#D55A35] text-white rounded-full px-8 py-6 text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              >
                Plan your trip
                <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image Collage */}
          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-4 grid-rows-3 gap-3 lg:gap-4 h-[400px] sm:h-[500px] lg:h-[550px]">
              {/* Large Image - Top Left */}
              <div 
                className="col-span-2 row-span-2 rounded-2xl overflow-hidden shadow-lg reveal"
                style={{ transitionDelay: '100ms' }}
              >
                <img
                  src={heroImages[0].src}
                  alt={heroImages[0].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Medium Image - Top Right */}
              <div 
                className="col-span-2 row-span-1 rounded-2xl overflow-hidden shadow-lg reveal"
                style={{ transitionDelay: '200ms' }}
              >
                <img
                  src={heroImages[1].src}
                  alt={heroImages[1].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Small Image - Bottom Left */}
              <div 
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg reveal"
                style={{ transitionDelay: '300ms' }}
              >
                <img
                  src={heroImages[2].src}
                  alt={heroImages[2].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              
              {/* Medium Image - Bottom Right */}
              <div 
                className="col-span-1 row-span-1 rounded-2xl overflow-hidden shadow-lg reveal"
                style={{ transitionDelay: '400ms' }}
              >
                <img
                  src={heroImages[3].src}
                  alt={heroImages[3].alt}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-[#E86C45]/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-[#F5A962]/10 rounded-full blur-3xl" />
    </section>
  );
}
