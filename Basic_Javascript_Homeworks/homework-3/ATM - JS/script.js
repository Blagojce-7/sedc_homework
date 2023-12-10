function withdrawCash(accountBalance) {
    let withdrawalAmount = parseFloat(prompt("Пишете го износот што сакате да го подигнете:"));

    if (isNaN(withdrawalAmount) || withdrawalAmount <= 0) {
        return "Невалиден број. Ве молиме внесете валиден број.";
    }

    if (withdrawalAmount > accountBalance) {
        return "Немате доволно пари на сметката.";
    }

    accountBalance -= withdrawalAmount;

    return "Успешно! Подигнавте: ден" + withdrawalAmount.toFixed(2) + "\nРасположливи средства: ден" + accountBalance.toFixed(2);
}

let initialAccountBalance = 1500;
let result = withdrawCash(initialAccountBalance);
alert(result);
