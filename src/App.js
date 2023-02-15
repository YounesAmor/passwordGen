import { useState, useEffect } from "react";
import "./App.css";
import CopyIcon from "./assets/images/icon-copy.svg";
import Check from "./components/check";
import GenerateButton from "./components/generateButton";
import Bars from "./components/bars";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { generatePassword } from "./services/services";

function App() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(11);
  const [includeUpperCaseLetters, setIncludeUpperCaseLetters] = useState(false);
  const [includeLowerCaseLetters, setIncludeLowerCaseLetters] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strength, setStrenght] = useState("");
  useEffect(() => {
    let uppercaseBool = includeUpperCaseLetters === true ? 1 : 0;
    let lowercaseBool = includeLowerCaseLetters === true ? 1 : 0;
    let numbersBool = includeNumbers === true ? 1 : 0;
    let symbolsBool = includeSymbols === true ? 1 : 0;
    let totalStrength =
      uppercaseBool + lowercaseBool + numbersBool + symbolsBool;
    switch (totalStrength) {
      case 4:
        setStrenght("Very Strong");
        break;
      case 3:
        setStrenght("Strong");
        break;
      case 2:
        setStrenght("Weak");
        break;
      case 1:
        setStrenght("Very Weak");
        break;
      default:
        setStrenght(undefined);
        break;
    }
  }, [
    includeUpperCaseLetters,
    includeLowerCaseLetters,
    includeNumbers,
    includeSymbols,
  ]);
  const generateThis = () => {
    setPassword(
      generatePassword(
        includeUpperCaseLetters,
        includeLowerCaseLetters,
        includeNumbers,
        includeSymbols,
        passwordLength
      )
    );
  };
  const getBackgroundSize = () => {
    return {
      backgroundSize: `${((passwordLength - 8) * 100) / 12}% 100%`,
    };
  };
  return (
    <div className="grid h-screen w-screen place-content-center bg-darkBlack">
      <div className="w-[350px]">
        <h1 className="mb-4 text-center font-jetBrainsMono text-lg text-gray-500">
          Password generator
        </h1>
        <div className="flex items-center justify-between bg-[#18171F] p-3">
          <p className="font-jetBrainsMono text-sm text-gray-300">{password}</p>
          <img
            src={CopyIcon}
            alt="copy icon"
            id="clipboard"
            className="cursor-pointer"
            data-tooltip-content="Copied!"
            onClick={() => {
              navigator.clipboard.writeText(password);
            }}
          />
          <ReactTooltip
            anchorId="clipboard"
            events={["click"]}
            style={{ backgroundColor: "#0f0e15", color: "#a6ffb1" }}
          />
        </div>

        <div className="my-4 bg-[#18171F] p-3 font-jetBrainsMono">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-300">Character length</p>
            <p className="text-2xl text-moderateCyan">{passwordLength}</p>
          </div>
          <div className="styled-slider slider-progress  w-full">
            <input
              type="range"
              name="volume"
              min="8"
              max="20"
              defaultValue={11}
              onChange={(e) => setPasswordLength(parseInt(e.target.value))}
              style={getBackgroundSize()}
              className="my-2 w-full"
            />
          </div>
          <div>
            <div className="my-2 flex items-center gap-4">
              <Check
                isChecked={includeUpperCaseLetters}
                setIsChecked={setIncludeUpperCaseLetters}
              />
              <p className="text-sm text-gray-300">Include Uppercase Letters</p>
            </div>
            <div className="my-2 flex items-center gap-4">
              <Check
                isChecked={includeLowerCaseLetters}
                setIsChecked={setIncludeLowerCaseLetters}
              />
              <p className="text-sm text-gray-300">Include Lowercase Letters</p>
            </div>
            <div className="my-2 flex items-center gap-4">
              <Check
                isChecked={includeNumbers}
                setIsChecked={setIncludeNumbers}
              />
              <p className="text-sm text-gray-300">Include Numbers</p>
            </div>
            <div className="my-2 flex items-center gap-4">
              <Check
                isChecked={includeSymbols}
                setIsChecked={setIncludeSymbols}
              />
              <p className="text-sm text-gray-300">Include Symbols</p>
            </div>
          </div>
          <div className="my-4 flex items-center justify-between bg-darkBlack p-3">
            <p className="font-jetBrainsMono text-sm uppercase text-gray-500">
              Strength
            </p>
            <div className="flex items-center gap-2">
              <p className="font-jetBrainsMono text-xl text-gray-200">
                {strength}
              </p>
              <Bars strength={strength} />
            </div>
          </div>
          <div>
            <GenerateButton
              strength={strength}
              generatePassword={generateThis}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
