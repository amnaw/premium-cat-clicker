$(function(){

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

    var model = {
        init: function(){
            if (!localStorage.cats){
                localStorage.cats = JSON.stringify(cats);
            }
        },
        add: function(obj){
            cats.push(obj);
            localStorage.cats = JSON.stringify(cats);
        },
        getCats: function (){
            return JSON.parse(localStorage.cats)
        }
    };


    var octopus = {
        addCat: function(cat){
            model.add(cat);
            view.render();
        },
        getCats: function(){
            return model.getCats();
        },
        init: function(){
            model.init();
            view.init();
        }
    };


    var view = {
        init: function(){

            let cats_container = document.getElementById('cats');
            this.list = document.getElementById('list');
            this.ol = document.createElement('ol');
            var increaseCount = (function(cat){

                var countEl = document.getElementById(`${cat.name.replace(/ /g, '-')}-count`);
            
                return function(){
            
                    cat.clicks_count += 1;
            
                    countEl.innerText = cat.clicks_count;
                }
            
            });
            this.showCat = (function(cat){
                return function(){
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
                
                    image.addEventListener('click', increaseCount(cat), false);
                }
            });

            view.render();
            

        },
        render: function(){

            octopus.getCats().forEach(cat => {
                let listItem = document.createElement('li');
                listItem.textContent = cat.name;
                listItem.style.cursor = 'pointer';
                listItem.addEventListener('click', this.showCat(cat), false);
            
                this.ol.appendChild(listItem);
           });  
           
           this.list.appendChild(this.ol);
       
        }
    };

    octopus.init();
});













