import React, { useState } from 'react';
import { 
  Sparkles, 
  MapPin, 
  Calendar, 
  Users, 
  Compass, 
  Send, 
  CheckCircle, 
  Clock, 
  Utensils, 
  Building2, 
  ShieldCheck, 
  X,
  Printer,
  MessageCircle,
  Loader2,
  Lightbulb
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { generateClientCustomItinerary } from '../utils/itineraryGenerator';

interface CustomAITripPlannerProps {
  onClose: () => void;
  onBookCustomPlan: (title: string, dest: string, estPrice: number) => void;
}

const INDIAN_CITIES = [
  'New Delhi / NCR',
  'Mumbai',
  'Bengaluru',
  'Kolkata',
  'Hyderabad',
  'Chennai',
  'Ahmedabad',
  'Pune',
  'Chandigarh',
  'Jaipur',
  'Lucknow',
  'Indore',
  'Kochi',
  'Guwahati'
];

const POPULAR_DOMESTIC_DESTINATIONS = [
  'Kashmir (Srinagar, Gulmarg, Pahalgam)',
  'Kerala (Munnar, Thekkady, Alleppey Houseboat)',
  'Ladakh (Leh, Pangong Tso, Nubra Valley)',
  'Goa (North & South Goa Beach Resorts)',
  'Himachal (Manali, Solang Valley, Kasol)',
  'Rajasthan (Jaipur, Jodhpur, Udaipur, Jaisalmer Dunes)',
  'Andaman Islands (Port Blair, Havelock Scuba)',
  'Meghalaya (Shillong, Cherrapunji, Dawki Root Bridges)',
  'Char Dham & Kedarnath Badrinath Sacred Yatra',
  'Varanasi & Ayodhya Ram Mandir Sacred Circuit',
  'Coorg Coffee Hills & Ooty Toy Train',
  'Gujarat (Rann of Kutch White Desert & Gir Lions)'
];

const TRAVEL_STYLES = [
  'Romantic / Honeymoon Special',
  'Family Holiday with Kids',
  'Adventure, Trekking & Snow Sports',
  'Spiritual Darshan & Temple Circuit',
  'Relaxed Luxury & Wellness Retreat',
  'Budget Backpacking with Friends'
];

export const CustomAITripPlanner: React.FC<CustomAITripPlannerProps> = ({
  onClose,
  onBookCustomPlan
}) => {
  const [departureCity, setDepartureCity] = useState('New Delhi / NCR');
  const [destination, setDestination] = useState('Kashmir (Srinagar, Gulmarg, Pahalgam)');
  const [durationDays, setDurationDays] = useState(6);
  const [budgetPerPerson, setBudgetPerPerson] = useState(22000);
  const [travelStyle, setTravelStyle] = useState('Romantic / Honeymoon Special');
  const [travelersCount, setTravelersCount] = useState('2 Adults (Couple)');
  const [preferences, setPreferences] = useState('Require mountain view resort, pure vegetarian meals, and sunset shikara ride.');

  const [isLoading, setIsLoading] = useState(false);
  const [generatedPlan, setGeneratedPlan] = useState<any | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/ai-itinerary', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          departureCity,
          destination,
          durationDays,
          budgetPerPerson,
          travelers: travelersCount,
          travelStyle,
          preferences
        })
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success && data.itinerary) {
          setGeneratedPlan(data.itinerary);
          try {
            confetti({ particleCount: 60, spread: 60 });
          } catch {}
          return;
        }
      }
      throw new Error('API unavailable or static host');
    } catch (err) {
      console.log('Using client-side itinerary generator fallback:', err);
      const fallbackPlan = generateClientCustomItinerary({
        destination,
        departureCity,
        durationDays,
        budgetPerPerson,
        travelers: travelersCount,
        travelStyle,
        preferences
      });
      setGeneratedPlan(fallbackPlan);
      try {
        confetti({ particleCount: 60, spread: 60 });
      } catch {}
    } finally {
      setIsLoading(false);
    }
  };

  const handleBookGenerated = () => {
    if (!generatedPlan) return;
    onBookCustomPlan(
      generatedPlan.title || `Custom ${destination} Tour`,
      destination,
      budgetPerPerson * 2
    );
  };

  const handleWhatsAppShare = () => {
    if (!generatedPlan) return;
    const text = encodeURIComponent(
      `Namaste Sky Wander Holidays! I designed a custom itinerary for "${generatedPlan.destination}" (${generatedPlan.duration}) starting from ${departureCity}. Estimated budget ₹${budgetPerPerson}/person. Please review and provide customized final quote!`
    );
    window.open(`https://wa.me/918676928509?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 lg:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative text-slate-900">
        
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-[#FF7A00] text-white flex items-center justify-center transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Banner */}
        <div className="bg-[#0B2530] text-white p-6 sm:p-8 rounded-t-3xl relative overflow-hidden border-b border-[#1698B4]/30">
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[2px] w-6 bg-[#FF7A00]"></div>
              <span className="text-[#38BDF8] text-[10px] font-black uppercase tracking-wider">
                Sky Wander Holidays Trip Architect
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight">
              Design Your Bespoke <span className="text-[#FF7A00]">Domestic Odyssey</span>
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-200">
              Tell us where you want to travel in India, your duration, budget, and travel style. Our AI & regional holiday experts will generate a custom day-by-day plan instantly.
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8">
          {!generatedPlan ? (
            <form onSubmit={handleGenerate} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 1. Departure City */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    1. Starting / Departure City
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-[#1698B4] focus:outline-none"
                  >
                    {INDIAN_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                {/* 2. Destination in India */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    2. Destination in India
                  </label>
                  <select
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-[#1698B4] focus:outline-none"
                  >
                    {POPULAR_DOMESTIC_DESTINATIONS.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </div>

                {/* 3. Duration */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex justify-between">
                    <span>3. Tour Duration: {durationDays} Days / {durationDays - 1} Nights</span>
                  </label>
                  <input
                    type="range"
                    min={3}
                    max={12}
                    value={durationDays}
                    onChange={(e) => setDurationDays(Number(e.target.value))}
                    className="w-full accent-[#1698B4] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>3 Days (Quick Getaway)</span>
                    <span>7 Days (Ideal)</span>
                    <span>12 Days (Grand Tour)</span>
                  </div>
                </div>

                {/* 4. Budget per person */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5 flex justify-between">
                    <span>4. Budget / Person: ₹{budgetPerPerson.toLocaleString('en-IN')}</span>
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={60000}
                    step={2000}
                    value={budgetPerPerson}
                    onChange={(e) => setBudgetPerPerson(Number(e.target.value))}
                    className="w-full accent-[#FF7A00] cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>₹10,000 (Budget)</span>
                    <span>₹30,000 (Deluxe)</span>
                    <span>₹60,000+ (Luxury)</span>
                  </div>
                </div>

                {/* 5. Travel Style */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    5. Travel Style
                  </label>
                  <select
                    value={travelStyle}
                    onChange={(e) => setTravelStyle(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-[#1698B4] focus:outline-none"
                  >
                    {TRAVEL_STYLES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* 6. Travelers Count */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                    6. Travelers Composition
                  </label>
                  <select
                    value={travelersCount}
                    onChange={(e) => setTravelersCount(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-sm font-semibold text-slate-900 focus:ring-2 focus:ring-[#1698B4] focus:outline-none"
                  >
                    <option value="2 Adults (Couple / Honeymoon)">2 Adults (Couple / Honeymoon)</option>
                    <option value="Family: 2 Adults + 1 Child">Family: 2 Adults + 1 Child</option>
                    <option value="Family: 2 Adults + 2 Children">Family: 2 Adults + 2 Children</option>
                    <option value="Group of 4 Friends">Group of 4 Friends</option>
                    <option value="Group of 6+ Travelers">Group of 6+ Travelers</option>
                    <option value="Solo Traveler">Solo Traveler</option>
                    <option value="Senior Citizens (Relaxed Pace)">Senior Citizens (Relaxed Pace)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
                  Special Wishes & Dietary Preferences
                </label>
                <textarea
                  rows={2}
                  value={preferences}
                  onChange={(e) => setPreferences(e.target.value)}
                  placeholder="e.g. Vegetarian food only, need ground floor room, want river rafting or houseboat candle light dinner..."
                  className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 focus:ring-2 focus:ring-[#1698B4] focus:outline-none"
                />
              </div>

              {/* CTA Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-4 px-6 rounded-2xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-black text-sm uppercase tracking-wider shadow-xl shadow-[#FF7A00]/25 flex items-center justify-center gap-2 cursor-pointer active:scale-98 transition-all disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Architecting Your Custom Indian Holiday...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 text-white" />
                    <span>Generate Custom Itinerary Instantly</span>
                  </>
                )}
              </button>
            </form>
          ) : (
            /* Generated Itinerary Output */
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 bg-[#EBF7FA] rounded-2xl border border-[#1698B4]/30">
                <div>
                  <span className="text-[11px] font-black uppercase text-[#1698B4] bg-white px-2.5 py-0.5 rounded-full border border-[#1698B4]/20">
                    Generated Itinerary
                  </span>
                  <h3 className="text-xl font-black text-slate-950 mt-1">
                    {generatedPlan.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-0.5">
                    📍 {generatedPlan.destination} • Starting from {generatedPlan.departureCity} • {generatedPlan.duration}
                  </p>
                </div>

                <div className="text-right">
                  <span className="text-[10px] uppercase font-bold text-slate-500 block">Est. Cost</span>
                  <span className="text-lg font-black text-[#FF7A00]">
                    {generatedPlan.estimatedCostINR}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-xs text-slate-700 leading-relaxed">
                <p>{generatedPlan.overview}</p>

                {generatedPlan.highlights && generatedPlan.highlights.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-slate-200">
                    <h5 className="font-bold text-slate-900 mb-1.5 flex items-center gap-1">
                      <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" /> Highlights:
                    </h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {generatedPlan.highlights.map((h: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-1.5">
                          <span className="text-[#FF7A00] font-bold">✓</span>
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Days breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-black text-slate-900">
                  Day-by-Day Customized Schedule
                </h4>

                {generatedPlan.days?.map((d: any) => (
                  <div key={d.day} className="p-4 bg-white rounded-2xl border border-slate-200 space-y-2 text-xs">
                    <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                      <span className="font-bold text-sm text-[#1698B4]">
                        Day {d.day}: {d.title}
                      </span>
                      <span className="text-[11px] text-[#FF7A00] font-semibold bg-orange-50 px-2 py-0.5 rounded">
                        {d.meals}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600 pt-1">
                      <div className="bg-slate-50 p-2.5 rounded-xl">
                        <strong className="text-slate-900 block text-[11px] mb-0.5">🌅 Morning:</strong>
                        <span>{d.morning}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl">
                        <strong className="text-slate-900 block text-[11px] mb-0.5">☀️ Afternoon:</strong>
                        <span>{d.afternoon}</span>
                      </div>
                      <div className="bg-slate-50 p-2.5 rounded-xl">
                        <strong className="text-slate-900 block text-[11px] mb-0.5">🌙 Evening:</strong>
                        <span>{d.evening}</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-500 font-medium pt-1">
                      🏨 Stay: <strong className="text-slate-800">{d.stay}</strong>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setGeneratedPlan(null)}
                  className="px-4 py-3 rounded-xl border border-slate-300 hover:bg-slate-100 font-bold text-xs text-slate-700 cursor-pointer"
                >
                  ← Modify Parameters
                </button>

                <button
                  onClick={handleWhatsAppShare}
                  className="flex-1 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Quote to Expert</span>
                </button>

                <button
                  onClick={handleBookGenerated}
                  className="flex-1 py-3 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#E66E00] text-white font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <CheckCircle className="w-4 h-4" />
                  <span>Book This Custom Plan</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
