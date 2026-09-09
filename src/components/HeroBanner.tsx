import React, { useState, useEffect } from 'react';
import { 
  Search, 
  MapPin, 
  Calendar, 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Star, 
  Send, 
  ArrowRight,
  Plane,
  ChevronRight,
  Globe2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DOMESTIC_REGIONS } from '../data/destinations';

interface HeroBannerProps {
  onSearch: (params: { region: string; theme: string; search: string; maxPrice?: number }) => void;
  onOpenCustomPlanner: () => void;
  onSelectQuickTag: (tag: string) => void;
}

const HERO_SLIDES = [
  {
    title: 'Spiti Valley & Chandratal Lake',
    subtitle: '1000-year Key Monastery, high mountain passes & milky way camping',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'Himachal High Desert',
    startingPrice: '₹20,000 (6N/7D)'
  },
  {
    title: 'Pangong Lake & Leh Ladakh',
    subtitle: 'High passes, Khardung La at 17,982 ft & Bactrian camel sand dunes',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'Land of High Passes',
    startingPrice: '₹35,000 (9N/10D)'
  },
  {
    title: 'Sacred Kedarnath & Char Dham Yatra',
    subtitle: 'Holiest Shiva Jyotirlinga, Mandakini river trek & Himalayan snow darshan',
    image: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'Devbhoomi Uttarakhand',
    startingPrice: 'From ₹8,000'
  },
  {
    title: 'Manali, Solang Snow & Kasol Valley',
    subtitle: 'Atal Tunnel road trip, Manikaran hot springs & Parvati river cafes',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'Himachal Snow & Vibe',
    startingPrice: '₹7,000 (3N/4D)'
  },
  {
    title: 'Exotic Vietnam & Halong Bay Cruise',
    subtitle: 'Ba Na Hills Golden Giant Hands Bridge, emerald waters & Hoi An lanterns',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'International Special',
    startingPrice: '₹38,000 (5N/6D)'
  },
  {
    title: 'Tropical Bali & Nusa Penida Islands',
    subtitle: 'Kelingking T-Rex cliff, Ubud jungle swing & private luxury pool villa',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'International Paradise',
    startingPrice: '₹32,000 (5N/6D)'
  },
  {
    title: 'Snow Valleys of Kashmir & Dal Lake',
    subtitle: 'Romantic Shikara rides, frozen Apharwat peaks & cedar houseboats',
    image: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=2000&q=90',
    regionTag: 'Paradise on Earth',
    startingPrice: '₹16,999 (5N/6D)'
  }
];

const QUICK_TAGS = [
  'Spiti Valley',
  'Leh Ladakh',
  'Char Dham Yatra',
  'Kedarnath',
  'Manali Kasol',
  'Jibhi Sojha',
  'Chopta Tungnath',
  'Valley of Flowers',
  'Kedarkantha',
  'Hampta Pass',
  'Vietnam',
  'Bali',
  'Thailand',
  'Bhutan'
];

export const HeroBanner: React.FC<HeroBannerProps> = ({
  onSearch,
  onOpenCustomPlanner,
  onSelectQuickTag
}) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [destinationInput, setDestinationInput] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All Regions');
  const [selectedDuration, setSelectedDuration] = useState('any');
  const [maxBudget, setMaxBudget] = useState<number | undefined>(undefined);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      search: destinationInput,
      region: selectedRegion,
      theme: 'All Themes',
      maxPrice: maxBudget
    });

    const packagesSection = document.getElementById('packages-section');
    if (packagesSection) {
      packagesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = HERO_SLIDES[activeSlide];

  return (
    <div className="relative w-full overflow-hidden bg-[#07161C] text-white min-h-[640px] lg:min-h-[700px] flex flex-col justify-between">
      {/* High Definition Background Image Carousel with Crystal Clear Optics */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeSlide}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.1, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover object-center filter brightness-[1.03] contrast-[1.05] saturate-[1.12]"
            loading="eager"
          />
          
          {/* Crystal-Clear Light Vignette Gradient - Keeps Background Crisp & Visible while ensuring text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#07161C]/85 via-[#07161C]/45 to-black/25 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07161C]/90 via-transparent to-black/20 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Subtle Brand Ambient Glow Orbs */}
      <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-[#1698B4]/15 rounded-full blur-[130px] pointer-events-none z-1" />
      <div className="absolute bottom-10 left-0 w-[350px] h-[350px] bg-[#FF7A00]/15 rounded-full blur-[110px] pointer-events-none z-1" />

      {/* Floating Plane Vector */}
      <motion.div 
        className="absolute top-10 right-14 text-white/40 hidden lg:flex items-center gap-2 pointer-events-none z-10"
        animate={{ x: [0, -30, 0], y: [0, -10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      >
        <Plane className="w-9 h-9 rotate-45 text-[#FF7A00] drop-shadow-md" />
        <div className="h-[1px] w-28 border-t border-dashed border-[#1698B4]/70" />
      </motion.div>

      {/* Top Banner Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 lg:pt-14 pb-6 w-full">
        {/* Brand Header Tag */}
        <div className="flex flex-wrap items-center gap-3 mb-3 sm:mb-4">
          <div className="h-[3px] w-8 bg-[#FF7A00] rounded-full"></div>
          <span className="text-[#38BDF8] uppercase tracking-[0.25em] text-[11px] sm:text-xs font-black drop-shadow">
            Sky Wander Holidays • Best Price Guaranteed
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-semibold border border-white/20 shadow-md">
            <Star className="w-3.5 h-3.5 text-[#FF7A00] fill-[#FF7A00]" />
            4.9/5 Rating (45k+ Happy Travelers)
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1698B4]/30 backdrop-blur-md text-[#67e8f9] text-xs font-semibold border border-[#1698B4]/50 shadow-md">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
            Domestic & International Expert
          </span>
        </div>

        {/* Dynamic Title with Clear Text Shadows */}
        <div className="max-w-3xl">
          <motion.h1 
            key={`title-${activeSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.05] drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]"
          >
            {slide.title.split(' & ')[0]} {slide.title.includes(' & ') && <span className="text-[#FF7A00]">& {slide.title.split(' & ')[1]}</span>}
          </motion.h1>
          
          <motion.p 
            key={`sub-${activeSlide}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3.5 text-sm sm:text-base text-slate-100 font-medium max-w-2xl leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]"
          >
            {slide.subtitle} — curated by Sky Wander Holidays with private cabs, certified mountain guides, and 24x7 WhatsApp support.
          </motion.p>
        </div>

        {/* Carousel indicators */}
        <div className="flex items-center gap-2 mt-4 sm:mt-5">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 shadow ${
                i === activeSlide ? 'w-10 bg-[#FF7A00]' : 'w-2.5 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
          <span className="text-xs text-[#38BDF8] font-black uppercase tracking-wider ml-2 bg-black/40 px-2.5 py-0.5 rounded-md border border-white/10 backdrop-blur-sm">
            {slide.regionTag} • <strong className="text-[#FF7A00]">{slide.startingPrice}</strong>
          </span>
        </div>

        {/* Search & Filter Card with Clean Contrast */}
        <div className="mt-6 sm:mt-8 bg-white/95 backdrop-blur-md text-slate-900 p-4 sm:p-6 rounded-2xl shadow-2xl border border-white/40">
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 items-center">
            {/* Input 1: Destination / State */}
            <div className="relative">
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Destination / Package
              </label>
              <div className="relative flex items-center">
                <MapPin className="w-4 h-4 text-[#1698B4] absolute left-3" />
                <input
                  type="text"
                  value={destinationInput}
                  onChange={(e) => setDestinationInput(e.target.value)}
                  placeholder="e.g. Spiti, Ladakh, Kedarnath, Bali..."
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1698B4] focus:border-[#1698B4] transition-all placeholder:text-slate-400"
                />
              </div>
            </div>

            {/* Input 2: Region Filter */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Explore Region / Sector
              </label>
              <div className="relative flex items-center">
                <Compass className="w-4 h-4 text-[#1698B4] absolute left-3" />
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1698B4] focus:border-[#1698B4] transition-all appearance-none cursor-pointer"
                >
                  <option value="All Regions">All Destinations (India & Intl)</option>
                  {DOMESTIC_REGIONS.map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Input 3: Budget Range */}
            <div>
              <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                Budget / Traveler
              </label>
              <div className="relative flex items-center">
                <span className="text-sm font-bold text-[#FF7A00] absolute left-3">₹</span>
                <select
                  value={maxBudget || ''}
                  onChange={(e) => setMaxBudget(e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full pl-8 pr-3 py-2.5 bg-slate-50 text-xs sm:text-sm font-semibold text-slate-900 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1698B4] focus:border-[#1698B4] transition-all appearance-none cursor-pointer"
                >
                  <option value="">Any Budget</option>
                  <option value="7000">Under ₹7,000 (Weekend Treks & Trips)</option>
                  <option value="10000">Under ₹10,000 (Chopta, Kedarnath)</option>
                  <option value="20000">Under ₹20,000 (Spiti, Kashmir, Kerala)</option>
                  <option value="35000">Under ₹35,000 (Ladakh, Bali, Thailand)</option>
                </select>
              </div>
            </div>

            {/* CTA Search Button */}
            <div className="pt-2 sm:pt-4 lg:pt-0">
              <button
                type="submit"
                className="w-full py-3.5 px-5 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-[#FF7A00]/30 flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
              >
                <Search className="w-4 h-4" />
                <span>Search Tour Packages</span>
              </button>
            </div>
          </form>

          {/* Quick Tags Strip */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center gap-1.5 text-xs">
            <span className="text-slate-700 font-bold uppercase tracking-wider text-[10px] flex items-center gap-1 mr-1">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
              Popular Picks:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => onSelectQuickTag(tag)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-[#EBF7FA] hover:text-[#1698B4] hover:border-[#1698B4]/40 text-slate-700 text-[11px] font-semibold transition-colors cursor-pointer border border-slate-200"
              >
                {tag}
              </button>
            ))}

            <button
              type="button"
              onClick={onOpenCustomPlanner}
              className="ml-auto text-[#1698B4] hover:text-[#0D7E99] font-bold flex items-center gap-1 text-xs uppercase tracking-wider pl-2"
            >
              Custom Trip? AI Architect <ChevronRight className="w-3.5 h-3.5 text-[#FF7A00]" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Features Ticker Bar */}
      <div className="relative z-10 bg-[#07161C]/95 backdrop-blur-md border-t border-[#1698B4]/20 py-3 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 text-xs font-medium text-slate-200">
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#1698B4]/30 text-[#38BDF8] flex items-center justify-center font-bold text-xs border border-[#1698B4]/40">1</span>
            <span>100% Sanitized Private AC Cabs & Mountain Chauffeurs</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#1698B4]/30 text-[#38BDF8] flex items-center justify-center font-bold text-xs border border-[#1698B4]/40">2</span>
            <span>Handpicked Top Mountain Resorts, Stays & Camps</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#1698B4]/30 text-[#38BDF8] flex items-center justify-center font-bold text-xs border border-[#1698B4]/40">3</span>
            <span>24x7 Dedicated On-Trip Ground Coordinator</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-[#FF7A00]/30 text-[#FF7A00] flex items-center justify-center font-bold text-xs border border-[#FF7A00]/40">4</span>
            <span>Zero Hidden Costs & Instant WhatsApp Itinerary Delivery</span>
          </div>
        </div>
      </div>
    </div>
  );
};
