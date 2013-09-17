/**
 *
 * Name: Adam Zaimes
 * Date: 9/17/13
 * Assignment: Goal4 Duel4
 *
 */

//self-executing function
(function(){
    console.log("FIGHT!!!");
    //array ["name", player damage, player health]
    //var fighter1 = ["Green Lantern", 30, 100];
    //var fighter2 = ["Hulk", 30, 100];
    var fighters = [
      fighterOne = {names: "Green Lantern",damage: 30, health: 100},
      fighterTwo = {names: "Hulk",damage: 30, health: 100}
    ];

    var button = document.querySelector('.buttonblue');


    //initiate round
    var round = 0;
    document.querySelector('#kabal p').innerHTML=fighters[0].names + ': ' + fighters[0].health;
    document.querySelector('#kratos p').innerHTML=fighters[1].names + ': ' + fighters[1].health;
    document.querySelector('#round').innerHTML = "Start Round: " + round + " FIGHT";
    button.onclick=function(e){
        fight();


      };
    function fight(){

        if(round < 10){
            button.innerHTML="Fight!";
            //random formula is -- Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = fighters[0].damage * .5;
            var minDamage2 = fighters[1].damage * .5;
            var f1 = Math.floor(Math.random() * (fighters[0].damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (fighters[1].damage - minDamage2) + minDamage2);

            //inflict damage
            fighters[0].health -= f1;
            fighters[1].health -= f2;
            //adds to html
            document.querySelector('#kabal p').innerHTML=fighters[0].names + ': ' + fighters[0].health;
            document.querySelector('#kratos p').innerHTML=fighters[1].names + ': ' + fighters[1].health;


            console.log(fighters[0].names + ": " + fighters[0].health + " " + fighters[1].names + ":" + fighters[1].health);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result === "No Winner")
            {    round++;
                document.querySelector('#round').innerHTML= "Round: "+ round++ + result;


            } else if(result = fighterOne+" Wins"){

            }
        }
    }

    function winnerCheck(){
         results = " No Winner";
        console.log(results);
        if(fighters[0].health < 1 && fighters[1].health < 1){
            document.querySelector('#round').innerHTML = results = "You Both Die!";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round=0;
            button.innerHTML = "Restart?";
        }
        else if(fighters[0].health < 1){
            document.querySelector('#round').innerHTML = results = fighters[1].names + " IS VICTORIOUS!";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round=0;
            button.innerHTML = "Try Again?";
        }
        else if(fighters[1].health < 1){
            document.querySelector('#round').innerHTML = results = fighters[0].names + " IS VICTORIOUS!";
            fighters[0].health = 100;
            fighters[1].health = 100;
            round=0;
            button.innerHTML = "Restart?";
        }
        return results;

    }

    /*******  The program gets started below ******/
   // fight();
})();
