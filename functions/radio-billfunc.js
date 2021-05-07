
var radioBill = function(){

    //This will keep track of the totals of sms's and calls
    var callTotalBill = 0
    var smsTotalBill = 0

    var CalculateRadioBill = function(checkedRadio){
        if(checkedRadio === 'call'){
            callTotalBill += 2.75
        } if (checkedRadio === 'sms'){
            smsTotalBill += 0.65
        }
    }
    var getRadioTotals = function(){
        return {
            call: callTotalBill.toFixed(2),
            sms: smsTotalBill.toFixed(2),
            totalOfSmsCall: (callTotalBill + smsTotalBill).toFixed(2)
        }
    }

    return {
        calculate: CalculateRadioBill,
        getTotals: getRadioTotals
    }
}

var  radioBillColors = function(callSms){
    if ((callSms > 30) && (callSms <= 50)){
        if (totalTwoElem.classList.contains('critical')){
            totalTwoElem.classList.remove('critical')
        }
        totalTwoElem.classList.add('warning')
    } else if (callSms > 50) {
        if (totalTwoElem.classList.contains('warning')) {
            totalTwoElem.classList.remove('warning')
        }
        totalTwoElem.classList.add('critical')
        }
    }
    