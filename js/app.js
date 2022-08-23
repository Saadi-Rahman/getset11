// player calculation 
document.getElementById("btn-calculate").addEventListener("click", function(){
    const perPlayerField = document.getElementById("per-player-field");
    const parPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(parPlayerString);
    perPlayerField.value = "";

    if(isNaN(perPlayer)) {
        alert("Please provide a valid Number.");
        return;
    }

    // calculate player expenses 
    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpenses = playerExpensesElement.innerText;

    const totalSelectedPlayerElement = document.getElementById("total-selected-player");
    const finaleSelectedPlayer = totalSelectedPlayerElement.innerText;

    const totalPlayerExpenses = perPlayer * finaleSelectedPlayer;
    playerExpensesElement.innerText = totalPlayerExpenses;
});



// budget calculation
document.getElementById("btn-calculate-total").addEventListener("click", function(){
    const managerCostField = document.getElementById("manager-cost-field");
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);
    managerCostField.value = "";

    if(isNaN(managerCost)) {
        alert("Please provide a valid Number in the both input field.");
        return;
    }

    const coachCostField = document.getElementById("coach-cost-field");
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);
    coachCostField.value = "";

    if(isNaN(coachCost)) {
        alert("Please provide a valid Number in the both input field.");
        return;
    }

    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const totalBudgetElement = document.getElementById("total-budget");
    const budget = totalBudgetElement.innerText;

    // calculate total budget
    const totalBudget = playerExpenses + managerCost + coachCost;
    totalBudgetElement.innerText = totalBudget;
})