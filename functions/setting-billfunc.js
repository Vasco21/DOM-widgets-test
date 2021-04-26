function billWithSettings(){
    
    var theCallCost = 0;
    var theSmsCost = 0;
    var theWarningLevel = 0;
    var theCriticalLevel = 0;

    var callCostTotal = 0;
    var smsCostTotal = 0;

    function setCallCost(callCost){
        theCallCost = callCost;
    }
    function getCallCost(){
    return theCallCost;
    }

    function setSmsCost(smsCost){
        theSmsCost = smsCost;
    }
    function getSmsCost(){
        return theSmsCost;
    }
    function setWarningLev(warningLevel){
            theWarningLevel = warningLevel;
    }
    function getWarningLev(){
        return theWarningLevel;
    }
    function setCriticalLev(criticalLevel){
        theCriticalLevel = criticalLevel;
                }
    function getCriticalLev(){
        return theCriticalLevel;
                }
    function makeCallCost() {
        if(!reachedCritcalLev()){
        callCostTotal += theCallCost;
        }
    }
    function sendSmsCost(){
        if(!reachedCritcalLev()) {
            smsCostTotal += theSmsCost;
        }
    }
    function SwitchBtn(){
    var checkedRadioBillBtnThree = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBillBtnThree){
        var billItem = checkedRadioBillBtnThree.value;
        if(billItem === "call"){
            return makeCallCost();
        }
        if (billItem === "sms"){
            return sendSmsCost();
        }
    }  
    }
    function getTotalCost(){
        return callCostTotal + smsCostTotal;
    }
    function getTotalCallCost(){
        return callCostTotal;
    }
    function getTotalSmsCost(){
        return smsCostTotal;
    }
    function reachedCritcalLev(){
        return getTotalCost() >= getCriticalLev();
    }

    function totalClassName(){
        
        if (reachedCritcalLev()){
            return 'danger';
        }
        if (getTotalCost() >= getWarningLev()){
            return 'warning';
        }
    }

     
return {
    setCallCost,
    getCallCost,
    setSmsCost,
    getSmsCost,
    setWarningLev,
    getWarningLev,
    setCriticalLev,
    getCriticalLev,
    makeCallCost,
    getTotalCost,
    getTotalCallCost,
    getTotalSmsCost,
    sendSmsCost,
    totalClassName,
    reachedCritcalLev,
    SwitchBtn
}
}