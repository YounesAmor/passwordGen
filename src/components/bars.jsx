import Bar from "./bar";

const Bars = ({ strength }) => {
  switch (strength) {
    case "Very Weak":
      return (
        <div className="flex gap-2">
          <Bar color="red" />
          <Bar color="#18171F" />
          <Bar color="#18171F" />
          <Bar color="#18171F" />
        </div>
      );
    case "Weak":
      return (
        <div className="flex gap-2">
          <Bar color="orange" />
          <Bar color="orange" />
          <Bar color="#18171F" />
          <Bar color="#18171F" />
        </div>
      );
    case "Strong":
      return (
        <div className="flex gap-2">
          <Bar color="#ffd700" />
          <Bar color="#ffd700" />
          <Bar color="#ffd700" />
          <Bar color="#18171F" />
        </div>
      );
    case "Very Strong":
      return (
        <div className="flex gap-2">
          <Bar color="#25aa53" />
          <Bar color="#25aa53" />
          <Bar color="#25aa53" />
          <Bar color="#25aa53" />
        </div>
      );
    default:
      return (
        <div className="flex gap-2">
          <Bar color="#18171F" />
          <Bar color="#18171F" />
          <Bar color="#18171F" />
          <Bar color="#18171F" />
        </div>
      );
  }
};

export default Bars;
