const apiKey = 'd0ed7d6e2a754bc5afa5ef46d002d3b8';

document.querySelector('#submit-button').addEventListener('click', function () {
  const city = document.querySelector('#city-input').value;

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)
    .then(response => response.json())
    .then(data => {
      let temp = data.main.temp;
      temp = Math.round(temp - 273.15);
      console.log(temp);
      let weather = data.weather[0].description;
      document.querySelector('#temp').innerHTML = temp + '&#8451;';
      document.querySelector('#weather').innerHTML = weather;
      document.querySelector('#temp-container').style.display = 'block';
    })
    .catch(error => console.error(error));
});


//fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey)