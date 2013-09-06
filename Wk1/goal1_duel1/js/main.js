/**
 *
 * Name: Adam Zaimes
 * Date: 9/5/13
 * Assignment: Goal1 Duel1
 *
 */

//self-executing function
(function(){
    console.log("FIGHT!!!");

    //Player names
    var playerOneName = "Green Lantern";
    var playerTwoName = "Hulk";

    //damage
    var player1Damage = 20;
    var player2Damage = 20;

    //health
    var playerOneHealth = 100;
    var playerTwoHealth = 100;

    //initiate round
    var round=0;

    function fight(){
        alert(playerOneName + ":" + playerOneHealth+"   *START*   " + playerTwoName + ":" + playerTwoHealth);
        for (var i = 0; i < 10; i++)
        {
            //random formula is -- Math.floor(Math.random() * (max - min) + min);
            var minDamage1 = player1Damage * .5;
            var minDamage2 = player2Damage * .5;
            var f1 = Math.floor(Math.random() * (player1Damage - minDamage1) + minDamage1);
            var f2 = Math.floor(Math.random() * (player2Damage - minDamage2) + minDamage2);

            //inflict damage
            playerOneHealth -= f1;
            playerTwoHealth -= f2;

            console.log(playerOneName + ": " + playerOneHealth + " " + playerTwoName + ":" + playerTwoHealth);

            //check for winner
            var result = winnerCheck();
            console.log(result);
            if (result==="no winner")
            {
                round++;
                alert(playerOneName + ":" + playerOneHealth + "   *ROUND*   " + round + " OVER" + "*  " + playerTwoName + ":" + playerTwoHealth);
            } else{
                alert(result);
                break;
            };
        };
    };

    function winnerCheck(){
        var result = "No Winner";
        if (playerOneHealth < 1 && playerTwoHealth < 1)
        {
            result = "You Both Die!";
        } else if(playerOneHealth < 1) {
            result = playerTwoName + " WINS!!"
        } else if(playerTwoHealth < 1) {
            result = playerOneName + " WINS!!"
        };
        return result;
    };

    /*******  The program gets started below ******/
    fight();
})();
