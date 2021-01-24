

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
console.log(result);

// budgetCalculator

function budgetCalculator(w, p, l) {
    //here w for no. of watches, p for phones and l for laptops
    let watchPrice = w * 50;
    let phonePrice = p * 100;
    let laptopPrice = l * 500;
    let totalBudget = watchPrice + phonePrice + laptopPrice;
    return totalBudget;
}
let budget = budgetCalculator(3, 2, 1);
console.log(budget);

//hotelCost

function hotelCost(inputDays) {
    /*upto first 10days per day cost 100Tk, 
    upto 20days per day cost 80Tk (next 10days) 
    and then 20+days up or moredays per day fee 50Tk.*/

    let days10 = 100, days20 = 80, days30 = 50;
    //check for 10days or under 10days.
    if (inputDays <= 10) {
        let cost = inputDays * days10;
        return cost;
    }
    //check for 20days or under 20days.
    else if (inputDays <= 20) {
        let cost20Days = 1000 + ((inputDays - 10) * days20);
        return cost20Days;
    }
    //for 20days up or more.
    else {
        let cost20DaysUp = 1800 + ((inputDays - 20) * days30);
        return cost20DaysUp;
    }
}
let totalCost = hotelCost(30);
console.log(totalCost);

//megaFriend

function megaFriend(){

}
