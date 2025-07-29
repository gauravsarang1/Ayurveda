// Header Component
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Header: React.FC = () => (
  <div className="flex items-center bg-white p-4 pb-2 justify-between lg:px-8">
    <Link to={`/articles`} className="text-[#111811] flex size-12 shrink-0 items-center cursor-pointer hover:bg-gray-100 rounded-full transition-colors">
      <ArrowLeft size={24} />
    </Link>
    <h2 className="text-[#111811] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pr-12 lg:text-xl">
      Ayurveda Insights
    </h2>
  </div>
);

export default Header