class BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.accountBalance = accountBalance;
    }
}

class Savings extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, isSalary) {
        super(accountNumber, accountHolderName, accountBalance);
        this.isSalary = isSalary;
    }
    withdraw(amount) {
        if (this.isSalary) {
            return "Account balance should be more than 0";
        }
        else if (amount >= this.isSalary && amount <= this.accountBalance) {
            this.accountBalance = this.accountBalance - amount;
            return "Updated account balance is " + this.accountBalance;
        }
        else {
            return "Not enough account balance...!";
        }
    }
}

class Current extends BankAccount {
    constructor(accountNumber, accountHolderName, accountBalance, odLimit) {
        super(accountNumber, accountHolderName, accountBalance);
        this.odLimit = odLimit;
    }
    withdraw(amount) {
        if (amount < this.odLimit && amount <= this.accountBalance) {
            this.accountBalance = this.accountBalance - amount;
            return "Updated account balance is " + this.accountBalance;
        }
        else {
            return "Not enough account balance...!";
        }
    }

}

var saving = new Savings("18003210979", "Vududala Sai", 50000, 0);
console.log(saving.withdraw(5000)); //Updated account balance is 45000
console.log(saving.withdraw(0)); //Updated account balance is 45000
console.log(saving.withdraw(250000)); //Not enough account balance...!

var current = new Current("18003210970", "xyz", 50000, 20000);
console.log(current.withdraw(10000)); //Updated account balance is 40000
console.log(current.withdraw(400000)); //Not enough account balance...!

