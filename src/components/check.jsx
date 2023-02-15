const Check = ({ isChecked, setIsChecked }) => {
  return (
    <input
      type="checkbox"
      className="h-4 w-4 cursor-pointer accent-moderateCyan hover:bg-moderateCyan"
      checked={isChecked}
      onChange={() => setIsChecked(!isChecked)}
    />
  );
};

export default Check;
