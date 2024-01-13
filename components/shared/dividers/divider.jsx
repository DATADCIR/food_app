const Divider = ({ tag, classes }) => {
  return (
    <div>
      {tag ? (
        <div className="flex gap-4">
          <span>{tag}</span>
          <div className="h-3 w-6 rounded-lg bg-yellow-light"></div>
          <div className="h-3 w-6 rounded-lg bg-yellow-light"></div>
          <div className="h-3 w-6 rounded-lg bg-yellow-light"></div>
        </div>
      ) : null}
      <div className="h-3 w-full rounded-lg bg-yellow-light"></div>
    </div>
  );
};
export default Divider;
