
var elem = document.getElementById('image');
var countEl = document.getElementById('count');

var increaseCount = (function(){
  
    var count = 0;

    return function(){

        count += 1;

        countEl.innerText = count;
    }

});

var myFunction = increaseCount;

elem.addEventListener('click', myFunction(), false);