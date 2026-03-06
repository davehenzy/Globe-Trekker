import { useState, useEffect, useRef } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail('');
      }, 3000);
    }
  };

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
      id="newsletter"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/newsletter-bg.jpg"
          alt="Desert landscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className="reveal text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight"
        >
          Get Your Travel Inspiration Straight to Your Inbox
        </h2>
        <p
          className="reveal text-white/80 text-base lg:text-lg mb-8 max-w-xl mx-auto"
          style={{ transitionDelay: '100ms' }}
        >
          Subscribe to our newsletter for exclusive travel guides, hidden gems, 
          and special deals.
        </p>

        <form
          onSubmit={handleSubmit}
          className="reveal flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          style={{ transitionDelay: '200ms' }}
        >
          <div className="flex-1 relative">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full h-12 px-5 bg-white/95 backdrop-blur-sm border-0 rounded-full text-[#2D2D2D] placeholder:text-[#9B9B9B] focus:ring-2 focus:ring-[#E86C45] focus:bg-white transition-all duration-200"
              required
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitted}
            className={`h-12 px-6 rounded-full font-medium transition-all duration-300 ${
              isSubmitted
                ? 'bg-green-500 hover:bg-green-500'
                : 'bg-[#E86C45] hover:bg-[#D55A35] hover:scale-105'
            } text-white`}
          >
            {isSubmitted ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Subscribed!
              </>
            ) : (
              <>
                Subscribe
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>
        </form>

        <p
          className="reveal text-white/60 text-xs mt-4"
          style={{ transitionDelay: '300ms' }}
        >
          By subscribing, you agree to our Privacy Policy and consent to receive updates.
        </p>
      </div>
    </section>
  );
}
