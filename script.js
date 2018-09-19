window.addEventListener("load", function() {

  let button = document.getElementsByTagName('button')[0];
  button.addEventListener("click", nowy.text )
  
})


class foo {
  text() {
    let input = document.getElementsByTagName('input')[0];
    let result = document.getElementById('result');
    parseInt(input);
    if(isNaN(input.value)) {
      result.textContent = "PODAJ LICZBĘ!";
    } else {
      result.textContent = input.value;
    }
  }
}

let nowy = new foo();
