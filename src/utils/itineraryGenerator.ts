export interface CustomPlanRequest {
  destination: string;
  departureCity: string;
  durationDays: number;
  budgetPerPerson: number;
  travelers: string;
  travelStyle: string;
  preferences?: string;
}

export interface GeneratedDayPlan {
  day: number;
  title: string;
  morning: string;
  afternoon: string;
  evening: string;
  meals: string;
  stay: string;
}

export interface GeneratedItinerary {
  title: string;
  destination: string;
  departureCity: string;
  duration: string;
  estimatedCostINR: string;
  overview: string;
  highlights: string[];
  days: GeneratedDayPlan[];
  packingTips: string[];
  localFoodRecommendations: string[];
}

const DESTINATION_THEMES: Record<string, {
  highlights: string[];
  stays: string;
  attractions: string[][];
  foods: string[];
  tips: string[];
}> = {
  'Kashmir (Srinagar, Gulmarg, Pahalgam)': {
    highlights: [
      'Scenic Shikara boat ride on serene Dal Lake during golden hour',
      'World’s highest cable car Gondola ride (Phase 1 & 2) in snow-clad Gulmarg',
      'Scenic Lidder river excursion, Aru & Betaab Valley in Pahalgam',
      'Authentic Mughal Gardens (Nishat & Shalimar Bagh) exploration',
      'Stay in traditional hand-carved heritage Kashmiri wooden houseboat'
    ],
    stays: 'Handpicked Deluxe 4★ Valley Resort / Heritage Wooden Houseboat',
    attractions: [
      ['Arrival at Srinagar, transfer to Houseboat, sunset Shikara ride on Dal Lake', 'Floating flower & handicraft bazaar visit', 'Candle-light Wazwan dinner by the calm waters of Nigeen lake'],
      ['Scenic mountain drive to Gulmarg (Meadow of Flowers)', 'Phase 1 & Phase 2 Gondola cable car ride over snow peaks', 'Snow sports, pine forest walk and return to Srinagar'],
      ['Transfer through saffron fields of Pampore to picturesque Pahalgam', 'Explore Betaab Valley and Chandanwari along Lidder river', 'Riverside stroll and trout dining by the rushing mountain rapids'],
      ['Pony trek to Baisaran Valley (Mini Switzerland of Kashmir)', 'Explore local Pahalgam shepherd markets and wooden souvenir shops', 'Cozy campfire evening at riverside resort'],
      ['Return drive to Srinagar, explore Shalimar & Nishat Mughal Gardens', 'Shopping for genuine Kashmiri Pashmina shawls and dry fruits in Lal Chowk', 'Sunset view from Shankaracharya Temple hilltop'],
      ['Morning birdwatching at Dal Lake, souvenir photo session in traditional Pheran', 'Airport drop with unforgettable Himalayan memories', 'Safe return flight home']
    ],
    foods: ['Authentic Kashmiri Wazwan (Rogan Josh / Dum Aloo / Gushtaba)', 'Warm Saffron Kahwa with crushed almonds', 'Kashmiri Nun Chai with fresh Lavasa bread'],
    tips: ['Keep Govt Photo ID handy for security checks', 'Carry layered thermal woolens for Gulmarg Gondola Phase 2', 'Pre-book Gondola slots online to skip rush queues']
  },
  'Rajasthan (Jaipur, Udaipur, Jaisalmer, Pushkar)': {
    highlights: [
      'Regal Amer Fort exploration with Sheesh Mahal mirror mosaic work',
      'Lake Pichola private sunset cruise overlooking City Palace Udaipur',
      'Sam Sand Dunes luxury Swiss tent camping with Camel Safari',
      'Jeep Dune Bashing, Kalbelia folk dance and Rajasthani cultural dinner',
      'Sacred Pushkar Sarovar Maha Aarti and world-famous Brahma Temple'
    ],
    stays: 'Heritage Palace Haveli / Luxury Royal Swiss Desert Camp',
    attractions: [
      ['Arrival at Pink City Jaipur, hotel check-in and leisure orientation', 'Visit the 953 honeycomb windows of iconic Hawa Mahal', 'Authentic Dal Baati Churma dinner and Chokhi Dhani village experience'],
      ['Ascend majestic hilltop Amer Fort, visit Sheesh Mahal & Jal Mahal', 'UNESCO Jantar Mantar and royal City Palace museum tour', 'Bapu Bazaar shopping for traditional bandhani textiles & blue pottery'],
      ['Scenic highway drive to holy Pushkar, visit rare Lord Brahma Temple', 'Sacred 52 Ghats walk and participate in evening Sarovar Maha Aarti', 'Ropeway ride to hilltop Savitri Devi Temple for 360° desert sunset'],
      ['Scenic travel towards City of Lakes Udaipur, check-in to lakeside Haveli', 'Grand City Palace complex tour & crystal gallery', 'Sunset boat cruise across tranquil Lake Pichola & Jag Mandir'],
      ['Saheliyon Ki Bari royal fountain gardens and vintage car museum', 'Bagore Ki Haveli evening folk dance and puppet show', 'Rooftop lakeside candle-lit dining with illuminated palace vistas'],
      ['Morning departure with royal memorabilia and lifelong memories', 'Transfer to Jaipur / Udaipur airport or station', 'Safe homeward journey']
    ],
    foods: ['Traditional Dal Baati Churma with pure desi ghee', 'Crispy Pyaz Kachori and Mirchi Vada', 'Ghevar and Mawa Kachori from heritage sweetmakers'],
    tips: ['Carry comfortable walking shoes for expansive fort complexes', 'Sunscreen, wide-brim hat, and sunglasses recommended', 'Keep cameras charged for vibrant palace and sunset photography']
  },
  'Kerala (Munnar, Alleppey, Thekkady, Kochi)': {
    highlights: [
      'Private luxury traditional wooden houseboat cruise on Alleppey backwaters',
      'Endless emerald tea garden plantation tour in misty Munnar',
      'Periyar Wildlife Sanctuary boat safari and fragrant spice garden walk',
      'Spectacular live Kathakali dance and Kalaripayattu martial arts show',
      'Kochi heritage walk visiting Chinese fishing nets and Jewish Synagogue'
    ],
    stays: 'Deluxe Mist Tea Estate Resort & Luxury Air-Conditioned Alleppey Houseboat',
    attractions: [
      ['Arrival at Kochi Airport/Station, scenic drive past Cheeyappara Waterfalls to Munnar', 'Check-in to tea estate resort nestled amidst mist-covered hills', 'Leisure evening with fresh Nilgiri tea and mountain sunset'],
      ['Visit Eravikulam National Park (home to endangered Nilgiri Tahr)', 'Tea Museum visit with live tea-tasting and manufacturing demo', 'Mattupetty Dam boat ride, Echo Point and Kundala Lake photo stops'],
      ['Scenic plantation drive through Cardamom hills to Thekkady', 'Guided tour of organic spice plantation (cardamom, pepper, cinnamon)', 'Periyar Lake boat safari and evening Kalaripayattu martial arts performance'],
      ['Drive to Alleppey (Venice of the East), board your private houseboat', 'Cruise through serene palm-fringed canals, paddy fields and village backwaters', 'Traditional Kerala banana-leaf lunch and sunset over Vembanad Lake'],
      ['Morning backwater cruise, authentic breakfast, check-out and transfer to Fort Kochi', 'Walk past historic Chinese Fishing Nets, St. Francis Church and Jew Town', 'Drop to Kochi Airport with delightful memories']
    ],
    foods: ['Authentic Kerala Sadya on fresh banana leaf', 'Karimeen Pollichathu (pearl spot fish wrapped in banana leaf)', 'Fluffy Appam with fragrant Vegetable Stew / Coconut Curry'],
    tips: ['Keep light cotton attire and rain gear handy', 'Carry insect repellent for spice plantation walks', 'Pre-book houseboat air-conditioning timings per personal preference']
  },
  'Goa (North & South Goa)': {
    highlights: [
      'Private sunset cruise on the Mandovi River with Goan music and dance',
      'Water sports extravaganza at Calangute/Baga (Parasailing & Jet Ski)',
      'UNESCO World Heritage churches of Old Goa (Basilica of Bom Jesus)',
      'Scenic trip to Dudhsagar Waterfalls nestled in Western Ghats lush greenery',
      'Relaxation on tranquil South Goa white sand beaches (Palolem & Colva)'
    ],
    stays: 'Premium 4★ Beachside Resort with Swimming Pool & Private Access',
    attractions: [
      ['Arrival at Goa Dabolim/MOPA Airport or Madgaon Station, resort transfer', 'Check-in, welcome drink, and unwind by the swimming pool', 'Sunset stroll along Calangute/Candolim beach followed by beach shack dinner'],
      ['Fort Aguada lighthouse and historical bastion overlooking Arabian Sea', 'Thrilling water sports at Baga Beach (Jet ski, banana ride, parasailing)', 'Tito’s lane nightlife or relaxed beachfront lounge experience'],
      ['Explore Old Goa: Basilica of Bom Jesus and Se Cathedral', 'Stroll through colorful Portuguese Latin Quarter of Fontainhas in Panaji', 'Scenic evening Mandovi River sunset cruise with Goan folk performances'],
      ['Day trip to majestic 4-tiered Dudhsagar Waterfalls through Bhagwan Mahavir Sanctuary', 'Jeep safari through lush forest trails and dip in natural cool pool', 'Visit organic spice plantation with traditional Goan buffet lunch'],
      ['South Goa serenity: Visit serene Palolem Beach, Colva, and Cabo de Rama Fort', 'Beachside seafood barbecue with soft acoustic music under the stars', 'Late evening souvenir shopping at local night bazaar'],
      ['Morning beach yoga, leisure swim, and breakfast', 'Pack memories and cashew souvenirs, transfer to airport/station', 'Safe journey back home']
    ],
    foods: ['Authentic Goan Fish Curry with steamed rice', 'Chicken or Veg Xacuti and Pork/Paneer Vindaloo', 'Traditional multi-layered Bebinca dessert'],
    tips: ['Carry breathable beachwear, sunglasses, and high-SPF sunscreen', 'Rent a self-drive scooter or private AC cab for easy local commutes', 'Respect safety flags on beaches before swimming in the sea']
  },
  'Himachal (Manali, Shimla, Kasol, Dharamshala)': {
    highlights: [
      'Thrilling drive through engineering marvel Atal Tunnel to snow-laden Sissu',
      'Solang Valley adventure sports: Paragliding, Quad Biking, Zorbing',
      'Hadimba Devi Temple nestled inside towering deodar pine forest',
      'Scenic riverside camping and cafe-hopping along the Parvati River in Kasol',
      'Colonial Shimla heritage walk along Mall Road, Ridge, and Christ Church'
    ],
    stays: 'Mountain View Deluxe Resort / Luxury Pine Valley Wooden Cottage',
    attractions: [
      ['Arrival and scenic river valley drive to Manali, check-in to mountain resort', 'Visit 500-year-old Hadimba Temple built in pagoda style', 'Evening stroll and shopping along lively Manali Mall Road'],
      ['Full day excursion to Solang Valley for adrenaline adventures', 'Pass through Atal Tunnel to high-altitude Lahaul Valley and Sissu waterfall', 'Evening bonfire and music at your cozy mountain retreat'],
      ['Day trip to charming Naggar Castle with panoramic Beas river views', 'Roerich Art Gallery and authentic Himalayan trout lunch', 'Relaxing soak in natural sulfur hot springs at Vashisht village'],
      ['Scenic drive along Parvati River to hippie haven Kasol and Manikaran Gurudwara', 'Take dip in holy hot springs and savor sacred Langar', 'Riverside stroll and visit charming Israeli cafes in Kasol'],
      ['Transfer towards Shimla, stop at famous Kullu Shawl weaving factories for river rafting', 'Arrive in Shimla, visit iconic Ridge and Neo-Gothic Christ Church', 'Sunset panoramic views from Lakkar Bazaar and dinner at heritage diner'],
      ['Morning toy train view, shopping for Himachali fruit jams and woolens', 'Drop to Chandigarh / Delhi airport or railway station', 'Safe trip back home']
    ],
    foods: ['Traditional Himachali Dham festive meal', 'Siddu served piping hot with pure desi ghee and mint chutney', 'Freshly plucked Himalayan Apples and rhododendron juice'],
    tips: ['Carry comfortable hiking shoes and warm woolen jackets', 'Keep motion sickness remedies handy for winding mountain roads', 'Check weather and pass permits ahead during peak snow months']
  },
  'Ladakh (Leh, Nubra Valley, Pangong Lake)': {
    highlights: [
      'Scenic crossing of Khardung La (17,982 ft) - world’s highest motorable pass',
      'Double-humped Bactrian camel safari amidst Nubra Valley sand dunes',
      'Mesmerizing Pangong Tso color-changing lake at 14,270 ft altitude',
      'Anti-gravity phenomenon experience at famous Magnetic Hill & Indus-Zanskar Sangam',
      'Ancient cliff-perched Thiksey and Hemis Buddhist monasteries'
    ],
    stays: 'Deluxe Boutique Hotel in Leh & Luxury Swiss Heated Camp at Nubra/Pangong',
    attractions: [
      ['Arrival at Leh Kushok Bakula Rimpochee Airport (11,500 ft)', 'Mandatory full-day acclimatization rest to adjust to high altitude', 'Gentle evening visit to Shanti Stupa for panoramic sunset over Leh city'],
      ['Sightseeing: Hall of Fame, mysterious Magnetic Hill, Gurudwara Pathar Sahib', 'Confluence of Indus and Zanskar rivers (Sangam viewpoint)', 'Leh local market exploration and momo tasting'],
      ['Epic drive over Khardung La pass (17,982 ft) with snow-peak views into Nubra Valley', 'Visit colossal 106-ft Maitreya Buddha statue at Diskit Monastery', 'Double-humped Bactrian camel ride across Hunder sand dunes; camp under starry skies'],
      ['Journey along Shyok River towards legendary Pangong Lake (14,270 ft)', 'Witness the pristine crystal blue lake change hues under the sun', 'Iconic 3-Idiots yellow scooter photo stop; overnight glamping by the lakeside'],
      ['Scenic sunrise over Pangong Lake; return drive to Leh via high Chang La pass (17,590 ft)', 'En route visit grand Thiksey Monastery (mini Potala Palace of Tibet)', 'Celebratory farewell dinner in Leh with local Ladakhi butter tea and thukpa'],
      ['Morning transfer to Leh Airport with views of Himalayan snow ranges', 'Board flight home filled with memories of the Land of High Passes', 'Safe arrival']
    ],
    foods: ['Steaming hot Momos and Tibetan Thukpa noodle soup', 'Traditional Ladakhi Tingmo bread with spicy vegetable curry', 'Warm Butter Tea (Gur Gur Chai) and fresh Apricot nectar'],
    tips: ['Acclimatization on Day 1 is strictly necessary for health safety', 'Drink plenty of water and carry Diamox or prescribed altitude medication', 'Carry heavy thermal jackets, UV sunglasses, and high-SPF sunblock']
  },
  'Andaman (Port Blair, Havelock, Neil Island)': {
    highlights: [
      'Radhanagar Beach (Asia’s #7 best beach) turquoise waters and pristine white sand',
      'Historic Cellular Jail visit with moving Light and Sound evening show',
      'Snorkeling & scuba diving amidst vibrant coral reefs at Elephant Beach',
      'Natural rock formation bridge and coral walk at Neil Island (Shaheed Dweep)',
      'High-speed premium catamaran cruise (Makruzz / Nautika) inter-island transfers'
    ],
    stays: 'Beachfront Deluxe Coconut Grove Resort with Private Beach Access',
    attractions: [
      ['Arrival at Port Blair Veer Savarkar Airport, private cab transfer to hotel', 'Visit historical Cellular Jail (Kala Pani) and museum exhibits', 'Witness poignant Cellular Jail Light & Sound show under the banyan trees'],
      ['Board luxury high-speed catamaran cruise to Havelock Island (Swaraj Dweep)', 'Check-in to tranquil beach resort surrounded by tall coconut palms', 'Spend magical sunset at world-renowned Radhanagar Beach (Beach No. 7)'],
      ['Speed boat ride to Elephant Beach for water sports: snorkeling, sea walk, scuba diving', 'Marvel at live coral formations and exotic tropical marine life', 'Leisure evening at barefoot beach cafe listening to gentle ocean waves'],
      ['Ferry transfer to picturesque Neil Island (Shaheed Dweep)', 'Visit iconic Natural Coral Bridge and Bharatpur beach for glass-bottom boating', 'Breathtaking sunset at Laxmanpur Beach white sands'],
      ['Return ferry back to Port Blair; visit Sagarika Government Cottage Industries Emporium', 'Shop for authentic seashell handicrafts, pearl jewelry, and woodwork', 'Dinner at seaside rooftop restaurant overlooking Port Blair harbor'],
      ['Delicious tropical breakfast; transfer to airport', 'Board flight with sun-kissed memories of the emerald islands', 'Safe trip home']
    ],
    foods: ['Fresh grilled Andaman Lobster, Crab & Red Snapper', 'South Indian and Bengali coastal curries', 'Chilled fresh King Coconut water and tropical fruit platters'],
    tips: ['Keep Govt Photo ID handy for ferry boarding passes', 'Carry quick-dry clothing, water-resistant pouches, and reef-safe sunscreen', 'Pre-book scuba diving slots for certified dive masters']
  },
  'Uttarakhand (Rishikesh, Haridwar, Mussoorie, Nainital)': {
    highlights: [
      'Soul-stirring Ganga Aarti at Har Ki Pauri Haridwar and Triveni Ghat Rishikesh',
      'Thrilling grade III & IV white water river rafting on the holy Ganges in Rishikesh',
      'Kempty Falls and Camel’s Back Road heritage stroll in Queen of Hills Mussoorie',
      'Boating on emerald Naini Lake and ropeway ride to Snow View Point Nainital',
      'Walk across iconic suspension bridges Laxman Jhula and Ram Jhula'
    ],
    stays: 'Riverfront Deluxe Camp/Resort in Rishikesh & Heritage Hillside Hotel',
    attractions: [
      ['Arrival and drive to holy Haridwar/Rishikesh, check-in to resort', 'Walk across Ram Jhula and visit Beatles Ashram (Chaurasi Kutia)', 'Witness spellbinding evening Maha Ganga Aarti at Triveni Ghat with floating diyas'],
      ['Exciting white-water river rafting from Shivpuri to Rishikesh (16 km)', 'Cliff jumping and body surfing under certified river guides', 'Evening cafe trail in Tapovan with organic Himalayan herbal teas'],
      ['Scenic mountain drive towards Queen of Hills Mussoorie', 'Visit cascading Kempty Falls and enjoy pine forest stroll along Camel’s Back Road', 'Evening walk on Mussoorie Mall Road with panoramic Doon valley night lights'],
      ['Drive through scenic Kumaon hills to lake district Nainital', 'Check-in and enjoy leisurely boating on crescent-shaped Naini Lake', 'Visit sacred Naina Devi Temple on northern shore of the lake'],
      ['Aerial ropeway cable car ride to Snow View Point with majestic Himalayan vistas', 'Visit Governor’s House (Raj Bhavan) and eco cave gardens', 'Shopping for famous Nainital handcrafted decorative candles and wooden crafts on Mall Road'],
      ['Scenic descent drive to Kathgodam / Dehradun / Delhi airport or station', 'Relish hot roadside Maggi and ginger tea on way down', 'Safe return home']
    ],
    foods: ['Traditional Kumaoni Aloo Ke Gutke with Bhang Chutney', 'Garhwali Kafuli and Mandua Ki Roti', 'Delicious hot Jalebi and Rabdi by the holy ghats of Haridwar'],
    tips: ['Carry comfortable walking sneakers for steep hill station climbs', 'Wear modest clothing while attending sacred river ghat ceremonies', 'Carry light woolens for evenings in Mussoorie and Nainital']
  }
};

const DEFAULT_THEME = {
  highlights: [
    'Curated landmark sightseeing schedule tailored to your preferred pace',
    'Handpicked 3★/4★ quality verified hotels with great comfort & breakfast',
    'Dedicated private AC vehicle with courteous chauffeur for transfers & tours',
    '24x7 trip captain assistance throughout the journey for seamless guidance'
  ],
  stays: 'Handpicked Deluxe 4★ Hotel / Resort with Breakfast & Dinner',
  attractions: [
    ['Arrival at destination, private airport/station transfer to hotel', 'Check-in, orientation, and leisure evening stroll', 'Welcome dinner featuring authentic regional cuisine'],
    ['Full day guided sightseeing covering primary landmarks and historic monuments', 'Lunch at top-rated local diner followed by cultural heritage tour', 'Scenic sunset viewpoint and traditional handicraft market exploration'],
    ['Excursion to picturesque countryside / natural scenic attractions', 'Engaging regional activity or nature walk', 'Cozy evening with dinner and relaxation'],
    ['Shopping for local souvenirs, handicrafts, and delicacies', 'Visit remaining top attractions and photo points', 'Farewell special dinner with regional treats'],
    ['Breakfast at hotel, check-out, and souvenir photo session', 'Dedicated transfer to airport / railway station', 'Board journey back home with wonderful memories']
  ],
  foods: ['Authentic regional specialties and traditional thali meals', 'Fresh locally prepared delicacies and street treats', 'Hot beverages and fresh farm-to-table seasonal refreshments'],
  tips: ['Carry valid Govt Photo ID for hotel check-in and domestic transit', 'Pack comfortable walking shoes, weather-appropriate clothing, and phone chargers', 'Keep digital copies of booking confirmation and identity documents']
};

export function generateClientCustomItinerary(req: CustomPlanRequest): GeneratedItinerary {
  const {
    destination,
    departureCity = 'Delhi',
    durationDays = 5,
    budgetPerPerson = 20000,
    travelers = '2 Adults (Couple)',
    travelStyle = 'Leisure & Romantic',
    preferences = ''
  } = req;

  // Match closest destination theme
  const matchedKey = Object.keys(DESTINATION_THEMES).find(k => 
    k.toLowerCase().includes(destination.toLowerCase()) || 
    destination.toLowerCase().includes(k.split(' ')[0].toLowerCase())
  );

  const themeData = matchedKey ? DESTINATION_THEMES[matchedKey] : DEFAULT_THEME;
  const nights = Math.max(1, durationDays - 1);

  // Generate days based on duration
  const days: GeneratedDayPlan[] = [];
  for (let i = 0; i < durationDays; i++) {
    const dayNum = i + 1;
    const isFirst = i === 0;
    const isLast = i === durationDays - 1;

    let dayTitle = `Explore ${destination} Highlights`;
    if (isFirst) dayTitle = `Arrival in ${destination} & Leisure Orientation`;
    else if (isLast) dayTitle = `Farewell ${destination} & Return Journey`;
    else if (i === 1) dayTitle = `Iconic Landmarks & Heritage Sightseeing`;
    else if (i === 2) dayTitle = `Scenic Excursion & Nature Trail`;
    else if (i === 3) dayTitle = `Adventure & Cultural Exploration`;

    const attractionSet = themeData.attractions[i % themeData.attractions.length] || [
      `Morning excursion to top landmarks in ${destination}`,
      `Afternoon cultural immersion and regional lunch`,
      `Evening sunset view and market stroll`
    ];

    days.push({
      day: dayNum,
      title: dayTitle,
      morning: isFirst 
        ? `Depart from ${departureCity}, arrive in ${destination}. Warm welcome by private chauffeur and transfer to your stay.` 
        : (attractionSet[0] || `Hearty breakfast followed by morning sightseeing excursion.`),
      afternoon: attractionSet[1] || `Local sightseeing, cultural heritage tour and regional dining.`,
      evening: isLast
        ? `Pack souvenirs, check-out and transfer to airport/station for safe journey back to ${departureCity}.`
        : (attractionSet[2] || `Scenic sunset point, local bazaar shopping and delicious dinner.`),
      meals: isFirst ? 'Dinner Included' : isLast ? 'Breakfast Included' : 'Breakfast & Dinner Included',
      stay: isLast ? 'Journey Back Home' : themeData.stays
    });
  }

  const costLow = Math.round(budgetPerPerson * 0.95);
  const costHigh = Math.round(budgetPerPerson * 1.12);

  return {
    title: `Customized ${durationDays}-Day ${destination} Odyssey`,
    destination,
    departureCity,
    duration: `${durationDays} Days / ${nights} Nights`,
    estimatedCostINR: `₹${costLow.toLocaleString('en-IN')} - ₹${costHigh.toLocaleString('en-IN')} per person`,
    overview: `A bespoke domestic holiday crafted exclusively for ${travelers}, starting seamlessly from ${departureCity}. Featuring curated private transport, handpicked scenic stays, authentic regional dining, and verified itinerary timing suited for ${travelStyle}.${preferences ? ` Customized with note: "${preferences}".` : ''}`,
    highlights: themeData.highlights,
    days,
    packingTips: themeData.tips,
    localFoodRecommendations: themeData.foods
  };
}
