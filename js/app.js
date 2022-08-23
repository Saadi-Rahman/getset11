// player calculation 
document.getElementById("btn-calculate").addEventListener("click", function(){
    const perPlayerField = document.getElementById("per-player-field");
    const parPlayerString = perPlayerField.value;
    const perPlayer = parseFloat(parPlayerString);
    perPlayerField.value = "";

    // calculate player expenses 
    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpenses = playerExpensesElement.innerText;

    const totalPlayerExpenses = perPlayer * 5;
    playerExpensesElement.innerText = totalPlayerExpenses;
    console.log(totalPlayerExpenses);
});


// budget calculation
document.getElementById("btn-calculate-total").addEventListener("click", function(){
    const managerCostField = document.getElementById("manager-cost-field");
    const managerCostString = managerCostField.value;
    const managerCost = parseFloat(managerCostString);
    managerCostField.value = "";

    const coachCostField = document.getElementById("coach-cost-field");
    const coachCostString = coachCostField.value;
    const coachCost = parseFloat(coachCostString);
    coachCostField.value = "";
    
    const playerExpensesElement = document.getElementById("player-expenses");
    const playerExpensesString = playerExpensesElement.innerText;
    const playerExpenses = parseFloat(playerExpensesString);

    const totalBudgetElement = document.getElementById("total-budget");
    const budget = totalBudgetElement.innerText;

    // calculate total budget
    const totalBudget = playerExpenses + managerCost + coachCost;
    totalBudgetElement.innerText = totalBudget;
    console.log(totalBudget);
})