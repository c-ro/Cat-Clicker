// var main = document.getElementById('main');
// var image = document.getElementById('image');
// var list = document.getElementById('list');
// var score = document.getElementById('score');

window.onload = function(){
///// MODEL
	var model = {
		currentCat: null,
		cats: [
			{
				count: 0,
				catName: 'todd',
				source: 'http://i.imgur.com/Js3LWGK.png'
			},

			{
				count: 0,
				catName: 'pete the sneak',
				source:'http://i.imgur.com/aww21Wr.png'
			},
			{
				count: 0,
				catName: 'frank furter',
				source: 'http://i.imgur.com/a96PRBp.gif'
			},
			{
				count: 0,
				catName: 'derpy dan',
				source: 'http://i.imgur.com/1ULmF1L.png'
			},
			{
				count: 0,
				catName: 'farty jim',
				source: 'http://i.imgur.com/i1a3Wbt.jpg'
			},
		],

		getAllCats: function(){
			return this.cats;
		}
	},

//// CONTROLLER

	controller = {

		init: function(){
			model.currentCat = model.cats[0];
			listView.init();
			catView.init();
			adminView.init();
		},

		getCats: function(){
			return model.getAllCats();
		},

		getCurrentCat: function(){
			return model.currentCat;
		},

		setCurrentCat: function(cat){
			model.currentCat = cat;
		},

		increment: function(){
			model.currentCat.count++;
			catView.renderCount(model.currentCat);
		},

		updateCat: function(object){
			// model.currentCat = 
		}
	},

///// VIEW

	listView = {

		init: function(){
			this.list = document.getElementById('list');
			this.render();
		},

		render: function(){
			this.list.innerHTML = '';
			var cats = controller.getCats();

			for(i = 0; i < cats.length; i++){
				cat = cats[i];

				listItem = document.createElement('div');
				listItem.innerHTML = cat.catName;

				listItem.addEventListener('click', (function(catCopy){
					return function(){
						controller.setCurrentCat(catCopy);
						catView.render();
					};
				})(cat));

				this.list.appendChild(listItem);
			}
		}
	},

	catView = {
		init: function(){
			var currentCat = controller.getCurrentCat();
				this.image = document.getElementById('catImage');
				this.score = document.getElementById('score');

				this.image.addEventListener('click', function(){
					controller.increment();
				})

				this.render();
		},

		render: function(cat){
			var currentCat = controller.getCurrentCat();
			this.image = document.getElementById('catImage');
			this.image.src = currentCat.source;
			this.renderCount(currentCat);
		},

		renderCount: function(cat){
			score.innerHTML = cat.catName + ": " + cat.count;
		},

		increment: function(cat){
			cat.dataset.count++;
			catView.renderCount(cat);
		}
	},

	adminView = {
		init: function(){
			var currentCat = controller.getCurrentCat();
				this.list = document.getElementById('list');
				this.admin = document.createElement('div');
				this.admin.id = 'admin';
				this.admin.innerHTML = 'admin';
				this.list.appendChild(this.admin);

				this.cancelButton = document.getElementById('cancel');
				this.cancelButton.addEventListener('click', adminView.cancel);

				this.admin.addEventListener('click', function(){
					adminView.render();
				})
		},

		render: function(){
			var currentCat = controller.getCurrentCat();
				this.adminPanel = document.getElementById('admin-panel');
				this.adminPanel.style.display = 'block';

			this.catName = document.getElementById('catName');
				this.catName.defaultValue = currentCat.catName;
 			this.source = document.getElementById('source');
 				this.source.defaultValue = currentCat.source;
			this.count = document.getElementById('count');
				this.count.defaultValue = currentCat.count;

				function getValue(){
					var data = {
						catName: this.catName.value,
						source: this.source.value,
						count: this.count.value
					};
					return data;
				}

			this.adminButton = document.getElementById('update');
			this.adminButton.addEventListener('click', function(){adminView.update(getValue())});
		},

		cancel: function(){
			this.adminPanel = document.getElementById('admin-panel');
			this.adminPanel.style.display = 'none';
		},

		update: function(cat){
			var currentCat = controller.getCurrentCat();
			this.adminPanel = document.getElementById('admin-panel');
			console.log(cat);
			for(i = 0; i < model.cats.length; i++){
			    if(currentCat.catName === model.cats[i].catName){
			    	console.log(cat.catName);
			        model.cats[i].catName = cat.catName;
			        model.cats[i].source = cat.source;
			        model.cats[i].count = cat.count;
			   		catView.render();
			   		listView.render();
			        this.adminPanel.style.display = 'none';
			    }
			};
		}
	}

	controller.init();
};

