const getArg = () => {
  let argument = process.argv.slice(2);
  if (!argument.length) {
    printError("введен не правильный id, команда помощь -help");
  } else return process.argv.slice(2);
};


export { getArg };