// Mobile Navigation Component
import NavItem from "./Navitem";
import { Home, FileText, Info } from "lucide-react";
const MobileNavigation: React.FC = () => {
  const navItems = [
    { icon: <Home size={24} />, label: "Home", isActive: false },
    { icon: <FileText size={24} />, label: "Articles", isActive: true },
    { icon: <Info size={24} />, label: "About", isActive: false }
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

export default MobileNavigation