// get a reference to the sms or call radio buttons
const billItemTypeRadioElem = document.querySelector(".billItemTypeRadio")

// get a reference to the call 
const callTotalTwoElement = document.querySelector(".callTotalTwo");
//get reference to the sms
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");

//get a reference to the total2 element
const totalTwoElem = document.querySelector(".totalTwo");
//get a reference to the add button
const myradioBillAddBtn = document.querySelector(".radioBillAddBtn");

var radioBillfunc = radioBill()

var setRadioTotals = function(){
    callTotalTwoElement.innerHTML = radioBillfunc.getTotals().call
    smsTotalTwoElement.innerHTML = radioBillfunc.getTotals().sms
    totalTwoElem.innerHTML = radioBillfunc.getTotals().totalOfSmsCall
}

//create a variable that will keep track of the total bill
//in the event listener get the value from the billItemTypeRadio radio buttons
function totalRadioBill(){
    var checkedRadioBtn = document.querySelector("input[name='billItemType']:checked");
    return{
        // * add the appropriate value to the running total
     billItem : checkedRadioBtn.value
    }
}

// * display the latest total on the screen
//add an event listener for when the add button is pressed
myradioBillAddBtn.addEventListener('click', function(){
    totalRadioBill()
    var checkedRadioBtn = totalRadioBill().billItem
    radioBillfunc.calculate(checkedRadioBtn)
    setRadioTotals()
    radioBillColors(radioBillfunc.getTotals().totalOfSmsCall)   
});