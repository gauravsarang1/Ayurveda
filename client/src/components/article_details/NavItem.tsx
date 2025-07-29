// Navigation Item Component

// Types
interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive = false }) => (
  <a 
    href="#" 
    className={`flex flex-1 flex-col items-center justify-end gap-1 px-2 py-1 rounded-lg transition-colors ${
      isActive ? 'text-[#111811]' : 'text-[#638863] hover:text-[#111811]'
    }`}
  >
    <div className="flex h-8 items-center justify-center">
      {icon}
    </div>
    <p className="text-xs font-medium leading-normal tracking-[0.015em] text-center">
      {label}
    </p>
  </a>
);

export default NavItem