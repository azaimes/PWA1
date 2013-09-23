/**
 * Name:Adam Zaimes
 * Date: 9-23-2013
 *
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){

	//sets up variables for the arrays and interval
	var names = ["Monica", "Lacy", "Erick", "Clifton", "Hunter"];
	var people = [];
	var interval;

	//for loop
	for(var i=0; i<3; i++) {
		var personRandom = Math.floor(Math.random() * names.length);
		var person = new Person(names[personRandom], i + i);

		//call the function to update cells with names and job
		populateHTML(person.name, "r" + (i + 1) + "c1");
		populateHTML(person.job, "r" + (i + 1) + "c2");

		people.push(person);
		names.splice(personRandom, 1);

		console.log(person);
	}

	//checks that only one instance runs
	clearInterval(interval);
	interval = setInterval(runUpdate, 1000 / 30);

	function runUpdate() {
		people.forEach(function(element){
			element.update();
		})
	}

	function populateHTML(data, field){
		var id= document.getElementById(field);
		id.innerHTML = data;
	}






})();