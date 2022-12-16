var card5day1El = document.querySelector(".day1-header")
var card5day2El = document.querySelector(".day2-header")
var card5day3El = document.querySelector(".day3-header")
var card5day4El = document.querySelector(".day4-header")
var card5day5El = document.querySelector(".day5-header")
var currentEl = document.querySelector(".current")
var key = "5ac5953f4965de6704e28a9ae8fcf1ff"
var lat
var lon
var city = "goshen";
var currentWind;
var currentTemp;
var currentHum;



var currentDay = dayjs().format('MM/DD/YYYY');
var day1 = dayjs().add(1, 'day').format('MM/DD/YYYY');
var day2 = dayjs().add(2, 'day').format('MM/DD/YYYY');
var day3 = dayjs().add(3, 'day').format('MM/DD/YYYY');
var day4 = dayjs().add(4, 'day').format('MM/DD/YYYY');
var day5 = dayjs().add(5, 'day').format('MM/DD/YYYY');

// currentdayEl.textContent = currentDay;
card5day1El.textContent = day1;
card5day2El.textContent = day2;
card5day3El.textContent = day3;
card5day4El.textContent = day4;
card5day5El.textContent = day5;


// Getting weather info
// 

var lat = getCords();

function getWeather() {

    var weatherInfoUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key

    fetch(weatherInfoUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })
}

function getCords() {
    var locUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&limit=1&appid=" + key
    fetch(locUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            var lon = data[0].lon
            var lat = data[0].lat
            // console.log(data[0])

            var weatherInfoUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + key
            fetch(weatherInfoUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data.list)
                    currentWind = data.list[0].wind.speed

                    var currTitleEl = document.createElement('h4');
                    currTitleEl.innerHTML = currentDay
                    currTitleEl.classList = "card-header"
                    currentEl.appendChild(currTitleEl)

                })
        })

}