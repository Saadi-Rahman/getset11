// Common function to get input value from an input field
function getInputFieldValueById(inputId){
    const inputField = document.getElementById(inputId);
    const inputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(inputFieldValueString);
    inputField.value = "";
    return Math.abs(inputFieldValue);
};

// Common function to get Text Element value from a Text Element
function getTextElementValueById(elementId){
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.innerText;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
};

// Common function to set Element to a Text Element
function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
};


// player calculation 
document.getElementById("btn-calculate").addEventListener("click", function(){
    const perPlayerBasePrice = getInputFieldValueById("per-player-field");

    if(isNaN(perPlayerBasePrice)) {
        alert("Please provide a valid Number.");
        return;
    }

    // calculate player expenses 
    const finaleSelectedPlayer = getTextElementValueById("total-selected-player");

    const totalPlayerExpenses = (perPlayerBasePrice * finaleSelectedPlayer).toFixed();
    setTextElementValueById("player-expenses", totalPlayerExpenses);
});



// budget calculation
document.getElementById("btn-calculate-total").addEventListener("click", function(){
    const managerCost = getInputFieldValueById("manager-cost-field");
    if(isNaN(managerCost)) {
        alert("Please provide a valid Number in the both input field.");
        return;
    }

    const coachCost = getInputFieldValueById("coach-cost-field");
    if(isNaN(coachCost)) {
        alert("Please provide a valid Number in the both input field.");
        return;
    }
    
    const playerExpenses = getTextElementValueById("player-expenses");

    // calculate total budget
    const totalBudget = (playerExpenses + managerCost + coachCost).toFixed();
    setTextElementValueById("total-budget", totalBudget);
})