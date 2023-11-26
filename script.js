
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


var increaseCount = (function(name){
  
    var count = 0;

    var countEl = document.getElementById(`${name.replace(/ /g, '-')}-count`);

    return function(){

        count += 1;

        countEl.innerText = count;
    }

});

var myFunction = increaseCount;

let cats_container = document.getElementById('cats');

cats.forEach(cat => {

    var div = document.createElement('div');

    var title = document.createElement('h2');
    title.innerText = cat.name;

    var image = document.createElement('img');

    image.setAttribute('src', cat.image_url);
  
    var clicks = document.createElement('h4');
    clicks.innerText = `${cat.name}'s clicks count:`;

    var count = document.createElement('h4');
    count.id = `${cat.name.replace(/ /g, '-')}-count`;

    div.id = cat.name;

    div.appendChild(title);
    div.appendChild(image);
    div.appendChild(clicks);
    div.appendChild(count);   

    cats_container.appendChild(div);    

    image.addEventListener('click', myFunction(cat.name), false);

});


