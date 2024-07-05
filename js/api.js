class openWeather{

constructor(){
    //Api key=c0cb773d975df87f59b485d1c1e185b4
    this.apiKey = 'c0cb773d975df87f59b485d1c1e185b4';

}
async search (cityName){
    const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${this.apiKey}`);
    

    const results = await response .json();
    //console.log(results);
    return results;
}

}