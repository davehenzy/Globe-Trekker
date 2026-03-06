import { Globe, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  about: {
    title: 'About',
    links: ['About us', 'Careers', 'Press', 'Partner with Us', 'Blog'],
  },
  travelInterest: {
    title: 'Travel Interest',
    links: ['Adventure', 'Art & Culture', 'Food & Drink', 'Family Travel', 'Road Trips'],
  },
  topDestinations: {
    title: 'Top Destinations',
    links: ['USA', 'Europe', 'Asia', 'Africa', 'Australia'],
  },
  quicklinks: {
    title: 'Quicklinks',
    links: ['Travel Guides', 'Travel Insurance', 'FAQ', 'Contact Us'],
  },
};

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="bg-[#3D3D3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Logo & Social */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Globe className="w-6 h-6 text-[#E86C45]" />
              <span className="text-lg font-bold tracking-tight">
                GLOBE TREKKER
              </span>
            </a>
            <p className="text-white/60 text-sm mb-6 max-w-xs">
              Discover the world's hidden wonders. Your journey to extraordinary destinations starts here.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#E86C45] hover:text-white transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold text-sm mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-white/50 flex flex-col sm:flex-row items-center gap-1 sm:gap-2">
            <span>© 2026 Globe Trekker. All rights reserved.</span>
            <span className="hidden sm:inline">&bull;</span>
            <span>build with ❤️ by  <a href="https://techiextract.com.ng">techieXtract</a></span>
          </div>
          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-white/50 hover:text-white transition-colors duration-200"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
