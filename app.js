function calculateTip(){
let foodTotal = Number(document.getElementById("bill-amount").value);
let tipPercent = Number(document.getElementById("tip-amount").value/100);
let tipamount = (foodTotal * tipPercent);
let total = (foodTotal + tipamount);


document.getElementById("hello").innerHTML = "Total Bill including Tip : "+total;
document.getElementById("bello").innerHTML = "Tip : "+tipamount
}

 