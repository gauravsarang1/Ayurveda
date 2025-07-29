import React from 'react';

import { Home, FileText, Flower, Users, User } from 'lucide-react';
import DoshaCard from '../components/article_details/DoshCard';
import NavItem from '../components/article_details/NavItem';
import ArticleHeader from '../components/article_details/ArticleHeader';
import Header from '../components/article_details/ArticalPageHead';
import HeroImage from '../components/article_details/ArticleHeroImage';

// Introduction Component
const Introduction: React.FC = () => (
  <div className="px-4 lg:px-8">
    <p className="text-[#111811] text-base lg:text-lg font-normal leading-normal pb-6 pt-1">
      Ayurveda, the ancient Indian system of medicine, emphasizes the balance of three fundamental energies or doshas: Vata, Pitta, and Kapha. Understanding your dominant dosha can provide insights into your physical, mental, and emotional characteristics, helping you tailor your lifestyle for optimal health and well-being.
    </p>
  </div>
);

// Dosha Section Component
const DoshaSection: React.FC = () => {
  const doshas = [
    {
      title: "Vata Dosha",
      description: "Vata is associated with air and ether, governing movement and communication. Individuals with a dominant Vata dosha tend to be creative, energetic, and adaptable, but can also experience anxiety, restlessness, and dryness. Balancing Vata involves grounding practices, warmth, and regular routines.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD9nXpVcUIXQll8gLL68mZSy50aqVLZygrfDWAHGljHZel1EHJGpX_cGJXTKyKAnj7TJCnvCdQ6Ch4ijhW6qD-MA67_2a2DNC8MFA1HPhjM2F8Ab46HhpCPEMkhBZrW6GQlvNDXAE0S9Hk9Rv2jLgk4hrRi9Mzq4sLaqTGs1CdHT4Od4_aXIPaGkdMhuUTDebzSOKj64P6uCW_a3mTLG-x7qRam5TrahBIDZqb2-xm7ruG4cVMtGrEwckzD7PMIB7i_3EfNFw6Zn8yA"
    },
    {
      title: "Pitta Dosha",
      description: "Pitta is linked to fire and water, controlling metabolism and transformation. Pitta types are often intelligent, ambitious, and passionate, but may also be prone to anger, impatience, and inflammation. Cooling foods, moderate exercise, and stress management are key to balancing Pitta.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDyuJpXixEdXM62oy41XCkcAPJAHyDhmtuyCdhPJDM07Y0mV-kVbJz7K-gdgqvrXDxEsoE78V9Hfcvfifv_zbATT2Ze3VBeW11LT3IhOUQw0uWzq4DHdVt3KqSymm7OLsQb4tzcO9TDifRAjJhgzz7hvLGJ89Wow_ZXhCf49azwn3Y86Px6tRMXm32b5XLzG_eO4vfdZ58btu4scSmxSW3H9hMS-vyPKgl9lRu8OeJ9vcg8tlOrhhKhn5Wnrt-3Dh1d0X8Wx66--LkN"
    }
  ];

  return (
    <div className="px-4 lg:px-8">
      {/* Desktop Layout - Two Column */}
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 space-y-8 lg:space-y-0">
        {doshas.map((dosha, index) => (
          <DoshaCard
            key={index}
            title={dosha.title}
            description={dosha.description}
            imageUrl={dosha.imageUrl}
          />
        ))}
      </div>

      {/* Kapha Dosha - Full Width */}
      <div className="pt-8 lg:pt-12">
        <DoshaCard
          title="Kapha Dosha"
          description="Kapha is connected to earth and water, providing structure and stability. Kapha individuals are typically calm, compassionate, and grounded, but can also experience sluggishness, attachment, and weight gain. Stimulating activities, light foods, and regular exercise help balance Kapha."
          imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAOlH3CnphKj8vRZQLTbHiRKNezAzy4Y6vIBRVGIi0-jS1a-hF4xbEZSrbJE-HUTcsRmgfE9UfjK0rRc9ONigdBaXGrgjhXZG_hv7unZnJHKzv10K4lBRM7vW46HP2UzUI1xDjl5HvR3lNLOE5z_h3SCGYKoqPJf_cbkhk9P-ygOxXWNPtujUg1HGPpXQSUfeAuyoMBD5R3gcuJ-v3eGCnVZmkpBxWx2NE57cK3tJCsoGnN0d7DbRF33hlP7YYi7uPzP0_uWVtceRU5"
          isFullWidth={true}
        />
      </div>
    </div>
  );
};

// Additional Content Component
const AdditionalContent: React.FC = () => (
  <div className="px-4 lg:px-8 pt-8 space-y-6">
    <div>
      <h3 className="text-[#111811] text-lg lg:text-xl font-bold leading-tight tracking-[-0.015em] pb-2">
        Determining Your Dosha
      </h3>
      <p className="text-[#111811] text-base lg:text-lg font-normal leading-normal pb-4">
        While most people have a combination of doshas, one is usually dominant. Online quizzes and consultations with Ayurvedic practitioners can help you identify your unique doshic profile. Understanding your dosha is the first step towards personalized health and wellness.
      </p>
    </div>
    
    <p className="text-[#111811] text-base lg:text-lg font-normal leading-normal pb-8">
      By aligning your diet, lifestyle, and self-care practices with your dosha, you can enhance your overall health and well-being, promoting balance and harmony within your mind and body. Embrace the wisdom of Ayurveda to live a more balanced and fulfilling life.
    </p>
  </div>
);

// Mobile Navigation Component
const MobileNavigation: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "Home", isActive: false },
    { icon: <FileText size={24} />, label: "Articles", isActive: true },
    { icon: <Flower size={24} />, label: "Practices", isActive: false },
    { icon: <Users size={24} />, label: "Community", isActive: false },
    { icon: <User size={24} />, label: "Profile", isActive: false }
  ];

  return (
    <div className="lg:hidden">
      <div className="flex gap-2 border-t border-[#f0f4f0] bg-white px-4 pb-3 pt-2">
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            icon={item.icon} 
            label={item.label} 
            isActive={item.isActive}
          />
        ))}
      </div>
      <div className="h-5 bg-white"></div>
    </div>
  );
};

// Desktop Navigation Component
const DesktopNavigation: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "Home", isActive: false },
    { icon: <FileText size={24} />, label: "Articles", isActive: true },
    { icon: <Flower size={24} />, label: "Practices", isActive: false },
    { icon: <Users size={24} />, label: "Community", isActive: false },
    { icon: <User size={24} />, label: "Profile", isActive: false }
  ];

  return (
    <div className="hidden lg:block">
      <div className="flex justify-center gap-8 border-t border-[#f0f4f0] bg-white px-8 py-4">
        {navItems.map((item, index) => (
          <NavItem 
            key={index}
            icon={item.icon} 
            label={item.label} 
            isActive={item.isActive}
          />
        ))}
      </div>
    </div>
  );
};

// Main App Component
const AyurvedaApp: React.FC = () => {
  const heroImageUrl = "https://lh3.googleusercontent.com/aida-public/AB6AXuBz2BMNMsmCrN5xrNwmghYBYIw7SW9izVYAIBRZO45OK0u0ZHf9qOUjj68ixGlcJ2zYXsRoH4jWhPEyc7s9LB5PP5WIOb-9lG6FGz2e8mHUn8p0yjNO7PO1AdNtFVc3Ztoc2g1eND1oxMUguf7XLU-0QgcPVGhyX6x-_X0cMBdk0bB0jyJXVlMz1KYzcGTRhiv4V1notKPZ5xa7FeclMVa6l9RnQqxvvvi8T_aTid2rxgja6ShZ8tvWR_AV6VW8jIi8jPTwC0_nqo_q";

  return (
    <div className="relative flex min-h-screen flex-col bg-white justify-between font-[Newsreader,Noto_Sans,sans-serif] max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1">
        <Header />
        
        <HeroImage 
          imageUrl={heroImageUrl}
          alt="Ayurveda meditation and wellness"
        />
        
        <ArticleHeader 
          title="Understanding Your Dosha: A Guide to Ayurvedic Body Types"
          author="Dr. Anya Sharma"
          publishDate="July 15, 2024"
        />
        
        <Introduction />
        
        <DoshaSection />
        
        <AdditionalContent />
      </div>

      {/* Navigation */}
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default AyurvedaApp;