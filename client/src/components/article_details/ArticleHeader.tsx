interface ArticleHeaderProps {
  title: string;
  author: string;
  publishDate: string;
}

// Article Header Component
const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, publishDate }) => (
  <div className="px-4 lg:px-8">
    <h1 className="text-[#111811] text-[22px] lg:text-3xl font-bold leading-tight tracking-[-0.015em] text-left pb-3 pt-5">
      {title}
    </h1>
    <p className="text-[#638863] text-sm font-normal leading-normal pb-3 pt-1">
      By {author} · Published on {publishDate}
    </p>
  </div>
);

export default ArticleHeader