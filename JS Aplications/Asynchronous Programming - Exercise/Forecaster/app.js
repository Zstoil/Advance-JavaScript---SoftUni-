const enumIcon = {
  "Sunny" :	"&#x2600" , // ☀
  "Partly sunny" : "&#x26C5", // ⛅
  "Overcast"	:	"&#x2601", // ☁
  "Rain"		:	"&#x2614", // ☂
  "Degrees"	:	"&#176"   // °
  
}
const forecastContainer = document.getElementById('forecast');

function attachEvents() {

document.getElementById('submit').addEventListener('click', getWeather);
   

}
  async function getWeather(){

      const url = 'http://localhost:3030/jsonstore/forecaster/locations';
      let townName = document.getElementById('location').value;

      try{
      const response = await fetch(url);
      const data = await response.json();

      const info = data.find(x => x.name === townName);

      createForecaster(info.code);
     }catch{
      
      forecastContainer.style.display = "block";
      forecastContainer.textContent = "Error";
     }
  }

  async function createForecaster(code){

      const divCurrent = document.getElementById('current');
      const UpcomingContainer = document.getElementById('upcoming');
      

      const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`
      const urlUpcoming = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`
try{
      const responseToday = await fetch(urlToday);
      const dataToday = await responseToday.json();

      const responseUpcoming = await fetch(urlUpcoming);
      const dataUpcoming = await responseUpcoming.json();
    
      const todayHtmlTemp = createToday(dataToday);
      divCurrent.appendChild(todayHtmlTemp);

      forecastContainer.style.display = "block";

      const upcomingHtmlTemp = createUpcoming(dataUpcoming);
      UpcomingContainer.appendChild(upcomingHtmlTemp);
}catch{
  
    forecastContainer.style.display = "block";
    forecastContainer.textContent = "Error";
}

  }



      function createToday(data){

        const {condition,high,low} = data.forecast;

        document.querySelector('.label').textContent = data.name;
        

        const divForecast = document.createElement('div');
        divForecast.classList.add('forecasts');

        const spanSymbol = document.createElement('span');
        spanSymbol.classList.add('condition', 'symbol');
        spanSymbol.innerHTML = enumIcon[condition];
        

        const spanCondition = document.createElement('span');
        spanCondition.classList.add('condition');

        const spanName = document.createElement('span');
        spanName.classList.add("forecast-data");
        spanName.textContent = data.name;

        const spanDegree = document.createElement('span');
        spanDegree.classList.add("forecast-data");
        spanDegree.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

        const conditionTxtSpan = document.createElement('span');
        conditionTxtSpan.classList.add("forecast-data");
        conditionTxtSpan.textContent = condition;

        spanCondition.appendChild(spanName);
        spanCondition.appendChild(spanDegree);
        spanCondition.appendChild(conditionTxtSpan);

        divForecast.appendChild(spanSymbol);
        divForecast.appendChild(spanCondition);

       return divForecast;
  }

  function createUpcoming(data){

      const divForecastInfo = document.createElement('div');
      divForecastInfo.classList.add('forecast-info');

      data.forecast.forEach(data => {
        const spanHolder = generateSpan (data);
        divForecastInfo.appendChild(spanHolder);
      });

      return divForecastInfo;
  }

  function generateSpan (data){

    const {condition,high,low} = data;

    const spanUpcoming = document.createElement('span');
    spanUpcoming.classList.add('upcoming');

    const spanSymbol = document.createElement('span');
    spanSymbol.classList.add('symbol')
    spanSymbol.innerHTML = enumIcon[condition];

    const spanTemp = document.createElement('span');
    spanTemp.classList.add('forecast-data');
    spanTemp.innerHTML = `${low}${enumIcon["Degrees"]}/${high}${enumIcon["Degrees"]}`;

    const spanData = document.createElement('span');
    spanData.classList.add('forecast-data');
    spanData.textContent = condition;

    spanUpcoming.appendChild(spanSymbol);
    spanUpcoming.appendChild(spanTemp);
    spanUpcoming.appendChild(spanData);

    return spanUpcoming;
  }





attachEvents();