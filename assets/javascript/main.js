var data = [
    {
        question: "How many percent of the people live North of the equator?",
        choices: ["90%","80%","70%","60%"],
        answerIndex: "0"
    },
    {
        question: "Which city does not have an official Disneyland?",
        choices: ["Tokyo","Moscow","Hongkong"],
        answerIndex: "1"
    },
    {
        question: "What will you get if you order 'Spotted Dick' in an English restaurant?",
        choices: ["Cheese","Sausage","Cake"],
        answerIndex: "2"
    },
    {
        question: "Which Country had the World's first publicly homosexual prime minister?",
        choices: ["Sweden","Norway","Iceland"],
        answerIndex: "2"
    },
    {
        question: "Which American city invented plastic vomit?",
        choices: ["Chicago","Detroit","Columbus","Baltimore"],
        answerIndex: "0"
    },
    {
        question: "What color was Coca-Cola originally?",
        choices: ["Red","Purple","Beige","Green"],
        answerIndex: "3"
    },
    {
        question: "On average, what do you do 15 times a day?",
        choices: ["Laugh","Burp","Break Wind", "Lick you lips"],
        answerIndex: "0"
    },
    {
        question: "Which one of these planets rotates clockwise",
        choices: ["Uranus","Mercury","Pluto","Venus"],
        answerIndex: "3"
    },
    {
        question: "The bikini was originally called the what?",
        choices: ["Poke","Range","Half","Atom"],
        answerIndex: "3"
    },
    {
        question: "How old was the youngest Pope?",
        choices: ["11","17","22","29"],
        answerIndex: "0"
    }
];
$(document).ready(function(){
    var count = 300;
    var timer = "";
    function completion(){
        var score = 0;
        data.forEach(function(element, index){
            var value = $("input[name='question"+index+"']:checked").val();
            console.log(value);
            if(value != null){
                if(element.answerIndex == value){
                    score++;
                }
            }
            
        });
        alert("Score: "+score + "/10");
        clearInterval(timer);
        reset();
    }
    function reset(){
        $("#questions").empty();
        count = 300;
        timer = setInterval(function(){
            count--;
            $("#time").text(count);
            if(count==0){
                completion();
            }
        },1000);
        $("#time").text(count);
        data.forEach(function(element, index){
            var questionDiv = $("<div>");
            questionDiv.addClass("question");
            questionDiv.attr("data-number",index);

            var questionText = $("<p>");
            questionText.text(element.question);
            
            questionDiv.append(questionText);
            questionDiv.append("<hr>")
            for(var i = 0; i < element.choices.length; i++){
                var choiceDiv = $("<div>");

                var radio = $("<input>");
                radio.attr("type", "radio");
                radio.attr("name", "question" + index);
                radio.attr("value", i);
                radio.attr("id", "question"+index+"choice"+i);

                var label = $("<label>");
                label.attr("for", "question"+index+"choice"+i);
                label.text(element.choices[i]);
                choiceDiv.append(radio);
                choiceDiv.append(label);
                questionDiv.append(choiceDiv);
            }
            $("#questions").append(questionDiv);
        });
    }
    $("#submit").on("click", function(event){
        event.preventDefault();
        completion();
    });
    reset();
    
});