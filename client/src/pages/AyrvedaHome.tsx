// pages/AyurvedaHome.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import ArticleCard from '../components/ArticleCard';
import FooterNav from '../components/FooterNav';

const articles = [
  {
    title: 'Understanding Your Dosha: A Guide to Personalized Wellness',
    desc: 'Learn about the three doshas (Vata, Pitta, Kapha) and how to balance them for optimal health.',
    time: '5 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIB2OfWryVFIn90MdVXq7poxlo7zmXZBmf1UmvaCwA-rpdXMWICNOdgCgYHhBTrI-3Ma-Js7kLlpyUwumbKg5XKZCEKmPaCUXhlRYBRI2v6h05j6twno_6XuL_5kjys8JfRUpjYBYxwkXzcFj-Z17mU8NLU8Uu8jH-K39KHaIXrY50wvhKq1sah_49_ooe31bS-bx_NOVT05BFMwah_g6jghxCxQK3syqKawYWfItRFsl9ua1suLW0N8qZAOv2M9EUht6Ia4ciG2Ff',
  },
  {
    title: 'The Power of Ayurvedic Diet: Foods for Healing and Balance',
    desc: 'Explore the principles of Ayurvedic nutrition and discover foods that support your dosha.',
    time: '7 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlBD4BOhBTWqIusa4D06G8tz2DvAZKLDzh8lrwcFK1XblYlOaf3v0bR5XocJ1UiciO-K3lHUOaUD-8EJuiWl6K8DT3roZpnHFsC7pAh7qcpXuiQYQ4ST6iUG9hwNjhPrOMH8BIPlQOIpjqLz_BrK2heHkoZ_40CKmVzPYEW6ZKtIgyotu3jtOy73ucvUkcQA2-smAyCfKKEFQzbzmvwE6KFdWRXIupXbh9cRdtn6U9gGAShxzjPgzLmO6VkOeJOllfB9Qp816WV4qn',
  },
  {
    title: 'Yoga and Ayurveda: A Holistic Approach to Well-being',
    desc: 'Integrate yoga practices with Ayurvedic principles to enhance your physical and mental health.',
    time: '6 min read',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBZBR5o7FP9WBhu_j1YQeSB8e1UGf37Af0XTkI-hq8ecKr5CUgJH55xFuKuoQh4Nd-pxfklX0hcD4B54cwjwslXD5L6YS28yKfBgdv9Z6E0m74boyIiGh1x3BOQ6DfCsCe7S7-KXpiH-TPDO4Lf90-QUfLo9iEbYblsYxK_F8d_bHvbUaSfWqcWx5hoqilUGcrIUTVIOGwKyjfvPf31QbAaGQBiuP5_2DzFttJgXiYs2uEAbHDrz8hf1BsW6nL_hXFaeH-JK7XeBJDC',
  },
];

const AyurvedaHome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white">
      <Navbar />
      <Hero />
      <section className="px-4 md:px-10 pb-8 space-y-6">
        <h2 className="text-[#121712] text-[22px] font-bold tracking-[-0.015em] pb-2">
          Featured Articles
        </h2>
        {articles.map((article, idx) => (
          <ArticleCard key={idx} {...article} />
        ))}
      </section>
      <FooterNav />
    </div>
  );
};

export default AyurvedaHome;
