const Title = ({ tag, classes }) => {
  return (
    <div className={`w-full flex gap-1 sm:gap-2 items-center ${classes}`}>
      {tag ? (
        <div className="flex gap-1 sm:gap-2 items-center">
          <span className="text-nowrap whitespace-nowrap">{tag}</span>
          <div className="h-1 w-3 rounded-lg bg-yellow-light"></div>
          <div className="h-1 w-3 rounded-lg bg-yellow-light"></div>
          <div className="h-1 w-3 rounded-lg bg-yellow-light"></div>
        </div>
      ) : null}
      <div className="h-1 w-full rounded-lg bg-yellow-light"></div>
    </div>
  );
};
export default Title;
