var main = document.getElementById('main');
var image = document.getElementById('image');
var list = document.getElementById('list');
var score = document.getElementById('score');

var sources = ['http://i.imgur.com/aww21Wr.png', 'http://i.imgur.com/Js3LWGK.png','http://i.imgur.com/a96PRBp.gif','http://i.imgur.com/1ULmF1L.png','http://i.imgur.com/i1a3Wbt.jpg'];

var names = ['pete the sneak','farty jim','frank furter','todd','derpy dan'];

function Cat(source, name){
  var cat = this;
  this.count = 0;
  
  this.name = name;
  this.tag = document.createElement('div');
      this.tag.innerHTML = this.name;
      this.tag.className = "name";
      list.appendChild(this.tag);
  
  this.cat = document.createElement('img');
    this.cat.src = source;
    this.cat.width = 200;
    this.cat.height = 200;

  this.increment = function(){
    cat.count++;
    cat.showData();
  }
  
  this.showData = function(){
    score.innerHTML = cat.name + ": " + cat.count;
  }

  this.showCat = function(){
   cat.showData();
   image.innerHTML = "";
   image.appendChild(cat.cat);
  }
  
    this.tag.addEventListener('click', this.showCat);  
  
    this.cat.addEventListener('click', this.increment);
  
}

for(i = 0; i < sources.length; i++){
  new Cat(sources[i], names[i]); 
}

//DISPLAY ONCLICK: 
    //this.display.appendChild(this.cat);
    //this.display.appendChild(this.score);
