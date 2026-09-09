import React from 'react';
import { 
  ShieldCheck, 
  Car, 
  Building2, 
  Headphones, 
  BadgePercent, 
  MapPinned, 
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const DomesticPerks: React.FC = () => {
  const perks = [
    {
      icon: MapPinned,
      title: '100% Domestic India Focus',
      description: 'We specialize purely in Indian destinations with deep local connections in Kashmir, Ladakh, Kerala, Himachal, and Rajasthan.',
      color: 'bg-sky-500/10 text-sky-600'
    },
    {
      icon: Car,
      title: 'Verified AC Cabs & Hill Chauffeurs',
      description: 'Sanitized private sedans & SUVs with experienced, background-verified mountain drivers. All tolls & permits pre-paid.',
      color: 'bg-amber-500/10 text-amber-600'
    },
    {
      icon: Building2,
      title: 'Audited 3★/4★/5★ Resorts & Stays',
      description: 'Handpicked mountain view resorts, luxury Dal lake houseboats, Swiss desert tents, and beachfront villas.',
      color: 'bg-emerald-500/10 text-emerald-600'
    },
    {
      icon: Headphones,
      title: '24x7 Dedicated Trip Captain',
      description: 'A personal regional coordinator assigned to your booking checking in daily on WhatsApp throughout your journey.',
      color: 'bg-indigo-500/10 text-indigo-600'
    },
    {
      icon: BadgePercent,
      title: 'Zero Hidden Costs Guarantee',
      description: 'Clear transparent quotations with GST, toll taxes, driver allowances, and breakfast/dinners clearly itemized.',
      color: 'bg-rose-500/10 text-rose-600'
    },
    {
      icon: HeartHandshake,
      title: 'Flexible Date Rescheduling',
      description: 'Life happens! Enjoy hassle-free date changes up to 7 days before your trip without heavy penalty charges.',
      color: 'bg-teal-500/10 text-teal-600'
    }
  ];

  return (
    <section className="py-18 bg-[#F8FAFC] border-b border-slate-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute -top-10 right-10 w-96 h-96 bg-[#1698B4]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="h-[2px] w-8 bg-[#FF7A00]"></div>
            <span className="text-[#1698B4] uppercase tracking-[0.3em] text-[10px] sm:text-xs font-black">
              The Sky Wander Assurance
            </span>
            <div className="h-[2px] w-8 bg-[#FF7A00]"></div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Crafting Extraordinary <span className="text-[#FF7A00]">Domestic Journeys</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Every itinerary is refined with precision so your family, friends, or romantic escape unfolds in effortless luxury, safety, and cultural authenticity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {perks.map((perk, idx) => {
            const Icon = perk.icon;
            return (
              <div 
                key={idx}
                className="p-7 rounded-3xl bg-white border border-slate-200/90 hover:border-[#1698B4]/60 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#EBF7FA] text-[#1698B4] flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-[#1698B4] group-hover:text-white transition-all border border-[#1698B4]/30">
                    <Icon className="w-5 h-5 text-[#1698B4] group-hover:text-white" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2.5">
                    {perk.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {perk.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-[10px] uppercase font-black tracking-widest text-[#FF7A00]">
                  <span>Signature Standard</span>
                  <span>0{idx + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
