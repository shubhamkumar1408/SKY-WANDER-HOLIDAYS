import { TourPackage } from '../types';

export const DOMESTIC_PACKAGES: TourPackage[] = [
  // 1. Spiti Valley (6N / 7D - ₹20,000)
  {
    id: 'swh-spiti-01',
    slug: 'spiti-valley-circuit-kaza-chandratal-key-monastery',
    title: 'Mystical Spiti Valley Expedition: Kaza, Key Monastery & Chandratal Lake',
    state: 'Himachal Pradesh',
    region: 'North India',
    destinationsCovered: ['Kaza', 'Key Monastery', 'Chandratal Lake', 'Hikkim', 'Komic', 'Langza', 'Tabo', 'Dhankar'],
    durationDays: 7,
    durationNights: 6,
    pricePerPerson: 20000,
    originalPrice: 26000,
    rating: 4.9,
    reviewsCount: 312,
    tag: 'Bestseller 🏔️',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: 'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Traverse the dramatic high-altitude desert of Spiti Valley. Visit 1000-year-old cliffside Buddhist gompas, send a postcard from the world’s highest post office in Hikkim (4440m), and camp beside the crystal blue crescent waters of Chandratal Lake.',
    highlights: [
      'Camp in luxury Swiss tents near the shimmering Chandratal Lake',
      'Visit Key Gompa, Kibber village & the dramatic Chicham Suspension Bridge',
      'Send a real postcard from Hikkim (World’s Highest Post Office at 14,567 ft)',
      'Explore Komic (Highest motorable village) & Buddha statue at Langza',
      'Dedicated 4x4 Mountain SUV with expert high-altitude Himalayan driver'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Shimla to Kalpa / Reckong Peo (Kinnaur Gateway)',
        description: 'Depart from Shimla via NH-05 through apple orchards along the roaring Sutlej river. Check in to hotel facing the holy Kinner Kailash peak.',
        activities: ['Scenic Sutlej river drive', 'View Kinner Kailash sunset', 'Acclimatization walk'],
        meals: 'Dinner Included',
        stay: 'Hotel Kinner Retreat, Kalpa'
      },
      {
        day: 2,
        title: 'Kalpa to Tabo & Dhankar Monastery',
        description: 'Drive along Spiti River into the cold desert. Visit the 1000-year-old UNESCO Tabo Monastery and cliffhanging Dhankar Gompa.',
        activities: ['Visit Tabo Monastery (Ajanta of Himalayas)', 'Dhankar Cliff Gompa', 'Confluence of Spiti & Pin Rivers'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Spiti Heritage Homestay / Hotel, Tabo'
      },
      {
        day: 3,
        title: 'Tabo to Kaza & Pin Valley (Mud Village)',
        description: 'Explore the scenic green pastures of Pin Valley National Park and picturesque Mud village before arriving at Kaza headquarters.',
        activities: ['Pin Valley exploration', 'Mud village walk', 'Kaza local Tibetan cafe hopping'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Hotel, Kaza'
      },
      {
        day: 4,
        title: 'Key Monastery, Kibber, Chicham Bridge & Highest Villages',
        description: 'Full day excursion to the fortress-like Key Monastery, Chicham bridge (highest bridge in Asia), Langza fossil center, Komic and Hikkim post office.',
        activities: ['Key Monastery prayer ceremony', 'Chicham Bridge photo stop', 'Postcard sending at Hikkim', 'Langza Giant Buddha'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Hotel, Kaza'
      },
      {
        day: 5,
        title: 'Kaza to Chandratal Lake via Kunzum Pass (4590m)',
        description: 'Drive through Losar village and cross the mighty Kunzum Pass. Trek 1 km to reach the surreal crescent moon lake (Chandratal).',
        activities: ['Kunzum Mata temple darshan', 'Chandratal Lake exploration & sunset', 'Stargazing & Milky Way photography'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Luxury Swiss Tents with Washroom, Chandratal Base'
      },
      {
        day: 6,
        title: 'Chandratal to Manali via Atal Tunnel / Rohtang',
        description: 'Drive along rugged Batal-Gramphu boulder tracks, pass through the engineering marvel Atal Tunnel, and arrive in lush green Manali.',
        activities: ['Chhatru riverside stop', 'Atal Tunnel drive', 'Old Manali cafe leisure evening'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Riverside Pine Resort, Manali'
      },
      {
        day: 7,
        title: 'Manali Local Leisure & Departure',
        description: 'Morning breakfast with views of snow peaks. Visit Hadimba Temple & Mall Road before onward departure to Delhi/Chandigarh.',
        activities: ['Hadimba Temple visit', 'Mall Road souvenirs & Apple jam shopping'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '6 Nights accommodation in Deluxe Hotels, Homestays & Chandratal Tents',
      'Daily Morning Breakfast & Hot Buffet Dinners',
      'Entire tour by dedicated high-clearance SUV (Innova / Scorpio / Tempo)',
      'Chandratal eco-permits, green taxes & all driver mountain allowances',
      'Oxygen cylinder in vehicle & emergency medical first-aid kit'
    ],
    exclusions: [
      'Delhi/Chandigarh to Shimla Volvo tickets (available on request)',
      'Personal expenses, laundry, pony rides',
      'Any monument entry fees or camera permits'
    ],
    bestTimeToVisit: 'May to October (Roads & Chandratal Open)',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Shimla Pickup / Manali Drop (Delhi Volvo Option)',
    cabType: 'Dedicated High-Clearance Mountain SUV (Innova/Scorpio)',
    trendingRank: 1
  },

  // 2. Leh Ladakh (9N / 10D - ₹35,000)
  {
    id: 'swh-ladakh-02',
    slug: 'grand-leh-ladakh-pangong-nubra-khardungla-tsomoriri',
    title: 'Grand Leh-Ladakh Odyssey: Pangong Lake, Nubra Valley, Khardung La & Tso Moriri',
    state: 'Ladakh',
    region: 'North India',
    destinationsCovered: ['Leh', 'Nubra Valley', 'Pangong Tso', 'Khardung La Pass', 'Tso Moriri', 'Magnetic Hill', 'Sangam'],
    durationDays: 10,
    durationNights: 9,
    pricePerPerson: 35000,
    originalPrice: 45000,
    rating: 5.0,
    reviewsCount: 440,
    tag: 'Premium Adventure ⭐',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The ultimate 10-day dream Himalayan journey across Ladakh. Ride double-humped Bactrian camels on the silver sand dunes of Nubra, cross the world’s highest motorable pass Khardung La (17,982 ft), and witness the changing colors of Pangong Tso.',
    highlights: [
      '2 Nights at the magical Pangong Tso & Tso Moriri high-altitude blue lakes',
      'Bactrian Double-Humped Camel Safari at Hunder White Sand Dunes',
      'Drive across Khardung La Pass (17,982 ft) & Chang La Pass',
      'Magnetic Hill gravity defying wonder & Indus-Zanskar River Sangam',
      'Inner Line Permits (ILP) & Environmental fees included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Leh & Complete Acclimatization',
        description: 'Land at Kushok Bakula Rimpochee Airport Leh (3,500m). Transfer to hotel. Rest for the day for altitude acclimatization.',
        activities: ['Airport pickup', 'Oxygen check & rest', 'Evening Shanti Stupa sunset view'],
        meals: 'Dinner Included',
        stay: 'Hotel Grand Himalaya / Similar, Leh'
      },
      {
        day: 2,
        title: 'Leh Local Sightseeing - Sangam, Magnetic Hill & Hall of Fame',
        description: 'Explore the confluence of Indus & Zanskar rivers, experience anti-gravity at Magnetic Hill, and pay homage at Kargil Hall of Fame.',
        activities: ['Indus Zanskar Sangam', 'Magnetic Hill demonstration', 'Gurudwara Pathar Sahib', 'Hall of Fame War Memorial'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Grand Himalaya, Leh'
      },
      {
        day: 3,
        title: 'Leh to Nubra Valley via Khardung La Pass (17,982 ft)',
        description: 'Conquer the world-famous Khardung La pass. Descend into the picturesque Nubra Valley and visit Diskit Monastery’s 106ft Maitreya Buddha.',
        activities: ['Khardung La Pass photo summit', 'Diskit Monastery & Giant Buddha', 'Hunder Sand Dunes Double-humped Camel Ride'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Organic Camps / Hotel, Hunder Nubra'
      },
      {
        day: 4,
        title: 'Nubra Valley to Turtuk (Indo-Pak Border Village)',
        description: 'Day trip to Turtuk, the last northern village of India known for pristine apricot orchards and Balti cultural heritage.',
        activities: ['Turtuk village heritage walk', 'Balti museum & Apricot farm visit', 'Tyakshi border viewpoint'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Organic Camps, Hunder Nubra'
      },
      {
        day: 5,
        title: 'Nubra Valley to Pangong Tso via Shyok River Route',
        description: 'Drive along the rugged Shyok River gorges directly towards the iconic Pangong Lake (14,270 ft). Witness changing hues from turquoise to cobalt.',
        activities: ['Shyok river scenic drive', 'Pangong Lake sunset walk', 'Stargazing by the lake'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Luxury Swiss Cottages with Heating, Pangong'
      },
      {
        day: 6,
        title: 'Pangong Tso to Hanle (Dark Sky Reserve)',
        description: 'Drive through Chushul and Tsaga La to reach Hanle, home to India’s highest astronomical observatory and crystal clear night skies.',
        activities: ['Hanle Indian Astronomical Observatory', 'Hanle Gompa', 'Deep space stargazing'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Traditional Homestay / Guest House, Hanle'
      },
      {
        day: 7,
        title: 'Hanle to Tso Moriri Lake via Mahe Bridge',
        description: 'Travel to the pristine high-altitude wetland lake Tso Moriri (Korzok). Watch migratory black-necked cranes and Tibetan wild asses (Kiang).',
        activities: ['Korzok Monastery visit', 'Tso Moriri wildlife & bird watching', 'Quiet lakeside evening'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Camps / Resort, Korzok Tso Moriri'
      },
      {
        day: 8,
        title: 'Tso Moriri to Leh via Tsokar Lake & Tanglang La',
        description: 'Drive past the white salt crusts of Tso Kar lake and cross Tanglang La Pass (17,480 ft) to return to Leh city.',
        activities: ['Tso Kar salt lake viewpoint', 'Tanglang La pass photo stop', 'Leh Main Bazaar shopping'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Grand Himalaya, Leh'
      },
      {
        day: 9,
        title: 'Leh Monasteries & Royal Palace Tour',
        description: 'Visit Thiksey Monastery (Mini Potala Palace), Shey Palace, and Rancho’s School from the 3 Idiots movie.',
        activities: ['Thiksey morning chanting', 'Shey Palace & Druk White Lotus School', 'Farewell Ladakhi dinner'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Grand Himalaya, Leh'
      },
      {
        day: 10,
        title: 'Departure from Leh Airport',
        description: 'Transfer to Leh Airport with cherished memories of the high Himalayas and ancient monasteries.',
        activities: ['Morning breakfast', 'Airport drop by private vehicle'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '9 Nights Deluxe Hotel, Cottage & Swiss Camp Stays across Ladakh',
      'Daily Buffet Breakfast and 9 Special Multi-Cuisine Dinners',
      'All transfers & sightseeing by private dedicated Innova / Crysta / Tempo',
      'Inner Line Permits (ILP), Wildlife fees & Red Cross environmental fund',
      '24x7 In-car Oxygen cylinder & dedicated local Ladakhi tour guide'
    ],
    exclusions: [
      'Flights to/from Leh (Airport Code: IXL)',
      'Double-humped camel ride fees & ATV bike rental in Hunder',
      'Personal expenses, tips and insurance'
    ],
    bestTimeToVisit: 'May to October',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Leh Airport (IXL)',
    cabType: 'Dedicated Private Toyota Innova / Crysta',
    trendingRank: 2
  },

  // 3. Char Dham (10N / 11D - ₹23,500)
  {
    id: 'swh-chardham-03',
    slug: 'complete-char-dham-yatra-yamunotri-gangotri-kedarnath-badrinath',
    title: 'Divine Char Dham Yatra: Yamunotri, Gangotri, Kedarnath & Badrinath with Haridwar',
    state: 'Uttarakhand',
    region: 'North India',
    destinationsCovered: ['Haridwar', 'Barkot', 'Yamunotri', 'Uttarkashi', 'Gangotri', 'Guptkashi', 'Kedarnath', 'Badrinath', 'Rishikesh'],
    durationDays: 11,
    durationNights: 10,
    pricePerPerson: 23500,
    originalPrice: 32000,
    rating: 5.0,
    reviewsCount: 520,
    tag: 'Holy Moksha Yatra 🛕',
    featured: true,
    theme: 'Spiritual & Pilgrimage',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Complete 11-day spiritual pilgrimage to all four sacred Himalayan Dhams. Seek divine blessings at Yamunotri, Gangotri, Kedarnath Jyotirlinga, and Badrinath Dham with Ganga Aarti at Haridwar and Rishikesh.',
    highlights: [
      'Complete darshan of Yamunotri, Gangotri, Kedarnath & Badrinath',
      '1 Night Stay at Kedarnath Top near Temple Shrine',
      'Evening Ganga Maha Aarti at Har Ki Pauri Haridwar & Triveni Ghat Rishikesh',
      'Mana Village (Last Indian Village) & Bheem Pul excursion',
      'Biometric Yatra Registration & VIP Darshan guidance included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Haridwar / Dehradun to Barkot (Yamunotri Base)',
        description: 'Drive via Mussoorie and Kempty Falls to Barkot. Check in to your hotel amidst scenic apple and pine valleys.',
        activities: ['Kempty Falls stopover', 'Yamuna valley drive', 'Yatra orientation'],
        meals: 'Dinner Included',
        stay: 'Hotel Himalayan Woods, Barkot'
      },
      {
        day: 2,
        title: 'Barkot to Yamunotri Dham Darshan & Return',
        description: 'Drive to Janki Chatti. Trek 6 km to Yamunotri Temple. Take holy bath in Surya Kund and offer prayers to Goddess Yamuna.',
        activities: ['Surya Kund hot spring bath', 'Yamunotri Temple Puja & Prasad', 'Divya Shila worship'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Himalayan Woods, Barkot'
      },
      {
        day: 3,
        title: 'Barkot to Uttarkashi (Kashi Vishwanath Darshan)',
        description: 'Drive along Bhagirathi river to the sacred town of Uttarkashi. Visit the ancient Kashi Vishwanath and Shakti Temple.',
        activities: ['Kashi Vishwanath Temple Darshan', 'Shakti Temple Trishul view', 'Bhagirathi river bank walk'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Bhagirathi Residency, Uttarkashi'
      },
      {
        day: 4,
        title: 'Uttarkashi to Gangotri Dham Darshan & Return',
        description: 'Drive through the picturesque Harsil valley (Mini Switzerland). Reach Gangotri Dham for holy dip in Bhagirathi and temple rituals.',
        activities: ['Harsil apple orchards', 'Holy bath at Gangotri Ghat', 'Gangotri Temple Aarti & Darshan'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Bhagirathi Residency, Uttarkashi'
      },
      {
        day: 5,
        title: 'Uttarkashi to Guptkashi / Phata (Kedarnath Base)',
        description: 'Scenic mountain drive via Tehri Dam reservoir and Mandakini valley to Guptkashi. Check in to hotel for rest.',
        activities: ['Tehri Dam view', 'Mandakini river confluence at Tilwara', 'Ardh Narishwar Temple visit'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Resort Mandakini Valley, Guptkashi'
      },
      {
        day: 6,
        title: 'Guptkashi to Kedarnath Dham Trek & Night Stay',
        description: 'Drive to Sonprayag/Gaurikund. Trek 16 km along the Mandakini river to Kedarnath. Attend the divine evening Aarti.',
        activities: ['Gaurikund hot spring', 'Scenic trek along Mandakini', 'Evening Kedarnath Temple Maha Aarti'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel / GMVN Camp near Kedarnath Temple'
      },
      {
        day: 7,
        title: 'Morning Kedarnath Darshan & Trek Down to Guptkashi',
        description: 'Witness early morning temple darshan against snow peaks. Trek down to Gaurikund and return to Guptkashi hotel.',
        activities: ['Bhairavnath temple view', 'Early morning Abhishekam', 'Descent to Gaurikund'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Resort Mandakini Valley, Guptkashi'
      },
      {
        day: 8,
        title: 'Guptkashi to Badrinath Dham via Chopta & Joshimath',
        description: 'Drive past lush Chopta meadows and Joshimath Narsingh Temple to reach the holy abode of Lord Vishnu at Badrinath.',
        activities: ['Chopta scenic pass', 'Joshimath Narsingh Temple', 'Evening Badrinath Temple Aarti'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Narayan Palace / Similar, Badrinath'
      },
      {
        day: 9,
        title: 'Badrinath Darshan, Mana Village to Rudraprayag',
        description: 'Take holy dip in Tapt Kund. Visit Mana Village (Bheem Pul, Vyas Gufa, Saraswati river). Drive to Rudraprayag confluence.',
        activities: ['Tapt Kund sacred bath', 'Mana last Indian village & Vyas Gufa', 'Alaknanda-Mandakini confluence at Rudraprayag'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Riverside Resort, Rudraprayag'
      },
      {
        day: 10,
        title: 'Rudraprayag to Rishikesh & Haridwar',
        description: 'Drive via Devprayag (origin of River Ganga). Arrive in Rishikesh. Visit Ram Jhula, Laxman Jhula, and Triveni Ghat Aarti.',
        activities: ['Devprayag Bhagirathi-Alaknanda Sangam', 'Ram Jhula & Laxman Jhula', 'Grand Ganga Aarti at Haridwar / Rishikesh'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Ganga View, Haridwar / Rishikesh'
      },
      {
        day: 11,
        title: 'Haridwar Local & Departure with Holy Gangajal',
        description: 'Morning holy dip in Har Ki Pauri and purchase sacred Gangajal. Transfer to Haridwar Railway Station / Dehradun Airport.',
        activities: ['Morning Har Ki Pauri holy bath', 'Drop for onward journey'],
        meals: 'Breakfast Included',
        stay: 'Yatra Concludes'
      }
    ],
    inclusions: [
      '10 Nights accommodation in verified Yatra Hotels & Kedarnath top stay',
      'Daily Pure Vegetarian Breakfast and 10 Sattvic Dinners',
      'Entire pilgrimage by private dedicated vehicle (Tempo Traveller / Bolero / Innova)',
      'Uttarakhand Government Yatra Biometric Registration assistance',
      'Driver allowances, toll tax, parking & green eco-cess'
    ],
    exclusions: [
      'Helicopter ticket to Kedarnath (booking assistance provided)',
      'Pony / Palki / Doli charges on treks',
      'Special VIP temple puja tickets'
    ],
    bestTimeToVisit: 'May to June & September to November',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Haridwar / Dehradun Railway Station',
    cabType: 'Dedicated Pushback Yatra Coach / Innova / Bolero',
    trendingRank: 3
  },

  // 4. Manali Kasol (3N / 4D - ₹7,000)
  {
    id: 'swh-manali-kasol-04',
    slug: 'manali-kasol-parvati-valley-solang-manikaran-weekend',
    title: 'Manali & Kasol Parvati Valley Escape: Solang Snow, Atal Tunnel & Manikaran Sahib',
    state: 'Himachal Pradesh',
    region: 'North India',
    destinationsCovered: ['Manali', 'Solang Valley', 'Atal Tunnel', 'Kasol', 'Manikaran Sahib', 'Tosh Village'],
    durationDays: 4,
    durationNights: 3,
    pricePerPerson: 7000,
    originalPrice: 10500,
    rating: 4.8,
    reviewsCount: 380,
    tag: 'Super Value 🔥',
    featured: true,
    theme: 'Hill Stations & Snow',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The quintessential mountain holiday combining snowy Solang adventures and the chill hippie vibe of Kasol and Parvati Valley. Experience the Atal Tunnel, Hadimba Temple, and holy sulfur springs of Manikaran Sahib.',
    highlights: [
      'Solang Valley Snow Point, Paragliding & Atal Tunnel Sissu drive',
      'Manikaran Sahib holy sulfur hot springs & Gurudwara Langar',
      'Kasol Riverside Israeli Cafes & Pine forest walks along Parvati river',
      'Hadimba Devi Temple, Vashisht Hot Springs & Mall Road shopping',
      'Cozy bonfire night with music in Kasol riverside camp'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Manali & Local Sightseeing',
        description: 'Check in to Manali resort. Visit the ancient wood-carved Hadimba Temple, Club House, and soak in hot springs at Vashisht.',
        activities: ['Hadimba Temple visit', 'Vashisht Temple hot spring', 'Evening Mall Road stroll'],
        meals: 'Dinner Included',
        stay: 'Pine View Resort, Manali'
      },
      {
        day: 2,
        title: 'Solang Valley, Snow Point & Atal Tunnel Sissu',
        description: 'Excursion to Solang Valley for snow adventures. Cross the Atal Tunnel to witness the dramatic frozen waterfalls of Sissu in Lahaul.',
        activities: ['Solang snow activities & paragliding', 'Atal Tunnel engineering marvel drive', 'Sissu waterfall photo stop'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Pine View Resort, Manali'
      },
      {
        day: 3,
        title: 'Manali to Kasol & Manikaran Sahib',
        description: 'Drive along the gushing Parvati river to Kasol. Visit holy Manikaran Sahib Gurudwara and enjoy evening riverside bonfire in Kasol.',
        activities: ['Manikaran Sahib holy bath & langar', 'Kasol cafe culture exploration', 'Riverside camp bonfire & music'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Riverside Swiss Camps / Boutique Hotel, Kasol'
      },
      {
        day: 4,
        title: 'Kasol Nature Walk & Departure for Delhi/Chandigarh',
        description: 'Morning trek through the pine woods of Chalal / Tosh. Return drive with unforgettable memories of Himachal.',
        activities: ['Chalal suspension bridge walk', 'Shopping for handicrafts in Kasol market'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '3 Nights accommodation in 3★ Manali Resort & Kasol Riverside Camp',
      'Daily Buffet Breakfast and 3 Hot Dinners',
      'All local transfers & sightseeing by private dedicated Cab',
      '1 Night complimentary Camp Bonfire in Kasol',
      'Toll tax, parking fees, and driver allowances included'
    ],
    exclusions: [
      'Delhi-Manali Volvo bus tickets (available at ₹800/seat add-on)',
      'Paragliding, skiing, and snow dress rental fees'
    ],
    bestTimeToVisit: 'Round the Year (Dec-Feb for Snow, Mar-Jun for pleasant weather)',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Manali / Kasol (Delhi Volvo Option)',
    cabType: 'Dedicated Private Sedan / Dzire / Ertiga',
    trendingRank: 4
  },

  // 5. Jibhi Sojha (2N / 3D - ₹7,000)
  {
    id: 'swh-jibhi-sojha-05',
    slug: 'jibhi-sojha-jalori-pass-serolsar-lake-tirthan-weekend',
    title: 'Secret Paradise: Jibhi, Sojha, Jalori Pass (3120m) & Serolsar Lake Trek',
    state: 'Himachal Pradesh',
    region: 'North India',
    destinationsCovered: ['Jibhi', 'Sojha', 'Jalori Pass', 'Serolsar Lake', 'Chehni Kothi', 'Tirthan Valley'],
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 7000,
    originalPrice: 9500,
    rating: 4.9,
    reviewsCount: 210,
    tag: 'Hidden Gem 🌲',
    featured: true,
    theme: 'Hill Stations & Snow',
    heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Escape to the tranquil cedar pine forests of Jibhi and Sojha in Tirthan valley. Trek through oak woods to the mystical Serolsar Lake from Jalori Pass (10,800 ft) and visit the ancient 1500-year-old Chehni Kothi tower.',
    highlights: [
      'Trek to the holy Serolsar Lake through dense Himalayan oak and pine forests',
      'Drive up to the scenic Jalori Pass at 10,800 ft altitude',
      'Jibhi Waterfall wooden footbridge walk & Victorian style chalet stays',
      'Hike to the ancient 12-storey timber Chehni Kothi fort tower',
      'Riverside bonfire with acoustic music and stargazing'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Jibhi, Wooden Bridge & Waterfall Walk',
        description: 'Arrive in serene Jibhi. Check in to charming wooden riverside cottage. Walk down to Jibhi Waterfall and explore the traditional stone houses.',
        activities: ['Jibhi Waterfall nature walk', 'Traditional village exploration', 'Evening riverside bonfire'],
        meals: 'Dinner Included',
        stay: 'Riverside Wooden Chalet / Homestay, Jibhi'
      },
      {
        day: 2,
        title: 'Jalori Pass & Serolsar Lake Alpine Trek (5 km)',
        description: 'Drive up to Jalori Pass (3,120m). Embark on a breathtaking 5km scenic nature trek to the sacred Serolsar Lake and Buddhi Nagin Temple.',
        activities: ['Jalori Pass summit views', 'Serolsar Lake pine trek', 'Buddhi Nagin temple prayer', 'Sojha viewpoint sunset'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Riverside Wooden Chalet, Jibhi'
      },
      {
        day: 3,
        title: 'Chehni Kothi Fort Hike & Departure',
        description: 'Hike to the towering Chehni Kothi wood-and-stone temple tower. Enjoy local herbal tea before departing for Aut / Delhi.',
        activities: ['Chehni Kothi heritage walk', 'Tirthan trout stream photo stop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights stay in Deluxe Wooden Cottage / Boutique Homestay',
      'Daily Morning Breakfast & Delicious Mountain Dinners',
      'All local transfers & sightseeing by private Cab',
      'Guided trek to Serolsar Lake & Jalori Pass',
      'Evening Bonfire experience'
    ],
    exclusions: [
      'Volvo ticket to Aut tunnel (arranged upon request)',
      'Personal snacks and mineral water'
    ],
    bestTimeToVisit: 'March to November (Pleasant) & Dec to Feb (Snow lovers)',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Aut Tunnel / Jibhi',
    cabType: 'Dedicated Private Cab / Mountain 4x4',
    trendingRank: 5
  },

  // 6. Kedarnath (3N / 4D - ₹8,000)
  {
    id: 'swh-kedarnath-06',
    slug: 'kedarnath-dham-holy-yatra-haridwar-guptkashi',
    title: 'Sacred Kedarnath Dham Yatra: Haridwar, Guptkashi & Kedarnath Temple Top Stay',
    state: 'Uttarakhand',
    region: 'North India',
    destinationsCovered: ['Haridwar', 'Rishikesh', 'Devprayag', 'Guptkashi', 'Sonprayag', 'Gaurikund', 'Kedarnath Temple'],
    durationDays: 4,
    durationNights: 3,
    pricePerPerson: 8000,
    originalPrice: 12000,
    rating: 4.9,
    reviewsCount: 480,
    tag: 'Lord Shiva Dham 🕉️',
    featured: true,
    theme: 'Spiritual & Pilgrimage',
    heroImage: 'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1609342122563-a43ac8917a3a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'An auspicious 4-day holy yatra to Kedarnath Jyotirlinga (3,584m). Trek along the sacred Mandakini river from Gaurikund, witness the soul-stirring evening Maha Aarti, and stay on top near the holy temple.',
    highlights: [
      'Night stay near Kedarnath Temple top shrine',
      'Attend the divine evening & morning Maha Aarti of Lord Shiva',
      'Visit Devprayag Sangam (Bhagirathi & Alaknanda confluence) and Rishikesh',
      'Biometric Yatra Registration support included',
      'Dedicated group coordinator for hassle-free darshan'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Haridwar / Rishikesh to Guptkashi / Phata',
        description: 'Drive through the sacred Garhwal mountains via Devprayag and Rudraprayag along the Mandakini river to Guptkashi.',
        activities: ['Devprayag Sangam darshan', 'Mandakini river drive', 'Yatra briefing'],
        meals: 'Dinner Included',
        stay: 'Hotel Valley Retreat, Guptkashi / Phata'
      },
      {
        day: 2,
        title: 'Guptkashi to Kedarnath Top Trek (16 km) & Temple Aarti',
        description: 'Early morning transfer to Sonprayag/Gaurikund. Trek up to Kedarnath Dham. Check in to camp near temple and attend evening Aarti.',
        activities: ['Gaurikund hot spring bath', 'Mandakini valley trek', 'Kedarnath Temple evening Aarti & Darshan'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel / Camp Stay at Kedarnath Top (Near Temple)'
      },
      {
        day: 3,
        title: 'Morning Kedarnath Darshan & Trek Down to Guptkashi',
        description: 'Early morning Shiva Darshan with snow peaks view. Trek down to Gaurikund and transfer back to Guptkashi hotel for hot dinner and rest.',
        activities: ['Early morning Abhishekam darshan', 'Bhairavnath temple viewpoint', 'Trek down to Sonprayag'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Valley Retreat, Guptkashi'
      },
      {
        day: 4,
        title: 'Guptkashi to Rishikesh & Haridwar Drop',
        description: 'Scenic return drive with visit to Rishikesh Ram Jhula and Triveni Ghat. Drop at Haridwar Railway Station for onward journey.',
        activities: ['Rishikesh Ram Jhula visit', 'Haridwar drop with holy memories'],
        meals: 'Breakfast Included',
        stay: 'Yatra Concludes'
      }
    ],
    inclusions: [
      '3 Nights accommodation (2 Nights Guptkashi + 1 Night Kedarnath Top)',
      'Daily Morning Breakfast and 3 Sattvic Dinners',
      'All road transfers by dedicated Cab / Pushback Tempo Traveller',
      'Uttarakhand Yatra registration support',
      'Toll tax, parking fees, and driver allowances'
    ],
    exclusions: [
      'Helicopter ticket / Pony / Palki charges (if used)',
      'VIP darshan special pass'
    ],
    bestTimeToVisit: 'May to June & September to November',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Haridwar / Rishikesh',
    cabType: 'Dedicated Private Cab / Tempo Traveller',
    trendingRank: 6
  },

  // 7. Chopta Tungnath (2N / 3D - ₹5,000)
  {
    id: 'swh-chopta-tungnath-07',
    slug: 'chopta-tungnath-chandrashila-summit-deoria-tal-trek',
    title: 'Chopta, Tungnath (World’s Highest Shiva Temple) & Chandrashila Peak (4000m)',
    state: 'Uttarakhand',
    region: 'North India',
    destinationsCovered: ['Rishikesh', 'Devprayag', 'Chopta', 'Tungnath Temple', 'Chandrashila Peak', 'Deoria Tal Lake'],
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 5000,
    originalPrice: 7500,
    rating: 4.9,
    reviewsCount: 290,
    tag: 'Mini Switzerland 🏔️',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Trek to Tungnath (3,680m), the highest Shiva temple in the world, and summit the breathtaking Chandrashila Peak (4,000m) for a 360-degree panorama of Chaukhamba, Nanda Devi, and Trishul peaks.',
    highlights: [
      'Summit Chandrashila (13,100 ft) for 360-degree views of Greater Himalayas',
      'Darshan at the 1000-year-old Tungnath Temple (highest of the Panch Kedar)',
      'Hike to the emerald reflections of Deoria Tal Lake facing Chaukhamba',
      'Camp in the alpine bugyals (meadows) of Chopta with evening bonfire'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Rishikesh to Chopta Meadows & Deoria Tal Trek',
        description: 'Drive along Alaknanda river. Reach Sari village and do a short 2.5km hike to pristine Deoria Tal lake before reaching Chopta camp.',
        activities: ['Devprayag Sangam view', 'Deoria Tal lake trek', 'Campfire in Chopta Swiss camp'],
        meals: 'Dinner Included',
        stay: 'Swiss Tents / Resort in Chopta Bugyal'
      },
      {
        day: 2,
        title: 'Tungnath Temple & Chandrashila Peak Summit Trek (4000m)',
        description: 'Early morning summit trek from Chopta to Tungnath (3.5km) and up to Chandrashila Peak (1.5km). Witness spectacular Himalayan peaks.',
        activities: ['Tungnath Temple Puja & Darshan', 'Chandrashila summit 360° photo session', 'Chopta meadow stroll'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Swiss Tents / Resort in Chopta'
      },
      {
        day: 3,
        title: 'Chopta to Rishikesh Drop',
        description: 'Morning sunrise breakfast amidst the pine bugyals. Return drive to Rishikesh/Haridwar with unforgettable memories.',
        activities: ['Morning meadow sunrise photography', 'Drop at Rishikesh'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights Swiss Camp / Resort Stay in Chopta',
      'Daily Morning Breakfast and 2 Hot Buffet Dinners',
      'All transfers from/to Rishikesh by dedicated vehicle',
      'Trek guide assistance for Tungnath & Chandrashila',
      'Forest entry permits & evening camp bonfire'
    ],
    exclusions: [
      'Travel to/from Rishikesh',
      'Pony charges if taken on trek'
    ],
    bestTimeToVisit: 'Round the Year (Snow in Winter, Lush Green in Summer)',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Rishikesh / Haridwar',
    cabType: 'Dedicated Private Cab / Tempo Traveller',
    trendingRank: 7
  },

  // 8. Valley of Flowers (5N / 6D - ₹8,000)
  {
    id: 'swh-valley-of-flowers-08',
    slug: 'valley-of-flowers-unesco-hemkund-sahib-trek',
    title: 'UNESCO Valley of Flowers & Holy Hemkund Sahib (4329m) Alpine Trek',
    state: 'Uttarakhand',
    region: 'North India',
    destinationsCovered: ['Rishikesh', 'Joshimath', 'Govindghat', 'Ghangaria', 'Valley of Flowers', 'Hemkund Sahib Gurudwara'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 8000,
    originalPrice: 12500,
    rating: 5.0,
    reviewsCount: 310,
    tag: 'UNESCO Floral Wonder 🌸',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: '/images/valley_of_flowers.jpg',
    gallery: [
      '/images/valley_of_flowers.jpg',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Walk amidst hundreds of exotic Himalayan wildflowers, waterfalls, and glaciers in the UNESCO World Heritage Valley of Flowers. Trek to the sacred high-altitude Hemkund Sahib Gurudwara beside a crystal glacial lake.',
    highlights: [
      'Explore the UNESCO World Heritage Valley of Flowers with rare Brahma Kamal blooms',
      'Trek to holy Hemkund Sahib Gurudwara (14,200 ft) surrounded by 7 snow peaks',
      'Experience the cascading Pushpawati river and glacial bridges',
      'Certified Himalayan trek leader and forest permits included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Rishikesh to Joshimath / Govindghat',
        description: 'Scenic drive through the confluences of Devprayag, Rudraprayag, and Karnaprayag to reach the base town of Govindghat.',
        activities: ['Panch Prayag confluences view', 'Alaknanda river drive'],
        meals: 'Dinner Included',
        stay: 'Hotel Himalayan Base, Govindghat'
      },
      {
        day: 2,
        title: 'Govindghat to Ghangaria Trek (10 km)',
        description: 'Trek through scenic alpine woods along the gushing Lakshman Ganga river to reach Ghangaria base camp.',
        activities: ['Lakshman Ganga riverside trek', 'Ghangaria helipad viewpoint'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel / Lodge, Ghangaria'
      },
      {
        day: 3,
        title: 'Ghangaria to Valley of Flowers National Park & Return',
        description: 'Enter the UNESCO floral sanctuary. Walk 4 km through carpets of blue poppies, primulas, orchids, and Pushpawati river streams.',
        activities: ['Flora photography & botanist guide walk', 'Joan Margaret Legge memorial grave', 'Glacial stream picnic'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel / Lodge, Ghangaria'
      },
      {
        day: 4,
        title: 'Ghangaria to Holy Hemkund Sahib (4329m) & Return',
        description: 'Steep spiritual trek to the pristine Hemkund Sahib Gurudwara and holy lake surrounded by seven Himalayan snow peaks.',
        activities: ['Holy dip in Hemkund glacial lake', 'Gurudwara Ardas & hot Kadha Prasad', 'Brahma Kamal spotting on trail'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel / Lodge, Ghangaria'
      },
      {
        day: 5,
        title: 'Ghangaria to Govindghat Trek Down & Drive to Joshimath',
        description: 'Trek down to Govindghat and transfer to Joshimath. Visit Narsingh Temple and enjoy peaceful mountain sunset.',
        activities: ['Descent trek to Govindghat', 'Joshimath local market & Narsingh Temple'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Hotel Himalayan Base, Joshimath'
      },
      {
        day: 6,
        title: 'Joshimath to Rishikesh Drop',
        description: 'Scenic return drive along Alaknanda and Ganga valleys. Drop at Rishikesh Railway Station.',
        activities: ['Morning breakfast', 'Drop at Rishikesh'],
        meals: 'Breakfast Included',
        stay: 'Trek Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation in Base Hotels & Ghangaria Lodges',
      'Daily Morning Breakfast and 5 Nutritious Trek Dinners',
      'All road transfers from/to Rishikesh by dedicated vehicle',
      'Forest Department entry permits & Eco-Taxes',
      'Certified Himalayan Trek Leader & First-Aid backup'
    ],
    exclusions: [
      'Pony / Helicopter charges between Govindghat & Ghangaria (optional)',
      'Personal trekking gear'
    ],
    bestTimeToVisit: 'July to September (Floral Peak Season)',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Rishikesh',
    cabType: 'Dedicated Pushback Coach / Cab',
    trendingRank: 8
  },

  // 9. Mcleodganj (2N / 3D - ₹7,000)
  {
    id: 'swh-mcleodganj-09',
    slug: 'mcleodganj-dharamshala-triund-dalai-lama-weekend',
    title: 'Little Lhasa: Mcleodganj, Dharamshala, Dalai Lama Temple & Triund Day Hike',
    state: 'Himachal Pradesh',
    region: 'North India',
    destinationsCovered: ['Mcleodganj', 'Dharamshala', 'Bhagsunag', 'Triund Ridge', 'Dalai Lama Temple', 'Naddi Village'],
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 7000,
    originalPrice: 9500,
    rating: 4.8,
    reviewsCount: 260,
    tag: 'Peace & Cafes 🧘',
    featured: true,
    theme: 'Hill Stations & Snow',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Immerse in the peaceful Tibetan Buddhist ambiance of Mcleodganj and the mighty snow-capped Dhauladhar ranges. Visit the Tsuglagkhang Complex (Dalai Lama Temple), Bhagsu Waterfall, and picturesque Naddi sunset point.',
    highlights: [
      'Visit Tsuglagkhang Complex (Dalai Lama Residence & Temple) & Tibet Museum',
      'Bhagsunag Waterfall & iconic Shiva Cafe mountain trek',
      'Spectacular Dhauladhar snow range views from Naddi viewpoint',
      'Tibetan handicraft market shopping & authentic momo / thukpa culinary tours',
      'Triund trail guided day hike option included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Mcleodganj & Monasteries Tour',
        description: 'Arrive in Mcleodganj. Check in to mountain view hotel. Visit the Dalai Lama Temple, Namgyal Monastery, and spin prayer wheels.',
        activities: ['Dalai Lama Temple visit', 'Tibetan Handicraft Market', 'Sunset from Naddi Village'],
        meals: 'Dinner Included',
        stay: 'Pine View Boutique Resort, Mcleodganj'
      },
      {
        day: 2,
        title: 'Bhagsu Waterfall, Shiva Cafe & St. John Church',
        description: 'Hike to Bhagsu Waterfall and the iconic Shiva Cafe. Visit the gothic St. John in the Wilderness Church in cedar woods and Dharamshala Cricket Stadium.',
        activities: ['Bhagsu Waterfall walk', 'HPCA Dharamshala International Stadium', 'St. John Church in pine woods'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Pine View Boutique Resort, Mcleodganj'
      },
      {
        day: 3,
        title: 'Norbulingka Institute & Departure',
        description: 'Visit the stunning Japanese-Tibetan Norbulingka Institute preserved with traditional thangka painting and wood carving before departure.',
        activities: ['Norbulingka Institute garden walk', 'Tibetan souvenir shopping'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights stay in Deluxe Resort / Boutique Hotel with Valley View',
      'Daily Buffet Breakfast and 2 Multi-Cuisine Dinners',
      'All sightseeing by dedicated private Cab',
      'Driver allowances, toll taxes, and parking fees'
    ],
    exclusions: [
      'Delhi-Mcleodganj Volvo bus ticket (available at ₹900 add-on)',
      'Entry tickets if any'
    ],
    bestTimeToVisit: 'Round the Year',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Mcleodganj / Dharamshala',
    cabType: 'Dedicated Private Sedan / Dzire / Etios',
    trendingRank: 9
  },

  // 10. Kedarkantha (4N / 5D - ₹6,000)
  {
    id: 'swh-kedarkantha-10',
    slug: 'kedarkantha-winter-snow-summit-trek-sankri',
    title: 'Queen of Snow Treks: Kedarkantha Summit (3810m) & Juda Ka Talab Frozen Lake',
    state: 'Uttarakhand',
    region: 'North India',
    destinationsCovered: ['Dehradun', 'Mussoorie', 'Sankri', 'Juda Ka Talab', 'Kedarkantha Base Camp', 'Kedarkantha Summit'],
    durationDays: 5,
    durationNights: 4,
    pricePerPerson: 6000,
    originalPrice: 9000,
    rating: 5.0,
    reviewsCount: 390,
    tag: 'Snow Summit ❄️',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: 'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1589182373726-e4f658ab50f0?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'India’s #1 winter snow trek. Summit Kedarkantha peak (12,500 ft) for an unbelievable 360-degree panorama of Swargarohini, Black Peak, and Bandarpoonch ranges, while camping on thick snow blankets beside the frozen Juda Ka Talab.',
    highlights: [
      'Summit Kedarkantha (12,500 ft) at sunrise with 360° snow peak views',
      'Camp in 4-season alpine tents on snow next to frozen Juda Ka Talab',
      'Microspikes, gaiters, and high-altitude sleeping bags provided',
      'Delicious hot multi-course meals served at all alpine campsites',
      'Certified mountaineering guide and safety equipment'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Dehradun to Sankri Base Village (Drive 200 km)',
        description: 'Scenic mountain drive via Mussoorie and along Tons River to the picturesque Sankri base village in Govind National Park.',
        activities: ['Mussoorie valley drive', 'Sankri village walk & gear briefing'],
        meals: 'Dinner Included',
        stay: 'Homestay / Hotel, Sankri'
      },
      {
        day: 2,
        title: 'Sankri to Juda Ka Talab Campsite (Trek 4 km)',
        description: 'Trek through dense pine and oak woods on crunching snow to reach the mystical frozen lake Juda Ka Talab.',
        activities: ['Pine forest snow trek', 'Juda Ka Talab frozen lake photography', 'Snow campfire & stargazing'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Alpine Tents, Juda Ka Talab'
      },
      {
        day: 3,
        title: 'Juda Ka Talab to Kedarkantha Base Camp (Trek 3 km)',
        description: 'Short ascent to Kedarkantha Base Camp with opening 180-degree views of snow-clad Himalayan peaks.',
        activities: ['Snow craft briefing', 'Rest and acclimatization for summit push'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Alpine Tents, Kedarkantha Base Camp'
      },
      {
        day: 4,
        title: 'Base Camp to Kedarkantha Summit (3810m) & Descent to Sankri',
        description: 'Early morning 3 AM summit push to catch the sunrise from 12,500 ft. Marvel at the 360° panorama before descending back to Sankri.',
        activities: ['Kedarkantha Summit sunrise (12,500 ft)', 'Trishul & Shiva temple top prayer', 'Celebration dinner at Sankri'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Homestay / Hotel, Sankri'
      },
      {
        day: 5,
        title: 'Sankri to Dehradun Drop',
        description: 'Drive back to Dehradun with the unforgettable achievement of summiting Kedarkantha.',
        activities: ['Morning breakfast', 'Drop at Dehradun Railway Station'],
        meals: 'Breakfast Included',
        stay: 'Trek Concludes'
      }
    ],
    inclusions: [
      '4 Nights accommodation (2 Nights Sankri Homestay + 2 Nights Alpine Snow Tents)',
      'All high-altitude hot meals (Breakfast, Lunch, Evening Snacks & Dinner)',
      'All transfers from/to Dehradun by shared vehicle',
      'Microspikes, crampons, gaiters & sub-zero sleeping bags',
      'National Park forest permits, trek leader & safety equipment'
    ],
    exclusions: [
      'Travel to/from Dehradun',
      'Personal trekking shoes / backpack offloading'
    ],
    bestTimeToVisit: 'November to April (Snow Peak) & May to June',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Dehradun Railway Station',
    cabType: 'Dedicated Pushback Tempo / Bolero',
    trendingRank: 10
  },

  // 11. Hampta Pass (5N / 6D - ₹6,000)
  {
    id: 'swh-hampta-pass-11',
    slug: 'hampta-pass-chandratal-crossover-trek-manali',
    title: 'Himalayan Dramatic Crossover: Hampta Pass (4270m) & Chandratal Lake Trek',
    state: 'Himachal Pradesh',
    region: 'North India',
    destinationsCovered: ['Manali', 'Jobra', 'Chika', 'Balu Ka Ghera', 'Hampta Pass Summit', 'Shea Goru', 'Chattru', 'Chandratal Lake'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 6000,
    originalPrice: 9000,
    rating: 4.9,
    reviewsCount: 320,
    tag: 'Crossover Trek 🏔️',
    featured: true,
    theme: 'Adventure & Trekking',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Experience the magic of dramatic landscape transformation — from the lush pine valleys and flower meadows of Kullu to the stark desert moonscape of Lahaul & Spiti, ending with a drive to the crescent blue Chandratal Lake.',
    highlights: [
      'Cross the thrilling Hampta Pass at 14,035 ft altitude with views of Mt. Indrasan',
      'Excursion to the legendary blue crescent moon Chandratal Lake',
      'Camp in alpine tents at Balu Ka Ghera and beside the glacial streams of Shea Goru',
      'Walk over glacial snow bridges and boulder moraines',
      'All camping equipment, experienced trek guides, and forest permits included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Manali to Jobra Drive & Trek to Chika Campsite',
        description: 'Drive through 42 hairpin bends to Jobra (9,800 ft). Trek through maple, birch, and pine woods to reach the riverbed campsite at Chika.',
        activities: ['Jobra scenic drive', 'Chika riverside camping', 'Acclimatization walk'],
        meals: 'Dinner Included',
        stay: 'Alpine Tents, Chika Campsite'
      },
      {
        day: 2,
        title: 'Chika to Balu Ka Ghera (Trek 5 km)',
        description: 'Trek along the roaring Hampta river through wildflower-strewn meadows to Balu Ka Ghera (Bed of Sand at 11,900 ft).',
        activities: ['Rani Nallah river crossing', 'Balu Ka Ghera sunset views'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Alpine Tents, Balu Ka Ghera'
      },
      {
        day: 3,
        title: 'Balu Ka Ghera to Hampta Pass Summit (4270m) to Shea Goru',
        description: 'The big summit day. Climb over snow moraines to reach Hampta Pass (14,035 ft). Marvel at Mt. Indrasan before steep descent to Shea Goru in Lahaul.',
        activities: ['Hampta Pass summit celebration (14,035 ft)', 'Mt. Indrasan & Deotibba view', 'Shea Goru glacial stream campsite'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Alpine Tents, Shea Goru'
      },
      {
        day: 4,
        title: 'Shea Goru to Chattru Trek & Drive to Chandratal Lake',
        description: 'Cross the chilly Shea Goru river in the morning. Trek down to Chattru roadhead and drive in 4x4 to the ethereal Chandratal Lake.',
        activities: ['Chilly stream crossing adventure', 'Chattru roadhead arrival', 'Chandratal Lake sunset walk'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Alpine Tents / Swiss Camp, Chandratal Base'
      },
      {
        day: 5,
        title: 'Chandratal to Manali via Atal Tunnel',
        description: 'Morning drive along Batal and Gramphu rugged trails, pass through Atal Tunnel and arrive in lush green Manali for a relaxing evening.',
        activities: ['Atal Tunnel drive', 'Old Manali cafe hopping'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Hotel, Manali'
      },
      {
        day: 6,
        title: 'Manali Departure',
        description: 'Breakfast with panoramic views of snow peaks. Onward departure for Delhi/Chandigarh with unforgettable crossover memories.',
        activities: ['Breakfast & departure'],
        meals: 'Breakfast Included',
        stay: 'Trek Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation (4 Nights Alpine Camps + 1 Night Deluxe Manali Hotel)',
      'All nutritious trek meals (Breakfast, Packed Lunch, Hot Dinners)',
      '4x4 Vehicle for Jobra and Chandratal lake transfer',
      'High-altitude alpine tents, sleeping bags, and insulated mats',
      'Forest department permits, trek leader & emergency oxygen'
    ],
    exclusions: [
      'Travel to/from Manali',
      'Personal backpack offloading'
    ],
    bestTimeToVisit: 'June to October (Pass Open)',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Manali',
    cabType: 'Dedicated Mountain 4x4 / Shared Trek Vehicle',
    trendingRank: 11
  },

  // 12. International: Vietnam (5N / 6D - ₹38,000)
  {
    id: 'swh-intl-vietnam-12',
    slug: 'wonders-of-vietnam-hanoi-halong-bay-danang-golden-bridge',
    title: 'Wonders of Vietnam: Hanoi, Halong Bay Cruise, Da Nang Golden Hand Bridge & Hoi An',
    state: 'Vietnam',
    region: 'International Special',
    destinationsCovered: ['Hanoi', 'Halong Bay', 'Da Nang', 'Ba Na Hills (Golden Bridge)', 'Hoi An Lantern Town'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 38000,
    originalPrice: 48000,
    rating: 5.0,
    reviewsCount: 280,
    tag: 'International Special ✈️',
    featured: true,
    theme: 'International Getaways',
    heroImage: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Discover the treasures of Vietnam. Cruise through the emerald karst seas of Halong Bay on a luxury ship, walk along the world-famous Golden Bridge held by giant stone hands in Ba Na Hills, and release glowing lanterns on the river in ancient Hoi An.',
    highlights: [
      '1 Night Luxury Halong Bay Cruise with kayaking and cave excursions',
      'Ba Na Hills Cable Car to the iconic Golden Giant Hands Bridge',
      'Hoi An UNESCO ancient town lantern boat ride & basket boat coconut forest tour',
      'Hanoi Old Quarter & Hoan Kiem Lake rickshaw heritage tour',
      'Vietnam E-Visa assistance and Indian/Vegetarian food options throughout'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Hanoi & Old Quarter Walking Tour',
        description: 'Warm welcome at Noi Bai International Airport (HAN). Transfer to hotel. In the evening, explore the vibrant Hanoi Old Quarter and Hoan Kiem Lake.',
        activities: ['Airport pickup', 'Old Quarter 36 Streets walk', 'Water Puppet Show'],
        meals: 'Dinner Included',
        stay: '4★ Deluxe Boutique Hotel, Hanoi'
      },
      {
        day: 2,
        title: 'Hanoi to Halong Bay - Overnight Luxury Cruise',
        description: 'Drive through Red River delta to Halong Bay. Board luxury cruise. Cruise past limestone peaks, visit Sung Sot Cave, and kayak in emerald lagoons.',
        activities: ['Welcome drink & Seafood/Veg buffet on cruise', 'Kayaking in limestone lagoons', 'Sunset party on cruise sun-deck'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Luxury Cabin with Private Balcony, Halong Bay Cruise'
      },
      {
        day: 3,
        title: 'Halong Bay Sunrise Tai Chi & Flight to Da Nang',
        description: 'Morning Tai Chi on sundeck and visit Ti Top Island. Disembark cruise and transfer to Hanoi airport for short flight to coastal Da Nang.',
        activities: ['Morning Tai Chi session', 'Ti Top Island panoramic viewpoint', 'Flight to Da Nang & Dragon Bridge night show'],
        meals: 'Breakfast & Lunch Included',
        stay: '4★ Beachfront Hotel, Da Nang'
      },
      {
        day: 4,
        title: 'Ba Na Hills, Golden Giant Hands Bridge & French Village',
        description: 'Ride the world’s longest single-cable car to Sun World Ba Na Hills. Walk across the awe-inspiring Golden Bridge and explore Fantasy Park.',
        activities: ['Golden Bridge giant hands photo session', 'French Village castles', 'Linh Ung Pagoda'],
        meals: 'Breakfast & Lunch Buffet Included',
        stay: '4★ Beachfront Hotel, Da Nang'
      },
      {
        day: 5,
        title: 'Hoi An Ancient Lantern Town & Coconut Boat Tour',
        description: 'Experience spinning round bamboo basket boats in Bay Mau Coconut Forest. In the evening, walk through the magical lantern-lit streets of Hoi An.',
        activities: ['Coconut Forest basket boat ride', 'Japanese Covered Bridge in Hoi An', 'Evening lantern release on Hoai River'],
        meals: 'Breakfast & Dinner Included',
        stay: '4★ Boutique Resort, Hoi An / Da Nang'
      },
      {
        day: 6,
        title: 'Da Nang Departure',
        description: 'Enjoy a leisurely breakfast and beach walk before transferring to Da Nang International Airport (DAD) for flight back to India.',
        activities: ['My Khe Beach stroll', 'Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation in 4★ Hotels & Luxury Halong Cruise Cabin',
      'Daily Buffet Breakfast, 3 Lunches & 4 Dinners (Indian Meals option)',
      'All airport transfers and sightseeing by private dedicated AC Coach',
      'Ba Na Hills Cable Car tickets & Halong Bay Kayaking included',
      'English/Hindi speaking friendly tour guide & 24x7 desk support'
    ],
    exclusions: [
      'International airfare (India to Hanoi / Da Nang to India)',
      'Domestic flight Hanoi to Da Nang (arranged at actuals ~₹3,500)',
      'Vietnam Visa fee ($25 E-Visa paid online)'
    ],
    bestTimeToVisit: 'September to May',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Hanoi In / Da Nang Out',
    cabType: 'Dedicated AC Coach / Private Tourist Vehicle',
    trendingRank: 12
  },

  // 13. International: Thailand (4N / 5D - ₹24,999)
  {
    id: 'swh-intl-thailand-13',
    slug: 'thailand-bangkok-pattaya-coral-island-safari-world',
    title: 'Exotic Thailand: Bangkok City Temples, Pattaya Beach & Coral Island Speedboat',
    state: 'Thailand',
    region: 'International Special',
    destinationsCovered: ['Bangkok', 'Pattaya', 'Coral Island', 'Chao Phraya River', 'Safari World & Marine Park'],
    durationDays: 5,
    durationNights: 4,
    pricePerPerson: 24999,
    originalPrice: 32000,
    rating: 4.9,
    reviewsCount: 350,
    tag: 'International Bestseller 🌴',
    featured: true,
    theme: 'International Getaways',
    heroImage: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The quintessential Thai escape. Enjoy a speedboat ride to the turquoise waters of Coral Island with water sports, explore the golden Reclining Buddha temple in Bangkok, and take a luxury dinner cruise on the Chao Phraya River.',
    highlights: [
      'Speedboat excursion to Coral Island (Koh Larn) with Indian buffet lunch',
      'Luxury Chao Phraya Princess Dinner Cruise with live music in Bangkok',
      'Bangkok Golden Buddha (Wat Traimit) & Marble Temple city tour',
      'Full day at Safari World & Marine Park with dolphin and stunt shows',
      'Alcazar Cabaret Show VIP ticket in Pattaya'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Bangkok & Transfer to Pattaya',
        description: 'Arrive at Suvarnabhumi Airport (BKK). Transfer along the coast to Pattaya. Evening at leisure to explore the lively beach and night markets.',
        activities: ['Airport reception & Pattaya transfer', 'Alcazar Cabaret Show VIP evening'],
        meals: 'Dinner Included',
        stay: '4★ Deluxe Resort, Pattaya'
      },
      {
        day: 2,
        title: 'Coral Island Speedboat Tour & Water Sports',
        description: 'Board a speedboat to Coral Island. Relax on powdery white sands, enjoy parasailing and banana boat rides, and savor an Indian buffet lunch.',
        activities: ['Speedboat to Koh Larn', 'Parasailing & Snorkeling', 'Indian Buffet lunch by the beach'],
        meals: 'Breakfast & Lunch Included',
        stay: '4★ Deluxe Resort, Pattaya'
      },
      {
        day: 3,
        title: 'Pattaya to Bangkok & Chao Phraya Dinner Cruise',
        description: 'Drive back to Bangkok. City tour of Golden Buddha and Reclining Buddha. In the evening, board a luxury illuminated cruise on Chao Phraya River.',
        activities: ['Bangkok Golden Buddha Temple', 'Gems Gallery tour', 'Chao Phraya River Cruise Dinner with live band'],
        meals: 'Breakfast & Dinner Included',
        stay: '4★ Central Hotel, Sukhumvit Bangkok'
      },
      {
        day: 4,
        title: 'Safari World & Marine Park Full Day Adventure',
        description: 'Excursion to Safari World open zoo and Marine Park featuring dolphin shows, sea lion antics, and feeding giraffes.',
        activities: ['Open Safari wild animal drive', 'Dolphin & Spy War stunt show', 'Buffet lunch in park'],
        meals: 'Breakfast & Lunch Included',
        stay: '4★ Central Hotel, Sukhumvit Bangkok'
      },
      {
        day: 5,
        title: 'Bangkok Shopping & Departure',
        description: 'Morning shopping at MBK / Pratunam / Central World. Transfer to Bangkok Airport for your flight back home.',
        activities: ['Shopping leisure', 'Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '4 Nights in 4★ Hotels (2N Pattaya + 2N Bangkok)',
      'Daily Buffet Breakfast, 2 Lunches & 2 Dinners (Indian Meals included)',
      'Coral Island tour by Speedboat with transfers',
      'Chao Phraya Dinner Cruise & Safari World tickets',
      'All airport and intercity transfers by dedicated AC Coach'
    ],
    exclusions: [
      'International flights (Visa-Free for Indian passport holders currently!)',
      'Water sports charges at Coral Island'
    ],
    bestTimeToVisit: 'Round the Year (November to April ideal)',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Bangkok Airport (BKK / DMK)',
    cabType: 'Dedicated Tourist AC Coach',
    trendingRank: 13
  },

  // 14. International: Bali (5N / 6D - ₹32,000)
  {
    id: 'swh-intl-bali-14',
    slug: 'enchanting-bali-nusa-penida-ubud-swing-private-villa',
    title: 'Enchanting Bali: Nusa Penida Island, Ubud Jungle Swing & Private Pool Villa',
    state: 'Bali (Indonesia)',
    region: 'International Special',
    destinationsCovered: ['Kuta', 'Seminyak', 'Ubud', 'Nusa Penida', 'Tanjung Benoa', 'Tanah Lot Temple', 'Uluwatu'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 32000,
    originalPrice: 42000,
    rating: 5.0,
    reviewsCount: 340,
    tag: 'Island of Gods 🌺',
    featured: true,
    theme: 'International Getaways',
    heroImage: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'The ultimate tropical dream vacation. Stay in a private luxury pool villa in Seminyak, swing over emerald jungle rice terraces in Ubud, take a speedboat to the dramatic T-Rex cliffs of Nusa Penida, and watch fiery sunsets at Tanah Lot clifftop temple.',
    highlights: [
      '1 Night Stay in a Luxurious Private Pool Villa in Seminyak/Ubud',
      'Full Day West Nusa Penida Tour (Kelingking T-Rex Beach, Broken Beach, Angel’s Billabong)',
      'Famous Bali Aloha Jungle Swing & Tegalalang Rice Terraces',
      'Tanjung Benoa Water Sports (Parasailing, Jet Ski & Banana Boat)',
      'Tanah Lot & Uluwatu Clifftop Temple with traditional Kecak Fire Dance'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Bali & Clifftop Sunset',
        description: 'Warm welcome at Ngurah Rai International Airport (DPS) with flower garland. Transfer to hotel in Kuta/Seminyak. Relax by the beach.',
        activities: ['Airport traditional welcome', 'Kuta sunset beach walk'],
        meals: 'Dinner Included',
        stay: '4★ Beach Resort, Kuta / Seminyak'
      },
      {
        day: 2,
        title: 'Tanjung Benoa Watersports & Uluwatu Kecak Sunset',
        description: 'Head to Tanjung Benoa beach for thrilling water sports. Evening visit to Uluwatu clifftop temple overlooking the Indian ocean and watch the Kecak dance.',
        activities: ['Parasailing & Banana Boat ride', 'Uluwatu Clifftop Temple', 'Kecak Fire Dance performance'],
        meals: 'Breakfast & Dinner Included',
        stay: '4★ Beach Resort, Kuta / Seminyak'
      },
      {
        day: 3,
        title: 'West Nusa Penida Island Speedboat Day Tour',
        description: 'Speedboat to Nusa Penida island. Visit the world-famous Kelingking T-Rex cliff, Angel’s Billabong infinity pool, and Broken Beach.',
        activities: ['Kelingking T-Rex viewpoint', 'Broken Beach natural arch', 'Angel’s Billabong natural pool & lunch'],
        meals: 'Breakfast & Lunch Included',
        stay: '4★ Beach Resort, Kuta / Seminyak'
      },
      {
        day: 4,
        title: 'Ubud Jungle Swing, Rice Terraces & Coffee Plantation',
        description: 'Transfer to cultural Ubud. Ride the famous Bali Jungle Swing, explore Tegalalang Rice Terraces, and taste Kopi Luwak coffee.',
        activities: ['Aloha Jungle Swing & Bird Nests', 'Tegalalang emerald rice fields', 'Tegenungan Waterfall'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Luxury Private Pool Villa, Ubud / Seminyak'
      },
      {
        day: 5,
        title: 'Tanah Lot Ocean Temple & Floating Breakfast in Villa',
        description: 'Indulge in a romantic floating breakfast in your private pool villa. Afternoon visit to the iconic Tanah Lot ocean temple on rocky waves.',
        activities: ['Floating Breakfast in private pool', 'Tanah Lot Ocean Temple sunset', 'Seminyak cafe evening'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Luxury Private Pool Villa, Ubud / Seminyak'
      },
      {
        day: 6,
        title: 'Bali Departure',
        description: 'Enjoy your last morning in Bali with Indonesian souvenirs shopping before transfer to DPS Airport for flight back to India.',
        activities: ['Local art market shopping', 'Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation (4 Nights 4★ Resort + 1 Night Luxury Private Pool Villa)',
      'Daily Buffet Breakfast (including 1 Floating Breakfast) & 4 Dinners (Indian food available)',
      'Speedboat return tickets and private island tour of Nusa Penida',
      'Ubud Jungle Swing passes & Tanjung Benoa water sports included',
      'Private dedicated AC vehicle throughout Bali'
    ],
    exclusions: [
      'International airfare (India to Bali DPS)',
      'Indonesia Visa on Arrival (approx ₹2,700 / IDR 500,000 at airport)'
    ],
    bestTimeToVisit: 'April to October (Dry & Sunny Season)',
    hotelGrade: 'Luxury 5★',
    pickupDropCity: 'Denpasar Airport (DPS)',
    cabType: 'Dedicated Private AC Tourist Car',
    trendingRank: 14
  },

  // 15. International: Bhutan (5N / 6D - ₹28,500)
  {
    id: 'swh-intl-bhutan-15',
    slug: 'mystical-bhutan-paro-tigers-nest-thimphu-punakha',
    title: 'Land of Thunder Dragon: Paro Tiger’s Nest, Thimphu Buddha Point & Punakha Dzong',
    state: 'Bhutan',
    region: 'International Special',
    destinationsCovered: ['Paro', 'Thimphu', 'Punakha', 'Dochula Pass (108 Chortens)', 'Tiger’s Nest (Taktsang)'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 28500,
    originalPrice: 36000,
    rating: 5.0,
    reviewsCount: 220,
    tag: 'Peaceful Kingdom 🐉',
    featured: true,
    theme: 'International Getaways',
    heroImage: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Experience the serene Himalayan Kingdom of Gross National Happiness. Hike to the miraculous cliff-hanging Tiger’s Nest monastery, cross the panoramic Dochula Pass with 108 stupas, and visit the majestic palace-fortress of Punakha Dzong.',
    highlights: [
      'Iconic hike to Paro Taktsang (Tiger’s Nest Monastery) at 10,240 ft',
      'Visit the majestic 169ft Buddha Dordenma Statue overlooking Thimphu valley',
      'Dochula Pass 108 Memorial Chortens with 360° snow peaks panorama',
      'Punakha Dzong at the confluence of Pho Chhu and Mo Chhu rivers',
      'Bhutan Entry Permit processing & SDF charges guidance included'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Paro / Phuentsholing & Transfer to Thimphu',
        description: 'Arrive at Paro International Airport / Phuentsholing. Drive along Paro and Thimphu rivers to capital Thimphu. Check in to traditional Bhutanese hotel.',
        activities: ['Scenic valley drive', 'Tashichho Dzong evening illumination'],
        meals: 'Dinner Included',
        stay: '3★ Heritage Hotel, Thimphu'
      },
      {
        day: 2,
        title: 'Thimphu City Sightseeing & Buddha Point',
        description: 'Visit the gigantic Buddha Dordenma statue, National Memorial Chorten, Motithang Takin Preserve (National Animal), and traditional paper factory.',
        activities: ['Buddha Dordenma 169ft statue', 'National Memorial Chorten', 'Takin wildlife reserve'],
        meals: 'Breakfast & Dinner Included',
        stay: '3★ Heritage Hotel, Thimphu'
      },
      {
        day: 3,
        title: 'Thimphu to Punakha via Dochula Pass (3100m)',
        description: 'Drive across the scenic Dochula Pass decorated with 108 chortens and prayer flags. Descend into the sub-tropical Punakha valley and visit Punakha Dzong.',
        activities: ['Dochula Pass 108 Chortens photo stop', 'Punakha Dzong fortress palace', 'Punakha Longest Suspension Bridge'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Valley View Resort, Punakha'
      },
      {
        day: 4,
        title: 'Punakha to Paro Valley & National Museum',
        description: 'Drive back to picturesque Paro. Visit the National Museum of Bhutan (Ta Dzong) and Rinpung Dzong fortress.',
        activities: ['Ta Dzong National Museum', 'Paro valley viewpoint', 'Traditional archery observation'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Pine View Resort, Paro'
      },
      {
        day: 5,
        title: 'Hike to the Miraculous Tiger’s Nest (Taktsang Monastery)',
        description: 'Hike 4-5 hours through whispering pine woods to the cliff-hanging Paro Taktsang (Tiger’s Nest at 3,120m) where Guru Rinpoche meditated.',
        activities: ['Tiger’s Nest trail hike', 'Butter lamp lighting in sacred temple', 'Evening traditional hot stone bath (optional)'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Pine View Resort, Paro'
      },
      {
        day: 6,
        title: 'Departure from Paro Airport',
        description: 'Transfer to Paro Airport for your flight back with the peaceful blessings of the Thunder Dragon kingdom.',
        activities: ['Morning breakfast', 'Paro Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation in 3★ Bhutanese Heritage Hotels & Resorts',
      'Daily Breakfast and 5 Delicious Dinners (Indian & Continental food)',
      'All transfers and sightseeing by dedicated private vehicle',
      'Certified Bhutanese English/Hindi speaking tour guide',
      'Bhutan Entry Permit processing assistance'
    ],
    exclusions: [
      'Airfare to/from Paro (PBH)',
      'Bhutan Sustainable Development Fee (SDF for Indian tourists ₹1,200/night paid at permit)'
    ],
    bestTimeToVisit: 'March to May & September to November',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Paro Airport (PBH) / Phuentsholing',
    cabType: 'Dedicated Private Hyundai H1 / Toyota Coaster',
    trendingRank: 15
  },

  // 16. Domestic Classic: Kashmir (5N / 6D - ₹16,999)
  {
    id: 'swh-kashmir-16',
    slug: 'paradise-kashmir-srinagar-gulmarg-pahalgam',
    title: 'Heaven on Earth: Srinagar, Gulmarg & Pahalgam with Houseboat Stay',
    state: 'Jammu & Kashmir',
    region: 'North India',
    destinationsCovered: ['Srinagar', 'Gulmarg', 'Pahalgam', 'Sonmarg', 'Dal Lake'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 16999,
    originalPrice: 22500,
    rating: 4.9,
    reviewsCount: 384,
    tag: 'Bestseller ⭐',
    featured: true,
    theme: 'Honeymoon Special',
    heroImage: 'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1566837945700-30057527ade0?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Experience the crown of India with majestic snow-capped Himalayan peaks, romantic Shikara boat rides on pristine Dal Lake, luxury cedar-wood houseboat stays, and the world’s highest cable car ride (Gulmarg Gondola).',
    highlights: [
      'Complimentary 1-Hour Romantic Sunset Shikara Ride on Dal Lake',
      '1 Night Luxury Handcrafted Houseboat Stay in Nigeen / Dal Lake',
      'Gulmarg Gondola Ride Phase-1 ticket assistance & snow activities',
      'Pahalgam Valley of Shepherds, Betaab Valley & Aru Valley excursion',
      'Dedicated AC Sedan / Innova with verified local chauffeur throughout'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Srinagar & Dal Lake Shikara Cruise',
        description: 'Warm welcome at Srinagar Airport. Transfer to luxury Houseboat. In the evening, enjoy a peaceful Shikara ride crossing floating gardens.',
        activities: ['Airport Meet & Greet', 'Check-in to Luxury Houseboat', 'Sunset Shikara Ride on Dal Lake'],
        meals: 'Dinner Included',
        stay: 'Deluxe Cedar Wood Houseboat, Srinagar'
      },
      {
        day: 2,
        title: 'Srinagar to Gulmarg - Meadow of Flowers & Gondola Ride',
        description: 'Scenic drive to Gulmarg. Take the iconic Gulmarg Gondola ride up to Apharwat Peak for snow activities and panoramic Pir Panjal views.',
        activities: ['Gondola Cable Car Ride', 'Snow Sledging & Skiing', 'Visit St. Mary Church'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Grand Alpine Hotel, Gulmarg'
      },
      {
        day: 3,
        title: 'Gulmarg to Pahalgam - The Valley of Shepherds',
        description: 'Drive to Pahalgam via saffron fields of Pampore. Check in to your riverfront resort alongside the gushing Lidder River.',
        activities: ['Pampore Saffron Fields Visit', 'Lidder Riverwalk & Trout Valley'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Riverside Resort, Pahalgam'
      },
      {
        day: 4,
        title: 'Pahalgam Exploration - Betaab Valley & Aru',
        description: 'Explore Betaab Valley, pristine Aru Valley, and Chandanwari the starting point of Amarnath Yatra.',
        activities: ['Betaab Valley Pine Woods', 'Aru Valley Pony Trail', 'Baisaran Mini Switzerland visit'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Riverside Resort, Pahalgam'
      },
      {
        day: 5,
        title: 'Pahalgam to Srinagar - Mughal Gardens & Bazaars',
        description: 'Drive to Srinagar. Visit Shalimar Bagh, Nishat Bagh, and evening shopping for Kashmiri Pashmina in Lal Chowk.',
        activities: ['Mughal Gardens Tour', 'Pashmina & Walnut Wood Emporiums'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Premium Hotel, Boulevard Road Srinagar'
      },
      {
        day: 6,
        title: 'Departure from Srinagar Airport',
        description: 'Enjoy traditional Kashmiri breakfast with hot Kahwa tea. Transfer to Srinagar Airport with unforgettable memories.',
        activities: ['Morning Kahwa Tea & Breakfast', 'Airport Drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation in 3★/4★ Hotels & Houseboat',
      'Daily Buffet Breakfast and 5 Delicious Dinners',
      'All airport transfers and full sightseeing by dedicated AC Cab',
      '1 Hour Shikara Ride on Dal Lake',
      'Toll taxes, parking fees, fuel charges, and driver allowances'
    ],
    exclusions: [
      'Airfare to/from Srinagar (SXR)',
      'Gondola Phase 2 tickets & pony rides'
    ],
    bestTimeToVisit: 'March to October & Dec to Feb for Snowfall',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Srinagar Airport (SXR)',
    cabType: 'Dedicated Private Sedan / Innova',
    trendingRank: 16
  },

  // 17. Domestic Classic: Kerala (5N / 6D - ₹14,499)
  {
    id: 'swh-kerala-17',
    slug: 'gods-own-country-munnar-thekkady-alleppey',
    title: 'God’s Own Country: Munnar Tea Hills, Thekkady Spice & Alleppey Backwaters',
    state: 'Kerala',
    region: 'South India',
    destinationsCovered: ['Cochin', 'Munnar', 'Thekkady', 'Alleppey', 'Kumarakom'],
    durationDays: 6,
    durationNights: 5,
    pricePerPerson: 14499,
    originalPrice: 19999,
    rating: 4.9,
    reviewsCount: 420,
    tag: 'Top Rated 🌿',
    featured: true,
    theme: 'Family Vacation',
    heroImage: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Discover the tranquil beauty of Kerala. Cruise through emerald palm backwaters in a private houseboat, wander across rolling green tea plantations in Munnar, and explore aromatic spice plantations in Thekkady.',
    highlights: [
      '1 Night Private Luxury Houseboat Cruise with all authentic Kerala meals',
      'Munnar Tea Plantations, Eravikulam National Park (Nilgiri Tahr) & Mattupetty Dam',
      'Thekkady Periyar Wildlife Boat Safari & Spice Plantation Tour',
      'Kathakali Classical Dance & Kalaripayattu Martial Arts live show',
      'Dedicated AC Sedan with verified chauffeur throughout Kerala'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Cochin Arrival & Scenic Drive to Munnar',
        description: 'Warm reception at Cochin Airport / Ernakulam station. Drive past Cheeyappara and Valara waterfalls to Munnar tea hills.',
        activities: ['Cheeyappara & Valara Waterfalls stop', 'Check-in to tea valley resort'],
        meals: 'Dinner Included',
        stay: 'Tea Valley Mountain Resort, Munnar'
      },
      {
        day: 2,
        title: 'Munnar Tea Gardens & Eravikulam National Park',
        description: 'Explore the rolling green tea estates of Munnar. Visit Eravikulam National Park to spot the endangered Nilgiri Tahr and Mattupetty Dam.',
        activities: ['Eravikulam National Park', 'Mattupetty Dam boat ride', 'Tea Museum visit'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Tea Valley Mountain Resort, Munnar'
      },
      {
        day: 3,
        title: 'Munnar to Thekkady (Periyar Wildlife)',
        description: 'Drive past cardamom hills to Thekkady. Enjoy a guided spice plantation walk and evening Kalaripayattu martial arts show.',
        activities: ['Spice Plantation guided tour', 'Periyar Lake wildlife boat cruise', 'Kalaripayattu show'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Green Forest Resort, Thekkady'
      },
      {
        day: 4,
        title: 'Thekkady to Alleppey (Private Houseboat Cruise)',
        description: 'Drive to Alleppey. Board your private luxury houseboat by 12 noon. Cruise past tranquil village lagoons and paddy fields.',
        activities: ['Houseboat backwater cruise', 'Sunset viewing over Vembanad Lake', 'Fresh Karimeen fish / Kerala meals'],
        meals: 'Breakfast, Lunch & Dinner Included',
        stay: 'Private Deluxe AC Houseboat, Alleppey'
      },
      {
        day: 5,
        title: 'Alleppey to Cochin Sightseeing',
        description: 'Disembark after breakfast. Drive to historic Fort Kochi. Visit Chinese Fishing Nets, St. Francis Church, and Jewish Synagogue.',
        activities: ['Chinese Fishing Nets', 'Fort Kochi colonial walk', 'Marine Drive Cochin'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe City Hotel, Cochin'
      },
      {
        day: 6,
        title: 'Departure from Cochin Airport',
        description: 'Morning breakfast. Transfer to Cochin International Airport (COK) with sweet memories.',
        activities: ['Morning breakfast', 'Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '5 Nights accommodation (4 Nights 3★/4★ Resorts + 1 Night Private Houseboat)',
      'Daily Buffet Breakfast and 5 Delicious Dinners',
      'All meals on Houseboat (Lunch, Evening Tea/Snacks, Dinner, Breakfast)',
      'Dedicated AC Sedan / Ertiga for all transfers and sightseeing',
      'Toll taxes, parking fees, and driver allowances'
    ],
    exclusions: [
      'Airfare/Train fare to Cochin (COK)',
      'Entry tickets for monuments, boat safari & cultural shows'
    ],
    bestTimeToVisit: 'September to May',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Cochin Airport / Ernakulam Railway Station',
    cabType: 'Dedicated Private AC Sedan / Ertiga',
    trendingRank: 17
  },

  // 18. Domestic Classic: Goa (3N / 4D - ₹8,999)
  {
    id: 'swh-goa-18',
    slug: 'goa-sun-sand-beaches-watersports-resort',
    title: 'Sun, Sand & Waves: Goa Luxury Beach Resort with Mandovi River Cruise',
    state: 'Goa',
    region: 'West India',
    destinationsCovered: ['North Goa', 'South Goa', 'Baga Beach', 'Calangute', 'Aguada Fort', 'Mandovi River'],
    durationDays: 4,
    durationNights: 3,
    pricePerPerson: 8999,
    originalPrice: 13000,
    rating: 4.8,
    reviewsCount: 390,
    tag: 'Beach Party 🏖️',
    featured: true,
    theme: 'Beach & Water Sports',
    heroImage: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Unwind on the sun-kissed beaches of Goa. Relax at a luxury resort with swimming pool near Baga/Calangute, explore 17th-century Portuguese forts, and enjoy a sunset music cruise on the Mandovi River.',
    highlights: [
      'Stay in a premium 4★ resort with pool near North Goa beaches',
      '1 Hour Sunset DJ Music Cruise on Mandovi River',
      'North Goa Tour: Fort Aguada, Baga Beach, Anjuna & Chapora Fort (Dil Chahta Hai)',
      'South Goa Heritage: Old Goa Basilica of Bom Jesus & Miramar Beach',
      'All airport/station transfers by dedicated AC Cab'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Goa & Beach Leisure',
        description: 'Warm welcome at Goa Airport / Madgaon Station. Transfer to resort. Spend the evening walking along Calangute/Baga beach shacks.',
        activities: ['Airport pickup & check-in', 'Evening beach stroll and cafe music'],
        meals: 'Dinner Included',
        stay: '4★ Palm Resort with Pool, North Goa'
      },
      {
        day: 2,
        title: 'North Goa Forts & Famous Beach Shacks',
        description: 'Explore the 17th-century Fort Aguada, scenic Chapora Fort overlooking Vagator, Anjuna beach, and thrilling water sports at Baga.',
        activities: ['Fort Aguada lighthouse view', 'Chapora Fort photo stop', 'Baga beach water sports'],
        meals: 'Breakfast & Dinner Included',
        stay: '4★ Palm Resort with Pool, North Goa'
      },
      {
        day: 3,
        title: 'South Goa Heritage & Mandovi River Sunset Cruise',
        description: 'Visit the UNESCO Basilica of Bom Jesus, Se Cathedral, Mangueshi Temple, and board the 1-hour sunset cruise on Mandovi River.',
        activities: ['Old Goa heritage churches', 'Miramar beach', 'Mandovi River Sunset DJ Cruise'],
        meals: 'Breakfast & Dinner Included',
        stay: '4★ Palm Resort with Pool, North Goa'
      },
      {
        day: 4,
        title: 'Goa Leisure & Departure',
        description: 'Enjoy a leisurely breakfast and pool swim. Transfer to Goa Airport (GOI/GOX) or Madgaon Station with sunny memories.',
        activities: ['Pool relaxation & souvenir shopping', 'Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '3 Nights accommodation in 4★ Resort with Swimming Pool',
      'Daily Buffet Breakfast and 3 Multi-Cuisine Dinners',
      '1 Hour Mandovi River Sunset Cruise tickets included',
      'North & South Goa sightseeing by dedicated AC Cab',
      'Airport/Railway station pickup and drop'
    ],
    exclusions: [
      'Flight/Train tickets to Goa',
      'Water sports charges at beach'
    ],
    bestTimeToVisit: 'October to May',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Goa Airport (GOI / GOX) / Madgaon Station',
    cabType: 'Dedicated Private AC Sedan',
    trendingRank: 18
  },

  // 19. Udaipur - Royal City of Lakes (3N / 4D - ₹8,000)
  {
    id: 'swh-raj-udaipur-01',
    slug: 'udaipur-city-of-lakes-pichola-palaces-tour',
    title: 'Royal Udaipur: Lake Pichola Sunset Cruise & City Palace Heritage Tour',
    state: 'Rajasthan',
    region: 'West India',
    destinationsCovered: ['Udaipur', 'Lake Pichola', 'City Palace', 'Jag Mandir', 'Saheliyon Ki Bari', 'Fateh Sagar', 'Bagore Ki Haveli'],
    durationDays: 4,
    durationNights: 3,
    pricePerPerson: 8000,
    originalPrice: 12000,
    rating: 4.9,
    reviewsCount: 245,
    tag: 'Bestseller 🏰',
    featured: true,
    theme: 'Royal Heritage & Palaces',
    heroImage: 'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Experience the romantic royal allure of Udaipur, known as the Venice of the East. Sail on the shimmering waters of Lake Pichola with views of the floating Taj Lake Palace, explore the grand City Palace complex, enjoy cultural folk dance at Bagore Ki Haveli, and watch golden sunsets over Fateh Sagar Lake.',
    highlights: [
      'Boat ride on picturesque Lake Pichola with breathtaking views of Jag Mandir & Lake Palace',
      'Guided walkthrough of the majestic City Palace & Crystal Gallery',
      'Evening Dharohar Rajasthani Folk Dance & Puppet Show at Bagore Ki Haveli',
      'Stroll through royal royal fountains and marble kiosks at Saheliyon Ki Bari',
      'Sunset drive around Fateh Sagar Lake & Moti Magri Pratap Memorial'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Udaipur & Evening Lake Pichola Ghats',
        description: 'Pickup from Udaipur Airport / Railway Station. Check in to your heritage hotel. In the evening, explore the vibrant Old City ghats (Ambrai Ghat & Gangaur Ghat) with illuminated palace views.',
        activities: ['Airport/Station pickup & check-in', 'Ambrai Ghat lakeside stroll', 'Rooftop Rajasthani dinner overlooking Lake Pichola'],
        meals: 'Dinner Included',
        stay: 'Heritage Haveli Hotel, Udaipur'
      },
      {
        day: 2,
        title: 'City Palace, Jagdish Temple & Lake Pichola Boat Cruise',
        description: 'Visit the magnificent City Palace built over 400 years by the Mewar dynasty. Admire intricate peacock mosaics and visit 1651 Jagdish Temple. In the afternoon, enjoy a scenic boat cruise on Lake Pichola.',
        activities: ['City Palace guided tour', 'Lake Pichola sunset boat cruise', 'Jag Mandir Island visit', 'Bagore Ki Haveli folk dance show'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Heritage Haveli Hotel, Udaipur'
      },
      {
        day: 3,
        title: 'Saheliyon Ki Bari, Sajjangarh Monsoon Palace & Fateh Sagar',
        description: 'Explore the historic garden of maidens (Saheliyon Ki Bari) with lotus pools and marble elephants. Ascend to the hilltop Sajjangarh Monsoon Palace for a 360° panoramic sunset over the Aravali hills.',
        activities: ['Saheliyon Ki Bari gardens', 'Sajjangarh Monsoon Palace', 'Fateh Sagar Lake promenade & cafe hopping'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Heritage Haveli Hotel, Udaipur'
      },
      {
        day: 4,
        title: 'Shopping in Hathi Pol & Departure',
        description: 'Enjoy a leisurely breakfast. Shop for authentic Pichwai paintings, Bandhani sarees, and silver jewelry in Hathi Pol Bazaar before your departure transfer.',
        activities: ['Hathi Pol & Bada Bazaar shopping', 'Airport/Station transfer with royal memories'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '3 Nights stay in Deluxe Heritage Haveli Hotel with Lake View',
      'Daily Morning Buffet Breakfast and 3 Authentic Dinners',
      'Lake Pichola Scenic Boat Cruise Ticket included',
      'Bagore Ki Haveli Evening Folk Show ticket included',
      'All local sightseeing by Private AC Sedan / SUV with chauffeur',
      'Udaipur Airport or Railway Station pickup and drop'
    ],
    exclusions: [
      'Monument entry fees and camera charges',
      'Personal expenses, laundry, and tips'
    ],
    bestTimeToVisit: 'October to March',
    hotelGrade: 'Heritage Palace / Houseboat',
    pickupDropCity: 'Udaipur Airport (UDR) / Railway Station (UDZ)',
    cabType: 'Dedicated AC Sedan (Dzire / Etios)',
    trendingRank: 1
  },

  // 20. Pushkar - Holy Lake & Desert Camp (2N / 3D - ₹7,000)
  {
    id: 'swh-raj-pushkar-01',
    slug: 'pushkar-holy-lake-brahma-temple-desert-safari',
    title: 'Pushkar Desert Oasis: Sacred Sarovar, Lord Brahma Temple & Thar Camel Safari',
    state: 'Rajasthan',
    region: 'West India',
    destinationsCovered: ['Pushkar', 'Brahma Temple', 'Pushkar Lake Ghats', 'Savitri Temple', 'Thar Desert Camp', 'Ajmer Dargah'],
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 7000,
    originalPrice: 10500,
    rating: 4.8,
    reviewsCount: 189,
    tag: 'Spiritual & Desert 🐪',
    featured: true,
    theme: 'Spiritual & Pilgrimage',
    heroImage: 'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Experience the mystical blend of spirituality and desert charm in Pushkar. Visit the sacred 14th-century Lord Brahma Temple, witness the mesmerizing evening Maha Aarti across the 52 sacred ghats of Pushkar Lake, ride camels across golden Thar desert dunes, and enjoy campfire musical nights.',
    highlights: [
      'Darshan at the sacred Jagatpita Brahma Temple (the most prominent Brahma temple in the world)',
      'Evening Maha Aarti with oil lamps and conch resonance at Varaha Ghat',
      'Sunset Camel Safari & thrilling 4x4 Thar Jeep Dune Bashing in desert',
      'Ropeway cable car ride to Savitri Devi Temple for a panoramic sunset valley view',
      'Optional spiritual visit to Ajmer Sharif Khwaja Garib Nawaz Dargah'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Pushkar & Sacred Lake Aarti',
        description: 'Pickup from Ajmer Railway Station or Jaipur. Drive to Pushkar. Check in to your resort. In the evening, visit Brahma Temple and participate in the uplifting Maha Aarti on the steps of Pushkar Lake.',
        activities: ['Station pickup & check-in', 'Brahma Temple Darshan', 'Pushkar Sarovar sunset Maha Aarti', 'Bazaar walk for pure rose water and handicraft shopping'],
        meals: 'Dinner Included',
        stay: 'Royal Heritage Resort / Desert Camp, Pushkar'
      },
      {
        day: 2,
        title: 'Savitri Hill Cable Car & Thar Desert Camel Safari Night',
        description: 'Take the scenic ropeway to hilltop Savitri Devi Temple with sweeping desert vistas. In the afternoon, head into the Thar desert for a camel safari, sunset photo stops, Rajasthani folk Kalbelia dance, and musical bonfire dinner.',
        activities: ['Savitri temple ropeway ride', 'Thar desert camel ride', 'Kalbelia folk dance & campfire buffet dinner'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Swiss Desert Tent / Heritage Resort, Pushkar'
      },
      {
        day: 3,
        title: 'Ajmer Sharif Dargah Visit & Departure',
        description: 'Morning breakfast. Drive to holy Ajmer to visit the revered Sufi shrine of Khwaja Moinuddin Chishti (Ajmer Dargah) and scenic Ana Sagar Lake before your departure drop at Ajmer or Jaipur.',
        activities: ['Ajmer Sharif Dargah visit', 'Ana Sagar Lake photo stop', 'Station/Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights stay in Heritage Resort / Swiss Desert Camp',
      'Daily Buffet Breakfast and 2 Traditional Rajasthani Dinners',
      'Thar Desert Camel Safari & Sunset Tour included',
      'Evening Cultural Folk Dance and Bonfire Performance',
      'All local transfers & sightseeing by Private AC Cab',
      'Pickup and drop from Ajmer Railway Station / Pushkar'
    ],
    exclusions: [
      'Ropeway cable car tickets and temple VIP passes',
      'Personal expenses, horse riding, and jeep safari extras'
    ],
    bestTimeToVisit: 'October to March',
    hotelGrade: 'Standard 3★',
    pickupDropCity: 'Ajmer Railway Station (AII) / Jaipur Airport',
    cabType: 'Dedicated AC Sedan',
    trendingRank: 2
  },

  // 21. Jaisalmer - The Golden City (3N / 4D - ₹10,000)
  {
    id: 'swh-raj-jaisalmer-01',
    slug: 'jaisalmer-golden-fort-sam-sand-dunes-desert-camp',
    title: 'Golden Jaisalmer: Living Fort Heritage & Sam Sand Dunes Luxury Desert Safari',
    state: 'Rajasthan',
    region: 'West India',
    destinationsCovered: ['Jaisalmer', 'Sonar Qila (Living Fort)', 'Sam Sand Dunes', 'Patwon Ki Haveli', 'Gadisar Lake', 'Kuldhara Ghost Village', 'Tanot Mata'],
    durationDays: 4,
    durationNights: 3,
    pricePerPerson: 10000,
    originalPrice: 15000,
    rating: 4.9,
    reviewsCount: 320,
    tag: 'Desert Royalty ⛺',
    featured: true,
    theme: 'Royal Heritage & Palaces',
    heroImage: 'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Step into a real Arabian Nights fairytale in Jaisalmer! Explore the UNESCO Sonar Qila—one of the world’s rare living forts with 3,000 residents inside. Stay in luxury Swiss tents amidst the golden ripples of Sam Sand Dunes, ride camels across the desert horizon, and listen to soulful Manganiyar desert musicians under a canopy of stars.',
    highlights: [
      'Stay in luxury AC Swiss Tents on the rolling Sam Sand Dunes with private washroom',
      'Thrilling sunset Camel Safari and optional 4x4 Open Jeep Dune Bashing',
      'Grand Rajasthani gala evening: welcome with Aarti & Tika, Kalbelia dance & gala dinner',
      'Walk inside the 860-year-old golden sandstone Jaisalmer Living Fort (Sonar Qila)',
      'Marvel at the intricate stone filigree work of Patwon Ki Haveli & Nathmal Ki Haveli',
      'Sunset boating on the historic rainwater Gadisar Lake with sculpted chhatris',
      'Visit the abandoned 13th-century mysterious haunted village of Kuldhara'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Jaisalmer & Gadisar Lake Sunset',
        description: 'Pickup from Jaisalmer Railway Station or Airport. Check in to your golden sandstone heritage hotel. In the evening, visit Gadisar Lake for a peaceful boat ride and laser light fountain show.',
        activities: ['Station/Airport pickup', 'Hotel check-in', 'Gadisar Lake sunset & chhatris photography', 'Jaisalmer old market stroll'],
        meals: 'Dinner Included',
        stay: 'Heritage Golden Sandstone Hotel, Jaisalmer'
      },
      {
        day: 2,
        title: 'Sonar Qila Living Fort, Havelis & Thar Desert Sam Dunes Camp',
        description: 'Explore the golden fort containing royal palaces and Jain temples. Visit Patwon Ki Haveli and Salim Singh Ki Haveli. Post lunch, drive past Kuldhara haunted village to Sam Sand Dunes. Enjoy traditional welcome with Dhol & Tilak, sunset camel safari, and musical campfire dinner.',
        activities: ['Jaisalmer Fort guided tour', 'Patwon Ki Haveli visit', 'Kuldhara mystery stop', 'Dunes Camel Safari', 'Gala folk dance & DJ night in desert'],
        meals: 'Breakfast & Gala Dinner Included',
        stay: 'Royal Luxury Swiss Tent, Sam Sand Dunes'
      },
      {
        day: 3,
        title: 'Desert Sunrise, Jeep Safari & Optional Indo-Pak Border (Tanot Mata)',
        description: 'Wake up to a golden desert sunrise over sand dunes. Enjoy a camel safari or jeep dune bashing. Drive to the legendary Tanot Mata Temple (unharmed during 1965 & 1971 wars) and Longewala War Memorial border post.',
        activities: ['Dune sunrise photography', 'Jeep dune bashing thrill', 'Tanot Mata Temple & Longewala War Museum visit', 'Stargazing in clear desert sky'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Royal Luxury Swiss Tent, Sam Sand Dunes'
      },
      {
        day: 4,
        title: 'Bada Bagh Royal Cenotaphs & Departure',
        description: 'Morning breakfast in desert camp. Drive back toward city and visit the royal cenotaphs of Maharajas at Bada Bagh before your departure transfer.',
        activities: ['Bada Bagh photo stop', 'Souvenir shopping for camel leather & mirrored fabrics', 'Station/Airport drop'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights in Golden Heritage Hotel + 1 Night in Luxury Swiss Camp at Sam Dunes',
      'Daily Morning Breakfast, 3 Royal Dinners, including Desert Gala Buffet',
      'Camel Safari on Sam Sand Dunes with traditional Rajasthani welcome',
      'Live Kalbelia & Fire Dance cultural performance with Evening Tea & Snacks',
      'Sightseeing of Sonar Qila, Patwon Haveli, Gadisar Lake & Kuldhara',
      'Private dedicated AC Cab for the entire tour and desert transfers'
    ],
    exclusions: [
      'Jeep Dune Bashing (can be added directly at ₹800/person)',
      'Monument entry tickets and guide fees'
    ],
    bestTimeToVisit: 'October to March',
    hotelGrade: 'Heritage Palace / Houseboat',
    pickupDropCity: 'Jaisalmer Railway Station (JSM) / Jaisalmer Airport (JSA)',
    cabType: 'Dedicated Private AC Sedan / SUV',
    trendingRank: 3
  },

  // 22. Jaipur - The Royal Pink City (2N / 3D - ₹7,500)
  {
    id: 'swh-raj-jaipur-01',
    slug: 'jaipur-royal-pink-city-amer-fort-hawa-mahal',
    title: 'Royal Pink City Jaipur: Amer Fort, Hawa Mahal & City Palace Heritage Tour',
    state: 'Rajasthan',
    region: 'West India',
    destinationsCovered: ['Jaipur', 'Amer Fort', 'Hawa Mahal', 'City Palace', 'Jantar Mantar', 'Jal Mahal', 'Nahargarh Fort', 'Chokhi Dhani'],
    durationDays: 3,
    durationNights: 2,
    pricePerPerson: 7500,
    originalPrice: 11000,
    rating: 4.9,
    reviewsCount: 380,
    tag: 'Bestseller 👑',
    featured: true,
    theme: 'Royal Heritage & Palaces',
    heroImage: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
    gallery: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1609766857041-ed402ea8069a?auto=format&fit=crop&w=1200&q=85',
      'https://images.unsplash.com/photo-1577717903315-1691ae25ab3f?auto=format&fit=crop&w=1200&q=85'
    ],
    overview: 'Discover the regal grandeur of Rajasthan’s capital city. Marvel at the 953 honeycomb windows of Hawa Mahal, ascend the hilltop Amer Fort, marvel at the world’s largest stone sundial at UNESCO Jantar Mantar, photograph the floating water palace of Jal Mahal, and feast on authentic Dal Baati Churma.',
    highlights: [
      'Hilltop Amer Fort excursion: Sheesh Mahal (Mirror Palace) & grand courtyards',
      'Photo stop at the iconic pink honeycomb facade of Hawa Mahal (Palace of Winds)',
      'Guided tour of Jaipur City Palace royal courtyards and Maharaja museum',
      'UNESCO World Heritage stone astronomical observatory at Jantar Mantar',
      'Scenic photography at the floating Jal Mahal (Water Palace) in Man Sagar Lake',
      'Sunset panoramic view of Jaipur Pink City from the ramparts of Nahargarh Fort',
      'Evening cultural village experience and traditional Rajasthani dinner at Chokhi Dhani'
    ],
    dayItinerary: [
      {
        day: 1,
        title: 'Arrival in Jaipur, Birla Temple & Chokhi Dhani Cultural Night',
        description: 'Pickup from Jaipur Airport or Railway Station. Check in to your hotel. In the afternoon, visit the white marble Birla Mandir and Albert Hall Museum. In the evening, visit the ethnic village resort Chokhi Dhani for folk dance, puppet shows, camel rides, and grand Rajasthani thali dinner.',
        activities: ['Airport/Station pickup & check-in', 'Albert Hall & Birla Mandir visit', 'Chokhi Dhani village dining & cultural performances'],
        meals: 'Dinner Included',
        stay: 'Deluxe Heritage Hotel, Jaipur'
      },
      {
        day: 2,
        title: 'Amer Fort, Jal Mahal, City Palace, Jantar Mantar & Hawa Mahal',
        description: 'Full day royal heritage expedition. Ascend the majestic Amer Fort overlooking Maota Lake. See the dazzling Sheesh Mahal. Stop at the floating Jal Mahal. Continue to the City Palace complex and Jantar Mantar astronomical observatory. Finish with photography at Hawa Mahal.',
        activities: ['Amer Fort exploration with Sheesh Mahal', 'Jal Mahal photo stop', 'City Palace & museum tour', 'Jantar Mantar observatory', 'Hawa Mahal street view', 'Sunset from Nahargarh Fort'],
        meals: 'Breakfast & Dinner Included',
        stay: 'Deluxe Heritage Hotel, Jaipur'
      },
      {
        day: 3,
        title: 'Johari Bazaar Handicrafts & Departure',
        description: 'Enjoy a rich buffet breakfast. Explore the colorful bazaars of Jaipur: Johari Bazaar for gemstones/jewelry and Bapu Bazaar for Mojaris and Jaipuri Razai quilts before your airport or railway station drop.',
        activities: ['Johari & Bapu Bazaar shopping', 'LMB sweet shop Ghevar tasting', 'Airport/Station drop with royal memories'],
        meals: 'Breakfast Included',
        stay: 'Tour Concludes'
      }
    ],
    inclusions: [
      '2 Nights accommodation in 4★ Heritage Hotel with Swimming Pool',
      'Daily Buffet Breakfast and 2 Multi-Cuisine Dinners',
      'Full Day Amer Fort, City Palace, Hawa Mahal & Jal Mahal sightseeing by Private AC Cab',
      'Chokhi Dhani cultural village entry and traditional dinner ticket included',
      'Pickup and drop from Jaipur Airport (JAI) or Railway Station (JP)'
    ],
    exclusions: [
      'Monument entry fees and camera charges',
      'Personal expenses and shopping'
    ],
    bestTimeToVisit: 'September to April',
    hotelGrade: 'Deluxe 4★',
    pickupDropCity: 'Jaipur Airport (JAI) / Jaipur Junction (JP)',
    cabType: 'Dedicated Private AC Sedan (Dzire / Etios)',
    trendingRank: 4
  }
];
