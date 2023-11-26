$(function(){

    let data = {
        current_cat: null,
        is_admin: false,
        cats: [
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
        ]
        
    }

    var model = {
        init: function(){
            // if (!localStorage.cats){
            //     localStorage.cats = JSON.stringify(data.cats);
            // }
        },
        add: function(obj){
            data.cats.push(obj);
        },
        getCats: function (){
            console.log(data.cats)
            return data.cats; //JSON.parse(localStorage.cats)
        },
        getCurrentCat: function(){
            return data.current_cat
        },
        setCurrentCat: function(cat){
            data.current_cat = cat;
        },
        increaseCount: function(cat){
            catItem = data.cats.find(c => c.name == cat.name);
            catItem.clicks_count += 1;
        },
        setAdminTrue: function(){
            data.is_admin = true;
        },
        setAdminFalse: function(){
            data.is_admin = false;
        }
    };


    var octopus = {
        addCat: function(cat){
            model.add(cat);
            listView.render();
        },
        getCats: function(){
            return model.getCats();
        },
        increaseCount: function(cat){
            model.increaseCount(cat);
        },
        getCurrentCat: function(){
            return model.getCurrentCat();
        },
        setCurrentCat: function(cat){
            model.setCurrentCat(cat);
        },
        setAdminTrue: function(){
            model.setAdminTrue();
        },
        setAdminFalse: function(){
            model.setAdminFalse();
        },
        init: function(){
            model.init();
            listView.init();
            currentCatView.init();
            adminView.init();
        }
    };


    var listView = {
        init: function(){

            this.list = document.getElementById('list');
            this.ol = document.createElement('ol');
            listView.render();
    
        },
        render: function(){

          this.ol.innerHTML = '';

            octopus.getCats().forEach(cat => {
                let listItem = document.createElement('li');
                listItem.textContent = cat.name;
                listItem.style.cursor = 'pointer';

                listItem.onclick = (function(catCopy) {
                    return function(){
                        octopus.setCurrentCat(catCopy);
                        currentCatView.render();
                    }
                })(cat);
               
                this.ol.appendChild(listItem);
           });  
           
           this.list.appendChild(this.ol);
        }
        
    };
    var currentCatView = {
        init: function(){
            this.catName = document.getElementById('cat-name');
            this.catImage = document.getElementById('cat-image');
            this.catCount = document.getElementById('cat-count');

            octopus.setCurrentCat(octopus.getCats()[0]);

            this.catImage.onclick = (function() {
                return function(){
                    octopus.increaseCount(octopus.getCurrentCat());
                    currentCatView.render();
                }
            })(cat);
            
            currentCatView.render();
        },
        render: function(){

            let current_cat = octopus.getCurrentCat();

            this.catName.textContent  = current_cat.name;
            this.catImage.src  = current_cat.image_url;
            this.catCount.textContent  = 'Total Clicks: ' + current_cat.clicks_count;
        }
        
    };
    var adminView = {
        init: function(){
            this.adminForm = document.getElementById('admin-form');
            this.adminBtn = document.getElementById('admin');

            this.addBtn = document.getElementById('add');
            this.cancelBtn = document.getElementById('cancel');

            this.render();
        },
        render: function(){
            this.adminBtn.addEventListener('click', function(event) {
                event.preventDefault();
                adminForm = document.getElementById('admin-form');
                adminForm.style.display = 'block';
            });
          
            this.addBtn.addEventListener('click', function(event) {
                event.preventDefault();
                
                this.catName = document.getElementById('new-cat-name');
                this.catImage = document.getElementById('new-cat-image');
                this.catCount = document.getElementById('new-cat-count');
            
                octopus.addCat( {
                    name: this.catName.value,
                    image_url: this.catImage.value,
                    clicks_count: parseInt(this.catCount.value)
                })
              
            });

            this.cancelBtn.addEventListener('click', function(event) {
                event.preventDefault();
                adminForm.style.display = 'none';
                octopus.setAdminFalse();     
            });
        }
    }

    octopus.init();
});













