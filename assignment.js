//https://github.com/shamim-a/js-assignment

/* kilometerToMeter */

function kilometerToMeter(value) {
    // calculation
    var meter = value * 1000;
    // condition check
    if (value <= -1) {
        return "Sorry! input Killometer value couldn't be negative."
    }
    else {
        return meter;
    }

}
var result = kilometerToMeter(20);
console.log(result);

/* budgetCalculator */

function budgetCalculator(w, p, l) {
    //here w for no. of watches, p for phones and l for laptops
    var watchPrice = w * 50;
    var phonePrice = p * 100;
    var laptopPrice = l * 500;
    if (w <= -1 || p <= -1 || l <= -1) {
        return "Sorry! input number of watches or phones or laptops couldn't be negative."
    }
    else {
        var totalBudget = watchPrice + phonePrice + laptopPrice;
        return totalBudget;
    }

}
var budget = budgetCalculator(5, 3, 2);
console.log(budget);

/* hotelCost */

function hotelCost(inputDays) {
    // upto first 10days per day cost 100Tk, 
    // upto 20days per day cost 80Tk (next 10days) 
    // and then 20+days up or moredays per day fee 50Tk.

    var days10 = 100, days20 = 80, days30 = 50;
    if (inputDays <= -1) {
        return "Sorry! input days couldn't be negative.";
    }
    else {
        //check for 10days or under 10days.
        if (inputDays <= 10) {
            var cost = inputDays * days10;
            return cost;
        }
        //check for 20days or under 20days.
        else if (inputDays <= 20) {
            var cost20Days = 1000 + ((inputDays - 10) * days20);
            return cost20Days;
        }
        //for 20days up or more.
        else {
            var cost20DaysUp = 1800 + ((inputDays - 20) * days30);
            return cost20DaysUp;
        }
    }
}
var totalCost = hotelCost(30);
console.log(totalCost);

/* megaFriend */

function megaFriend(stringArray) {
    var long = 0, largeString;
    //set string length initially long = 0.
    for (var i = 0; i < stringArray.length; i++) {
        //check the length of 0 index's string and then assign in largeString
        if (stringArray[i].length >= long) {
            var long = stringArray[i].length;
            largeString = stringArray[i];
        }
    }
    return largeString;
}
var friendName = megaFriend(['Ashiq', 'Asad Noor', 'Al-amin Sheikh', 'Jinnatunnesa Tandra', 'Nazmul Alam', 'Babu', 'Shakib Al Hasan']);
console.log(friendName);
