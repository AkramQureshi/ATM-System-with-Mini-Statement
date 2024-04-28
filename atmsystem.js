
var customerName = "Akram Qureshi";
var amount = 10000;
var pin = 1234;
if (pin == 1234) {
    console.log("-------------------------");
    console.log("Welcome", customerName);
    console.log("-------------------------");
    console.log("Your Balance is =", amount);
    console.log("-------------------------");
    var amountWithdraw = 3500;
    if (amountWithdraw >= amount) {
        console.log("Your Transaction Amount is Exceeding");
        console.log("Please Check Your Balance");
    }
    else {
        var balance = amount - amountWithdraw;
        console.log("----------------------------------");
        console.log("You Withdrawn Amountin 1st Transaction =", amountWithdraw);
        console.log("Now Your Current Balance is =", balance);
        console.log("----------------------------------");
        var amountWithdraw2 = 4500;
        // Check if the balance is sufficient for the second withdrawal
        if (balance >= amountWithdraw2) {
            var balance2 = balance - amountWithdraw2;
            console.log("------------------------------------------------------");
            console.log("You Withdrawn Amount in 2nd Transaction =", amountWithdraw2);
            console.log("Now Your Current Balance is =", balance2);
            console.log("------------------------------------------------------");
            console.log(" ");
            console.log(" ");
            console.log("                      *** Mini Statement ***");
            console.log("                    ************************* ");
            console.log(" ");
            console.log("            You withdrew in 1st Transaction: ", amountWithdraw);
            console.log("            You withdrew in 2nd Transaction: ", amountWithdraw2);
            console.log("            -----------------------------------------");
            console.log("                                Balance is : ", balance2);
            console.log("            -----------------------------------------");
        }
        else {
            console.log("Insufficient balance for the second withdrawal.");
            console.log("Please Check Your Balance.");
        }
    }
}
else {
    console.log("--------------------------------");
    console.log("Invalid Pin Number.... Try Again");
    console.log("--------------------------------");
}
