const accountId = 144567;
let accountEmail = "martian@google.com";
var accountPassword = "12345";
accountCity = "Jaipur";

// accountId = 2; this is not allowed
accountEmail = "dk@dk.com";
accountPassword = "21212112";
accountCity = "Bengaluru";
let accountState;

/*
preferred not to use to declare varialbes because of issue in block scope and functional scope
*/
console.log(accountId);
console.table([accountId, accountEmail, accountCity, accountState]);
