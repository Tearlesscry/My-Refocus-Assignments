//Task 1

const bankAccount = {
  'bankAccountId': Math.floor(Math.random() * 100),//Autogenerate Random Numbers
  'accountNumber': '57890',
  'credentials': ['Jeffrey', 'dahmer1234', '1234'],
  'balance': 50000,
  'createdAt': 'October 12,2022'
}

//console.log(bankAccount.credentials);

//Task 2

const userAccount = {
  'bankAccount': Object.assign(bankAccount),//Assign bankAccount object from above
  'debitCard': 09876-098,
  'firstName': 'Jeffrey',
  'lastName': 'Dahmer',
  'birthDate': 'February 29, 1983',
  'validId': ['drivers license','12345-6789'],
  'address': 'San Jose Occidental Mindoro'
}

//console.log(userAccount.bankAccount);

//Task 3

let balance = bankAccount.balance
let username = bankAccount.credentials[0]
let passcode = bankAccount.credentials[1]
let accountN = bankAccount.accountNumber

const getBankAccountDetails = (name,password) => {
  

  if (name === username && password === passcode){
        console.log('These are your details.');
        console.log(bankAccount);
      } else {
        console.log("Access Denied!")
      }
}

  const withdrawMoney = (name,password,accNum,amount) => {
    if(name === username && password === passcode && amount <= balance && accNum === accountN){
      let remainingBal = balance -= amount
      console.log(`You have withdrawn ${amount} from you bank acccount, Your remianing balance is ${remainingBal}.`)
    } else {
      console.log('Transaction is not Valid')
    }
  }

  const depositMoney = (name,password,accNum,amount) => {
    if(name === username && password === passcode && accNum === accountN){
      balance = amount += balance
      console.log(`Your new balance is ${amount}`)
    } else {
      console.log('Please enter the correct details.')
    }
  }

  getBankAccountDetails('Jeffrey', 'dahmer1234');
  withdrawMoney('Jeffrey', 'dahmer1234', '57890', 15000);
  depositMoney('Jeffrey', 'dahmer1234', '57890', 30000);


getBankAccountDetails('Jeff', 'dahmer1234');//wrong username
withdrawMoney('Jeffrey', 'dahmer1234', '57890', 100000);//amount to withdraw is above the balance
depositMoney('Jeffrey', 'dahmer1234', '1111', 4000);//wrong account number
