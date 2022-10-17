//Task 1
//Closure

const createBankAccount = (name) => {
  let balance = 0;
  console.log(`Welcome ${name} you have successfully created an account.`)

  const depositAmount = (amount) => {
    balance = amount += balance;
    console.log(`Your new balance is ${amount}.`)
  }
  const withdrawAmount = (amount) => {
    if (amount <= balance){
      let left = balance -= amount;
      console.log(`${amount} has been deducted to your account.You have ${left} left in your account.`)
    } else {
      console.log(`You do not have enough balance left in your account.`);
    }
}
return {
  depositAmount,
  withdrawAmount
}
}

let bankAccount = createBankAccount("Marvin")
bankAccount.depositAmount(50000);
bankAccount.depositAmount(30000);
bankAccount.withdrawAmount(60000);
bankAccount.withdrawAmount(50000);
bankAccount.depositAmount(8000);
console.log(typeof bankAccount)


//Task 2
//Callback

let balance = 0;

const newAccount =(name,amount,callback) => {
  console.log(`Welcome ${name}`)
  callback(name,amount)
}

const depositCash = (name,amount) => {
  balance = amount += balance;
  console.log(`Your new balance is ${amount}`)
}

const withdrawCash = (name,amount) => {
  if (amount <= balance){
    let left = balance -= amount;
    console.log(`${amount} has been deducted to your account.You have ${left} left in your account.`)
  } else {
    console.log(`You do not have enough balance left in your account.`);
  }
}

newAccount("Marvin", 8000, depositCash);
newAccount("Marvin", 8000, depositCash);
newAccount("marvin",10000, withdrawCash);
newAccount("marvin",10000, withdrawCash);
