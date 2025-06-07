const ReadMore = ({ children, isReadMore, setIsReadMore }) => {
  const text = children;
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <div
     className="flex scroll-mt-24 flex-col items-center gap-1"
    >
      <p className="max-w-xl text-center text-xl flex-col">
        {!isReadMore ? text.slice(0, 200) : text}
        <span
          onClick={toggleReadMore}
          className="read-or-hide text-primary cursor-pointer"
        >
          {isReadMore ? " show less" : " ...read more"}
        </span>
      </p>
    </div>
    );
  };
  
  export default ReadMore;