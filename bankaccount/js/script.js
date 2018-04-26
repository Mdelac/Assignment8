/*eslint-env browser*/
var $ = function (id) {
    "use strict";
    return window.document.getElementById(id);
};

var bankAccount = function (ownername) {
    "use strict";
    var owner = ownername,
        balance = 0,
        getBalance, getOwnerName, withdrawal, deposit, displayMessage;
    displayMessage = function (message) {
        $("display").innerHTML = message;
    };

    return {
        getBalance: function () {
            return balance;
        },
        getOwnerName: function () {
            return owner;
        },
        withdrawal: function (withdrawalAmount) {
            var owner = this.getOwnerName();
            if (withdrawalAmount > balance) {
                window.alert(owner + "'s account balance is " + balance + ". This is the maximum amount you can withdrawal.");
            } else {
                balance -= withdrawalAmount;
                displayMessage(owner + "'s account balance is " + this.getBalance());

            }
        },
        deposit: function (depositAmount) {
            balance += depositAmount;
            displayMessage(this.getOwnerName() + "'s account balance is " + this.getBalance());
        }
    };
};

window.addEventListener("load", function () {
    "use strict";
    var bankAcct;

    $("name").addEventListener("click", function () {
        var name = prompt("Type your name to create an account.");
        bankAcct = bankAccount(name);

    });

    $("deposit").addEventListener("click", function () {
        var deposit = parseInt(prompt("Amount to be deposit"), 10);

        while (deposit < 0 || !deposit || isNaN(deposit) || !deposit) {
            deposit = parseInt(prompt("Not able to deposit"), 10);
        }
        bankAcct.deposit(deposit);

    });

    $("withdrawal").addEventListener("click", function () {
        var withdrawal = parseInt(prompt("Amount to be withdrawal"), 10);
        while (withdrawal < 0 || !withdrawal || isNaN(withdrawal) || !withdrawal) {
            withdrawal = parseInt(prompt("Not able to withdrawal"), 10);
        }
        bankAcct.withdrawal(withdrawal);

    });

});