const ReadMore = ({ children, isReadMore, setIsReadMore }: any) => {
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div
     className="flex scroll-mt-24 flex-col items-center gap-1"
    >
      <p className="max-w-6xl text-center text-xl flex-col">
        {!isReadMore ? text.slice(0, 200) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide highlight-text cursor-pointer"
        >
          {isReadMore ? " show less" : " ...read more"}
        </span>
      </p>
    </div>
    );
  };
  
  export default ReadMore;