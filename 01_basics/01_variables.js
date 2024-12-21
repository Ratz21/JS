const accountId = 141719
let accountEmail = "Rajdeep@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState = "1019"


//accountId=2 //not allowed 

accountEmail = "Rj@rc.com" 
accountPassword = "19191919"
accountCity = "Pune"
accountState = "Maharashtra"
console.log(accountId); // this was only to print on section thru to table we can print every variable
/* prefer not to use var bcz of block scope issue use let */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
