// Article Card Component
interface ArticleCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ category, title, description, imageUrl }) => (
  <div className="p-4 lg:px-8 hover:bg-gray-50 transition-colors cursor-pointer">
    <div className="flex items-stretch justify-between gap-4 rounded-lg">
      <div className="flex flex-col gap-1 flex-[2_2_0px] lg:gap-2">
        <p className="text-[#638863] text-sm font-normal leading-normal lg:text-base">
          {category}
        </p>
        <p className="text-[#111811] text-base lg:text-lg font-bold leading-tight">
          {title}
        </p>
        <p className="text-[#638863] text-sm lg:text-base font-normal leading-normal">
          {description}
        </p>
      </div>
      <div
        className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg flex-1 shadow-sm lg:shadow-md hover:shadow-lg transition-shadow"
        style={{ backgroundImage: `url("${imageUrl}")` }}
        role="img"
        aria-label={`${title} article image`}
      />
    </div>
  </div>
);

export default ArticleCard