function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
export const generatePassword = (
  includeUpperCaseLetters,
  includeLowerCaseLetters,
  includeNumbers,
  includeSymbols,
  passwordLength
) => {
  if (passwordLength !== undefined) {
    const symbols = [33, 47];
    const numbers = [48, 57];
    const upppercaseLetters = [65, 90];
    const lowerCaseLetters = [97, 122];
    let constructPassword = [];
    let charactersToInclude = [];
    if (includeUpperCaseLetters) {
      charactersToInclude.push(upppercaseLetters);
      const upperBound = upppercaseLetters[1];
      const lowerBound = upppercaseLetters[0];
      constructPassword.push(
        String.fromCharCode(getRndInteger(lowerBound, upperBound))
      );
    }
    if (includeLowerCaseLetters) {
      charactersToInclude.push(lowerCaseLetters);
      const upperBound = lowerCaseLetters[1];
      const lowerBound = lowerCaseLetters[0];
      constructPassword.push(
        String.fromCharCode(getRndInteger(lowerBound, upperBound))
      );
    }
    if (includeNumbers) {
      charactersToInclude.push(numbers);
      const upperBound = numbers[1];
      const lowerBound = numbers[0];
      constructPassword.push(
        String.fromCharCode(getRndInteger(lowerBound, upperBound))
      );
    }
    if (includeSymbols) {
      charactersToInclude.push(symbols);
      const upperBound = symbols[1];
      const lowerBound = symbols[0];
      constructPassword.push(
        String.fromCharCode(getRndInteger(lowerBound, upperBound))
      );
    }
    // Adding one random char from each added element

    while (constructPassword.length < passwordLength) {
      const offset = getRndInteger(0, charactersToInclude.length);
      let arrayToChooseFrom = charactersToInclude[offset];
      const upperBound = arrayToChooseFrom[1];
      const lowerBound = arrayToChooseFrom[0];
      constructPassword.push(
        String.fromCharCode(getRndInteger(lowerBound, upperBound))
      );
    }
    let finalPassword = shuffleArray(constructPassword);
    return finalPassword.join("");
  }
};
