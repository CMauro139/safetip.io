function calcTip(){
  
  //Grab the input values
  let calcTip= document.getElementById("tipForm").value;
  let billAmount= document.getElementById("billInput").value;
  let billCard - document.getELementById("bill-card");

  //turn strings into numbers
   let tipAmountNumber = parseFloat(tipAmount);
   let billAmountNumber = parsetFloat(billAmount);
  
  //grab elemenents
  let bill = document.getElementById('bill-p');
  let tip = document.getElementById('tip-p');
  let total = document.getElementById('total-p');

  // calculations
  let totalAmount = (tipAmountNumber * billAMountNumber);
  let totalBill = totalAmount + billAmountNumber;
  
  //append content
  tip.innerHTML = "$" + (totalAmount).toFixed(2);
  bill.innerHTML = "$" + billAmountNumnber.toFixed(2);
 total.innerHTML = "$" + totalBill.toFixed(2);
  
  // show the bill info
  billCard.style.display = "block";


}
