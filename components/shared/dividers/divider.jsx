const Divider = ({ tag, classes }) => {
  return (
    <div className={`flex gap-5 items-center ${classes}`}>
      {tag ? (
        <div className="flex gap-4 items-center">
          <span className="text-nowrap">{tag}</span>
          <div className="h-2 w-6 rounded-lg bg-yellow-light"></div>
          <div className="h-2 w-6 rounded-lg bg-yellow-light"></div>
          <div className="h-2 w-6 rounded-lg bg-yellow-light"></div>
        </div>
      ) : null}
      <div className="h-2 w-full rounded-lg bg-yellow-light"></div>
    </div>
  );
};
export default Divider;
