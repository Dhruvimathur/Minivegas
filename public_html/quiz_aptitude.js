// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
let questions = [
    {
        question : "935421×625=?",
        //imgSrc : "img/css.png",
        choiceA : "542622125",
        choiceB : "544638125",
        choiceC : "584632125",
		choiceD : "584638125",
        correct : "D"

    },
    {
        question : "What is the remainder when 17200 is divided by 18?",
        //imgSrc : "img/css.png",
        choiceA : "3",
        choiceB : "2",
        choiceC : "1",
		choiceD : "4",
        correct : "C"

    },

    {
        question : "(719×719+347×347-719×347)/(719×719×719+347×347×347)=?",
        //imgSrc : "img/css.png",
        choiceA : "1/372",
        choiceB : "25/133",
        choiceC : "1/1066",
		choiceD : "5/6",
        correct : "C"

    },

    {
        question :"Which one of the following can't be the square of a natural number?",
        //imgSrc : "img/css.png",
        choiceA : "128242",
        choiceB : "128881",
        choiceC : "31044",
		choiceD : "130321",
        correct : "A"

    },


    {
        question :"If x and y are positive integers such that (3x+7y) is a multiple of 11, then which of the followings are divisible by 11?",
        //imgSrc : "img/css.png",
        choiceA : "9x+4y",
        choiceB : "4x-9y",
        choiceC : "x+y+4",
		choiceD : "4x+6y",
        correct : "B"

    },


     {
        question :"What is the difference between local value and face value of 7 in the numeral 657903?",
        //imgSrc : "img/css.png",
        choiceA : "6993",
        choiceB : "7",
        choiceC : "7000",
		choiceD : "69993",
        correct : "A"

    },

    {
        question :"In how many ways can the letters of the word 'LEADER' be arranged?",
        //imgSrc : "img/css.png",
        choiceA : "120",
        choiceB : "480",
        choiceC : "360",
		choiceD : "4520",
        correct : "C"

    },


   

    {
        question :"In how many different ways can the letters of the word 'DETAIL' be arranged such that the vowels must occupy only the odd positions?",
        //imgSrc : "img/css.png",
        choiceA : "180",
        choiceB : "None of these",
        choiceC : "36",
		choiceD : "200",
        correct : "C"

    },



    {
        question :"How many 3-letter words with or without meaning, can be formed out of the letters of the word, 'LOGARITHMS', if repetition of letters is not allowed?",
        //imgSrc : "img/css.png",
        choiceA : "none of these",
        choiceB : "420",
        choiceC : "540",
		choiceD : "721",
        correct : "C"

    },


{
        question :"In how many ways can 7 boys be seated in a circular order?",
        //imgSrc : "img/css.png",
        choiceA : "60",
        choiceB : "5040",
        choiceC : "120",
		choiceD : "720",
        correct : "D"

    },


{
        question :"In how many ways can 7 beads can be arranged to form a necklace?",
        //imgSrc : "img/css.png",
        choiceA : "3060",
        choiceB : "480",
        choiceC : "360",
		choiceD : "4520",
        correct : "C"

    },


    {
        question :"If there are 9 horizontal lines and 9 vertical lines in a chess board, how many rectangles can be formed in the chess board?",
        //imgSrc : "img/css.png",
        choiceA : "920",
        choiceB : "480",
        choiceC : "360",
		choiceD : "1296",
        correct : "D"

    },

{
        question :"There are 8 points in a plane out of which 3 are collinear. How many straight lines can be formed by joining them?",
        //imgSrc : "img/css.png",
        choiceA : "16",
        choiceB : "22",
        choiceC : "26",
		choiceD : "4520",
        correct : "B"

    },



{
        question :"What is the least perfect square which is divisible by each of 21,36and 66?",
        //imgSrc : "img/css.png",
        choiceA : "213444",
        choiceB : "113444",
        choiceC : "1213444",
		choiceD : "720",
        correct : "A"

    },



{
        question :"If xv512=v648x,x512=648x, find the value of xx",
        //imgSrc : "img/css.png",
        choiceA : "60",
        choiceB : "12",
        choiceC : "48",
		choiceD :"24",
        correct : "D"

    },


{
        question :"A, B and C are the three contestants in one km race. If A can give B a start of 40 metres and A can give C a start of 64 metres. How many metres start can B give C?",
        //imgSrc : "img/css.png",
        choiceA : "60",
        choiceB : "25",
        choiceC : "120",
		choiceD : "720",
        correct : "B"

    },

   {
        question :"A card is randomly drawn from a deck of 52 cards. What is the probability getting an Ace or King or Queen?",
        //imgSrc : "img/css.png",
        choiceA : "3/13",
        choiceB : "1/13",
        choiceC : "1",
		choiceD : "4/13",
        correct : "A"

    },


    {
        question :"A bag contains 4 black, 5 yellow and 6 green balls. Three balls are drawn at random from the bag. What is the probability that all of them are yellow?",
        //imgSrc : "img/css.png",
        choiceA : "1/11",
        choiceB : "18/1",
        choiceC : "1\21",
		choiceD : "none of these",
        correct : "D"

    },



     {
        question :"Find the odd man out. 30, -5, -45, -90, -145, -195, -255",
        //imgSrc : "img/css.png",
        choiceA : "30",
        choiceB : "-5",
        choiceC : "-145",
	choiceD : "-225",
        correct : "B"

    },


    {
        question :"Find the odd man out. 3, 5, 15, 75, 1120, 84375",
        //imgSrc : "img/css.png",
        choiceA : "3",
        choiceB : "15",
        choiceC : "-75",
		choiceD : "-1120",
        correct : "D"

    },


     {
        question :"Find the odd man out. 5, 10, 40, 81, 320, 640, 2560",
        //imgSrc : "img/css.png",
        choiceA : "5",
        choiceB : "81",
        choiceC : "-320",
	choiceD : "2560",
        correct : "B"

    },
	
   
    {
        question :"How many possible outcomes are there when five dice are rolled in which at least one dice shows 6?",
        //imgSrc : "img/css.png",
        choiceA : "6^5-5^5",
        choiceB : "6^6-5^5",
        choiceC : "6^5",
	choiceD : "5^6",
        correct : "A"

    },
  
  
     {
        question :"In how many ways can 9 different colour balls be arranged in a row so that black, white, red and green balls are never together?",
        //imgSrc : "img/css.png",
        choiceA : "146200",
        choiceB : "219600",
        choiceC : "314562",
	choiceD : "345600",
        correct : "D"

    },

     {
        question :"In how many ways can 30 distinct toys be equally divided among 10 boys?",
        //imgSrc : "img/css.png",
        choiceA : "10^30",
        choiceB : "30!/(3!)^10",
        choiceC : "30C10",
	choiceD : "30^10",
        correct : "B"

    },
   
    {
        question :"In how many ways can you divide 28 persons into three groups having 3, 5, and 20 persons?",
        //imgSrc : "img/css.png",
        choiceA : "28!×3!/3!×5!×20!",
        choiceB : "28!/3!×5!×20!",
        choiceC : "None of these",
	choiceD : "28!/3!×5!×20!×3!",
        correct : "B"

    },

  
  
  {
        question :"If 4 (P's Capital) = 6(Q's Capital) = 10(R's Capital), then out of the total profit of Rs 4650, R will receive",
        //imgSrc : "img/css.png",
        choiceA : "600",
        choiceB : "700",
        choiceC : "800",
	choiceD : "900",
        correct : "D"

    },
 
 {
        question :"Insert the missing number. 12, 25, 49, 99, 197, 395, (...)",
        //imgSrc : "img/css.png",
        choiceA : "789",
        choiceB : "1579",
        choiceC : "722",
	choiceD : "812",
        correct : "A"

    },	

   {
        question :"Insert the missing number. 34, 7, 37, 14, 40, 28, 43, (...)",
        //imgSrc : "img/css.png",
        choiceA : "31",
        choiceB : "42",
        choiceC : "46",
	choiceD : "56",
        correct : "D"

    },	
    {
        question :"Insert the missing number. 2, 7, 10, 22, 18, 37, 26,...",
        //imgSrc : "img/css.png",
        choiceA : "42",
        choiceB : "52",
        choiceC : "46",
	choiceD : "62",
        correct : "B"

    }
	,	
{
        question :"4, 12, 48, 240, 1440, (...)",
        //imgSrc : "img/css.png",
        choiceA : "7620",
        choiceB : "10080",
        choiceC : "6200",
	choiceD : "10020",
        correct : "B"

    },
    {
        question :"1, 0.5, 0.25, 0.125, 0.0625, ?",
        //imgSrc : "img/css.png",
        choiceA : "0.03125",
        choiceB : "0.003125",
        choiceC : "0.04125",
	    choiceD : "0.0315",
        correct : "A"

    },


    {
        question :"Find the odd man out. 187, 264, 386, 473, 682, 781",
        //imgSrc : "img/css.png",
        choiceA : "473",
        choiceB : "386",
        choiceC : "682",
	    choiceD : "781",
        correct : "B"

    },


    {
        question :"Find the odd man out. 24,36,52,72,96",
        //imgSrc : "img/css.png",
        choiceA : "52",
        choiceB : "96",
        choiceC : "36",
	    choiceD : "24",
        correct : "A"

    },


    {
        question :"Find the odd man out. 362, 482, 551, 263, 344, 284",
        //imgSrc : "img/css.png",
        choiceA : "344",
        choiceB : "362",
        choiceC : "482",
	    choiceD : "263",
        correct : "A"

    },

    {
        question :" Find the odd man out. 742, 743, 633, 853, 871, 990, 532",
        //imgSrc : "img/css.png",
        choiceA : "743",
        choiceB : "853",
        choiceC : "871",
	    choiceD : "742",
        correct : "D"

    },


    {
        question :"Find the odd man out. 2, 5, 10, 17, 26, 38, 50, 65",
        //imgSrc : "img/css.png",
        choiceA : "38",
        choiceB : "26",
        choiceC : "50",
	    choiceD : "2",
        correct : "A"

    },


    {
        question :"Find the odd man out. 1, 27, 216, 512, 1024, 1331",
        //imgSrc : "img/css.png",
        choiceA : "1",
        choiceB : "1024",
        choiceC : "27",
	    choiceD : "216",
        correct : "B"

    },

    {
        question :"Find the odd man out. 6, 13, 18, 25, 30, 37, 40",
        //imgSrc : "img/css.png",
        choiceA : "40",
        choiceB : "25",
        choiceC : "30",
	    choiceD : "37",
        correct : "A"

    },


    {
        question :"Find the odd man out. 445, 221, 109, 46, 25, 11, 4",
        //imgSrc : "img/css.png",
        choiceA : "46",
        choiceB : "445",
        choiceC : "109",
	    choiceD : "25",
        correct : "A"

    },

    {
        question :"Find the odd man out. 1050, 510, 242, 106, 46, 16, 3",
        //imgSrc : "img/css.png",
        choiceA : "1050",
        choiceB : "510",
        choiceC : "106",
	    choiceD : "16",
        correct : "C"

    },

    {
        question :"Find the odd man out. 3, 8, 18, 38, 78, 158, 316",
        //imgSrc : "img/css.png",
        choiceA : "316",
        choiceB : "38",
        choiceC : "78",
	    choiceD : "158",
        correct : "A"

    },
    {
        question :"Find the odd man out. 23, 27, 36, 52, 77, 111, 162",
        //imgSrc : "img/css.png",
        choiceA : "111",
        choiceB : "162",
        choiceC : "52",
	    choiceD : "77",
        correct : "A"

    },
    {
        question :"The following equation may be corrected by interchanging which two signs?  5 × 15 ÷ 7 - 20 + 4 = 77",
        //imgSrc : "img/css.png",
        choiceA : "- and + ",
        choiceB : "× and ÷ ",
        choiceC : "+ and ÷ ",
	    choiceD : "+ and ×",
        correct : "C"

    },
    {
        question :"If P denotes '÷', Q denotes '×' R denotes '+' and S denotes '-', then. 18 Q 12 P 4 R 5 S 6 = ?",
        //imgSrc : "img/css.png",
        choiceA : "95",
        choiceB : "53 ",
        choiceC : "51",
	    choiceD : "57",
        correct : "B"

    },
    {
        question :"The H.C.F. of 595 and 252 is",
        //imgSrc : "img/css.png",
        choiceA : "1",
        choiceB : "7",
        choiceC : "11",
	    choiceD : "17",
        correct : "B"

    },
    {
        question :"(6.5 × 4.7 + 6.5 × 5.3) / (1.3 × 7.9 - 1.3 × 6.9)=?",
        //imgSrc : "img/css.png",
        choiceA : "3.9 ",
        choiceB : "39",
        choiceC : "34.45 ",
	    choiceD : "50",
        correct : "D"

    },
    {
        question :"The (4/5)th of a certain number is 64. Half of the number is ",
        //imgSrc : "img/css.png",
        choiceA : "40",
        choiceB : "32",
        choiceC : "80",
	    choiceD : "16",
        correct : "A"

    },
    {
        question :"sin220° + sin2 70° - tan2 45° = ? ",
        //imgSrc : "img/css.png",
        choiceA : "0",
        choiceB : "2",
        choiceC : "1",
	    choiceD : "1/2",
        correct : "A"

    },
    {
        question :"5 men or 9 women can do a piece of work 19 days. In how many days will 3 men and 6 women working together will finish the work? ",
        //imgSrc : "img/css.png",
        choiceA : "10 days ",
        choiceB : "15 days ",
        choiceC : "87 days ",
	    choiceD : "38 days ",
        correct : "B"

    },
    {
        question :"A train 132 metre long passes a telegraph post in 6 seconds. The speed of the train is ",
        //imgSrc : "img/css.png",
        choiceA : "70 km/ hr ",
        choiceB : "72 km/ hr ",
        choiceC : "79.2 km/ hr",
	    choiceD : "80 km/ hr",
        correct : "C"

    },
    {
        question :"The L.C.M. of 26, 56, 104 and 182 is ",
        //imgSrc : "img/css.png",
        choiceA : "456",
        choiceB : "728",
        choiceC : "748",
	    choiceD : "1274",
        correct : "B"

    },
    {
        question :"By selling a tape-recorder for ` 950, I lose 5%. What percent shall I gain by selling it for a 1040? ",
        //imgSrc : "img/css.png",
        choiceA : "4%",
        choiceB : "4.5%",
        choiceC : "40%",
	    choiceD : "5%",
        correct : "A"

    },
    {
        question :"The radius of the wheel of a vehicle is 70 cm. The wheel makes 10 revolutions in 5 seconds. The speed of the vehicle is ",
        //imgSrc : "img/css.png",
        choiceA : "29.46 km/ hr ",
        choiceB : "31.68 km/ hr",
        choiceC : "36.25 km/ hr ",
	    choiceD : "32.72 km/ hr",
        correct : "B"

    },
    {
        question :"The sides of a triangle are in the ratio 1/2 :  1/3 :  1/4 . If the perimeter is 52 cm, then the length of the smallest side is",
        //imgSrc : "img/css.png",
        choiceA : "9cm ",
        choiceB : "10cm ",
        choiceC : "11cm ",
	    choiceD : "12cm ",
        correct : "D"

    },
    {
        question :"[1 × 2 + 2 × 3 + 3 × 4 × 5 + 5 × 6 + 6 × 7 + 7 × 8 + 8 × 9 + 9 × 10 + 10 × 11] is equal to ",
        //imgSrc : "img/css.png",
        choiceA : "770 ",
        choiceB : "660",
        choiceC : "440",
	    choiceD : "330",
        correct : "C"

    },
    {
        question :"[(7-1 – 8-1)-1 – (3-1 – 4-1)-1 is equal to ",
        //imgSrc : "img/css.png",
        choiceA : "56",
        choiceB : "44",
        choiceC : "50",
	    choiceD : "48",
        correct : "B"

    },
    {
        question :"If x, y and z are real numbers such that (x-3)2 + (y-4)2+ (z-5)2 = 0 then (x + y + z) is equal to ",
        //imgSrc : "img/css.png",
        choiceA : "-12 ",
        choiceB : "0",
        choiceC : "8",
	    choiceD : "12",
        correct : "D"

    }


];

// create some variables

//const lastQuestion = questions.length - 1;
const lastQuestion = 10;
let runningQuestion =0;
let count = 0;
let w=0;
const questionTime = 120; // 120s
const gaugeWidth = 150; // 150px
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
   
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
   
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
	choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= 9; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex+"></div>";
    }
}

// counter render

function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        // change progress color to red
        answerIsWrong();
        if(w !=9){
           //runningQuestion++;
		
		   runningQuestion = Math.floor(Math.random() * questions.length);
		   //document.write(runningQuestion);
            renderQuestion();
			w++;
        }else{
            // end the quiz and show the score
            clearInterval(TIMER);
            scoreRender();
        }
    }
}

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = 0;
    if(w !=9){
        //runningQuestion++;
        	 
	 runningQuestion = Math.floor(Math.random() * questions.length);
	 //document.write(runningQuestion);
	     w++;	
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(w).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(w).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/10);
    
    // choose the image based on the scorePerCent
    let img = (scorePerCent >= 80) ? "img/5.png" :
              (scorePerCent >= 60) ? "img/4.png" :
              (scorePerCent >= 40) ? "img/3.png" :
              (scorePerCent >= 20) ? "img/2.png" :
              "img/1.png";
    
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}





















