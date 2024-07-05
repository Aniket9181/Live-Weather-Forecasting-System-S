const getWeather=new openWeather();  // init openWeather

 const ui = new UI();  // init UI

const searchCity = document.querySelector('.searchCity');

//Add event Listener

searchCity.addEventListener('keyup', (event) => {

    //get Input
    const userText = event.target.value;
    // console.log(userText);

    //make a request to open weather Api

   getWeather.search(userText).then(data => {

    //console.log(data);

    // temperature conversion
    const degC = data.main.temp - 273.15;
    const degCr = Math.floor(degC);
    const degF = degC * 1.8 + 32;
    const degFr = Math.floor(degF);


    results = {

        condition: data.weather[0].main,
        icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png',
        degCr: Math.floor(degCr),
        degFr: Math.floor(degFr),
        city: data.name

    }
    //display 
    ui.showResults(results);
   });



});