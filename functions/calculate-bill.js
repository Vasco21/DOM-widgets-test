//get a reference to the calculate button
const mycalculateBtn = document.querySelector(".calculateBtn");
//get a reference to the billTotal element
const billTotalElement = document.querySelector(".billTotal");
//get a reference to the billString
const billStringField = document.querySelector(".billString");

//create the function that will be called when the calculate button is pressed
// get the string entered in the textArea
var getBillString = function(){
    var makeValue = billStringField.value
    return{
        makeValue: makeValue
    }
}

//link the function to a click event on the calculate button
    
mycalculateBtn.addEventListener('click', function(){
    var callString = getBillString()
     //round to two decimals
    var roundedBillTotal = calculateBill(callString.makeValue).Total
    billTotalElement.innerHTML = roundedBillTotal.toFixed(2)
    styleTotalColor(roundedBillTotal)
});
