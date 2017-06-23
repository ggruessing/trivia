var quiz = [

	["Which of these is unlike the other?","W","X","V","A"],
	["Which is heavier?","Ounce of Lead","Ounce of Gold","Ounce of Feathers","B"],
	["Incorrect assumptions about how words relate to eachother may lead one awry. Which word is spelled incorrectly?","Liquefy","Inoculate","Sacreligious","C"],
	["Person A, B, and C are in a straight line wearing either a black or white hat. There is at least 1 white and 1 black hat. They do not know the color of their own hat, only the hat color of those in front of them. The order is as such. <br> (front)A-B-C(back)<br>After a minute, one of the persons shouts out their hat color. Which person is it?","A","B","C","B"],
	["Question five. This is it, the last question, the fifth. What was the first ordinal in the previous two sentences?","First","Last","Fifth","B"],
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
			
			$(".quiz").html('Question: ' + quiz[counter-1][0]+'<br><br>'+quiz[counter-1][1]+'    <button class="button" id="buttonA" display=none>A</button><br><br>'+quiz[counter-1][2]+'    <button class="button" id="buttonB">B</button><br><br>'+quiz[counter-1][3]+'    <button class="button" id="buttonC">C</button><br><br>Time Left:')
			noTime= false
			time=10
			$('button').on('click', function() {
    			game()
            	answers.push($(this).text().trim());
            if(counter > quiz.length){

			clearInterval(countDown)
			for (var i = 0; i < quiz.length; i++) {
				if (quiz[i][4]===answers[i]){
					score++
				}
			}
			$(".quiz").html( "GAME OVAH<br>Your Final Score: "+score+"<br>Answers:<br>Question 1: W - The only letter with two syllables<br> Question 2: Ounce of Gold - Rare metals are measured in Troy Ounces (31.1 g), common metals and feathers being measured in Avoirdupois Ounces (28.3 g).<br>Question 3: Sacrilegious, rather than Sacreligious<br>Question 4: B can know their hat color because they see A's color and C, who can see both hats has not determined their own<br>Question 5: Last. Ordinal- adjective: Relating to a thing's position in a series." )
	    }
            	 if ($(this).text().trim()===quiz[counter-2][4]){

					$(".quiz").html("Correct!<br>Next Question in:")
					time=5
					noTime=true
				}
				else{
					$(".quiz").html( "GAME OVAH<br><br>Your Final Score: "+score+"<br><br>Answers:<br><br>Question 1: W - The only letter with two syllables<br><br>Question 2: Ounce of Gold - Rare metals are measured in Troy Ounces (31.1 g), common metals and feathers being measured in Avoirdupois Ounces (28.3 g)<br><br>Question 3: Sacrilegious, rather than Sacreligious<br><br>Question 4: B can know their hat color because they see A's color and C, who can see both hats has not determined their own<br><br>Question 5: Last. Ordinal- adjective: Relating to a thing's position in a series.<br><br>Time Left on the Clock:" )
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
			$(".quiz").html( "GAME OVAH<br><br>Your Final Score: "+score+"<br><br>Answers:<br><br>Question 1: W - The only letter with two syllables<br><br>Question 2: Ounce of Gold - Rare metals are measured in Troy Ounces (31.1 g), common metals and feathers being measured in Avoirdupois Ounces (28.3 g)<br><br>Question 3: Sacrilegious, rather than Sacreligious<br><br>Question 4: B can know their hat color because they see A's color and C, who can see both hats has not determined their own<br><br>Question 5: Last. Ordinal- adjective: Relating to a thing's position in a series.<br><br>Time Left on the Clock:" )
	    }

 		 if (answers.length < quiz.length) {
			$(".quiz").html('Question: ' + quiz[counter][0]+'<br><br>'+quiz[counter][1]+'    <button class="button" id="buttonA" display=none>A</button><br><br>'+quiz[counter][2]+'    <button class="button" id="buttonB">B</button><br><br>'+quiz[counter][3]+'    <button class="button" id="buttonC">C</button><br><br>Time Left:')
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



   
	


