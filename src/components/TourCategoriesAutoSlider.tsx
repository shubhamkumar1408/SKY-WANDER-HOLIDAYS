import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Play, Pause } from 'lucide-react';

export interface TourCategoryItem {
  id: string;
  title: string;
  subtitle?: string;
  priceTag?: string;
  image: string;
  seeMoreLinkText?: string;
  filterType: 'theme' | 'destination' | 'region' | 'query';
  filterValue: string;
  badge?: string;
}

export const TOUR_CATEGORIES: TourCategoryItem[] = [
  {
    id: 'cat-treks',
    title: 'Treks & Trails',
    image: 'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=700&q=80',
    filterType: 'theme',
    filterValue: 'Adventure & Trekking',
    seeMoreLinkText: 'See More',
    badge: 'Popular'
  },
  {
    id: 'cat-spiti',
    title: 'Spiti Valley Group Tour Packages | Starting ₹15,500',
    image: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=700&q=80',
    filterType: 'destination',
    filterValue: 'Spiti Valley',
    priceTag: '₹15,500',
    seeMoreLinkText: 'See More',
    badge: 'Group Special'
  },
  {
    id: 'cat-backpacking',
    title: 'Backpacking Trips',
    image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=700&q=80',
    filterType: 'theme',
    filterValue: 'Group Departure',
    seeMoreLinkText: 'See More',
    badge: 'Youth & Groups'
  },
  {
    id: 'cat-chardham',
    title: 'Char Dham Package',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=700&q=80',
    filterType: 'theme',
    filterValue: 'Spiritual & Pilgrimage',
    seeMoreLinkText: 'See More',
    badge: 'Holy Yatra'
  },
  {
    id: 'cat-weekend',
    title: 'Janmashtami & Long Weekend Trips | From Delhi 2026',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80',
    filterType: 'theme',
    filterValue: 'Weekend Getaway',
    seeMoreLinkText: 'See More',
    badge: 'Fast Selling'
  },
  {
    id: 'cat-valley-of-flowers',
    title: 'Valley of Flowers UNESCO Alpine Trek',
    image: '/images/valley_of_flowers.jpg',
    filterType: 'destination',
    filterValue: 'Valley of Flowers',
    seeMoreLinkText: 'See More',
    badge: 'UNESCO Wonder 🌸'
  },
  {
    id: 'cat-ladakh',
    title: 'Leh-Ladakh Road Trips & Bike Expeditions',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=700&q=80',
    filterType: 'destination',
    filterValue: 'Ladakh',
    seeMoreLinkText: 'See More',
    badge: 'High Altitude'
  },
  {
    id: 'cat-kerala',
    title: 'Kerala Backwaters & Houseboat Escapes',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=700&q=80',
    filterType: 'region',
    filterValue: 'Kerala',
    seeMoreLinkText: 'See More',
    badge: 'Scenic Green'
  },
  {
    id: 'cat-rajasthan',
    title: 'Royal Rajasthan: Udaipur, Pushkar, Jaisalmer & Jaipur',
    image: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=700&q=80',
    filterType: 'region',
    filterValue: 'Rajasthan',
    priceTag: '₹7,000',
    seeMoreLinkText: 'See More',
    badge: 'Royal Heritage 🏰'
  },
  {
    id: 'cat-honeymoon',
    title: 'Honeymoon & Romantic Luxury Getaways',
    image: 'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=700&q=80',
    filterType: 'theme',
    filterValue: 'Honeymoon & Romantic',
    seeMoreLinkText: 'See More',
    badge: 'Candlelight Stays'
  },
  {
    id: 'cat-intl',
    title: 'Exotic International Wonders (Vietnam, Bali, Thailand)',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=700&q=80',
    filterType: 'region',
    filterValue: 'International Destinations',
    seeMoreLinkText: 'See More',
    badge: 'Passport Ready'
  }
];

interface TourCategoriesAutoSliderProps {
  onSelectCategory: (item: TourCategoryItem) => void;
}

export const TourCategoriesAutoSlider: React.FC<TourCategoriesAutoSliderProps> = ({
  onSelectCategory
}) => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeftState, setScrollLeftState] = useState<number>(0);

  // Auto-scroll loop effect
  useEffect(() => {
    if (isPaused || isDragging) return;

    const interval = setInterval(() => {
      if (!sliderRef.current) return;
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      
      // If reached end, smoothly reset to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        sliderRef.current.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        // Step forward by 1 card width (~280px)
        sliderRef.current.scrollBy({ left: 280, behavior: 'smooth' });
      }
    }, 3200);

    return () => clearInterval(interval);
  }, [isPaused, isDragging]);

  const handleScrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -320, behavior: 'smooth' });
    }
  };

  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 320, behavior: 'smooth' });
    }
  };

  // Mouse Drag to Scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeftState(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section 
      id="tour-categories-slider-section" 
      className="relative py-14 sm:py-18 overflow-hidden bg-[#F4FAF8] border-b border-slate-200/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle Travel Doodles & Icons Background Pattern (Matching Screenshot) */}
      <div 
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1698B4 1px, transparent 1px), radial-gradient(#FF7A00 1px, #F4FAF8 1px)`,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 12px 12px'
        }}
      />
      
      {/* Decorative Vector Travel Icons in Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none opacity-[0.05]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <pattern id="travel-doodles" width="160" height="160" patternUnits="userSpaceOnUse">
            {/* Camera */}
            <path d="M20 30 h30 v25 h-30 z M28 25 h14 v5 h-14 z M35 42 a6 6 0 1 0 0.1 0" stroke="#004D40" strokeWidth="1.5" fill="none"/>
            {/* Hot Air Balloon */}
            <path d="M110 30 a16 16 0 0 0 -32 0 c0 10 12 22 16 26 c4 -4 16 -16 16 -26 z M90 62 h8 v6 h-8 z" stroke="#004D40" strokeWidth="1.5" fill="none"/>
            {/* Compass / Pin */}
            <path d="M30 120 a15 15 0 1 0 30 0 a15 15 0 1 0 -30 0 M45 110 l5 15 l-15 -5 z" stroke="#004D40" strokeWidth="1.5" fill="none"/>
            {/* Sunglasses */}
            <path d="M100 120 a10 10 0 0 1 18 0 h8 a10 10 0 0 1 18 0" stroke="#004D40" strokeWidth="1.5" fill="none"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#travel-doodles)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Calligraphic Script Title & Bold Main Header */}
        <div className="text-center mb-8 sm:mb-10">
          <div className="inline-block">
            <span 
              className="block text-2xl sm:text-3xl lg:text-4xl text-[#1698B4] font-medium tracking-wide mb-1"
              style={{ fontFamily: "'Kaushan Script', 'Caveat', cursive" }}
            >
              Wonderful Place For You
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0B2530] tracking-tight mt-0.5">
            Tour Categories
          </h2>

          <p className="mt-2 text-slate-600 text-xs sm:text-sm font-medium max-w-xl mx-auto">
            Swipe through our most loved domestic holiday themes, group departures & customized circuits.
          </p>
        </div>

        {/* Slider Controls Bar (Prev / Next & Play / Pause indicator) */}
        <div className="flex items-center justify-between mb-4 px-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-slate-200 text-slate-700 text-[11px] font-bold shadow-sm hover:bg-slate-50 transition-all cursor-pointer"
              title={isPaused ? "Resume Auto Slide" : "Pause Auto Slide"}
            >
              {isPaused ? (
                <>
                  <Play className="w-3 h-3 text-emerald-600 fill-emerald-600" />
                  <span>Resume Auto Slide</span>
                </>
              ) : (
                <>
                  <Pause className="w-3 h-3 text-[#FF7A00] fill-[#FF7A00]" />
                  <span>Auto Sliding Active</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleScrollLeft}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:bg-[#1698B4] hover:text-white hover:border-[#1698B4] transition-all cursor-pointer"
              aria-label="Previous Category"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <button
              onClick={handleScrollRight}
              className="w-9 h-9 rounded-full bg-white border border-slate-200/90 shadow-sm flex items-center justify-center text-slate-700 hover:bg-[#1698B4] hover:text-white hover:border-[#1698B4] transition-all cursor-pointer"
              aria-label="Next Category"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* The Auto Slider Container */}
        <div
          ref={sliderRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUpOrLeave}
          className="flex gap-5 sm:gap-6 overflow-x-auto pb-6 pt-2 no-scrollbar scroll-smooth cursor-grab active:cursor-grabbing select-none"
        >
          {TOUR_CATEGORIES.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectCategory(item)}
              className="group flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] flex flex-col items-center cursor-pointer transition-transform duration-300 hover:-translate-y-1.5"
            >
              {/* Squircle / Curved Rectangular Card Image (Matching Screenshot) */}
              <div className="relative w-full aspect-[1/1] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-slate-200 shadow-md group-hover:shadow-2xl transition-all duration-300 border-2 border-white group-hover:border-[#1698B4]/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  draggable={false}
                />

                {/* Subtle Inner Gradient for Contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Floating Tag Badge if Present */}
                {item.badge && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider border border-white/20 shadow-sm">
                    {item.badge}
                  </span>
                )}

                {/* Hover Quick Action Indicator */}
                <div className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-slate-900 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  <ArrowRight className="w-4 h-4 text-[#FF7A00]" />
                </div>
              </div>

              {/* Title & See More Below Card */}
              <div className="mt-3.5 text-center px-2 flex flex-col items-center w-full">
                <h3 className="text-base sm:text-lg font-black text-slate-900 leading-snug group-hover:text-[#1698B4] transition-colors line-clamp-2 min-h-[44px] flex items-center justify-center">
                  {item.title}
                </h3>
                
                <span className="mt-1 text-xs font-bold text-slate-500 group-hover:text-[#FF7A00] flex items-center gap-1 transition-colors">
                  {item.seeMoreLinkText || 'See More'}
                  <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
