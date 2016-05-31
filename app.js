var app;
(function(){
	app=angular.module("Tistechko",[]);
	app.controller("MainController",["$timeout",function($timeout){
		var oThis=this;
		this._date="";
		this._time="";
		var d=new Date();
		this.news=[];
		this.persons=[];

		var a=function(){
			d=new Date();
			oThis._time=d.getHours()+":"+d.getMinutes()+":"+d.getSeconds();
			oThis._date=d.getDay()+" - "+d.getMonth()+" - "+d.getFullYear();
			$timeout(a,1000);
		};

		var addPerson=function(nam,rat){
			var pers={name:nam,rating:rat,id:Date.now().toString()};
			oThis.persons.push({name:nam,rating:rat,id:Date.now().toString()});
			return pers;
		};

		var addNew=function(_code,_auth){
			oThis.news.push({newsCode:_code,author:_auth,creationTime:Date.now()});
		};

		this.getTop=function(count){
			var blist=[];
			
			for (var j = 0; j < count; j++) {
				var rating=0;
				var sel;
			for (var i = 0; i < this.persons.length; i++) {
				if(this.persons[i].rating>rating && blist.indexOf(this.persons[i])===-1){
					sel=this.persons[i];
					rating=sel.rating;
				}
			};
			blist.push(sel);
			};
			return blist;
		};

		a();

		addPerson("na",100);
		addPerson("bt",110);
		addPerson("ev",1000);
		addPerson("pm",200);
		var p = addPerson("kq",150);

		addNew("<h3>This are News</h3>",p);
	}]);
})();
