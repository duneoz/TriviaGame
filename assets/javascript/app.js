//create variables for correct and incorrect answers

    var ansCorrect = 0;

    var ansWrong = 0;


//create a questions object
    var questions = [{
        question: "This city couldve been named Boston if a coin toss to decide its name had gone differently.",
        answer: ["Portland", "Omaha", "Denver", "Miami"],
        name: "Boston",
        correct: "Portland",
        divClass: ".Boston"
    },
        {
        question: "Two cities in Oregon have dormant volcanoes in city limits, one is Bend, the other is ...",
        answer: ["Sherwood", "Eugene", "Portland", "Salem"],
        name: "Volcanoe",
        correct: "Portland",
        divClass: ".Volcanoe"
        },

        {
        question: "The world's smallest park is located in this city.",
        answer: ["Memphis", "Chicago", "Los Angeles", "Portland"],
        name: "Park",
        correct: "Portland",
        divClass: ".Park"
        },

        {
        question: "This city has more strip clubs per capita than any other.",
        answer: ["San Antonio", "Portland", "New York", "San Francisco"],
        name: "stripClub",
        correct: "Portland",
        divClass: ".stripClub"
        },

        {
        question: "This city is home to the largest independent book store in the world.",
        answer: ["Phoenix", "Omaha", "Houston", "Portland"],
        name: "bookStore",
        correct: "Portland",
        divClass: ".bookStore"
        },

        {
        question: "The television show Portlandia features locations in this Pacific NW city.",
        answer: ["Boise", "Fargo", "Portland", "Denver"],
        name: "Portlandia",
        correct: "Portland",
        divClass: ".portlandia"
        },

        {
        question: 'This US city used to be known as "The Clearing" prior to taking its current name.',
        answer: ["Portland", "Las Vegas", "Detroit", "Colombus"],
        name: "theClearing",
        correct: "Portland",
        divClass: ".theClearing"
        },

        {
        question: "Sometimes referred to as Rip City, this city is home to the NBA's Trailblazers.",
        answer: ["Philadelphia", "Portland", "Little Rock", "Seattle"],
        name: "ripCity",
        correct: "Portland",
        divClass: ".ripCity"
        },

        {
        question: "Benson Bubblers were invented in this city.",
        answer: ["Portland", "Little Rock", "Dallas", "Nashville"],
        name: "bubblers",
        correct: "Portland",
        divClass: ".bubblers"
        },

        {
        question: "The answer to this question is Portland.",
        answer: ["Portland", "Not Portland", "Other Than Portland", "Portsand"],
        name: "thisQuestion",
        correct: "Portland",
        divClass: ".thisQuestion"
        }

    ]

$('#yes').click(function() {
    alert("Click on the text to select your answer. Good luck!")

    //hide the buttons
    $("#yes").toggle();
    $("#no").toggle();

    //start the timer function
    startTimer();

    //create a variable for thisQuestion
    var thisQuestion = 0;
    console.log("step 1 complete");

    //fill the html with the first question
    $("#question").html(questions[thisQuestion].question);
    console.log("step 2 complete");

    //fill the html with the answers
    for (i=0; i < 4; i++) {
        $("#answer"+i).html(questions[thisQuestion].answer[i]);
        console.log("answer"+i+" populated");
    }

    //startTimer function
        function startTimer() {
            $("#countDown").html("<h2>30</h2>");
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        //time variable
        var timer = 31;

        //interval variable
        var intervalId;

        //decrement function
        function decrement() {
            timer--;

            //set the countDown div to timer
            $("#countDown").html("<h2>" + timer + "</h2>");

            if ((timer === 0) && (thisQuestion === 9)) {
                ansWrong = ansWrong + 1;

                alert("Time ran out.");

                $("#countDown").toggle(); //hide the countdown
                clearInterval(intervalId); //stop the countdown
                $(".answer").toggle(); //hide the answers
                $("#question").toggle(); //hide the question
                $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
                $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
                $(".results").css('visibility', 'visible'); //show the results class
            } else if (timer === 0) {
                //call the checkAnswer function
                checkAnswer("timed out");

                //alert that time expired
                alert("Time ran out.");

                //go to the next question
                nextQuestion(); 
            }
        
        }


    //move to next question function
    function nextQuestion() {

            //set question id to question
            $("#question").html(questions[thisQuestion].question);

            //loop to set answer ids to answers
            for (i=0; i < 4; i++) {
                $("#answer"+i).html(questions[thisQuestion].answer[i]);
                console.log("answer"+i+" logged");
            }

            //start the timer
            timer = 30;
            startTimer();
        
        
    }

    //if statement comparing selected answer and correct answer, add wrong/right, reset timer, increment thisQuestion by 1
    function checkAnswer(x) {

        //if x equals the correct answer for this question, do good stuff
        if (x === questions[thisQuestion].correct) {
            console.log("if statement working");

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);
            
            //add 1 to ansCorrect
            ansCorrect = ansCorrect + 1;
            console.log("Correct Answers: " + ansCorrect);

            //move to next question function call
            nextQuestion();
        }else{
            //if it doesnt, do bad stuff

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansWrong
            ansWrong = ansWrong + 1;
            console.log("Wrong Answers: " + ansWrong);
            console.log("this is the issue");

            //move to next question function call
            nextQuestion();
        }
    }

    //on click event for all answer class divs
    $(".answer").click(function() {
        //if thisQuestion > 9 then show quiz results, a button to play again
        
        var checkIt = $(this).html();
        
        if (thisQuestion === 9) {

            if (checkIt === questions[thisQuestion].correct) {
                console.log("if statement working");
                
                //add 1 to ansCorrect
                ansCorrect = ansCorrect + 1;
                console.log("Correct Answers: " + ansCorrect);
    
                //reset timer function call
            } else {
                //increment thisQuestion by 1
                thisQuestion = thisQuestion + 1;
                console.log("We are on Question " + thisQuestion);
    
                //add 1 to ansWrong
                ansWrong = ansWrong + 1;
                console.log("Wrong Answers: " + ansWrong);
                
            }


            $("#countDown").toggle(); //hide the countdown
            clearInterval(intervalId); //stop the countdown
            $(".answer").toggle(); //hide the answers
            $("#question").toggle(); //hide the question
            $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
            $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
            $(".results").css('visibility', 'visible'); //show the results class
            
        } else {
            
            checkAnswer(checkIt);
        }
        
    });
    
   

    
});


$('#no').click(function() {

    alert("You have chosen Expert Mode. Congratulations! Answer all questions in 30 seconds or be ridiculed by a computer!")

    //hide the buttons
    $("#yes").toggle();
    $("#no").toggle();

    //start the timer function
    startTimer();

    //create a variable for thisQuestion
    var thisQuestion = 0;
    console.log("step 1 complete");

    //fill the html with the first question
    $("#question").html(questions[thisQuestion].question);
    console.log("step 2 complete");

    //fill the html with the answers
    for (i=0; i < 4; i++) {
        $("#answer"+i).html(questions[thisQuestion].answer[i]);
        console.log("answer"+i+" populated");
    }

    //startTimer function
        function startTimer() {
            $("#countDown").html("<h2>30</h2>");
            clearInterval(intervalId);
            intervalId = setInterval(decrement, 1000);
        }

        //time variable
        var timer = 31;

        //interval variable
        var intervalId;

        //decrement function
        function decrement() {
            timer--;

            //set the countDown div to timer
            $("#countDown").html("<h2>" + timer + "</h2>");

            if (timer === 0) {
                alert("That was pretty pathetic. Please try again!");

                $("#countDown").toggle(); //hide the countdown
                clearInterval(intervalId); //stop the countdown
                $(".answer").toggle(); //hide the answers
                $("#question").toggle(); //hide the question
                $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
                $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
                $(".results").css('visibility', 'visible'); //show the results class
            }
        
        }


    //move to next question function
    function nextQuestion() {

            //set question id to question
            $("#question").html(questions[thisQuestion].question);

            //loop to set answer ids to answers
            for (i=0; i < 4; i++) {
                $("#answer"+i).html(questions[thisQuestion].answer[i]);
                console.log("answer"+i+" logged");
            }   
    }

    //if statement comparing selected answer and correct answer, add wrong/right, reset timer, increment thisQuestion by 1
    function checkAnswer(x) {

        //if x equals the correct answer for this question, do good stuff
        if (x === questions[thisQuestion].correct) {
            console.log("if statement working");

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);
            
            //add 1 to ansCorrect
            ansCorrect = ansCorrect + 1;
            console.log("Correct Answers: " + ansCorrect);

            //move to next question function call
            nextQuestion();
        }else{
            //if it doesnt, do bad stuff

            //increment thisQuestion by 1
            thisQuestion = thisQuestion + 1;
            console.log("We are on Question " + thisQuestion);

            //add 1 to ansWrong
            ansWrong = ansWrong + 1;
            console.log("Wrong Answers: " + ansWrong);
            console.log("this is the issue");

            //move to next question function call
            nextQuestion();
        }
    }

    //on click event for all answer class divs
    $(".answer").click(function() {
        //if thisQuestion > 9 then show quiz results, a button to play again
        
        var checkIt = $(this).html();
        
        if (thisQuestion === 9) {

            if (checkIt === questions[thisQuestion].correct) {
                console.log("if statement working");
                
                //add 1 to ansCorrect
                ansCorrect = ansCorrect + 1;
                console.log("Correct Answers: " + ansCorrect);
    
                //reset timer function call
            } else {
                //increment thisQuestion by 1
                thisQuestion = thisQuestion + 1;
                console.log("We are on Question " + thisQuestion);
    
                //add 1 to ansWrong
                ansWrong = ansWrong + 1;
                console.log("Wrong Answers: " + ansWrong);
                
            }


            $("#countDown").toggle(); //hide the countdown
            clearInterval(intervalId); //stop the countdown
            $(".answer").toggle(); //hide the answers
            $("#question").toggle(); //hide the question
            $("#numRight").html("You got " + ansCorrect + " correct!"); //show how many they got right
            $("#numWrong").html("You got " + ansWrong + " wrong!"); //show how many they got wrong
            $(".results").css('visibility', 'visible'); //show the results class
            
        } else {
            
            checkAnswer(checkIt);
        }
        
    });

});

$('#restart').click(function() {
    
    location.reload();

})