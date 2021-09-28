function aditya() {
  const fetchData = fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Jharkhand,IN&APPID=f66f91f3b5043e058ceb031bd68822b1"
  );
  fetchData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".aditya-yourName").innerHTML =
        "Aditya Kumar Dubey";
      document.querySelector(".userinterest").innerHTML = "competitive coding";
      document.querySelector(".userprofession").innerHTML = "student";
      document.querySelector(".adityaLocation").innerHTML = data.name;
      document.querySelector(".adityaTemp").innerHTML = data.main.temp;
      document.querySelector(".adityaCountry").innerHTML = data.sys.country;
      document.querySelector(".adityaWeather").innerHTML =
        data.weather[0].description;
    })
    .catch((err) => {
      console.log(err);
    });
}
function saketh() {
  const fetchData = fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=Jharkhand,IN&APPID=f66f91f3b5043e058ceb031bd68822b1"
  );
  fetchData
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      document.querySelector(".user-yourName").innerHTML = "Saketh kumar pabba";
      document.querySelector(".userinterest").innerHTML = "competitive coding";
      document.querySelector(".userprofession").innerHTML = "student";
      document.querySelector(".sakethLocation").innerHTML = data.name;
      document.querySelector(".sakethTemp").innerHTML = data.main.temp;
      document.querySelector(".sakethCountry").innerHTML = data.sys.country;
      document.querySelector(".sakethWeather").innerHTML =
        data.weather[0].description;
    })
    .catch((err) => {
      console.log(err);
    });
}
