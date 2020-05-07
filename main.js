function handleClickEvent() {
  var amountDue = parseFloat(document.getElementById("amount-due").value);
  var amountReceived = parseFloat(document.getElementById("amount-received").value);
  var change = amountReceived - amountDue;
  var dollars = Math.floor(change);
  var coins1 = Math.round((change - dollars) * 100) / 100;
  var quarters = Math.floor(coins1 / 0.25);
  var coins2 = Math.round((coins1 - quarters * 0.25) * 100) / 100;
  var dimes = Math.floor(coins2 / 0.10);
  var coins3 = Math.round((coins2 - dimes * 0.10) * 100) / 100;
  var nickels = Math.floor(coins3 / 0.05);
  var coins4 = Math.round((coins3 - nickels * 0.05) * 100) / 100;
  var pennies = coins4 * 100;
  document.getElementById("dollars-output").innerHTML = dollars;
  document.getElementById("coinage-output").innerHTML = coins1;
  document.getElementById("quarters-output").innerHTML = quarters;
  document.getElementById("dimes-output").innerHTML = dimes;
  document.getElementById("nickels-output").innerHTML = nickels;
  document.getElementById("pennies-output").innerHTML = pennies;
  var twenties = Math.floor(dollars / 20);
  var tens = Math.floor((dollars - twenties) / 10);
  var fives = Math.floor((dollars - twenties - tens) / 5);
  var ones = Math.floor(dollars - twenties - tens - fives);
  document.getElementById("twenties-output").innerHTML = twenties;
  document.getElementById("tens-output").innerHTML = tens;
  document.getElementById("fives-output").innerHTML = fives;
  document.getElementById("ones-output").innerHTML = ones;
 }
 document.getElementById("calculate-change").addEventListener("click", handleClickEvent);