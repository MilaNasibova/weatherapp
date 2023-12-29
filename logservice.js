import chalk from "chalk";

const printError = (error) => {
  console.log(chalk.bgRed("ERROR: " + error));
  return process.exit(1);
};

const printTemperatureData = (response) => {
  console.log("Температура воздуха в городе " + response.name + " - " + response.main.temp + "°C");
};


export { printError };
export { printTemperatureData};
