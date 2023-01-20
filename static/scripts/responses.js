function getBotResponse(input){
    //primera respuesta
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // simple respuesta
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye"){
        return "talk to you later!";
    } else {
        return "try asking something else!";
    }    
}