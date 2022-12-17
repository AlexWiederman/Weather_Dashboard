var card5day1El = document.querySelector(".day1-header");
var card5day2El = document.querySelector(".day2-header");
var card5day3El = document.querySelector(".day3-header");
var card5day4El = document.querySelector(".day4-header");
var card5day5El = document.querySelector(".day5-header");
var currentEl = document.querySelector(".current");
var key = "5ac5953f4965de6704e28a9ae8fcf1ff";
var lat;
var lon;
var city;


var currentDay = dayjs().format('MM/DD/YYYY');
var day1 = dayjs().add(1, 'day').format('MM/DD/YYYY');
var day2 = dayjs().add(2, 'day').format('MM/DD/YYYY');
var day3 = dayjs().add(3, 'day').format('MM/DD/YYYY');
var day4 = dayjs().add(4, 'day').format('MM/DD/YYYY');
var day5 = dayjs().add(5, 'day').format('MM/DD/YYYY');

var storage = getHistory()

document.getElementById("button").addEventListener("click", function () {
    city = document.getElementById("search").value;
    if (city == "") {return}
    document.getElementById("search").value = ""; //Clearing out search bar after searching
    var exists = document.querySelector(".new")
    if (exists !== null) {
        var elements = document.querySelectorAll(".new");
        for (i = 0; i < elements.length; i++) {
            elements[i].remove()
        }
    }

    localStorage.setItem("searchHistory", JSON.stringify(city));

    getCords();
    setHistory();

});


// Getting weather info
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

            var weatherInfoUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&units=imperial&appid=" + key
            fetch(weatherInfoUrl)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    console.log(data.list)


                    // Current Day Card
                    var currTitleEl = document.createElement('h4');
                    currTitleEl.innerHTML = city + " " + currentDay
                    currTitleEl.classList = "card-header first new"
                    currentEl.appendChild(currTitleEl)

                    var currImgEl = document.createElement("img");
                    currImgEl.src = "http://openweathermap.org/img/wn/" + data.list[0].weather[0].icon + "@2x.png"
                    currImgEl.classList = "card new"
                    currentEl.appendChild(currImgEl)

                    var currTempEl = document.createElement("div");
                    currTempEl.innerHTML = "Temperature: " + data.list[0].main.temp + " F<br> Wind: " + data.list[0].wind.speed + " mph<br> Humidity: " + data.list[0].main.humidity + " %";
                    currTempEl.classList = "card new";
                    currentEl.appendChild(currTempEl)

                    //Day 1 Card
                    var day1Title = document.createElement('h4')
                    day1Title.innerHTML = day1;
                    day1Title.classList = 'card-header new';
                    document.querySelector('.day1').appendChild(day1Title);

                    var day1ImgEl = document.createElement("img");
                    day1ImgEl.src = "http://openweathermap.org/img/wn/" + data.list[1].weather[0].icon + "@2x.png"
                    day1ImgEl.classList = "card new"
                    document.querySelector('.day1').appendChild(day1ImgEl)

                    var day1El = document.createElement('div');
                    day1El.innerHTML = "Temperature: " + data.list[1].main.temp + " F <br> Wind: " + data.list[1].wind.speed + " mph <br> Humidity: " + data.list[1].main.humidity + " %";
                    day1El.classList = "card new"
                    document.querySelector('.day1').appendChild(day1El)

                    //Day 2 Card
                    var day2Title = document.createElement('h4')
                    day2Title.innerHTML = day2;
                    day2Title.classList = 'card-header new';
                    document.querySelector('.day2').appendChild(day2Title);

                    var day2ImgEl = document.createElement("img");
                    day2ImgEl.src = "http://openweathermap.org/img/wn/" + data.list[2].weather[0].icon + "@2x.png"
                    day2ImgEl.classList = "card new"
                    document.querySelector('.day2').appendChild(day2ImgEl)

                    var day2El = document.createElement('div');
                    day2El.innerHTML = "Temperature: " + data.list[2].main.temp + " F <br> Wind: " + data.list[2].wind.speed + " mph <br> Humidity: " + data.list[2].main.humidity + " %";
                    day2El.classList = "card new"
                    document.querySelector('.day2').appendChild(day2El)

                    //Day 3 Card
                    var day3Title = document.createElement('h4')
                    day3Title.innerHTML = day3;
                    day3Title.classList = 'card-header new';
                    document.querySelector('.day3').appendChild(day3Title);

                    var day3ImgEl = document.createElement("img");
                    day3ImgEl.src = "http://openweathermap.org/img/wn/" + data.list[3].weather[0].icon + "@2x.png"
                    day3ImgEl.classList = "card new"
                    document.querySelector('.day3').appendChild(day3ImgEl)

                    var day3El = document.createElement('div');
                    day3El.innerHTML = "Temperature: " + data.list[3].main.temp + " F <br> Wind: " + data.list[3].wind.speed + " mph <br> Humidity: " + data.list[3].main.humidity + " %";
                    day3El.classList = "card new"
                    document.querySelector('.day3').appendChild(day3El)

                    //Day 4 Card
                    var day4Title = document.createElement('h4')
                    day4Title.innerHTML = day4;
                    day4Title.classList = 'card-header new';
                    document.querySelector('.day4').appendChild(day4Title);

                    var day4ImgEl = document.createElement("img");
                    day4ImgEl.src = "http://openweathermap.org/img/wn/" + data.list[4].weather[0].icon + "@2x.png"
                    day4ImgEl.classList = "card new"
                    document.querySelector('.day4').appendChild(day4ImgEl)

                    var day4El = document.createElement('div');
                    day4El.innerHTML = "Temperature: " + data.list[4].main.temp + " F <br> Wind: " + data.list[4].wind.speed + " mph <br> Humidity: " + data.list[4].main.humidity + " %";
                    day4El.classList = "card new"
                    document.querySelector('.day4').appendChild(day4El)


                    //Day 5 Card
                    var day5Title = document.createElement('h4')
                    day5Title.innerHTML = day5;
                    day5Title.classList = 'card-header new';
                    document.querySelector('.day5').appendChild(day5Title);

                    var day5ImgEl = document.createElement("img");
                    day5ImgEl.src = "http://openweathermap.org/img/wn/" + data.list[5].weather[0].icon + "@2x.png"
                    day5ImgEl.classList = "card new"
                    document.querySelector('.day5').appendChild(day5ImgEl)

                    var day5El = document.createElement('div');
                    day5El.innerHTML = "Temperature: " + data.list[5].main.temp + " F <br> Wind: " + data.list[5].wind.speed + " mph <br> Humidity: " + data.list[5].main.humidity + " %";
                    day5El.classList = "card new"
                    document.querySelector('.day5').appendChild(day5El)




                })
        })

}

function setHistory() {
    for (i = 0; i < storage.length; i++) {
        var historyEl = document.querySelector(".history");
        var historyNew = document.createElement('li');
        historyNew.innerHTML = storage[i]
        historyNew.classList = "list-group-item"
        historyEl.appendChild(historyNew)
    }
}

function getHistory() {
    var storage = localStorage.getItem('searchHistory');
    if (storage) {
        storage = JSON.parse(storage);
    } else {
        storage = [];
    }
    return storage;
  }