// components/FooterNav.j

const FooterNav = () => {
  return (
    <footer className="border-t border-[#f1f4f1] bg-white px-4 py-2">
      <div className="flex justify-around text-[#678367]">
        {['House', 'Bookmark', 'User'].map((_, i) => (
          <a key={i} href="#" className="flex flex-col items-center">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 256 256"
              >
                <path d="..." />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
};

export default FooterNav;
