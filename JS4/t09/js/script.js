
    async function getWeatherData(city = 'Kiev'){
        const weatherData = await fetch (`https://api.weatherapi.com/v1/forecast.json?key=f920e00f41d74140866172528201811&q=${city}&days=7`);
        const result = await weatherData.json();
        render(result.forecast.forecastday);
    }


    function render(obj){
        const wrapper = document.querySelector('.weatherWrapper');
        wrapper.innerHTML = ``;
        console.log(wrapper);
        obj.map(item => {
            let div = document.createElement('div');
            div.classList.add('weatherDay');
            div.innerHTML = `
                <span class="text">${new Date(item.date).getDate() < 10 ? '0' + new Date(item.date).getDate() : new Date(item.date).getDate()}.${new Date(item.date).getMonth() < 10 ? '0' + (new Date(item.date).getMonth() + 1): new Date(item.date).getMonth() + 1}</span>
                <img src="https://${item.day.condition.icon}" alt="weatherImg">
                <span class="text">+${Math.floor(item.day.avgtemp_c)}&#176;</span>
            `
            wrapper.append(div);
    })
}
getWeatherData();


let selectCity = document.querySelector('.city');
selectCity.addEventListener('change', function (){
    getWeatherData(selectCity.value);
})