import { getArg } from "./arg.js"
import { getTemperature } from "./apiservice.js";
import { printError } from "./logservice.js";
import { printTemperatureData } from "./logservice.js";

const finalData = async (args) => {
  const finalData = await getTemperature(args);
  printTemperatureData(finalData);
};  

const getTemperatureData = async (args) => {
  try {
    const getTemperatureData = await getTemperature(args);
    printTemperatureData(getTemperatureData);
  } catch (error) {
      printError("Город не найден");
    }
  };


const initCli = async () => {
    const args = getArg();
    getTemperature(args);
    await getTemperatureData(args);
  };
  
  initCli();

