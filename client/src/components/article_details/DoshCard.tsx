interface DoshaCardProps {
  title: string;
  description: string;
  imageUrl: string;
  isFullWidth?: boolean;
}

// Dosha Card Component
const DoshaCard: React.FC<DoshaCardProps> = ({ title, description, imageUrl, isFullWidth = false }) => (
  <div className={`${isFullWidth ? 'lg:grid lg:grid-cols-2 lg:gap-8 lg:items-start' : 'lg:space-y-6'}`}>
    <div>
      <h3 className="text-[#111811] text-lg lg:text-xl font-bold leading-tight tracking-[-0.015em] pb-2 pt-4 lg:pt-0">
        {title}
      </h3>
      <p className="text-[#111811] text-base lg:text-lg font-normal leading-normal pb-4">
        {description}
      </p>
    </div>
    
    <div className={`w-full overflow-hidden rounded-xl shadow-md ${isFullWidth ? 'lg:order-first lg:mb-6' : 'lg:hidden'}`}>
      <div 
        className={`w-full bg-center bg-no-repeat bg-cover ${isFullWidth ? 'aspect-[2/3] lg:aspect-[4/3]' : 'aspect-[2/3]'}`}
        style={{ backgroundImage: `url("${imageUrl}")` }}
        role="img"
        aria-label={`${title} illustration`}
      />
    </div>
  </div>
);

export default DoshaCard