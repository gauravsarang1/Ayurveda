interface HeroImageProps {
  imageUrl: string;
  alt: string;
}

// Hero Image Component
const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, alt }) => (
  <div className="px-4 lg:px-8">
    <div className="w-full bg-center bg-no-repeat bg-cover flex flex-col justify-end overflow-hidden bg-white rounded-xl min-h-80 lg:min-h-96 shadow-lg">
      <div 
        className="w-full h-full bg-gradient-to-t from-black/20 to-transparent"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        role="img"
        aria-label={alt}
      />
    </div>
  </div>
);

export default HeroImage