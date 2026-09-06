import { ServiceInfo, ReviewItem, CouponItem, LocationInfo } from '../types';

export const ASSETS = {
  logo: '/image.png',
  heroBg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwkgglHw6AMiY4E9tUKeSAgikbbvauohseuZhlsm-z8VCVVOCYPrGjKxbx7ZnL83BgpkBPeN3VroIgOXDMxKJz55oKsMelI60cUJB5v3yboU1ZfhAJhMKe4N8Gws9ccVgSzhc6x7XTkCP9JCCevArMSrNTn4R3iBizC0DozU0GT-b3ncAW6OdUJac_bFjhHvOCZ3DaPgqxjOZNGkcj3L0wqKEMk4sNy3VvOmzMFvYcG1wbiM6FFfQ-WiLB_X8u9MQX',
  vanCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAinPu0KhV09iG2fawoIkF4ZOud45NIx3cTV0s2SeMxme3BHgbUJfM01NzxzgvAuPERSn_6Hq0Q_HRDr2Ll1-7pp_NuIb5kEXl-JEE2dBVq30RKH_mgTbwQe8AteOAsH7OH9q88OB_Chuxjsn8HTW761bYHvXd0-mSByjYiLFSNlK-VSfir-Q0EcHAmtKLkCvUdPz72ytMfwfFT7PFz_QAuUdEPHxxzdxB2kwPiYC2eZ1I0R8irJXY',
  teacherCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuADT31OSo6mngzofg-dWdnJKRJk6P0lep-EzPjivDKFzBDM6lT8KH-LCKYUIGAWdv8S799_FJu6Ffeh9v1MAb5ZRFTM-fbM-vAR-Bw84NUCTnOmE_AhgF_NaY2EDbfQQRAh9uLdw7fvuqcG0XBOfbdcqQ5al4Y3E8O-8mWMr32e1J3KMYfY_jVtMbSUCCFOsNleDZJhKAh3yLUKOiMYqoNkNbY0bvofBD4g3XBpx3AYd9RXSt1HgRs',
  seniorCard: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClOzkAC8PKScQ4J3PvXi_YUA3ya0yodzm-Dq1gFDl3AtkSEufUBlwVkuE8_39r5sy-A-S85FbfsLqZAy2A6DobG1w5DrrVynMKLHaxwyLJLJN_gjdI4jbiF2MZO1_zeuGuh0ifvowH_IgpGimZBKaqqdUaTpN9uP4fbLdtI2fotMkg8m2SKhyN75uGdLk6VlWTwGbnLb7Q09ykve9uGXqauRKw7T-SIiCWU7BhFJ0wcmpQ8-MHZq4',
  technicians: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJwpje9Hh3cmP98f4rs1y1zz5G15XGznf9karHhjhZ9N03Sf0fCV3r6b8J2VQjAE3PFqNs_5Y-NNLSC9pBOnyltAWjsyhJIsGo-xAAUUKeQyyrXxI6L1WJ8qpWA8axy3YlNzT2rM1aKjJAy5GfHtqcm95kzXzkFQ-0Lqc0IPQjw0fexrje_8N2_EntgxskNH4b_0UOp7uFBiGvX6gH7LHMLezhrMMVjn5NGFLRhFajwMF7G-UXflI',
  footerLogo: '/image.png'
};

export const LOCATIONS: Record<'Phoenix' | 'Tucson', LocationInfo> = {
  Phoenix: {
    city: 'Phoenix',
    phone: '4805817899',
    phoneDisplay: '(480) 581-7899',
    address: 'Phoenix Valley-wide, AZ',
    coverage: 'Phoenix, Scottsdale, Mesa, Chandler, Gilbert, Glendale, Tempe, Peoria'
  },
  Tucson: {
    city: 'Tucson',
    phone: '5207447899',
    phoneDisplay: '(520) 744-7899',
    address: 'Greater Tucson Metro, AZ',
    coverage: 'Tucson, Oro Valley, Marana, Catalina Foothills, Sahuarita, Vail'
  }
};

export const SERVICES: ServiceInfo[] = [
  {
    id: 'cooling',
    title: 'Cooling',
    iconName: 'Snowflake',
    shortDesc: 'AC repair, maintenance tune-ups, heat pump servicing & complete system replacement.',
    fullDesc: 'When the Arizona summer hits triple digits, your cooling system is an absolute necessity. Our Trust Certified® technicians diagnose and fix all AC makes and models with fully stocked trucks for same-day repairs.',
    bulletPoints: [
      '24/7 Emergency AC repair with zero overtime charges',
      '40-point precision tune-ups for maximum efficiency',
      'Authorized dealer for Goodman, Lennox, Carrier, and Trane',
      '10-year parts & labor warranty options available'
    ],
    commonIssues: [
      'AC blowing warm or room-temperature air',
      'Frozen coils or ice buildup on refrigerant lines',
      'Blower fan running constantly with no cooling',
      'Unusual screeching, grinding, or banging sounds',
      'Water leaking from indoor handler or condensate drain'
    ],
    startingPrice: '$89 Diagnostics'
  },
  {
    id: 'heating',
    title: 'Heating',
    iconName: 'Flame',
    shortDesc: 'Furnace repairs, heat pump diagnostics, safety inspections & eco heating replacements.',
    fullDesc: 'Keep your desert nights warm and cozy with our comprehensive furnace and heat pump services. We ensure your heating operates safely, cleanly, and efficiently throughout the chilly winter season.',
    bulletPoints: [
      'Gas furnace heat exchanger crack & carbon monoxide testing',
      'Heat pump defrost cycle and auxiliary heat diagnostics',
      'Smart programmable thermostat integration',
      'Energy-efficient heating system retrofits'
    ],
    commonIssues: [
      'Furnace blowing cold air during startup',
      'Pilot light won’t stay lit or burner won’t ignite',
      'Frequent cycling on and off (short cycling)',
      'Yellow burner flame instead of clean blue flame',
      'Burning or sulfur smells when the unit kicks on'
    ],
    startingPrice: '$79 Tune-Up'
  },
  {
    id: 'drain-sewer',
    title: 'Drain & Sewer',
    iconName: 'Waves',
    shortDesc: 'Clogged drains cleared, hydro-jetting, HD camera inspections & trenchless sewer repair.',
    fullDesc: 'Sluggish drains or main line backups can ruin your day. We employ state-of-the-art fiber optic cameras and high-pressure water jetting to clear blockages fast and restore complete drainage.',
    bulletPoints: [
      'Clear any drain guarantee with HD camera video inspection',
      'Hydro-jetting to remove stubborn tree roots and grease build-up',
      'Trenchless pipe lining (CIPP) saving your landscaping & driveway',
      'Sewer line smoke testing and odor diagnosis'
    ],
    commonIssues: [
      'Multiple slow drains throughout the house simultaneously',
      'Gurgling sounds from toilets when sink or shower is run',
      'Sewage smell emanating from floor drains or yard',
      'Water backing up into tub when running the washing machine',
      'Fruit flies or drain gnats accumulating around sink drains'
    ],
    startingPrice: '$99 Drain Clear'
  },
  {
    id: 'plumbing',
    title: 'Plumbing',
    iconName: 'Wrench',
    shortDesc: 'Water heaters, slab leak detection, fixtures, repiping & 24/7 leak emergency service.',
    fullDesc: 'From dripping faucets to catastrophic burst pipes, our master plumbers deliver rapid, code-compliant solutions. We protect your home against water damage with precision leak detection and durable repairs.',
    bulletPoints: [
      'Tankless and conventional water heater installations & repairs',
      'Non-invasive electronic slab leak detection',
      'Whole-home copper and PEX repiping with lifetime guarantee',
      'Garbage disposal repairs and high-efficiency toilet installs'
    ],
    commonIssues: [
      'No hot water or water heater tank leaking from the base',
      'Sudden drop in home water pressure across all fixtures',
      'Damp carpet, warm spots on tile floors, or spinning water meter',
      'Running toilets that waste hundreds of gallons per day',
      'Burst pipes from sudden pressure spikes or aging fittings'
    ],
    startingPrice: '$49 Service Call'
  },
  {
    id: 'water-quality',
    title: 'Water Quality',
    iconName: 'Droplet',
    shortDesc: 'Whole-home water softeners, reverse osmosis drinking systems & water purification.',
    fullDesc: 'Arizona tap water is notoriously hard and mineral-heavy, causing scale buildup that destroys pipes and appliances. Our custom filtration systems protect your plumbing and provide crisp, bottled-quality water from every tap.',
    bulletPoints: [
      'High-efficiency salt and salt-free water softener systems',
      'Multi-stage Reverse Osmosis (RO) drinking water purifiers',
      'Whole-house carbon filtration for chlorine & sediment removal',
      'Free in-home water hardness & purity testing'
    ],
    commonIssues: [
      'White chalky scale on shower heads, faucets, and glassware',
      'Dry, itchy skin and brittle hair after showering',
      'Premature failure of water heaters and dishwashers',
      'Chemical chlorine odor or metallic taste in tap water',
      'Salt bridge or hard crust in softener brine tank'
    ],
    startingPrice: 'Free Water Test'
  },
  {
    id: 'insulation',
    title: 'Insulation',
    iconName: 'Home',
    shortDesc: 'Attic blow-in fiberglass, radiant barriers, air duct sealing & home energy efficiency.',
    fullDesc: 'Over 30% of your conditioned air can escape through poorly insulated attics in the Phoenix heat. Upgrading your home envelope drastically reduces summer electric bills and extends the lifespan of your HVAC unit.',
    bulletPoints: [
      'High R-Value blown-in fiberglass & cellulose attic insulation',
      'Radiant heat barriers reflecting up to 97% of solar attic heat',
      'Aeroseal duct sealing to eliminate hidden air leaks in walls',
      'APS & SRP utility rebate assistance up to $1,000+'
    ],
    commonIssues: [
      'Rooms on the top floor noticeably hotter than the rest of home',
      'Air conditioning constantly running without reaching setpoint',
      'Sky-high summer electric bills exceeding neighboring houses',
      'Drafts or temperature swings between different rooms',
      'Dust blowing directly through AC vents from the attic'
    ],
    startingPrice: 'Free Attic Audit'
  },
  {
    id: 'electrical',
    title: 'Electrical',
    iconName: 'Zap',
    shortDesc: 'Electrical panel upgrades, EV chargers, ceiling fans, wiring & whole-home surge protection.',
    fullDesc: 'Our licensed electricians safely handle everything from breaker panel upgrades to smart lighting and dedicated EV car charger circuits. We ensure your home electrical system adheres to National Electrical Code (NEC).',
    bulletPoints: [
      '200-amp main electrical panel upgrades & subpanel installations',
      'Level 2 EV fast charger installations (Tesla, ChargePoint, etc.)',
      'Whole-home surge protection guarding expensive smart appliances',
      'Indoor/outdoor recessed LED lighting and heavy-duty ceiling fan installs'
    ],
    commonIssues: [
      'Circuit breakers frequently tripping when running appliances',
      'Flickering or dimming lights when the AC compressor kicks in',
      'Outdated fuse box or obsolete Zinsco / Federal Pacific panels',
      'Outlets warm to the touch or buzzing switches',
      'Need for 240V dedicated circuits for new hot tubs or EVs'
    ],
    startingPrice: '$89 Inspection'
  },
  {
    id: 'garage-renovation',
    title: 'Garage Renovation',
    iconName: 'Warehouse',
    shortDesc: 'Epoxy floor coatings, custom steel cabinetry, overhead storage & garage mini-split AC.',
    fullDesc: 'Transform your garage into a clean, air-conditioned extension of your living space. We provide industrial-grade polyaspartic epoxy flooring, heavy-duty modular cabinets, and dedicated ductless mini-split climate control.',
    bulletPoints: [
      'Commercial-grade polyaspartic floor coatings resistant to hot tire pickup',
      'Heavy-gauge welded steel cabinets and slatwall tool organizers',
      'Overhead motorized storage racks rated up to 1,000 lbs',
      'Ductless mini-split installation for year-round 72°F garage comfort'
    ],
    commonIssues: [
      'Stained, cracked concrete floors with peeling DIY paint',
      'Extreme garage heat making workspace unusable in summer',
      'Clutter preventing cars from parking inside safely',
      'Lack of heavy-duty storage for tools, sports gear, and holiday bins',
      'Poor lighting and lack of grounded workbench outlets'
    ],
    startingPrice: 'Free 3D Design'
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rene K.',
    serviceCategory: 'plumbing',
    rating: 5,
    text: '"Dave at Parker and Sons came to my rescue. I woke up with a rainstorm in my living room after a pipe burst upstairs. He was friendly, prompt, and made me feel so much calmer by assuring me everything would be alright. He was absolutely correct. Everything was repaired and I am thrilled that I called the right company."',
    date: '3 days ago',
    source: 'Verified Google Review',
    location: 'Scottsdale, AZ'
  },
  {
    id: 'rev-2',
    author: 'Sabrina G.',
    serviceCategory: 'cooling',
    rating: 5,
    text: '"Parker and Sons is a life savor. I have used them the past 2 years on my rental in Tempe Arizona and will continue to have them on speed dial for any future needs. Interactions with customer service as well as the techs on site have always been easy and helpful."',
    date: '1 week ago',
    source: 'Verified Google Review',
    location: 'Tempe, AZ'
  },
  {
    id: 'rev-3',
    author: 'Erin S.',
    serviceCategory: 'cooling',
    rating: 5,
    text: '"Parker & Sons is amazing. When our AC went out, my first call was to our home warranty company, but they couldn\'t get anyone out to see us for 5 days, which is an outrageous amount of time to be without AC in Arizona! Luckily, my next call was to Parker & Sons. They were able to come out SAME DAY and get our AC back up and running. We are very happy."',
    date: '2 weeks ago',
    source: 'Verified Google Review',
    location: 'Phoenix, AZ'
  },
  {
    id: 'rev-4',
    author: 'Marcus Vance',
    serviceCategory: 'electrical',
    rating: 5,
    text: '"Upgraded our 1970s main electrical panel to 200A so we could charge our new EV. The electrician, Travis, explained the permits, arrived sharp at 8 AM, and had APS coordinate the power cutover without a hitch. Outstanding professionalism!"',
    date: '3 weeks ago',
    source: 'Verified Google Review',
    location: 'Gilbert, AZ'
  },
  {
    id: 'rev-5',
    author: 'Elena Rostova',
    serviceCategory: 'drain-sewer',
    rating: 5,
    text: '"Had a stubborn kitchen drain that backed up during a Sunday family dinner. Parker & Sons didn\'t charge extra for Sunday night service, used their video camera to find the root blockage, and had it cleared clean in under an hour. True lifesavers!"',
    date: '1 month ago',
    source: 'Verified Google Review',
    location: 'Mesa, AZ'
  },
  {
    id: 'rev-6',
    author: 'Bradford H.',
    serviceCategory: 'water-quality',
    rating: 5,
    text: '"Installed the whole-house water softening and RO system under the sink. We noticed the difference on the very first day. No more white mineral film on dishes or stiff laundry. Worth every single penny."',
    date: '1 month ago',
    source: 'Verified Google Review',
    location: 'Chandler, AZ'
  }
];

export const COUPONS: CouponItem[] = [
  {
    id: 'c-1',
    code: 'SAVE50REPAIR',
    title: '$50 Off Any Repair',
    discount: '$50 OFF',
    description: 'Valid towards any cooling, heating, plumbing, or electrical repair service.',
    terms: 'Cannot be combined with other offers or diagnostics. One per household. Present to technician at time of service.',
    expires: 'Valid through end of month'
  },
  {
    id: 'c-2',
    code: 'AC99TUNE',
    title: '$99 Precision A/C Tune-Up',
    discount: '$99 ONLY',
    description: 'Complete 40-point cooling system inspection, chemical coil rinse, and safety test.',
    terms: 'Per residential system. Ensures optimal SEER efficiency and prevents summer breakdowns.',
    serviceId: 'cooling',
    expires: 'Limited time seasonal special'
  },
  {
    id: 'c-3',
    code: 'DRAIN99CAM',
    title: '$99 Clogged Drain Clearing',
    discount: '$99 CLEAR',
    description: 'We clear any standard residential drain stoppage and provide a FREE camera inspection.',
    terms: 'Must have accessible ground level cleanout. Residential only.',
    serviceId: 'drain-sewer',
    expires: 'Expires soon'
  },
  {
    id: 'c-4',
    code: 'HEATER250',
    title: '$250 Off Water Heater Installation',
    discount: '$250 OFF',
    description: 'Save on replacement of standard tank or high-efficiency tankless water heaters.',
    terms: 'Applies to complete unit installation including haul-away of old equipment.',
    serviceId: 'plumbing',
    expires: 'Valid through this season'
  },
  {
    id: 'c-5',
    code: 'HVAC500',
    title: '$500 Off New AC Replacement',
    discount: '$500 OFF',
    description: 'Save big when upgrading to a high-efficiency Goodman or Carrier HVAC system.',
    terms: 'Includes 10-year parts & labor warranty, thermostat, and free estimate.',
    serviceId: 'cooling',
    expires: 'Exclusive web offer'
  },
  {
    id: 'c-6',
    code: 'FREE2ND',
    title: 'Free 2nd Opinion on Major Repairs',
    discount: '100% FREE',
    description: 'Got an expensive quote from another company? Let our Trust Certified® pros review it.',
    terms: 'Written competitor estimate required. No obligation to purchase.',
    expires: 'Always available'
  }
];

export const FAQS = [
  {
    q: 'Do you charge extra for nights, weekends, or holidays?',
    a: 'Never! Parker & Sons operates 24/7/365 with strictly NO extra charges for nights, weekends, or major holidays. You get the same fair, upfront pricing whenever an emergency happens.'
  },
  {
    q: 'What does "Trust Certified®" mean?',
    a: 'Every Parker & Sons technician undergoes rigorous background checks, randomized drug testing, extensive ongoing technical training, and carries full state licensing, bonding, and insurance. We only send professionals we would trust in our own homes.'
  },
  {
    q: 'How fast can a technician arrive at my home?',
    a: 'For emergency heating, AC, and plumbing calls, our average response time is under 60 minutes across the Phoenix Valley and Tucson metro areas.'
  },
  {
    q: 'What warranties come with your repairs and installations?',
    a: 'We offer industry-leading guarantees, including 100% Satisfaction Guarantees, up to 10-year parts & labor coverage on new systems, and explicit warranties on every repair.'
  }
];
