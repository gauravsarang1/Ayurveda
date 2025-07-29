// components/ArticleCard.jsx

type cardContent = {
    title: string,
    desc: string,
    time: string,
    img: string
}

const ArticleCard = ({ title, desc, time, img }:cardContent) => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-white rounded-lg">
      <div
        className="bg-cover bg-center aspect-video w-full lg:w-1/2 rounded-lg"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <div className="flex flex-col justify-center w-full lg:w-1/2 gap-2">
        <h3 className="text-[#121712] text-lg md:text-xl font-bold leading-tight tracking-[-0.015em]">
          {title}
        </h3>
        <p className="text-[#678367] text-base">{desc}</p>
        <p className="text-[#678367] text-base">{time}</p>
      </div>
    </div>
  );
};

export default ArticleCard;
