/* 

//killometerToMeter

function killometerToMeter(value) {
    // calculation
    let meter = value * 1000;
// condition check
    if (meter <= -1) {
        return "Sorry! input Killometer value couldn't be negative."
    }
    else {
        return meter;
    }

}
let result = killometerToMeter(1);
console.log(result); */

// budgetCalculator

function budgetCalculator(w, p, l) {
    let watchPrice = w * 50;
    let phonePrice = p * 100;
    let laptopPrice = l * 500;
    let totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
let budget = budgetCalculator(2, 3, 2);
console.log(budget);