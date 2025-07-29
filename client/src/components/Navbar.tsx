import type React from "react";

const Navbar: React.FC = () => {


  const navBar = [
    {name: 'Home', path: '/' },
    {name: 'Articles', path: '/articles' },
    {name: 'About', path: '/aboutUs' },
    {name: 'Contact', path: '/ContactUs' }
  ]
  return (
    <>
      <div className="flex items-center bg-white p-4 pb-2 justify-between">
        <h2 className="text-[#121712] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center pl-12">
          Ayurveda Insights
        </h2>
        <div className="flex w-12 items-center justify-end">
          <button aria-label="Search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
            </svg>
          </button>
        </div>
      </div>

      <nav className="border-b border-[#dde4dd] px-4 flex gap-8 text-sm font-bold tracking-[0.015em] text-[#678367]">
        {navBar.map((item, i) => (
          <a
            key={i}
            href={item.path}
            className={`flex flex-col items-center justify-center pb-3 pt-4 border-b-4 ${
              i === 0 ? 'text-[#121712] border-[#121712]' : 'border-transparent'
            }`}
          >
            {item.name}
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
