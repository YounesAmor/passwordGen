const Bar = ({ color }) => {
  return (
    <div
      className="h-6 w-3 border-2 border-white"
      style={{ background: color }}
    ></div>
  );
};

export default Bar;
