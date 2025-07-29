// components/Hero.jsx

const Hero = () => {
  return (
    <div className="p-4 md:px-10 md:py-6">
      <div
        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-lg min-h-[218px] h-[300px] md:h-[400px]"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 25%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_z1BYCVSvqDHkqOpczdFspRUvomQJpUyLXCHG8pXkIrvlBoObhbl2bcytrZlY9xZid0A3vDj5Xq7TR7q0LsYCeDwJec_1ZxxJpd9flTe98ICqy_76q3WDNx3nxAcvYTQrrUOz4Zfsl_M4KqilOnL7TCoB6f-fBAFk7FZGgCd0MJgOiUfsXtsl3VirG_eqGKFvgk-U_j1PRbFFuexRCsFADzEey5jcz9Yaz3iXrEliqRPmdH9kLD0S9t1LTgub2EHzOCjjcjLiT_lJ")',
        }}
      >
        <p className="text-white text-[24px] md:text-[32px] font-bold p-4">
          Discover the Ancient Wisdom of Ayurveda
        </p>
      </div>
    </div>
  );
};

export default Hero;
