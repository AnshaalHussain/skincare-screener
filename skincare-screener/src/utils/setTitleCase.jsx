const setTitleCase = (string) => {
  let newString = "";
  let newStringArr = string.split(" ");

  for (let item in newStringArr) {
    let word = newStringArr[item];
    word = word[0].toUpperCase() + word.substring(1);

    newString += word + " ";
  }
  newString = newString.trim();
  return newString;
};

export default setTitleCase;
