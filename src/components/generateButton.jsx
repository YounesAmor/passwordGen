import ArrowRightIcon from "../assets/images/icon-arrow-right.svg";
const GenerateButton = ({ strength, generatePassword }) => {
  return (
    <div className="flex w-full items-center justify-center gap-2 border-2 border-moderateCyan py-3">
      <button
        disabled={strength === undefined ? true : false}
        className=" text-center font-jetBrainsMono text-moderateCyan"
        onClick={() => generatePassword()}
      >
        Generate
      </button>
      <img
        src={ArrowRightIcon}
        alt="arrow icon"
        className="text-moderateCyan"
      />
    </div>
  );
};

export default GenerateButton;
