
let cats = [
    {
        name: 'Kurmi',
        image_url: 'https://static.wikia.nocookie.net/villains/images/8/88/Kuromi.png/revision/latest/thumbnail/width/360/height/360?cb=20210811094158',
        clicks_count: 0
    },
    {
        name: 'Hello Kitty',
        image_url: 'https://static.wikia.nocookie.net/sanrio/images/1/10/Hello-kitty.png/revision/latest/scale-to-width-down/280?cb=20171105235741',
        clicks_count: 0
    },
    {
        name: 'KiKi',
        image_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr43e5F55S6cWrm1m-M3uGhstP_-QrcjhOjT-h1Ls795tuUegCTSaVkfev8i61U0YOMsY&usqp=CAU',
        clicks_count: 0
    }
];


var increaseCount = (function(cat){

    var countEl = document.getElementById(`${cat.name.replace(/ /g, '-')}-count`);

    return function(){

        cat.clicks_count += 1;

        countEl.innerText = cat.clicks_count;
    }

});


let cats_container = document.getElementById('cats');
let list = document.getElementById('list');

let ol = document.createElement('ol');
var myFunction = increaseCount;



var showCat = (function(cat){
    return function(){
        console.log(cat)
        var div = document.createElement('div');

        var title = document.createElement('h2');
        title.innerText = cat.name;
    
        var image = document.createElement('img');
    
        image.setAttribute('src', cat.image_url);
      
        var clicks = document.createElement('h4');
        clicks.innerText = `${cat.name}'s clicks count:`;
    
        var count = document.createElement('h4');
        count.innerText = cat.clicks_count;
        count.id = `${cat.name.replace(/ /g, '-')}-count`;
    
        div.id = cat.name.replace(/ /g, '-');

        div.appendChild(title);
        div.appendChild(image);
        div.appendChild(clicks);
        div.appendChild(count);   
    
        cats_container.innerHTML = '';
        cats_container.appendChild(div);    
    
        image.addEventListener('click', myFunction(cat), false);
    }
   


});



cats.forEach(cat => {
     let listItem = document.createElement('li');
     listItem.textContent = cat.name;
     listItem.style.cursor = 'pointer';
     listItem.addEventListener('click', showCat(cat), false);
 
     ol.appendChild(listItem);
});


list.appendChild(ol);
