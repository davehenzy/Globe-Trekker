import { useEffect, useRef } from 'react';
import { ArrowRight, Clock } from 'lucide-react';

const featuredStory = {
  category: 'Food and Drink',
  title: 'Los Angeles food & drink guide: 10 things to try in Los Angeles, California',
  date: 'Aug 15, 2024',
  readTime: '8 min read',
  image: '/images/story-la-food.jpg',
};

const stories = [
  {
    id: 1,
    category: 'Shopping',
    title: "15 South London Markets You'll Love: Best Markets in South London",
    date: 'Aug 15, 2024',
    readTime: '6 min read',
    image: '/images/story-london-market.jpg',
  },
  {
    id: 2,
    category: 'Hotels',
    title: '10 incredible hotels around the world you can book with points in 2024',
    date: 'Aug 13, 2024',
    readTime: '5 min read',
    image: '/images/story-hotel.jpg',
  },
  {
    id: 3,
    category: 'Travel Budget',
    title: 'Visiting Chicago on a Budget: Affordable Eats and Attraction Deals',
    date: 'Aug 10, 2024',
    readTime: '9 min read',
    image: '/images/story-chicago.jpg',
  },
];

export default function Stories() {
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
      id="stories"
      className="py-16 lg:py-24 bg-[#FFF5ED]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <h2 className="reveal text-3xl lg:text-4xl font-bold text-[#2D2D2D]">
            Latest Stories
          </h2>
          <a
            href="#"
            className="reveal inline-flex items-center gap-2 text-sm font-medium text-[#E86C45] hover:text-[#D55A35] transition-colors duration-200 group"
            style={{ transitionDelay: '100ms' }}
          >
            Read more articles
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Featured Story */}
          <div
            className="reveal group cursor-pointer"
            style={{ transitionDelay: '150ms' }}
          >
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-4">
              <img
                src={featuredStory.image}
                alt={featuredStory.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-[#E86C45] text-white text-xs font-medium rounded-full mb-3">
                  {featuredStory.category}
                </span>
                <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 group-hover:translate-y-[-4px] transition-transform duration-300">
                  {featuredStory.title}
                </h3>
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span>{featuredStory.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {featuredStory.readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Story List */}
          <div className="flex flex-col gap-4">
            {stories.map((story, index) => (
              <div
                key={story.id}
                className="reveal group cursor-pointer flex gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-300"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col justify-center flex-1 min-w-0">
                  <span className="text-xs font-medium text-[#E86C45] mb-1">
                    {story.category}
                  </span>
                  <h4 className="text-base font-semibold text-[#2D2D2D] mb-2 line-clamp-2 group-hover:text-[#E86C45] transition-colors duration-200">
                    {story.title}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-[#9B9B9B]">
                    <span>{story.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {story.readTime}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-[#9B9B9B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
