var card5day1El = document.querySelector(".day1-header")
var card5day2El = document.querySelector(".day2-header")
var card5day3El = document.querySelector(".day3-header")
var card5day4El = document.querySelector(".day4-header")
var card5day5El = document.querySelector(".day5-header")
var currentEl = document.querySelector(".current")
var key = "5ac5953f4965de6704e28a9ae8fcf1ff"
var lat
var lon
var city = "Goshen";
var currentWind;
var currentTemp;
var currentHum;



var currentDay = dayjs().format('MM/DD/YYYY');
var day1 = dayjs().add(1, 'day').format('MM/DD/YYYY');
var day2 = dayjs().add(2, 'day').format('MM/DD/YYYY');
var day3 = dayjs().add(3, 'day').format('MM/DD/YYYY');
var day4 = dayjs().add(4, 'day').format('MM/DD/YYYY');
var day5 = dayjs().add(5, 'day').format('MM/DD/YYYY');




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
                    console.log(data.list[0])
                    currentWind = data.list[0]

                    // Current Day Card
                    var currTitleEl = document.createElement('h4');
                    currTitleEl.innerHTML = city + " " + currentDay
                    currTitleEl.classList = "card-header"
                    currentEl.appendChild(currTitleEl)

                    var currTempEl = document.createElement("div");
                    currTempEl.innerHTML = "Temperature: " + data.list[0].main.temp + " F";
                    currTempEl.classList = "card";
                    currentEl.appendChild(currTempEl)

                    var currWindEl = document.createElement("div");
                    currWindEl.innerHTML = "Wind: " + data.list[0].wind.speed + " mph";
                    currWindEl.classList = "card";
                    currentEl.appendChild(currWindEl)

                    var currHumEl = document.createElement("div");
                    currHumEl.innerHTML = "Humidity: " + data.list[0].main.humidity + " %";
                    currHumEl.classList = "card";
                    currentEl.appendChild(currHumEl)

                    //Day 1 Card
                    var day1Title=document.createElement('h4')
                    day1Title.innerHTML = day1;
                    day1Title.classList = 'card-header';
                    document.querySelector('.day1').appendChild(day1Title);

                    var day1El = document.createElement('div');
                    day1El.innerHTML = "Temperature: " + data.list[1].main.temp + " F <br> Wind: " + data.list[1].wind.speed + " mph <br> Humidity: " + data.list[1].main.humidity + " %";
                    day1El.classList = "card"
                    document.querySelector('.day1').appendChild(day1El)

                    //Day 2 Card
                    var day2Title=document.createElement('h4')
                    day2Title.innerHTML = day2;
                    day2Title.classList = 'card-header';
                    document.querySelector('.day2').appendChild(day2Title);

                    var day2El = document.createElement('div');
                    day2El.innerHTML = "Temperature: " + data.list[2].main.temp + " F <br> Wind: " + data.list[2].wind.speed + " mph <br> Humidity: " + data.list[2].main.humidity + " %";
                    day2El.classList = "card"
                    document.querySelector('.day2').appendChild(day2El)

                     //Day 3 Card
                     var day3Title=document.createElement('h4')
                     day3Title.innerHTML = day3;
                     day3Title.classList = 'card-header';
                     document.querySelector('.day3').appendChild(day3Title);
 
                     var day3El = document.createElement('div');
                     day3El.innerHTML = "Temperature: " + data.list[3].main.temp + " F <br> Wind: " + data.list[3].wind.speed + " mph <br> Humidity: " + data.list[3].main.humidity + " %";
                     day3El.classList = "card"
                     document.querySelector('.day3').appendChild(day3El)

                      //Day 4 Card
                    var day4Title=document.createElement('h4')
                    day4Title.innerHTML = day4;
                    day4Title.classList = 'card-header';
                    document.querySelector('.day4').appendChild(day4Title);

                    var day4El = document.createElement('div');
                    day4El.innerHTML = "Temperature: " + data.list[4].main.temp + " F <br> Wind: " + data.list[4].wind.speed + " mph <br> Humidity: " + data.list[4].main.humidity + " %";
                    day4El.classList = "card"
                    document.querySelector('.day4').appendChild(day4El)


                     //Day 5 Card
                     var day5Title=document.createElement('h4')
                     day5Title.innerHTML = day5;
                     day5Title.classList = 'card-header';
                     document.querySelector('.day5').appendChild(day5Title);
 
                     var day5El = document.createElement('div');
                     day5El.innerHTML = "Temperature: " + data.list[5].main.temp + " F <br> Wind: " + data.list[5].wind.speed + " mph <br> Humidity: " + data.list[5].main.humidity + " %";
                     day5El.classList = "card"
                     document.querySelector('.day5').appendChild(day5El)
 
 


                })
        })

}