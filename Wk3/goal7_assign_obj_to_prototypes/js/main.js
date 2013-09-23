/**
 * Name:Adam Zaimes
 * Date: 9-23-2013
 *
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){


	var names = ["Monica", "Lacy", "Erick", "Clifton", "Hunter"];
	var people = [];


	//for loop
	for(var i=0; i<3; i++) {

		var personIndex = Math.floor(Math.random() * names.length);
		var person = new Person(names[personIndex], i + 1);

		//call the function to update cells with names and job
		populateHTML(person.name, "r" + (i + 1) + "c1");
		populateHTML(person.job, "r" + (i + 1) + "c2");

		people.push(person);
		names.splice(personIndex, 1);

		console.log(person);
	}

	//checks that only one instance runs
	setInterval(runUpdate, 1000 / 30);


	function runUpdate() {
		people.forEach(function(element){
			element.update();
		});
	}
	//updates the HTML
	function populateHTML(data, field){
		var id= document.getElementById(field);
		id.innerHTML = data;
	}






})();