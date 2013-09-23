/**
 * Name:Adam Zaimes
 * Date: 9-23-2013
 *
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */
(function(){


	//constructor
	var Person = function(name, row) {

		this.name = name;
		this.action = Person.actions[Math.floor(Math.random() * Person.acrtions.length)];
		this.job = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
		this.row = row;

		var id = document.getElementById("r" + this.row + "c3");
		id.innerHTML = this.action;

	};

	//allows main.js to access
	window.Person = Person;

	Person.jobs = ["Student", "Mechanic", "Journalist", "Architect", "Psychologist"];
	Person.actions = ["Sleeping", "Eating", "Working"];

	//change actions at random
	Person.prototype.update= function(){

		if(Math.floor(Math.random() < 0.01)) {
			//changes action
			this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];

			var id = document.getElementById("r" + this.row + "c3");
			id.innerHTML=this.action;
		}
	}




})();