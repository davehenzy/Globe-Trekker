import { useEffect, useRef } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const testimonial = {
  name: 'Maria Angelica',
  location: 'North Palawan',
  avatar: '/images/testimonial-avatar.jpg',
  title: 'An Unforgettable Journey Through Turkey',
  text: 'From the moment I arrived, I was captivated by the rich history and vibrant culture. The landscapes were breathtaking, and the people were incredibly welcoming. Every day brought new adventures and discoveries.',
};

const highlightImages = [
  {
    src: '/images/highlight-balloons.jpg',
    alt: 'Hot air balloons over Cappadocia',
    caption: 'Sunrise from Cappadocia',
  },
  {
    src: '/images/highlight-caves.jpg',
    alt: 'Cappadocia cave dwellings',
    caption: 'Ancient cave dwellings',
  },
];

export default function Highlights() {
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
      id="highlights"
      className="py-16 lg:py-24 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <h2 className="reveal text-3xl lg:text-4xl font-bold text-[#2D2D2D]">
            Trekker's Highlights
          </h2>
          <a
            href="#"
            className="reveal inline-flex items-center gap-2 text-sm font-medium text-[#E86C45] hover:text-[#D55A35] transition-colors duration-200 group"
            style={{ transitionDelay: '100ms' }}
          >
            See more highlights
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Testimonial Card */}
          <div
            className="reveal bg-[#FFF5ED] rounded-2xl p-6 lg:p-8"
            style={{ transitionDelay: '150ms' }}
          >
            {/* Author */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white shadow-md">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-[#2D2D2D]">{testimonial.name}</h4>
                <div className="flex items-center gap-1 text-sm text-[#6B6B6B]">
                  <MapPin className="w-3 h-3" />
                  {testimonial.location}
                </div>
              </div>
            </div>

            {/* Content */}
            <h3 className="text-xl font-bold text-[#2D2D2D] mb-3">
              {testimonial.title}
            </h3>
            <p className="text-[#6B6B6B] leading-relaxed">
              {testimonial.text}
            </p>
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {highlightImages.map((image, index) => (
              <div
                key={index}
                className={`reveal group relative rounded-2xl overflow-hidden ${
                  index === 0 ? 'aspect-[4/3]' : 'aspect-[4/3]'
                }`}
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
