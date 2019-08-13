const organ = document.createElement('div');
organ.classList.add('organ');

organ.innerHTML = `


  <div >
    <label for="inputCity">Enter City</label>
    <input  class='radiob' type="city"  id="inputCity" aria-describedby="cityHelp" placeholder="Enter city">
    
  </div>
  
  

<div class='radiob'>
  <input class='radiob' type="radio" name="exampleRadios" id="exampleRadios1" value="Fahrenheit: " checked>
  <label  for="exampleRadios1">
    Farenheit
  </label>
</div>
<div class='radiob'>
  <input class='radiob' type="radio" name="exampleRadios" id="exampleRadios1" value="Celsius: ">
  <label  for="exampleRadios1">
    Celsius
  </label>
</div>
<br>
<button id="submitButton" type="submit" class="btn btn-secondary">Submit</button>

`

export {organ}