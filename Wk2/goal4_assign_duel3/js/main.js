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
    var round = 1;
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
            document.querySelector('.clear').innerHTML='<center><h2>' +result+ '</h2></center>';
            console.log(result);
            if (result === "No Winner")
            {
                document.querySelector('#round').innerHTML= "Round: "+ round++;


            } else
            {

                button.onclick.cancelBubble=true;
                button.innerHTML= "RESET";
                button.onclick= function refresh(){
                    window.location.reload();
                }

            }
        }
    }
    function winnerCheck(){
        var result = "No Winner";
        if (fighters[0].health < 1 && fighters[1].health < 1)
        {
            result = "You Both Die!"
        } else if(fighters[0].health < 1) {
            result = fighters[1].names + " WINS!!"
        } else if(fighters[1].health < 1) {
            result = fighters[0].names + " WINS!!"
        }
        return result;
    }




    /*******  The program gets started below ******/
   // fight();
})();
