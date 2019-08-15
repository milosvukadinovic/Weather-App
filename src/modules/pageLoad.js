import '../css/styles.css';
import '../css/bootstrap.min.css';
import {header} from './header';
import {organ} from './organ';
import {show} from './show';

const pageLoad = () => {
  const body = document.getElementsByTagName('body')[0];

  body.appendChild(header);
  body.appendChild(organ);
  body.appendChild(show);

  document.getElementById('submitButton').addEventListener('click', (event) => {
    const name = document.getElementById('inputCity').value;

    const key = 'ab021ea076eeea8a598e6ce2391edad8';
    fetch(
        'https://api.openweathermap.org/data/2.5/weather?q=' +
        name +
        '&appid=' +
        key
    )
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          document.getElementsByClassName('show')[0].style.visibility='visible';
          document.getElementById('showName').innerHTML = data.name;
          const type = document.querySelector('input[name="eR"]:checked')
              .value;
          document.getElementById('showType').innerHTML = type;
          if (type == 'Celsius: ') {
            document.getElementById('showTemp').innerHTML = (
              data.main.temp - 273.15
            ).toFixed(2);
          } else {
            document.getElementById('showTemp').innerHTML = (
              ((data.main.temp - 273.15) * 9) / 5 +
            32
            ).toFixed(2);
          }

          document.getElementById('showHum').innerHTML = 'Humidity: ';
          document.getElementById('showDesc').innerHTML = data.main.humidity;
        })
        .catch(function() {});
  });
};

export {pageLoad};
