/*  Name:Adam Zaimes
	Date:9/17/2013
	Assignment:Goal 5: Form Validation
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

(function(){
	var button = document.getElementById('f_submit');    //assigns button to it's ID

    var myForm = function(e){                           //collects user data

	    //user input from form
	    var f_username = document.getElementById('f_username');
	    var f_email = document.getElementById('f_email');
	    var f_phone = document.getElementById('f_phone');
	    var f_password = document.getElementById('f_password');
	    var f_ssn = document.getElementById('f_ssn');

	    validateField(f_username); //calls validate function for each user input
	    validateField(f_email);
	    validateField(f_phone);
	    validateField(f_password);
	    validateField(f_ssn);

	    e.preventDefault();
        return false;        //prevents default browser actions
    };


    var validateField = function(inputName){
	                                                         //patterns from regexlib.com some slightly modified
        if (inputName.name === 'f_username'){
	        var regExp = /^([A-Z]\w+\s?)*$/;    //regular expression to force user to use capital letter for first letter of first and last name
	        }
	    if (inputName.name === 'f_email'){
		    var regExp = /^[\w\.=-]+@[\w\.-]+\.[\w]{2,4}$/; // pattern  to validate email and check the top level domain is between 2 and 4 characters long
	    }
	    if (inputName.name === 'f_phone'){
		    var regExp = /(\(\d{3}\)?)\d{3}-\d{4}/;  //requires phone to follow (xxx)xxx-xxxx format
	    }
	    if (inputName.name === 'f_password'){
		    var regExp = /^([a-zA-Z])\w{3,15}$/; //requires password to be between 4-15 characters long with the first character being a letter and no numbers or special characters
	    }
	    if (inputName.name === 'f_ssn'){
		    var regExp = /^\d{3}-\d{2}-\d{4}$/; //ssn xxx-xx-xxx
	    }

        var pass = regExp.test(inputName.value);        //test reg exp
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling; //determines the error message

        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        }
    };

	button.onclick=myForm;
})();


