#! /usr/bin/env node
import inquirer from "inquirer";

 let myBalance = 10000;  // Dollar
 let myPin = 1234;
//  print welcome message
console.log("Welcome to My ATM Machine");

 let pinAnswer = await inquirer.prompt(
  [
    
    {
      name: "pin",
      message: "enter your pin code",
      type: "number"                                         
    }
  ]
  )
// 12345 === 1234 - false
 if (pinAnswer.pin === myPin)
{
   console.log("Pin is Correct, Login Successfully !");

  

  let operationAns = await inquirer.prompt(
 [
  {

    name : "operation",
    message : "please select option",
    type   :  "list",
    choices : ["withdrawl Amount", "Check Balance"]
  }
 ])

 if (operationAns.operation === "withdrawl Amount") {
    let withdrawAns = await inquirer.prompt([
    {
      name: "withdrawlMethod",
      message: "Select a withdrawl method",
      type: "list",
      choices: ["Fast Cash" , "Enter Amount"]
    }    

  ])

    if(withdrawAns.withdrawlMethod === "Fast Cash"){
      let fastcashAns = await inquirer.prompt([
       {
        name: "fastcash",
        type: "list",
        message: "Select Amount:",
        choices: [1000, 5000, 10000, 20000, 25000]

      }

      ])
      if(fastcashAns.fastcash > myBalance){
        console.log("Insufficent Balance")
      }
      else{
        myBalance -= fastcashAns.fastcash
        console.log(`${fastcashAns.fastcash} withdraw successfully`);
        console.log(`Your Remaining Balance is:${myBalance}`)
      }

    }

     else if(withdrawAns.withdrawlMethod === "Enter Amount"){        
    let amountAns = await inquirer.prompt([
  
    {
  
     name: "amount",
     type:    "number",
     message: "Enter the amount to withdraw"
  
  
    }
  
    ])
    
     if (amountAns.amount > myBalance)
      {
        console.log("Insufficent Balance");
      }

     else 
      {  
        myBalance -= amountAns.amount;
        console.log(`${amountAns.amount} withdraw successfully`);
        console.log(`Your Remaining Balance is: ${myBalance}`);
      }
    }

  
  } else if (operationAns.operation === "Check Balance"){
    console.log(`Your Account Balance is: ${myBalance}`);
  }
  
}    
else{
   console.log("Pin is Incorrect, Try Again!");
 }


