var quiz = [

	["q1","c1","c2","c3","A"],
	["q2","c1","c2","c3","B"],
	["q3","c1","c2","c3","C"],
	["q4","c1","c2","c3","A"],
	["q5","c1","c2","c3","B"],
]
var answers = []
var score = 0
var time = 5
var counter = 0
var noTime = false

var str = 'Press the button to begin! <button class="button" id="button">Start</button>',
    i = 0,
    isTag,
    text;

var type = function() {
    text = str.slice(0, ++i);
    if (text === str) return;
    
    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if( char === '<' ) isTag = true;
    if( char === '>' ) isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
};


window.onload = function() {
$(document).on("click" , "#button", all);
}
type()

var all = function(){

	
	var count = function () {

		time--
		$("#timer").html(time)


		if ((time===0)&&(noTime===false)){
			$(".quiz").html("Time up, anwser is: " +quiz[counter-1][4]+"<br>Next Question in:")
			
			time=5
			counter++
			noTime= true
		}

		else if ((time===0)&&(noTime===true)){
			
			$(".quiz").html('Question: ' + quiz[counter-1][0]+'<br>'+quiz[counter-1][1]+'<button class="button" id="buttonA" display=none>A</button><br>'+quiz[counter-1][2]+'<button class="button" id="buttonB">B</button><br>'+'<br>'+quiz[counter-1][3]+'<button class="button" id="buttonC">C</button><br>Time Left:')
			noTime= false
			time=10
			$('button').on('click', function() {
    			game()
            	answers.push($(this).text().trim());
   //          if(counter > quiz.length){

			// clearInterval(countDown)
			// for (var i = 0; i < quiz.length; i++) {
			// 	if (quiz[i][4]===answers[i]){
			// 		score++
			// 	}
			// }
			// $(".quiz").html("GAME OVAH<br>Your Final Score: "+score)
	  //   }
            	 if ($(this).text().trim()===quiz[counter-2][4]){

					$(".quiz").html("Correct!<br>Next Question in:")
					time=5
					noTime=true
				}
				else{
					$(".quiz").html("Hella wrong, anwser is: " +quiz[counter-2][4]+"<br>Next Question in:")
					$("#timer").attr('display','none')
					time=5
					noTime= true
				}	
			});	
		}
	}

countDown = setInterval(count, 1000);

	var game = function(){

		if(counter >= quiz.length){

			clearInterval(countDown)
			for (var i = 0; i < quiz.length; i++) {
				if (quiz[i][4]===answers[i]){
					score++
				}
			}
			$(".quiz").html("GAME OVAH<br>Your Final Score: "+score)
	    } 

 		 if (answers.length < quiz.length) {
			$(".quiz").html('Question: ' + quiz[counter][0]+'<br>'+quiz[counter][1]+'<button class="button" id="buttonA" display=none>A</button><br>'+quiz[counter][2]+'<button class="button" id="buttonB">B</button><br>'+'<br>'+quiz[counter][3]+'<button class="button" id="buttonC">C</button><br>Time Left:')
			counter++
			time=10
    		$('button').on('click', function() {
    			game()
            	answers.push($(this).text().trim());

            	if ($(this).text().trim()===quiz[counter-2][4]){

					$(".quiz").html("Correct!<br>Next Question in:")
					time=5
					noTime=true
				}

				else{
					$(".quiz").html("Hella wrong, anwser is: " +quiz[counter-2][4]+"<br>Next Question in:")
					$("#timer").attr('display','none')
					time=5
					noTime= true
				}
           
			});
		}
		
	}	
game()
}



   
	




 
