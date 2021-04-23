
var calculateBill = function(billStringPassed){
    var arrayBill = billStringPassed.split(',')
    var call = 0
    var sms = 0

    //looping through the array
    for (var i = 0; i < arrayBill.length; i++){
        
        var str = arrayBill[i].trim()
        if (str == "sms" || str == "SMS"){
            sms++
        } else if (str == "call" || str == "Call"){
            call++
        }
    }
    //Adding the values to get the bill total
    var billlTotal = (2.75 * call) + (sms * 0.65)
    return {
        //returning the fixed value
        Total: billlTotal
    }
}
function styleTotalColor(roundedBillTotal){
    if(roundedBillTotal < 20){
    // if totalbill contains warning or danger
        if(billTotalElement.classList.contains('warning' || 'danger')){
            //remove color
            billTotalElement.classList.remove('danger', 'warning')
        }// remove the color total 
    }else if(roundedBillTotal >= 20 && roundedBillTotal <= 30){
        if(billTotalElement.classList.contains('danger')){
            billTotalElement.classList.remove('danger')
        }
        //add the coloe total
        billTotalElement.classList.add('warning');
    }// remove the color total 
    else if(roundedBillTotal > 30){
        if(billTotalElement.classList.contains('warning')){
            billTotalElement.classList.remove('warning')
        }
        //add the coloe total
        billTotalElement.classList.add('danger');
    }

}