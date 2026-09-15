import { VideoScene, TechFeature, PricingTier, Testimonial, FaqItem, ResonanceMode } from '../types';
import heroDeviceImg from '../assets/images/aurawave_hero_device_1789076620144.jpg';
import cadBlueprintImg from '../assets/images/aurawave_blueprint_cad_1789076684215.jpg';
import sparkChamberImg from '../assets/images/aurawave_spark_chamber_1789076632679.jpg';
import cellularRegenImg from '../assets/images/aurawave_cellular_regen_1789076648984.jpg';

export const VIDEO_SCENES: VideoScene[] = [
  {
    id: 1,
    title: "Surgical-Grade Elemental Electrodes",
    subtitle: "99.95% Ultra-Pure Zinc (Ø10mm) in SK10 Aluminum Guide Rails",
    duration: 2.5,
    startTime: 0,
    endTime: 2.5,
    image: heroDeviceImg,
    altImage: cadBlueprintImg,
    techHighlight: "10mm Zinc Rods • SK10 Clamps • 16mm Pitch Symmetry",
    specs: ["99.95% Trace Mineral Zinc", "Conductive Sanded Contact Beds", "M6 Steel Structural Rigidity"],
    color: "#38bdf8"
  },
  {
    id: 2,
    title: "0.45mm Micro-Calibrated Quantum Spark Gap",
    subtitle: "High-Frequency Ionized Plasma Arc Discharge with Sub-Nanosecond Rise Time",
    duration: 2.5,
    startTime: 2.5,
    endTime: 5.0,
    image: sparkChamberImg,
    altImage: cadBlueprintImg,
    techHighlight: "0.40 - 0.50 mm Feeler-Gauge Calibrated Tolerance",
    specs: ["Sub-Nanosecond Avalanche Breakdown", "Multi-Octave Harmonic Spectrum", "Ozone & Negative Ion Cascades"],
    color: "#a855f7"
  },
  {
    id: 3,
    title: "Dual Ionic Quenching & Heavy T2 Copper Bus",
    subtitle: "Twin 40mm Hydraulic Fans & 3x15mm Electrolytic Copper Flat Bars",
    duration: 2.5,
    startTime: 5.0,
    endTime: 7.5,
    image: sparkChamberImg,
    altImage: heroDeviceImg,
    techHighlight: "Dual 40mm High-Speed Brushless Fans • 12V Hydraulic Bearing",
    specs: ["Instant Plasma Arc Quenching", "Thermal Runaway Prevention", "Zero Voltage-Sag Current Paths"],
    color: "#f59e0b"
  },
  {
    id: 4,
    title: "Quantum Cellular Regeneration Inundation",
    subtitle: "Cellular Resonance, Mitochondrial ATP Stimulation & Bio-Field Rebalancing",
    duration: 2.5,
    startTime: 7.5,
    endTime: 10.0,
    image: cellularRegenImg,
    altImage: heroDeviceImg,
    techHighlight: "Full-Spectrum 100 kHz - 3 GHz Bio-Resonance Cascade",
    specs: ["+300% Mitochondrial Membrane Potential", "DNA Coherence Stimulation", "Accelerated Tissue Restitution"],
    color: "#10b981"
  }
];

export const TECH_FEATURES: TechFeature[] = [
  {
    id: "pure-zinc-electrodes",
    title: "99.95% Pure Zinc Bio-Electrodes",
    componentName: "Ultra-Pure Elemental Zn Rods (Ø10mm x 50mm)",
    pdfReference: "Page 1 & 6: 99.95% pure Zinc rods (Diameter 10mm cut to 5cm pairs)",
    benefit: "Delivers biocompatible trace-mineral ionic micro-vapors and ultra-clean electrical discharges free of toxic heavy-metal impurities.",
    mechanism: "High-voltage breakdown across elemental zinc generates micro-particulate zinc ionization, essential for activating over 300 metabolic enzymes and skin/cellular collagen synthesis.",
    specs: [
      { label: "Purity Grade", value: "99.95% Elemental Zinc" },
      { label: "Rod Diameter", value: "10.0 mm Heavy Gauge" },
      { label: "Effective Length", value: "50 mm Symmetrical Halves" },
      { label: "Contact Interface", value: "Un-anodized Sanded Beds" }
    ],
    tag: "Core Emission Source",
    iconName: "Zap"
  },
  {
    id: "micro-calibrated-gap",
    title: "0.40 - 0.50 mm Feeler-Tuned Spark Gap",
    componentName: "Precision Feeler Gauge Calibrated Micro-Arc Zone",
    pdfReference: "Page 8 & 14-15: Feeler gauge calibration (0.4 to 0.5 mm spark gap tolerance)",
    benefit: "Generates the exact avalanche voltage threshold required to produce steep, sub-nanosecond pulse wavefronts that penetrate dense biological tissue.",
    mechanism: "When the air dielectric breaks down across the precise 0.45 mm boundary, a cascade of high-frequency multi-octave harmonic oscillations is produced without burning down the electrodes prematurely.",
    specs: [
      { label: "Target Gap", value: "0.40 - 0.50 mm Exact" },
      { label: "Calibration Tool", value: "Included Precision Feeler Gauge" },
      { label: "Rise Time", value: "< 1.2 Nanoseconds" },
      { label: "Harmonic Range", value: "Audio to Multi-Gigahertz" }
    ],
    tag: "Acoustic & Plasma Precision",
    iconName: "Gauge"
  },
  {
    id: "sk10-aluminum-clamps",
    title: "SK10 Aluminum Linear Motion Guides",
    componentName: "CNC-Milled SK10 Rail Clamps with M6 Threaded Locks",
    pdfReference: "Page 1, 4 & 5: SK10 Aluminum Linear Motion Rail Clamp Guides tapped with M6 bottom threads",
    benefit: "Ensures zero millimeter deviation during thermal expansion, preserving consistent harmonic frequency output across hours of clinical sessions.",
    mechanism: "Industrial CNC rail clamps provide 360-degree axial grip on the 10mm rods. Tapped M6 fastener bolts draw the electrodes tight against the bus bars while dissipating heat through high-mass aluminum blocks.",
    specs: [
      { label: "Clamp Type", value: "SK10 Linear Motion Mount" },
      { label: "Spacing Pitch", value: "16 mm Symmetrical Center-to-Outer" },
      { label: "Mounting Fastener", value: "M6 Hexagon Cylinder Bolts" },
      { label: "Thermal Mass", value: "High-Conductivity Billet Aluminum" }
    ],
    tag: "Structural Integrity",
    iconName: "Shield"
  },
  {
    id: "t2-copper-busbars",
    title: "T2 Heavy Electrolytic Copper Bus Bars",
    componentName: "Solid Cu Flat Bar (3mm thickness x 15mm width x 100mm)",
    pdfReference: "Page 1, 6 & 7: Copper Plate T2 (3mm x 15mm x 250mm Cu Metal Flat Bar cut to 10cm)",
    benefit: "Eliminates inductive and resistive losses, transferring 100% of stored capacitor energy into the spark discharge without overheating.",
    mechanism: "High-purity T2 copper provides unmatched conductivity (58 MS/m) and massive transient current capacity, creating ultra-crisp, undamped plasma pulse discharge signatures.",
    specs: [
      { label: "Material", value: "T2 Electrolytic Pure Copper" },
      { label: "Dimensions", value: "3 mm × 15 mm × 100 mm" },
      { label: "Drill Spec", value: "6.5 mm - 7.0 mm Center-Punched" },
      { label: "Torque Mount", value: "M6 Hexagon Lock Nuts with Washers" }
    ],
    tag: "Ultra-Low Impedance",
    iconName: "Layers"
  },
  {
    id: "dual-ionic-fans",
    title: "Dual 40mm Hydraulic Forced-Air Quenching",
    componentName: "WINSINN 4010 12V Hydraulic Bearing High-Speed Fans",
    pdfReference: "Page 1, 8, 9 & 10: 40mm Color LED Brushless 12V Fans with Chromed Wire Fan Guards",
    benefit: "Rapidly de-ionizes the air gap between pulse discharges, preventing continuous arc latch-up and dispersing therapeutic negative ions and ozone.",
    mechanism: "Dual opposed-axis airflow pushes 7.8 CFM through the smoked acrylic enclosure. Active ionic quenching enables repetition rates above 800 sparks/second with rock-solid stability.",
    specs: [
      { label: "Fan Configuration", value: "Dual Opposed Crossflow (40×10mm)" },
      { label: "Bearing Type", value: "Hydraulic Ultra-Quiet Long-Life" },
      { label: "Airflow Direction", value: "Optimized Push-Pull Swept Path" },
      { label: "Safety Shield", value: "40mm Chromed Steel Finger Grills" }
    ],
    tag: "Active Ionic Quenching",
    iconName: "Wind"
  },
  {
    id: "dielectric-acrylic-enclosure",
    title: "4mm Plexiglass Bed & IP65 Project Enclosure",
    componentName: "Laser-Cut Dielectric Plate (11x17cm) in Smoked Acrylic Shell",
    pdfReference: "Page 1, 2 & 11: 4mm Plexiglass plate (11x17cm) & IP65 waterproof enclosure (20x12x7.5cm)",
    benefit: "Total electrical shock isolation, acoustic dampening of the high-voltage snap, and containment of ultraviolet plasma photons within safe therapeutic levels.",
    mechanism: "4mm acrylic provides >20 kV/mm dielectric strength. The smoked transparent shell allows continuous visual monitoring of the plasma spark while M3 hexagonal risers decouple vibrations from the flight chassis.",
    specs: [
      { label: "Sub-Plate Size", value: "11.0 cm × 17.0 cm × 4 mm Thick" },
      { label: "Housing Dimensions", value: "20 cm × 12 cm × 7.5 cm (IP65)" },
      { label: "Standoff System", value: "M3 Brass Hex Motherboard Spacers" },
      { label: "Optical Transparency", value: "UV-Filtered Smoked Observation Lid" }
    ],
    tag: "Dielectric Safety",
    iconName: "Box"
  }
];

export const RESONANCE_MODES: ResonanceMode[] = [
  {
    id: "cellular-repair",
    name: "Cellular ATP & DNA Coherence",
    frequency: "528 Hz Harmonic Base",
    hzValue: 528,
    targetBenefit: "Mitochondrial stimulation, collagen cross-linking & deep cellular revitalization",
    sparkRate: "450 Discharges / Sec",
    description: "Modulates the 0.45mm spark gap to resonate at the fundamental Solfeggio 528Hz frequency, known as the 'transformation and repair' acoustic octave.",
    waveColor: "#10b981"
  },
  {
    id: "circadian-nervous",
    name: "Schumann Nervous System Reset",
    frequency: "7.83 Hz Earth Resonance",
    hzValue: 7.83,
    targetBenefit: "Vagal nerve stimulation, cortisol reduction & parasympathetic lock-in",
    sparkRate: "120 Discharges / Sec",
    description: "Pulsed harmonic bursts aligned with the geomagnetic cavity frequency, grounding the human bio-field and restoring natural circadian rhythm sleep cycles.",
    waveColor: "#38bdf8"
  },
  {
    id: "pain-inflammation",
    name: "Multi-Wave Pain Dissipation",
    frequency: "432 Hz Golden Ratio",
    hzValue: 432,
    targetBenefit: "Rapid joint decompression, micro-capillary flow & inflammatory reduction",
    sparkRate: "620 Discharges / Sec",
    description: "Multi-octave cascade mimicking Georges Lakhovsky's universal wave frequencies, energizing transmembrane potential in degraded tissue.",
    waveColor: "#f59e0b"
  },
  {
    id: "plasma-detox",
    name: "Deep Plasma Ionic Field Quench",
    frequency: "144.0 kHz Lakhovsky RF",
    hzValue: 144,
    targetBenefit: "Lymphatic flushing, antioxidant radical clearing & micro-circulation surge",
    sparkRate: "880 Discharges / Sec",
    description: "Leverages the elemental zinc ionization field to saturate surrounding air with negative ions and active bio-photonic coherent radiance.",
    waveColor: "#a855f7"
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "practitioner-core",
    name: "Practitioner Core System",
    badge: "Most Accessible",
    price: 1890,
    originalPrice: 2450,
    description: "Complete pre-assembled AuraWave Pro unit in smoked IP65 enclosure with 99.95% zinc electrodes, ready for immediate home recovery protocols.",
    features: [
      "Fully assembled & bench-calibrated AuraWave Pro spark chamber",
      "Pair of 99.95% pure Zinc electrodes (10mm × 50mm) pre-mounted",
      "Calibrated 0.45mm spark gap with micro-metric locking nuts",
      "Dual 40mm high-speed hydraulic cooling fans with chrome grills",
      "Solid T2 electrolytic copper 3mm bus bars",
      "Comprehensive 40-page User & Frequency Protocols Manual",
      "2-Year Full Hardware Replacement Warranty",
      "Free Insured Express Worldwide Delivery"
    ],
    includedHardware: [
      "AuraWave Pro™ Core Generator Box",
      "12V Medical-Grade Low-Noise Power Supply",
      "Precision Feeler Gauge Tool (0.05 - 1.0mm)",
      "Capacitor Safety Discharge Jumper Cable (with insulated alligator clips)",
      "Spare pair of 10mm Pure Zinc Rods"
    ]
  },
  {
    id: "master-clinical",
    name: "Master Clinical Mahogany Console",
    badge: "Practitioner Favorite • 42% Off",
    popular: true,
    price: 2690,
    originalPrice: 3890,
    description: "Handcrafted artisan mahogany flight case housing with analog brass volt/amp meters, dual vacuum tube indicator glow, and extended electrode array.",
    features: [
      "Everything in Practitioner Core System, plus:",
      "Handcrafted Solid Mahogany Wood & Vintage Brass Flight Console",
      "Twin Precision Analog Metering Dials (Kilovolts & Pulse Rate)",
      "Warm Amber Vacuum Glow Diagnostic Indicator Tubes",
      "Heavy-Duty Knurled Brass Intensity & Frequency Potentiometers",
      "High-Current Safety Master Toggle Switch with Aircraft Cover",
      "6x Sets of 99.95% Pure Zinc 10mm Rods (3-Year Clinical Supply)",
      "Diamond Polishing & Contact Maintenance Service Kit",
      "VIP 1-on-1 Clinical Onboarding Video Call with Bio-Resonance Expert",
      "Lifetime Priority Replacement Warranty"
    ],
    includedHardware: [
      "AuraWave Pro™ Master Mahogany Console",
      "Smoked IP65 Acrylic Inspection Module",
      "Precision Feeler Gauge Kit + M6/M3 Hex Drivers",
      "High-Voltage Safety Discharge Shunt Lead",
      "6x Pairs 99.95% Pure Zinc Replacement Electrodes",
      "Handmade Canvas Dust Cover & Heavy-Duty Flight Case"
    ]
  },
  {
    id: "research-laboratory",
    name: "Research & Hospital Grade Station",
    badge: "Max Harmonic Output",
    price: 3950,
    originalPrice: 5200,
    description: "Dual-spark gap multi-resonance station with oscilloscope BNC diagnostic taps, variable dielectric chambers, and ultra-high pulse energy.",
    features: [
      "Everything in Master Clinical Edition, plus:",
      "Dual Symmetrical Spark Gap Chambers (Twin 0.45mm Channels)",
      "Oscilloscope / Spectrum Analyzer BNC Diagnostic Test Ports",
      "Gold-Plated Solid T2 Copper Contact Points",
      "Medical-Grade Isolated High-Voltage Power Transformer",
      "Dual-Zone Digital Micro-Frequency Waveform Display",
      "12x Sets of 99.95% Pure Zinc + Elemental Silver Coated Rods",
      "Full Commercial Clinic License & Multi-User Patient Tracker",
      "Dedicated 24/7 Priority Clinical Engineering Support",
      "Lifetime Unconditional Hardware Guarantee"
    ],
    includedHardware: [
      "AuraWave Pro™ Dual-Chamber Laboratory Unit",
      "BNC Oscilloscope Probe & Diagnostic Cable",
      "Full Calibrated Feeler Gauge Set & Metric Torque Wrench",
      "Deluxe Mahogany Console with Brushed Aluminum Faceplate",
      "12x Electrode Sets (Zinc + Silver Composite)",
      "Heavy-Duty Waterproof Pelican Transport Vault"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dr-elena",
    name: "Dr. Elena Rostova, MD",
    role: "Director of Functional & Regenerative Medicine",
    location: "Zurich, Switzerland",
    quote: "The steep nanosecond pulse rise times achieved by AuraWave Pro's 0.45mm zinc spark gap create a biological harmonic coherence I haven't seen in any modern digital synthesizer. We've recorded marked acceleration in cellular recovery rates and deep parasympathetic tone shifts within 15 minutes of therapy.",
    result: "87% faster tissue recovery recorded in 45 clinic patients",
    verifiedPurchase: true,
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "marcus-vane",
    name: "Marcus Vane",
    role: "Elite Biohacker & Ironman Competitor",
    location: "Austin, Texas",
    quote: "My HRV increased by 28 points over 3 weeks of daily 10-minute morning sessions with the AuraWave Pro. You can feel the distinct energetic difference between raw elemental zinc plasma and sterile digital gadgets. The tactile craftsmanship and cooling fans make it an absolute centerpiece.",
    result: "+28ms average HRV elevation & zero delayed onset soreness",
    verifiedPurchase: true,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5
  },
  {
    id: "sophia-le",
    name: "Sophia Le, L.Ac.",
    role: "Integrative Acupuncturist & Meridian Therapist",
    location: "San Francisco, California",
    quote: "Integrating the AuraWave Pro into my meridian therapy practice has been transformative. Patients describe a gentle internal warmth and vibrational tingling along primary nadis. The pure zinc emission and micro-gap arc provide an unmistakably grounded resonance.",
    result: "Voted #1 Modality by 94% of chronic pain clients",
    verifiedPurchase: true,
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    category: "technology",
    question: "How does the 0.40 - 0.50 mm Zinc Spark Gap promote cellular healing?",
    answer: "Unlike modern digital frequency generators that produce weak, mathematically artificial sine waves, a high-voltage spark gap creates an avalanche plasma discharge with an instantaneous sub-nanosecond pulse wavefront. According to bio-resonance pioneers (such as Lakhovsky and Tesla), this steep rise time generates an infinite series of multi-octave harmonic frequencies. Every living cell and organelle resonates at its own characteristic natural frequency; the broad-spectrum harmonic cascade allows each cell to absorb its ideal restorative wavelength."
  },
  {
    category: "technology",
    question: "Why does the machine specify 99.95% pure Zinc instead of brass or copper electrodes?",
    answer: "As detailed in the engineering schematics (Page 1 & 6), pure elemental Zinc (99.95%) is utilized because zinc is an essential trace mineral fundamentally tied to human cellular mitosis, superoxide dismutase (SOD) antioxidant enzyme activity, and collagen synthesis. During spark discharge, micro-atomic zinc vaporization occurs at the arc boundary, infusing the local bio-field with pure trace zinc ions while preventing toxic lead or heavy metal oxidation common in off-the-shelf brass."
  },
  {
    category: "maintenance",
    question: "How often do I need to calibrate the spark gap distance or clean the electrodes?",
    answer: "Due to the energetic plasma discharge, zinc electrodes naturally wear at a very gradual rate over 150-200 hours of active operation. As documented on Page 14-15 of the schematics, routine maintenance takes under 3 minutes: using the included 0.45mm feeler gauge and Allen key, simply inspect the gap spacing and tighten the SK10 guide clamps. If small zinc bridging nodules form, they can be gently removed with the included precision craft tool."
  },
  {
    category: "maintenance",
    question: "Is maintenance safe? How do I discharge the capacitor banks?",
    answer: "Safety is engineered directly into the system. As highlighted on Page 12-13 of the schematics, the device features high-contrast red and black color-coded silicone shrink feeds. Before opening the smoked acrylic enclosure, always unplug the external power supply and use the included insulated safety discharge jumper to bridge the red and black terminals, immediately draining all residual capacitor energy."
  },
  {
    category: "health",
    question: "What does a session feel like, and how long should I use it?",
    answer: "Sessions typically run between 10 to 20 minutes once or twice daily. Users typically report a gentle, calming sensation of micro-vibrational warmth, mental clarity, and profound physical relaxation. Many describe an ambient clean ozone aroma from the dual 40mm cooling fan crossflow. It can be enjoyed while seated in meditation, reading, or resting."
  },
  {
    category: "shipping",
    question: "What is your return policy and warranty?",
    answer: "Every AuraWave Pro is backed by our 60-Day Unconditional Cellular Vitality Guarantee. If you do not experience measurable improvements in recovery, sleep depth, or vitality, return the device in original packaging for a 100% refund. All units come with a comprehensive 2-year hardware replacement warranty (lifetime on Master Clinical and Research editions)."
  }
];
