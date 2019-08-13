const organ = document.createElement('div');
organ.classList.add('organ');

organ.innerHTML = `

<form>
  <div class="form-group">
    <label for="inputCity">Enter City</label>
    <input type="city" class="form-control" id="inputCity" aria-describedby="cityHelp" placeholder="Enter city">
    
  </div>
  
  

<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Farenheit
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option2">
  <label class="form-check-label" for="exampleRadios1">
    Celsius
  </label>
</div>
<br>
<button type="submit" class="btn btn-primary">Submit</button>
</form>
`

export {organ}