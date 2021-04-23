// get a reference to the textbox where the bill type is to be entered
const billTypeTextElement = document.querySelector(".billTypeText");
//get a reference to the add button
const myaddToBillBtn = document.querySelector(".addToBillBtn");
// get a reference to the call 
const callTotalOneElement = document.querySelector(".callTotalOne");
//get reference to the sms
const smsTotalOneElement = document.querySelector(".smsTotalOne");

const totalOneElement = document.querySelector(".totalOne");


//create a variable that will keep track of the total bill
var TotalTrackCall = 0;
var TotalTrackSms = 0
var TotalTrackInv = 0;

// * add the appropriate value to the running total
var getTextBtnElement = function(){
    return{
        billType: billTypeTextElement.value
    }
}

var textBillLogic = textBill()

var setTextTotals = function(){
    callTotalOneElement.innerHTML = textBillLogic.get().call
    smsTotalOneElement.innerHTML = textBillLogic.get().sms
    totalOneElement.innerHTML = textBillLogic.get().total
}

function TotalColor(totalValue){
    if(totalValue > 49.99){
        if(totalOneElement.classList.contains('warning')){
            totalOneElement.classList.remove('warning')
        }
        //add the coloe total
        totalOneElement.classList.add('danger');
    }
        // remove the color total 
    else if(totalValue > 29.99 && totalValue <= 49.99){
        if(totalOneElement.classList.contains('danger')){
            totalOneElement.classList.remove('danger')
        }
        //add the coloe total
        totalOneElement.classList.add('warning');
    }
}

        
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
       



//add an event listener for when the add button is pressed
myaddToBillBtn.addEventListener('click', function(){
    getTextBtnElement()
    var billrecord = getTextBtnElement().billType
    textBillLogic.calculates(billrecord);
    setTextTotals()
    TotalColor(textBillLogic.get().total)
});


// alert(myaddToBillBtn);
