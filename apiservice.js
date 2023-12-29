import axios from "axios";

const getTemperature = async (city) => {
    const { data } = await axios.request({    
        headers: {
        Accept: "application/json",
      },
        method: 'get',
        url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=ru&appid=7d5a3b0afee73beebd1144b50f469e57`
    });
    return data;
  };

export { getTemperature };