var firstNumber;
var secondNumber;
var operation;

//Function to Display the Welcome Screen
function getWelcome(){
    alert(" ***A SIMPLE JAVASCRIPT CALCULATOR*** "
        + " Welcome To a Simple Javascript Calculator"
        + " created by ADENIJI ALIU ADEYEMI"
        + " Enjoy! as the User Experience is"
        + " promised to be fantastic."
    )
}

function getMessage(){
    var operation = prompt("what will you like to do?\
                                                      \
                        + for Addition\
                                                    \
                            - for Subtraction \
                                                    \
                            * for Multiplication \
                                                    \
                            / for division");

    return operation;
}

//Function to Request if the user wish to perform another operation
function tryAgain(){
    var retry = prompt("Do you want to perform another operation?\
                                                        \
                        - select y for Yes\
                                                \
                                - Select n for No").toLowerCase();
    if (retry == "y"){
        Calculator();
    }
    else if (retry == "n"){
        alert("**Thanks for using My Calculator App... See you later**");
    }
    else{
        tryAgain();
    }
}

//Function to carryout the Mathematical Operations
function Calculator(){ 
    var operation = getMessage();  
    if (operation === "+"){
        alert("You are about to perform Addition operation\
                ------------------------------------------- ");
        firstNumber = prompt("Enter first number: ");
        secondNumber = prompt("Enter second number: ");
        
        let add = parseInt(firstNumber) + parseInt(secondNumber);
        alert(firstNumber + "+" + secondNumber + "=" + add);
        }
    else if(operation === "-"){
        alert("You are about to perform Subtraction operation\
                ----------------------------------------------- ");
        firstNumber = prompt("Enter first number: ");
        secondNumber = prompt("Enter second number: ");
            
        let subtract = parseInt(firstNumber) - parseInt(secondNumber);
        alert(firstNumber + " - " + secondNumber + " = " + subtract);
        }
    else if(operation === "*"){
        alert("You are about to perform Multiplication operation\
            -------------------------------------------------------- ");
        firstNumber = prompt("Enter first number: ");
        secondNumber = prompt("Enter second number: ");
            
        let multiply = parseInt(firstNumber) * parseInt(secondNumber);
        alert(firstNumber + " * " + secondNumber + " = " + multiply);
        }
    else if(operation === "/"){
            alert("You are about to perform Division operation\
                --------------------------------------------------- ");
        firstNumber = prompt("Enter first number: ");
        secondNumber = prompt("Enter second number: ");
            
        let divide = parseInt(firstNumber) / parseInt(secondNumber);
        alert(firstNumber + " / " + secondNumber + " = " + divide);
        }
    else{
        alert("Wrong Input was entered, Please, try again...");
        getMessage();
    }
    tryAgain()
}

getWelcome()
Calculator()