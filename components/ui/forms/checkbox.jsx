const Checkbox = ({ item, classes }) => {
  const { label } = item;
  return (
    <div className={`flex items-center ${classes}`}>
      <input
        id="checked-checkbox"
        type="checkbox"
        value=""
        className="w-7 h-7 text-yellow-light bg-yellow-light border-yellow-light rounded focus:yellow-light "
      />
      <label htmlFor="checked-checkbox">{label}</label>
    </div>
  );
};
export default Checkbox;
