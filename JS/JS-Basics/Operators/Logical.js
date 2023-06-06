// console.log(true && true); // true
// console.log(false || true); // true

let highIncome = true;
let goodCreditSCore = false;
// let eligibleForLoan = highIncome && goodCreditSCore;

let eligibleForLoan = highIncome || goodCreditSCore;
console.log(eligibleForLoan);

// Not(!)
console.log(!eligibleForLoan);
