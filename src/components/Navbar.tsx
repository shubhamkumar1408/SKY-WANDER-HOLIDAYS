import React, { useState, useEffect } from 'react';
import { 
  Phone, 
  MapPin, 
  Calendar, 
  Sparkles, 
  Heart, 
  Menu, 
  X, 
  ShieldCheck, 
  Search,
  Sun,
  CloudSnow,
  Palmtree,
  Mountain,
  MessageCircle,
  Users
} from 'lucide-react';
import { TourPackage } from '../types';
import { BrandLogo } from './BrandLogo';

interface NavbarProps {
  onOpenCustomPlanner: () => void;
  onOpenInquiry: (pkg?: TourPackage) => void;
  selectedRegion: string;
  onSelectRegion: (region: string) => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
  savedCount: number;
}

const WEATHER_TICKERS = [
  { city: 'Gulmarg, Kashmir', temp: '11°C', icon: CloudSnow, condition: 'Chilly & Clear' },
  { city: 'Manali, Himachal', temp: '14°C', icon: Mountain, condition: 'Pleasant Breeze' },
  { city: 'Calangute, Goa', temp: '29°C', icon: Palmtree, condition: 'Sunny Beach' },
  { city: 'Munnar, Kerala', temp: '18°C', icon: Sun, condition: 'Misty Tea Hills' },
  { city: 'Pangong, Ladakh', temp: '9°C', icon: CloudSnow, condition: 'Crystal Blue' }
];

export const Navbar: React.FC<NavbarProps> = ({
  onOpenCustomPlanner,
  onOpenInquiry,
  onSelectRegion,
  searchQuery,
  onSearchChange,
  savedCount
}) => {
  const [tickerIndex, setTickerIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTickerIndex((prev) => (prev + 1) % WEATHER_TICKERS.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentWeather = WEATHER_TICKERS[tickerIndex];
  const WeatherIcon = currentWeather.icon;

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full transition-all duration-300">
      {/* Top Notification & Hotline Strip */}
      <div className="bg-[#0B2530] text-white text-xs py-2 px-4 border-b border-[#1698B4]/20">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          {/* Weather & Live Ticker */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#1698B4]/20 text-[#38BDF8] font-semibold border border-[#1698B4]/40 text-[10px] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-ping"></span>
              Noida Office • Domestic Specialist
            </span>
            
            <div className="flex items-center gap-1.5 text-slate-300 font-medium transition-all duration-500 text-xs">
              <WeatherIcon className="w-3.5 h-3.5 text-[#FF7A00] animate-pulse" />
              <span>{currentWeather.city}: <strong className="text-white">{currentWeather.temp}</strong> ({currentWeather.condition})</span>
            </div>
          </div>

          {/* Direct Mobile & WhatsApp Contacts */}
          <div className="flex items-center gap-4 text-slate-200">
            <a 
              href="tel:+918676928509" 
              className="flex items-center gap-1.5 hover:text-[#FF7A00] transition-colors font-bold text-xs tracking-wide"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Call: +91 86769 28509</span>
            </a>

            <a 
              href="https://wa.me/918676928509?text=Namaste%20Sky%20Wander%20Holidays!%20I%20am%20looking%20for%20a%20domestic%20tour%20package." 
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition-colors font-bold text-xs"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => onOpenInquiry()}
              className="hidden md:flex items-center gap-1.5 text-[#38BDF8] hover:text-[#FF7A00] font-medium text-xs transition-colors cursor-pointer"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Verified Cabs & Hotels</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`w-full transition-all duration-300 border-b border-slate-200/80 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5' 
          : 'bg-white shadow-sm py-3.5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Brand Logo - Official Sky Wander Holidays Logo */}
          <div 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center cursor-pointer group"
          >
            <BrandLogo variant="horizontal" size="md" />
          </div>

          {/* Desktop Search Box */}
          <div className="hidden lg:flex items-center flex-1 max-w-xs relative mx-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search Kashmir, Goa, Kerala, Ladakh..."
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-full focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1698B4] focus:border-[#1698B4] text-slate-800 placeholder-slate-400 transition-all"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            {searchQuery && (
              <button 
                onClick={() => onSearchChange('')}
                className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            )}
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-6 text-xs font-bold uppercase tracking-wider text-slate-700">
            <button 
              onClick={() => scrollToSection('tour-categories-slider-section')}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer text-[#1698B4]"
            >
              Categories
            </button>
            <button 
              onClick={() => scrollToSection('destinations-section')}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer"
            >
              Destinations
            </button>
            <button 
              onClick={() => scrollToSection('packages-section')}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer"
            >
              Packages
            </button>
            <button 
              onClick={() => {
                onSelectRegion('North India');
                scrollToSection('packages-section');
              }}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer"
            >
              Himalayas
            </button>
            <button 
              onClick={() => {
                onSelectRegion('South India');
                scrollToSection('packages-section');
              }}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer"
            >
              South India
            </button>
            <button 
              onClick={() => scrollToSection('about-section')}
              className="hover:text-[#1698B4] transition-colors pb-1 hover:border-b-2 hover:border-[#1698B4] cursor-pointer text-[#1698B4]"
            >
              About Us
            </button>
            <button 
              onClick={onOpenCustomPlanner}
              className="flex items-center gap-1.5 text-[#1698B4] hover:text-[#0D7E99] bg-[#EBF7FA] hover:bg-[#D6F1F7] px-3 py-1.5 rounded-full border border-[#1698B4]/30 font-bold transition-all cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>AI Planner</span>
            </button>
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('packages-section')}
              className="relative p-2 text-slate-600 hover:text-[#FF7A00] transition-colors cursor-pointer"
              title="Saved Packages"
            >
              <Heart className="w-5 h-5" />
              {savedCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-[#FF7A00] text-white rounded-full text-[10px] font-bold flex items-center justify-center">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              onClick={() => onOpenInquiry()}
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FF7A00] hover:bg-[#E66E00] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#FF7A00]/25 transition-all active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Plan Your Trip</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-800 hover:text-black rounded-lg hover:bg-slate-100 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-3 shadow-xl">
            {/* Search Input for Mobile */}
            <div className="relative mb-3">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search domestic tours..."
                className="w-full pl-9 pr-4 py-2.5 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1698B4] text-slate-900"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs font-bold uppercase tracking-wider">
              <button 
                onClick={() => scrollToSection('tour-categories-slider-section')}
                className="p-3 rounded-xl bg-[#EBF7FA] text-[#1698B4] text-left border border-[#1698B4]/30"
              >
                🎡 Categories
              </button>
              <button 
                onClick={() => scrollToSection('destinations-section')}
                className="p-3 rounded-xl bg-slate-50 text-slate-800 text-left hover:bg-[#EBF7FA] hover:text-[#1698B4] border border-slate-200"
              >
                📍 Destinations
              </button>
              <button 
                onClick={() => scrollToSection('packages-section')}
                className="p-3 rounded-xl bg-slate-50 text-slate-800 text-left hover:bg-[#EBF7FA] hover:text-[#1698B4] border border-slate-200"
              >
                🎒 Tour Packages
              </button>
              <button 
                onClick={() => {
                  onSelectRegion('North India');
                  scrollToSection('packages-section');
                }}
                className="p-3 rounded-xl bg-slate-50 text-slate-800 text-left hover:bg-[#EBF7FA] hover:text-[#1698B4] border border-slate-200"
              >
                🏔️ Kashmir & Ladakh
              </button>
              <button 
                onClick={() => scrollToSection('about-section')}
                className="p-3 rounded-xl bg-[#EBF7FA] text-[#1698B4] text-left border border-[#1698B4]/30"
              >
                👥 About & Team
              </button>
            </div>

            {/* Direct Call Strip for Mobile */}
            <a
              href="tel:+918676928509"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#FF7A00]" />
              <span>Call Helpline: 8676928509</span>
            </a>

            <a
              href="https://wa.me/918676928509?text=Namaste%20Sky%20Wander%20Holidays!%20I%20want%20to%20plan%20a%20trip."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-emerald-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat on WhatsApp: 8676928509</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCustomPlanner();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1698B4] text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <Sparkles className="w-4 h-4 text-[#FF7A00]" />
              <span>AI Custom Holiday Planner</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#FF7A00] text-white font-bold text-xs uppercase tracking-wider shadow-md"
            >
              <Calendar className="w-4 h-4" />
              <span>Plan Your Trip / Free Quote</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
