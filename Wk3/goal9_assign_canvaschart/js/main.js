/**
 * Created by: Adam Zaimes
 * Class: PWA1
 * Goal: Goal9
 */

console.log("start canvas");

(function(){
	var canvas = document.createElement("canvas");   //creates canvas html
	document.body.appendChild(canvas);
	var ctx = canvas.getContext('2d');
	canvas.width = 400;
	canvas.height = 300;
	var chartData = new Array(55, 77, 89, 100);

	var maxBarHeight = 200;

	var img = new Image();
	img.src = "images/bg.jpg";
	img.addEventListener("load", function () {
		ctx.drawImage(img, 0,0,400,300);
		drawBars();
	}, false);

	var drawBars = function(){                 //draws bars
		ctx.font = "14px Georgia";
		for(var i = 0, maxdata = chartData.length; i<maxdata; i++){
		ctx.fillStyle = "rgba(100,200,200,0.75)";
		var height = maxBarHeight*chartData[i]/100;
		ctx.rect(i*80+90,270-height,50,height);
			ctx.fill();
			ctx.fillStyle = "rgb(255,255,255)";
			ctx.fillText(chartData[i],i*85+100,50);
			drawChartText();


		}
	};

	var drawChartText = function(){          //add text to chart
		ctx.font="20px Georgia";
		ctx.fillStyle = "rgb(255,255,255)";
		ctx.fillText("TEST GRADES", 30, 30);
		var xAxisData =["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4"];
		ctx.font = "14px Georgia";
		ctx.fillStyle= "rgb(0,0,0)";
		for(var i= 0,max=xAxisData.length;i<max; i++){
			ctx.fillText(xAxisData[i],i*80+95,290);
		}
	}




})();