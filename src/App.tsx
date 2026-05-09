/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  ChevronRight, 
  Star, 
  Check, 
  Utensils, 
  Clock, 
  Truck, 
  Coffee, 
  Sparkles,
  ArrowRight,
  Instagram,
  Facebook,
  Phone
} from 'lucide-react';

// --- Constants & Data ---

const NAV_LINKS = [
  { name: 'Services', href: '#services' },
  { name: 'Packages', href: '#packages' },
  { name: 'Menu', href: '#menu' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Book Now', href: '#contact', primary: true },
];

const SERVICES = [
  {
    title: 'Buffet Catering',
    description: 'Curated setups with Asian, Western, and Fusion menus. Completely customizable.',
    icon: <Utensils className="w-6 h-6" />,
    image: 'https://i.ibb.co/CTbsmpJ/IMG-20260501-WA0023.jpg'
  },
  {
    title: 'Set Menu Packages',
    description: 'Pre-designed Asian, Fusion, and International sets for simple, hassle-free ordering.',
    icon: <Sparkles className="w-6 h-6" />,
    image: 'https://i.ibb.co/fGLp2Kwx/IMG-20260501-WA0011.jpg'
  },
  {
    title: 'Breakfast & Tea Break',
    description: 'Continental spreads, dim sum, and Malaysian classics for early morning events.',
    icon: <Coffee className="w-6 h-6" />,
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800'
  }
];

const WHATSAPP_NUMBER = '60183576106';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const QUALITY_LABELS = [
  { label: 'No MSG', icon: <Check className="w-4 h-4" /> },
  { label: 'No Preservatives', icon: <Check className="w-4 h-4" /> },
  { label: 'Made From Scratch', icon: <Check className="w-4 h-4" /> },
  { label: 'Halal Ingredients', icon: <Check className="w-4 h-4" /> },
];

const RECENT_EVENTS = [
  {
    title: 'Signature Buffet Styling',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/hJCxYnRm/IMG-0447.jpg',
    tag: 'Latest Event'
  },
  {
    title: 'Heritage Spread',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/9kzQjxD8/IMG-0445.jpg',
    tag: 'Buffet'
  },
  {
    title: 'Event Excellence',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/4RtDGjQw/IMG-0443.jpg',
    tag: 'Setup'
  },
  {
    title: 'Fusion Delights',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/sJPckLS0/IMG-0442.jpg',
    tag: 'Asian-Western'
  },
  {
    title: 'Platter Perfection',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/dZrYXN2/IMG-0441.jpg',
    tag: 'Set Menu'
  },
  {
    title: 'Professional Service',
    location: 'Cameron Highlands',
    image: 'https://i.ibb.co/ksLDSHMD/IMG-0436.jpg',
    tag: 'Corporate'
  }
];

const EXTENDED_GALLERY = [
  'https://i.ibb.co/TxtDGFxP/IMG-0435.jpg',
  'https://i.ibb.co/847rVyT5/IMG-0432.jpg',
  'https://i.ibb.co/pBM05Y3b/IMG-0420.jpg',
  'https://i.ibb.co/xtv8BswC/IMG-0418.jpg',
  'https://i.ibb.co/7tcccDLs/IMG-0406.jpg',
  'https://i.ibb.co/cd6npr7/IMG-0389.jpg',
  'https://i.ibb.co/DfCv3tyc/IMG-0384.jpg',
  'https://i.ibb.co/22Vyyp3/IMG-0379.jpg',
  'https://i.ibb.co/xSDNkwwQ/IMG-0374.jpg',
  'https://i.ibb.co/393pVfgh/IMG-0372.jpg',
  'https://i.ibb.co/tw38DQSn/IMG-0345.jpg',
  'https://i.ibb.co/DPd1Rg79/IMG-0342.jpg',
  'https://i.ibb.co/ksVVy5pf/IMG-0338.jpg',
  'https://i.ibb.co/21Nrm0Qj/IMG-0311.jpg',
  'https://i.ibb.co/ZpFFrGXv/IMG-0310.jpg',
  'https://i.ibb.co/rRkfwQQ3/IMG-0309.jpg',
  'https://i.ibb.co/Y4XYDq4V/IMG-0304.jpg',
  'https://i.ibb.co/G4dwMgpM/IMG-0300.jpg',
  'https://i.ibb.co/G3dFWWcn/IMG-0297.jpg',
  'https://i.ibb.co/vvQwM3WG/IMG-0296.jpg',
  'https://i.ibb.co/fGPkmjDP/IMG-0290.jpg',
  'https://i.ibb.co/HTz14ghf/IMG-0289.jpg',
  'https://i.ibb.co/jPF1rdZn/IMG-0269.jpg',
  'https://i.ibb.co/yn3f9HTP/IMG-0248.jpg',
  'https://i.ibb.co/1YYy6xHj/IMG-0237.jpg',
  'https://i.ibb.co/zWSFMC8K/IMG-0222.jpg',
  'https://i.ibb.co/nNb6hd7x/IMG-0207.jpg',
  'https://i.ibb.co/r2vVBJG1/IMG-0188.jpg',
  'https://i.ibb.co/3YRWfqn6/IMG-0187.jpg',
  'https://i.ibb.co/LdzWBv0r/IMG-0186.jpg',
  'https://i.ibb.co/jkp794mw/IMG-0185.jpg',
  'https://i.ibb.co/1f9WQxwZ/IMG-0122.jpg',
  'https://i.ibb.co/pr2fHzhR/IMG-0085.jpg',
  'https://i.ibb.co/jZjrb1pB/IMG-0082.jpg'
];

const FEATURES = [
  {
    title: 'Stress-Free Reliability',
    description: 'We handle the setup, service, and cleanup so you can focus on your guests.',
    icon: <Clock className="w-8 h-8 text-primary" />
  },
  {
    title: 'Curated Fusion Flavours',
    description: 'No MSG, no preservatives. Just honest, made-from-scratch food that tastes like home.',
    icon: <Utensils className="w-8 h-8 text-primary" />
  },
  {
    title: 'Halal & Trusted',
    description: 'We use 100% Halal-sourced ingredients for all our Asian and Western spreads.',
    icon: <Sparkles className="w-8 h-8 text-primary" />
  }
];

const TESTIMONIALS = [
  {
    name: 'Sarah Lim',
    role: 'Birthday Host',
    text: 'Pizzarella Misokimchi made my daughter’s birthday so easy. The food looked amazing and the fusion menu was a total hit with both kids and adults.',
    rating: 5
  },
  {
    name: 'Azlan Shah',
    role: 'Corporate Admin',
    text: 'Reliable catering is hard to find here. They were on time, professional, and the breakfast spread was elevated beyond just basic catering.',
    rating: 5
  },
  {
    name: 'Happy Client',
    role: 'Event Host',
    text: 'Really good service and delicious mix of cuisines. Will definitely suggest you and book again for high tea.',
    rating: 5,
    screenshot: 'https://i.ibb.co/BHPWSvHk/Whats-App-Image-2026-05-03-at-18-49-14.jpg'
  }
];

const MENU_PACKAGES = {
  breakfast: [
    {
      name: 'Heritage Malaysian Set',
      price: 'RM 35',
      items: [
        'Fragrant Coconut Nasi Lemak or Classic Fried Bihun',
        'Traditional Ayam Masak Merah or Spiced Crispy Fried Chicken',
        'Signature Siam Mee Hoon',
        'Steamed Dim Sum Selection',
        'Classic Condiments Platter (Sambal, Anchovies, Peanuts, Egg)',
        'Freshly Baked Pastries & Cakes',
        'Premium Coffee & Tea',
        'Refreshing Fruit Juice'
      ]
    },
    {
      name: 'Continental Breakfast Experience',
      price: 'RM 45',
      items: [
        'Fresh Garden Salad Bar',
        'Choice of Nasi Lemak or Fried Bihun (Local Twist Option)',
        'Ayam Masak Merah or Spiced Fried Chicken',
        'Farm-Style Eggs',
        'Chicken Sausages',
        'Golden Hash Browns',
        'Roasted Herb Mushrooms',
        'Oven-Roasted Herbed Tomatoes',
        'Butter Croissants',
        'Premium Coffee & Tea',
        'Chilled Fruit Juice'
      ]
    }
  ],
  fusion: [
    {
      name: 'Signature 5-Star Experience',
      price: 'RM 68',
      highlight: true,
      items: [
        'Cameron Iceplant Salad with cranberries walnut in Roasted sesame Dressing',
        'Chicken gyoza',
        'Takoyaki',
        'Korean Toppoki',
        'Steamed Rice',
        'BBQ Chicken',
        'Sweet & Sour Fish',
        'Mixed Veggie',
        'Signature Dessert',
        'Mixed Fruit Platter',
        'Fruit cordial',
        'Iced Lemon water (sugar Free)',
        'Hot Water & Tea'
      ]
    },
    {
      name: 'International Fusion Set',
      price: 'RM 50 - RM 58',
      items: [
        '2 Appetizers of choice',
        '1 Rice, 1 Chicken, 1 Fish/Seafood',
        '1 Toufu, 1 Veggie',
        'Fruit Platter',
        'Coffee & Tea'
      ]
    }
  ],
  teabreak: [
    {
      name: 'Classic Teabreak Delight',
      price: 'RM 30 - RM 32',
      items: [
        'Fried bihun / Mee',
        'Egg Tart',
        'Dim Sum',
        'Nugget / Takoyaki',
        'Refreshing Longan Tofufa',
        'Coffee & Tea'
      ]
    },
    {
      name: 'Signature Selection Tea Break',
      price: 'RM 30',
      items: [
        'Wild Mushroom Soup',
        'Garlic bread',
        'Scones',
        'Fresh Cameron Strawberry',
        'Coffee & Tea'
      ]
    }
  ]
};

const BENTO_INFO = {
  title: "Deliver On-The-Go",
  options: [
    {
      title: "Bento Take Away",
      description: "Individually packed premium meal boxes. Ideal for corporate lunches, tour groups, or private outings.",
      price: "From RM 18/pax"
    },
    {
      title: "Drop-off Catering",
      description: "Full menu delivered in high-quality disposable trays. No cleanup required—simply feast and dispose.",
      price: "Low Surcharge"
    }
  ],
  packages: [
    {
      name: 'Asian Heritage Bento',
      price: 'RM 18 - RM 25',
      items: ['Nasi Lemak / Fried Bihun', 'Ayam Masak Merah', 'Stir-fry Veggie', 'Egg / Tofu', 'Fruit Platter']
    },
    {
      name: 'Fusion Kimchi Bento',
      price: 'RM 28 - RM 35',
      items: ['Steamed Rice', 'Korean BBQ Chicken', 'Takoyaki (2pcs)', 'Mixed Veggies', 'Local Dessert']
    },
    {
      name: 'Premium Fusion Bento',
      price: 'RM 38 - RM 45',
      items: ['Butter Rice / Pasta', 'Grilled Fish / Seafood', 'Garden Salad', 'Fresh Fruit Platter', 'Slice Cake']
    }
  ],
  delivery: [
    { zone: "Tanah Rata", fee: "RM 50" },
    { zone: "Brinchang & Ringlet", fee: "RM 80" }
  ]
};

const MENU_LIBRARY = [
  {
    category: "Choice of Carb",
    items: ["Steamed Rice", "Bihun / Mee", "Spaghetti Bolognese", "Roasted Potato & Pumpkin", "Mashed Potato"]
  },
  {
    category: "Choice of Protein",
    items: [
      "Ayam Masak Merah", "Ayam masak Kurma", "Ayam Rendang", "Beef Rendang", 
      "Golden Chicken Curry", "Sambal Chicken", "Sweet & Sour Fried Fish", 
      "Teriyaki Chicken", "Korean Dalgabi Chicken", "Sambal sotong terung", 
      "Sambal Udang", "Crispy Nestum Prawn", "Kam Heong Mussels", 
      "New Zealand Mussels", "Pan Seared Teriyaki Salmon", "Asam Pedas ikan Pari"
    ]
  },
  {
    category: "Choice of Veggie",
    items: [
      "Stirfried Mixed Veggie (Broccoli, Cauliflower, Carrot)", 
      "Steamed Lady Finger in Oyster Sauce", 
      "Steamed Okra with Soy Sesame Dressing", 
      "Stirfry Pak Choi", "Mixed Veggie Curry", "Sambal Terung"
    ]
  },
  {
    category: "Choice of Vegetarian",
    items: [
      "Basil Monkey head mushroom", "Braised Tofu Mixed Veggie", 
      "Vegetarian Curry Veggie", "Sweet & Sour Vegetarian Fish", 
      "Vegetarian Mutton Rendang", "Vegetarian Korean Dalgabi Chicken"
    ]
  },
  {
    category: "Choice of Dessert",
    items: ["Kuih Malaysia", "Chocolate Cake", "Butter Cake", "Tropical Fruit Platter"]
  }
];

// --- Components ---

const ImageGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const allImages = [
    ...RECENT_EVENTS.map(e => ({ url: e.image })),
    ...EXTENDED_GALLERY.map(url => ({ url }))
  ];

  const displayedImages = showAll ? allImages : allImages.slice(0, 8);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {displayedImages.map((event, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: (i % 8) * 0.05 }}
            viewport={{ once: true }}
            onClick={() => setSelectedImage(event.url)}
            className="group relative h-[400px] rounded-[32px] overflow-hidden cursor-pointer shadow-soft hover:shadow-warm transition-all duration-500"
          >
            <img 
              src={event.url} 
              alt="Event Highlight" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
            />
            <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-all duration-500 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 scale-50 group-hover:scale-100" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        {!showAll ? (
          <button 
            onClick={() => setShowAll(true)}
            className="bg-white border-2 border-primary text-primary px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-lg flex items-center gap-3 group"
          >
            View More Event Photos <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        ) : (
          <button 
            onClick={() => setShowAll(false)}
            className="bg-white border-2 border-charcoal/10 text-charcoal/40 px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:text-charcoal transition-all"
          >
            Show Less
          </button>
        )}
      </div>

      {/* Lightbox / Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-charcoal/95 backdrop-blur-md p-6 md:p-12 flex items-center justify-center cursor-zoom-out"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors"
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-full rounded-2xl shadow-2xl object-contain"
              alt="Event Large Preview"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-cream/95 backdrop-blur-sm border-b border-charcoal/5 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-4 group">
          <div className="h-20 w-20 rounded-none overflow-hidden border-2 border-primary shadow-soft group-hover:shadow-warm transition-all duration-300">
            <img 
              src="https://i.ibb.co/YF5ZRvwL/logo.jpg" 
              alt="Pizzarella Misokimchi Logo" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="flex flex-col leading-none">
            <span className="font-serif text-2xl font-bold tracking-tight text-charcoal italic group-hover:text-primary transition-colors">Pizzarella</span>
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-charcoal/40">Misokimchi</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12 text-sm font-black uppercase tracking-[0.2em] leading-none">
          {NAV_LINKS.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`${link.primary ? 'bg-primary text-white px-10 py-5 rounded-full shadow-lg hover:shadow-warm hover:scale-105 transition-all' : 'text-charcoal/70 hover:text-primary transition-all'}`}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(true)}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-cream z-[60] p-8 flex flex-col"
          >
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-8 mt-12 text-3xl font-serif">
              {NAV_LINKS.map((link) => (
                <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="hover:text-primary">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const SectionHeading = ({ subtitle, title, centered = false }: { subtitle: string, title: string, centered?: boolean }) => (
  <div className={`mb-16 ${centered ? 'text-center' : ''}`}>
    <p className={`text-primary uppercase tracking-[0.4em] font-black text-sm mb-8 flex items-center gap-5 ${centered ? 'justify-center' : ''}`}>
      <span className="w-16 h-[1.5px] bg-primary/40 rounded-full" />
      {subtitle}
    </p>
    <h2 className={`text-7xl md:text-8xl lg:text-[6.5rem] font-serif text-charcoal leading-[0.95] drop-shadow-sm ${centered ? 'mx-auto' : ''} max-w-5xl`}>
      {title}
    </h2>
  </div>
);

const EventQuiz = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const questions = [
    {
      id: 'type',
      q: "What's the occasion?",
      options: ['Birthday/Wedding', 'Corporate Meeting', 'Small Family Gathering', 'Tour/Excursion']
    },
    {
      id: 'pax',
      q: "How many guests?",
      options: ['Below 30 pax', '30 - 50 pax', '50 - 100 pax', 'Over 100 pax']
    },
    {
      id: 'vibe',
      q: "What's the food vibe?",
      options: ['Traditional Asian', 'Modern Fusion', 'Western Style', 'Quick & Easy']
    }
  ];

  const handleAnswer = (ans: string) => {
    const key = questions[step].id;
    setAnswers({ ...answers, [key]: ans });
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setStep(100); // Result state
    }
  };

  const getResult = () => {
    if (answers.type === 'Tour/Excursion' || answers.pax === 'Below 30 pax') return 'Bento Boxes On-The-Go';
    if (answers.type === 'Corporate Meeting' && answers.vibe === 'Quick & Easy') return 'Drop-off Catering';
    return 'Full Buffet Experience';
  };

  return (
    <div className="bg-charcoal p-10 md:p-16 rounded-[60px] text-white">
      <AnimatePresence mode="wait">
        {step < questions.length ? (
          <motion.div 
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="max-w-xl mx-auto text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-heritage-gold mb-6">Question {step + 1} of {questions.length}</p>
            <h3 className="text-3xl md:text-4xl font-serif mb-12">{questions[step].q}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {questions[step].options.map((opt) => (
                <button 
                  key={opt}
                  onClick={() => handleAnswer(opt)}
                  className="py-4 px-6 rounded-2xl border border-white/20 hover:border-primary hover:bg-primary/10 transition-all text-sm font-medium"
                >
                  {opt}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto text-center"
          >
            <Sparkles className="w-12 h-12 text-heritage-gold mx-auto mb-6" />
            <h3 className="text-3xl md:text-4xl font-serif mb-4">We Recommend:</h3>
            <p className="text-5xl font-serif text-heritage-gold mb-8 italic">{getResult()}</p>
            <p className="text-white/60 mb-10">Based on your answers, this will best suit your event needs and budget.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => setStep(0)} className="text-xs uppercase tracking-widest font-bold underline">Start Over</button>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-primary text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-2">
                Discuss via WhatsApp <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function App() {
  const [selectedItems, setSelectedItems] = useState<Record<string, string[]>>({});

  const toggleItem = (category: string, item: string) => {
    setSelectedItems(prev => {
      const current = prev[category] || [];
      if (current.includes(item)) {
        return { ...prev, [category]: current.filter(i => i !== item) };
      }
      return { ...prev, [category]: [...current, item] };
    });
  };

  const getWhatsAppMessage = () => {
    let message = "Hi Pizzarella! I'd like to inquire about a custom Mix & Match menu:\n\n";
    (Object.entries(selectedItems) as [string, string[]][]).forEach(([cat, items]) => {
      if (items.length > 0) {
        message += `*${cat}:*\n- ${items.join('\n- ')}\n\n`;
      }
    });
    message += "Can you provide a price quote for this selection?";
    return encodeURIComponent(message);
  };

  const totalSelected = Object.values(selectedItems).flat().length;

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden pt-36 pb-24">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="80" cy="20" r="40" fill="url(#hero-grad)" />
            <defs>
              <radialGradient id="hero-grad" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(80 20) rotate(90) scale(40)">
                <stop stopColor="var(--color-primary)" stopOpacity="0.4" />
                <stop offset="1" stopColor="var(--color-primary)" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <p className="text-primary uppercase tracking-[0.3em] font-black text-[18px] md:text-[26px] mb-10 flex items-center gap-6">
                <span className="w-12 h-[2.5px] bg-primary/60" />
                Est. in Cameron Highlands
              </p>
              <h1 className="text-7xl md:text-[136px] font-serif text-charcoal leading-[1.1] md:leading-[165px] mb-14 drop-shadow-2xl">
                Elevated <br />
                <span className="italic text-primary drop-shadow-lg">Flavours.</span>
              </h1>
              <p className="text-charcoal/70 text-xl sm:text-2xl md:text-3xl max-w-2xl mb-12 sm:mb-16 leading-tight font-light">
                Made from scratch. <span className="text-charcoal font-semibold italic underline decoration-primary decoration-4 underline-offset-[12px]">No MSG.</span> <br />
                Halal-focused premium catering.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-primary text-white px-10 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-warm transition-all flex items-center justify-center gap-3"
                >
                  Book Your Event <ArrowRight className="w-5 h-5" />
                </a>
                <a 
                  href="#menu" 
                  className="group border border-charcoal/10 bg-white/50 backdrop-blur-md shadow-soft text-charcoal px-10 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-charcoal hover:text-white transition-all text-center flex items-center justify-center gap-2"
                >
                  Explore Menus <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="hidden lg:grid grid-cols-2 gap-4 h-[600px]"
            >
              <div className="space-y-4 pt-12">
                <div className="h-2/3 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://i.ibb.co/hJCxYnRm/IMG-0447.jpg" className="w-full h-full object-cover" alt="Event setup" />
                </div>
                <div className="h-1/3 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://i.ibb.co/9kzQjxD8/IMG-0445.jpg" className="w-full h-full object-cover" alt="Dish detail" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-1/3 rounded-3xl overflow-hidden shadow-xl">
                  <img src="https://i.ibb.co/4RtDGjQw/IMG-0443.jpg" className="w-full h-full object-cover" alt="Setup close-up" />
                </div>
                <div className="h-2/3 rounded-3xl overflow-hidden shadow-2xl">
                  <img src="https://i.ibb.co/sJPckLS0/IMG-0442.jpg" className="w-full h-full object-cover" alt="Main spread" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60">
          <p className="text-[10px] uppercase font-mono tracking-widest">Scroll</p>
          <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
            <motion.div 
              animate={{ y: [0, 48] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute top-0 w-full h-1/2 bg-white" 
            />
          </div>
        </div>
      </section>

      {/* Why Us / Problem Section */}
      <section id="about" className="py-32 md:py-48 bg-stone relative">
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[100px] -mr-64 -mt-64" />
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            <div>
              <SectionHeading 
                subtitle="The Experience"
                title="You focus on the guests, we'll handle the rest."
              />
              
              {/* Quality Badges */}
              <div className="flex flex-wrap gap-3 mb-10">
                {QUALITY_LABELS.map((q, i) => (
                  <div key={i} className="flex items-center gap-1.5 bg-accent-green text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest">
                    {q.icon} {q.label}
                  </div>
                ))}
              </div>

              <p className="text-charcoal/70 text-lg mb-8 leading-relaxed">
                Hosting an event shouldn't feel like a logistics nightmare. 
                Tired of the same basic fried rice and chicken? Overwhelmed by decision fatigue? 
                We simplify the catering process into one smooth, dependable experience.
              </p>
            <div className="space-y-12">
              {FEATURES.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-8"
                >
                  <div className="bg-white p-5 rounded-3xl shadow-md h-fit">
                    {React.cloneElement(feature.icon as React.ReactElement, { className: "w-10 h-10 text-primary" })}
                  </div>
                  <div>
                    <h4 className="font-serif text-3xl mb-3">{feature.title}</h4>
                    <p className="text-charcoal/60 text-lg leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/images/regenerated_image_1778120474769.jpg" 
                  alt="Catering Setup" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-heritage-gold p-8 rounded-3xl max-w-xs shadow-xl hidden lg:block">
                <blockquote className="font-serif italic text-charcoal text-lg mb-4">
                  "Authentic flavours crafted with care."
                </blockquote>
                <p className="text-charcoal/60 text-xs uppercase tracking-widest font-bold">— PIZZARELLA MISOKIMCHI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quiz Section */}
      <section id="quiz" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Let's Plan"
            title="Not sure what you need?"
            centered
          />
          <EventQuiz />
        </div>
      </section>

      {/* Menu Packages Section */}
      <section id="packages" className="py-32 md:py-48 bg-stone">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Curated Menus"
            title="Choose a set that fits your vibe."
            centered
          />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Breakfasts */}
            <div className="space-y-8">
              <h3 className="font-serif text-3xl italic text-primary border-b border-primary/20 pb-4">Breakfast Sets</h3>
              {MENU_PACKAGES.breakfast.map((pkg, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-charcoal/5 font-size-[17px]">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="font-serif text-2xl leading-tight">{pkg.name}</h4>
                    <span className="bg-cream px-4 py-2 rounded-full text-sm font-bold text-primary whitespace-nowrap">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="text-[17px] text-charcoal/60 flex gap-3">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Fusion (Highlights) */}
            <div className="space-y-8">
              <h3 className="font-serif text-3xl italic text-primary border-b-2 border-primary/20 pb-4 mb-8">Fusion Favorites</h3>
              {MENU_PACKAGES.fusion.map((pkg, i) => (
                <div key={i} className={`p-10 rounded-[48px] shadow-xl border-2 relative overflow-hidden transition-all hover:scale-[1.02] ${pkg.highlight ? 'bg-charcoal text-white border-primary shadow-warm' : 'bg-white text-charcoal border-charcoal/5 shadow-soft'}`}>
                  {pkg.highlight && <div className="absolute top-0 right-0 bg-primary-gradient text-white text-[10px] uppercase font-bold tracking-[0.2em] px-6 py-2 rounded-bl-2xl shadow-lg">Our Signature</div>}
                  <div className="flex justify-between items-start mb-8">
                    <h4 className="font-serif text-3xl leading-tight pr-4">{pkg.name}</h4>
                    <span className={`${pkg.highlight ? 'bg-primary-gradient' : 'bg-gold-gradient'} px-4 py-2 rounded-2xl text-sm font-bold text-white whitespace-nowrap shadow-md`}>{pkg.price}</span>
                  </div>
                  <ul className="space-y-5 text-[16px]">
                    {pkg.items.map((item, j) => (
                      <li key={j} className={`flex gap-4 ${j === 0 ? 'text-[17px]' : ''} ${pkg.highlight ? 'text-white/80' : 'text-charcoal/60'}`}>
                        <div className="bg-primary/20 rounded-full p-1.5 h-fit shrink-0">
                          <Sparkles className="w-4 h-4 text-accent-gold" />
                        </div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full mt-10 py-5 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg transition-all ${pkg.highlight ? 'bg-primary-gradient text-white hover:opacity-90' : 'bg-charcoal text-white hover:bg-primary'}`}>
                    Choose Signature Set
                  </button>
                </div>
              ))}
            </div>

            {/* Teabreaks */}
            <div className="space-y-8">
              <h3 className="font-serif text-3xl italic text-primary border-b border-primary/20 pb-4">Tea Breaks</h3>
              {MENU_PACKAGES.teabreak.map((pkg, i) => (
                <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-charcoal/5">
                  <div className="flex justify-between items-start mb-6">
                    <h4 className="font-serif text-2xl leading-tight">{pkg.name}</h4>
                    <span className="bg-cream px-4 py-2 rounded-full text-sm font-bold text-primary whitespace-nowrap">{pkg.price}</span>
                  </div>
                  <ul className="space-y-4">
                    {pkg.items.map((item, j) => (
                      <li key={j} className="text-sm text-charcoal/60 flex gap-3">
                        <Coffee className="w-4 h-4 text-primary shrink-0 mt-0.5" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 bg-white p-8 md:p-12 rounded-[40px] border border-dashed border-charcoal/20 text-center">
            <p className="text-charcoal/60 text-sm italic">
              * Minimum order: 50 pax for catering. Surcharge applies for smaller groups. Delivery charges: Tanah Rata (RM 50), Brinchang & Ringlet (RM 80).
            </p>
          </div>
        </div>
      </section>

      {/* Menu Customization / Library Section */}
      <section id="menu" className="py-32 md:py-48 bg-stone text-charcoal relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="mb-24">
            <p className="text-primary uppercase tracking-[0.5em] font-black text-sm mb-8 flex items-center gap-5">
              <span className="w-12 h-[2px] bg-primary/40 rounded-full" />
              The Pantry
            </p>
            <h2 className="text-5xl md:text-9xl font-serif text-charcoal leading-[0.9] max-w-4xl italic mb-8">
              Mix and match to your heart's content.
            </h2>
            <p className="text-charcoal/60 text-xl md:text-2xl font-light max-w-2xl border-l-4 border-primary pl-8 py-2">
              You may choose from these premium selections to build your custom event menu. 
              Fusing local tradition with international flair.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12">
            {MENU_LIBRARY.map((cat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="font-black text-[12px] uppercase tracking-[0.2em] text-primary mb-8 flex items-center gap-3">
                  <span className="w-6 h-[2px] bg-primary/30" /> {cat.category}
                </h4>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => {
                    const isSelected = selectedItems[cat.category]?.includes(item);
                    return (
                      <li 
                        key={j} 
                        onClick={() => toggleItem(cat.category, item)}
                        className={`group flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-all duration-300 border-2 ${
                          isSelected 
                            ? 'bg-primary/10 border-primary text-primary shadow-sm' 
                            : 'bg-white/40 border-transparent text-charcoal/70 hover:bg-white hover:border-charcoal/10'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${
                          isSelected ? 'bg-primary border-primary' : 'border-charcoal/20 group-hover:border-primary/40'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className={`text-base font-medium leading-tight ${isSelected ? 'font-bold' : ''}`}>
                          {item}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
          
          <AnimatePresence>
            {totalSelected > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 md:p-12 bg-white rounded-[48px] border-2 border-primary shadow-warm relative z-20"
              >
                <div className="flex-grow">
                  <span className="inline-block bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-4">Your Custom Selection</span>
                  <h4 className="font-serif text-4xl mb-3 text-charcoal">Get your personalized price.</h4>
                  <p className="text-charcoal/50 text-xl">You've selected <span className="text-primary font-bold">{totalSelected} items</span> for your dream menu.</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                  <button 
                    onClick={() => setSelectedItems({})}
                    className="text-charcoal/40 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors px-6"
                  >
                    Clear All
                  </button>
                  <a 
                    href={`${WHATSAPP_LINK}?text=${getWhatsAppMessage()}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="bg-primary text-white px-12 py-6 rounded-full text-sm font-black uppercase tracking-widest hover:bg-charcoal hover:scale-105 transition-all text-center shadow-lg flex items-center justify-center gap-3"
                  >
                    Get Price & Book <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className={`mt-20 flex flex-col md:flex-row items-center justify-between gap-8 p-10 bg-white/40 rounded-[40px] border border-charcoal/5 transition-opacity duration-500 ${totalSelected > 0 ? 'opacity-40 blur-[2px] pointer-events-none' : 'opacity-100'}`}>
            <div>
              <h4 className="font-serif text-3xl mb-2 text-charcoal">Don't see your favorite dish?</h4>
              <p className="text-charcoal/50 text-xl">We specialize in custom menu planning for weddings and corporate events.</p>
            </div>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="bg-primary text-white px-12 py-5 rounded-full text-sm font-black uppercase tracking-widest hover:bg-charcoal transition-all">
              Request Custom Menu
            </a>
          </div>
        </div>
      </section>

      {/* Bento & Delivery Section */}
      <section id="delivery" className="py-32 md:py-48 bg-stone/20 overflow-hidden relative">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-[60px] overflow-hidden">
                <img 
                  src="/src/assets/images/regenerated_image_1778065881926.png" 
                  alt="Bento Box Delivery" 
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-12 -right-12 bg-accent-green p-8 rounded-full text-white shadow-2xl hidden md:block"
              >
                <Truck className="w-12 h-12" />
              </motion.div>
            </div>
            <div>
              <SectionHeading 
                subtitle="On-the-go"
                title={BENTO_INFO.title}
              />
              <p className="text-charcoal/70 text-2xl mb-16 leading-relaxed">
                Hosting a meeting or a quick tour group? Our bento and drop-off options are 
                designed for convenience without compromising on quality.
              </p>
              
              <div className="grid gap-10 mb-16">
                {BENTO_INFO.packages.map((pkg, i) => (
                  <div key={i} className="bg-cream/50 p-10 rounded-[40px] border border-charcoal/5 flex flex-col sm:flex-row justify-between gap-8 group hover:bg-white hover:shadow-soft transition-all duration-300">
                    <div>
                      <h5 className="font-serif text-3xl mb-4 flex items-center gap-4">
                        <span className="text-primary font-sans text-[10px] font-black bg-white px-3 py-1 rounded-full shadow-sm">Bento 0{i+1}</span>
                        {pkg.name}
                      </h5>
                      <div className="flex flex-wrap gap-x-6 gap-y-2">
                        {pkg.items.map((item, j) => (
                          <span key={j} className="text-base text-charcoal/50 uppercase tracking-widest font-mono flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full" /> {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="shrink-0 self-center">
                      <span className="bg-charcoal text-white px-6 py-3 rounded-full text-sm font-black whitespace-nowrap shadow-lg group-hover:bg-primary group-hover:scale-105 transition-all">{pkg.price}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-10 border-l-8 border-accent-gold bg-accent-gold/5 rounded-r-[40px]">
                <div className="flex items-center gap-3 mb-8">
                  <Truck className="w-8 h-8 text-accent-gold" />
                  <h6 className="font-black text-xs uppercase tracking-[0.3em]">Delivery Zones</h6>
                </div>
                <div className="grid grid-cols-2 gap-12">
                  {BENTO_INFO.delivery.map((d, i) => (
                    <div key={i}>
                      <p className="text-charcoal/40 text-[10px] uppercase font-black mb-2 tracking-widest">{d.zone}</p>
                      <p className="text-3xl font-serif text-charcoal">{d.fee}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
            <SectionHeading 
              subtitle="Our Services"
              title="Flexible solutions for every occasion."
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SERVICES.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-pointer bg-cream/30 p-8 rounded-[48px] border border-charcoal/5 hover:bg-white hover:shadow-warm transition-all duration-500"
              >
                <div className="aspect-square rounded-[36px] overflow-hidden mb-8 relative shadow-soft">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                  />
                  <div className="absolute top-6 right-6 bg-white shadow-xl p-4 rounded-3xl group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                    {item.icon}
                  </div>
                </div>
                <h3 className="font-serif text-4xl mb-6 group-hover:text-primary transition-colors italic">{item.title}</h3>
                <p className="text-charcoal/60 text-xl leading-relaxed mb-10">{item.description}</p>
                <a href="#menu" className="text-primary text-sm font-black uppercase tracking-[0.3em] flex items-center gap-3 group-hover:gap-6 transition-all">
                  Explore Package <ArrowRight className="w-6 h-6 shadow-sm" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 md:py-32 bg-cream/50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
            <SectionHeading 
              subtitle="Our Gallery"
              title="Event Highlights"
            />
            <div className="mb-12 md:mb-16">
              <a href={WHATSAPP_LINK} className="font-bold text-xs uppercase tracking-widest text-primary hover:underline flex items-center gap-2">
                See more on Instagram <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          <ImageGallery />
        </div>
      </section>

      {/* Local Context Section */}
      <section className="py-24 bg-charcoal text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-accent-green rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-block px-4 py-1 border border-white/20 rounded-full text-[10px] uppercase tracking-[0.3em] mb-8">
            Cameron Highlands Pride
          </div>
          <h2 className="text-5xl md:text-7xl font-serif mb-8 max-w-4xl mx-auto tracking-tight">
            We handle the setup, <span className="italic text-accent-gold">you enjoy the moment.</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-12">
            Based in the heart of Cameron Highlands, we specialize in local and international fusion 
            tailored for high-altitude hosting. On-time delivery and clean setups, guaranteed.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '100+', label: 'Events Hosted' },
              { val: '50+', label: 'Menu Options' },
              { val: '1k+', label: 'Happy Guests' },
              { val: '100%', label: 'On-Time Setup' }
            ].map((stat, i) => (
              <div key={i}>
                <p className="text-4xl md:text-5xl font-serif text-heritage-gold mb-2">{stat.val}</p>
                <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 md:py-32 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading 
            subtitle="Voices"
            title="What our clients say about us."
            centered
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 md:p-12 rounded-[40px] shadow-sm relative border border-charcoal/5 flex flex-col h-full"
              >
                <div className="flex gap-1 mb-6 text-heritage-gold">
                  {[...Array(t.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-charcoal/80 text-xl leading-relaxed mb-8 italic flex-grow">"{t.text}"</p>
                
                {t.screenshot && (
                  <div className="mb-8 rounded-2xl overflow-hidden border border-charcoal/5 shadow-inner bg-charcoal/5 p-1.5 cursor-zoom-in group/proof relative">
                    <img 
                      src={t.screenshot} 
                      alt="WhatsApp Testimony" 
                      className="w-full rounded-xl grayscale-[50%] group-hover/proof:grayscale-0 transition-all duration-500" 
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/proof:opacity-100 transition-opacity bg-charcoal/10">
                      <span className="bg-white/90 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-charcoal shadow-xl">Verified Review</span>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-charcoal/5 flex items-center justify-center font-serif text-xl text-primary font-bold">
                    {t.name[0]}
                  </div>
                  <div>
                    <h5 className="font-bold text-sm text-charcoal">{t.name}</h5>
                    <p className="text-charcoal/40 text-xs uppercase tracking-widest">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-[60px] p-12 md:p-24 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1547928500-1c0953d6abf2?auto=format&fit=crop&q=80&w=1200" 
                alt="Chef in action" 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-transparent" />
            </div>

            <div className="relative z-10 max-w-xl">
              <h2 className="text-5xl md:text-7xl font-serif text-white mb-10 leading-[1] drop-shadow-xl">
                Ready to elevate <br /><span className="italic text-heritage-gold">your next event?</span>
              </h2>
              <p className="text-white/80 text-xl mb-12 leading-relaxed font-light">
                Whether it's a birthday, corporate lunch, or a wedding in Cameron Highlands, 
                let's plan a menu that your guests will talk about for weeks.
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a 
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cream text-charcoal px-12 py-6 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-warm transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <Phone className="w-5 h-5 text-primary" /> Start Your Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal pt-32 pb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/natural-paper.png')]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
          <div className="grid md:grid-cols-4 gap-12 mb-20 text-center md:text-left">
            <div className="md:col-span-2">
              <a href="#" className="flex flex-col md:flex-row items-center gap-6 mb-12 group">
                <div className="h-24 w-24 rounded-none overflow-hidden border-2 border-primary shadow-soft bg-white">
                  <img 
                    src="https://i.ibb.co/YF5ZRvwL/logo.jpg" 
                    alt="Pizzarella Misokimchi Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-5xl font-bold tracking-tight text-white italic">Pizzarella</span>
                  <span className="text-base uppercase tracking-[0.5em] font-bold text-white/40">Misokimchi</span>
                </div>
              </a>
              <p className="text-white/50 max-w-sm mb-12 text-2xl leading-relaxed mx-auto md:mx-0">
                Premium catering based in Cameron Highlands. 
                Fusing Malaysian comfort with international flair 
                for events that matter.
              </p>
              <div className="flex gap-6 justify-center md:justify-start">
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                  <Phone className="w-6 h-6" />
                </a>
              </div>
            </div>
            <div>
              <h6 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-primary">Explore</h6>
              <ul className="space-y-6 text-white/60 text-xl">
                <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
                <li><a href="#packages" className="hover:text-white transition-colors">Packages</a></li>
                <li><a href="#menu" className="hover:text-white transition-colors">Fusion Menu</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h6 className="font-black text-xs uppercase tracking-[0.3em] mb-10 text-primary">Contact</h6>
              <ul className="space-y-6 text-white/60 text-xl">
                <li>Cameron Highlands, Malaysia</li>
                <li>WhatsApp: +60 18-357 6106</li>
                <li>marketing.pizzarella@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-sm tracking-widest font-bold text-white/30 uppercase text-center md:text-left">
            <p>© 2024 PIZZARELLA MISOKIMCHI CATERING</p>
            <div className="flex gap-12 font-black">
              <span>Halal Certified Ingredients</span>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-8 right-8 z-[100] bg-primary text-white p-5 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center gap-2 border-2 border-white"
      >
        <Phone className="w-6 h-6" />
        <span className="hidden md:inline font-bold text-xs uppercase tracking-widest pr-2">Chat with us</span>
      </a>
    </div>
  );
}
