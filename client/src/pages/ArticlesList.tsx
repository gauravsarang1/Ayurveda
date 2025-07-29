import React from 'react';
import {Home, FileText, Info } from 'lucide-react';
import MobileNavigation from '../components/article_list/MobileNav';
import NavItem from '../components/article_details/NavItem';
import Header from '../components/article_list/Header';
import ArticleCard from '../components/article_list/ArticleCard';
// Types

interface Article {
  id: number;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

// Page Title Component
const PageTitle: React.FC = () => (
  <h2 className="text-[#111811] text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] px-4 lg:px-8 pb-3 pt-5">
    All Articles
  </h2>
);

// Articles List Component
const ArticlesList: React.FC = () => {
  const articles: Article[] = [
    {
      id: 1,
      category: "Health",
      title: "The Power of Ayurvedic Herbs",
      description: "Explore the healing properties of Ayurvedic herbs and their benefits for overall well-being.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDAxTsIRYZZaGaYy8jfhMdQ4vCXlMEH5j52kdWiNM-dVTptf6KnV7Q9CbkrdmXgnqgBy_MyMJygZSrpz9cJ59B1nL8rHSz2bXOfQitPDXFCExqtFIOEEG0pt9rBwqq_w-TyM7BqpAmSaQMJ-UDO6rn5LVGWfljm1f8v-wsF1IBlEbcmtUsVmYT5_UvhIhVicErTkVPumjssnAMTFMEv957i9KlrMmnC_lM8yPxNVAyXLHlzl6xFwSv4-daYOwV3RXpEBAybCl0_Agwt"
    },
    {
      id: 2,
      category: "Wellness",
      title: "Balancing Your Doshas",
      description: "Learn about the three doshas in Ayurveda and how to balance them for optimal health.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDk8yMEMm1He0goQyRfv4fwbrdPEPWdRcl70uU9Svt_psl0-GuAT-6WZ00W2rY6sO-JB4srYXXhBlKpXs2ME4JEIBJgzW9yVws4F93wUSIGKGjlGvOZpHj0SGi1OgrRQ5qbEBjwPwi1Zw_SFcAe3xixYr2WIFdiX1WCa4-W90L09NgWGhSlSL2weFa9HLGmK8vZgI11TfNBLoc1FqzCV52OCIru8rQ53CR2PipuYcu4AO750PI713jjrdKBm1PSgnGRPcljhnO8sI4I"
    },
    {
      id: 3,
      category: "Lifestyle",
      title: "Ayurvedic Diet for Spring",
      description: "Discover the best foods to eat during the spring season according to Ayurvedic principles.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFZmudvgvSNXWYfYD_m--WfWAkl9Ef3F6gMgfiTB4Jx_rDuKTr5fN6vNo0U1El-d3X560Cf1WJOxD2rwIMYA72a7svy6u7A3MCYrTPmJihn4lCOKKhhb8ptV6kSsxIO76gI6dxPYipBMpSkJYGT0JFu-mA3WfNw5Eiy1NFa_vV-szQgL6r1adUu2pSNgNV2WPeKkfu8kEiIp4ofd7jmDzZJNePBv8-Y67aiPKlOiitds6SrKNwyULWkWGfZkmUDME_0647pT_4M4YQ"
    },
    {
      id: 4,
      category: "Health",
      title: "Managing Stress with Ayurveda",
      description: "Effective Ayurvedic techniques to reduce stress and promote mental clarity.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAwtlcXFsXl2WqTA4XC8anQSewdI_NmFgB8UmTWMGNZBbbSrCoc7Z14eQxhDg2nuFqrnJQT82VU96drcJMBNAUyjSFxe_WEXxZPOi5_UTLbdNGrGvb2dlbwmQCFo7NhY6I-eoBQMF3WPm4XPD53HcE5ERc-5fqoeQhChRpWvHjwNfCO2fJQHO9gal0rxqRndgfz71-bPn5z19O5iWujEPvVfCUX-zqSi3fjA8LHoPFSmxbkGMi_RZjWmuTkhcCUpXLAJtAMIllfkDJX"
    },
    {
      id: 5,
      category: "Wellness",
      title: "Ayurvedic Skincare Routine",
      description: "Natural skincare tips and remedies based on Ayurvedic principles for healthy, glowing skin.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuAmMHar4jWqEtbl0PRvDXR6ZKb7oLbuGi5lu438VKDm-lCTZsKkMlhdSJjNOGY6my4SK6kyQSRrjGBbkcoewzphOLEkpfMvsi8FA5XEauDIahoBzdjL5JiW8X8KUQ9gQB6fBJPhrMzgdP6y1f5mshr1NOVigNKznH3AQdXToI8A0f6UywySQomQZayb0wWBrM0dzckqRN4sa3pJKBc0hE8wvl1HSN96zCBlAQf1NSMC5XZS8K3a79Atsu6lu9AG49FENLjY47kq683e"
    }
  ];

  return (
    <div className="lg:grid lg:grid-cols-1 lg:max-w-4xl lg:mx-auto">
      {articles.map((article) => (
        <ArticleCard
          key={article.id}
          category={article.category}
          title={article.title}
          description={article.description}
          imageUrl={article.imageUrl}
        />
      ))}
    </div>
  );
};

// Desktop Navigation Component
const DesktopNavigation: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "Home", isActive: false },
    { icon: <FileText size={24} />, label: "Articles", isActive: true },
    { icon: <Info size={24} />, label: "About", isActive: false }
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

// Category Filter Component (Optional Enhancement)
const CategoryFilter: React.FC = () => {
  const categories = ["All", "Health", "Wellness", "Lifestyle"];
  const [activeCategory, setActiveCategory] = React.useState("All");

  return (
    <div className="px-4 lg:px-8 pb-4">
      <div className="flex gap-2 overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
              activeCategory === category
                ? 'bg-[#111811] text-white'
                : 'bg-gray-100 text-[#638863] hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

// Search Bar Component (Optional Enhancement)
const SearchBar: React.FC = () => (
  <div className="px-4 lg:px-8 pb-4">
    <div className="relative">
      <input
        type="text"
        placeholder="Search articles..."
        className="w-full px-4 py-3 pr-10 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#638863] focus:border-transparent"
      />
      <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  </div>
);

// Main App Component
const AyurvedaArticlesList: React.FC = () => {
  return (
    <div className="relative flex min-h-screen flex-col bg-white justify-between font-[Newsreader,Noto_Sans,sans-serif] max-w-6xl mx-auto">
      {/* Main Content */}
      <div className="flex-1">
        <Header />
        <PageTitle />
        
        {/* Optional: Add search and filter functionality */}
        <SearchBar />
        <CategoryFilter />
        
        <ArticlesList />
      </div>

      {/* Navigation */}
      <MobileNavigation />
      <DesktopNavigation />
    </div>
  );
};

export default AyurvedaArticlesList;