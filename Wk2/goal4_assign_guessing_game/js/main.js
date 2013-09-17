/**
 * GUESSING GAME:
 *
 * Created By:Adam Zaimes
 * Date:9/17/2013
 * 
 * GUESSING GAME
 */

(function (){
    var dom = {
        input:document.querySelector("#input"),
        output:document.querySelector("#output"),
        button:document.querySelector("button")
    };


    var buttonClicks = 0;

    var magicNum = Math.floor(Math.random() * 10 + 1);
    console.log(magicNum);


    dom.button.onclick = function(e){


        //if else statements to determine if the user guesses correctly
        if (buttonClicks < 3){
            if (dom.input.value < 1 || dom.input.value >10){
                document.getElementById("output").innerHTML = ("Your guess needs to be between 1 and 10. Try again.");//validate input number
            }
            else if (dom.input.value < magicNum){
                document.getElementById("output").innerHTML = ("Your guess is too low, please try again");
            } else if (dom.input.value > magicNum){
                document.getElementById("output").innerHTML = ("Your guess is too high, please try again!");
            }else if (dom.input.value == magicNum){
                document.getElementById("output").innerHTML = ("You Win!");
                outOfGuesses();                                   // call game over function
            }                                            // If statement for clicks
            buttonClicks++;                                            //  adding to click count
        }else{                                                     //else to end display and disable button
            outOfGuesses();
        }

        e.preventDefault();                                 // prevent to stop function
        return false;
    };

    function outOfGuesses(){                                     //game over function
        //var buttonSelec = document.querySelector("button");       // assigns button
        dom.button.addEventListener("click", function(){dom.button.innerHTML = "Please refresh the page to try again."}, false);   //stops button from functioning after max tries reached

    }

})();
