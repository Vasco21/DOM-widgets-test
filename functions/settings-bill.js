// get a reference to the sms or call radio buttons
var callsTotalElem2 = document.querySelector(".callTotalSettings");
var smsTotalElem2 = document.querySelector(".smsTotalSettings");
// get refences to all the settings fields
var totalCostElem2 = document.querySelector(".totalSettings");
var setCallCostEle = document.querySelector(".callCostSetting");
var setSmsCostEle = document.querySelector(".smsCostSetting");
var setWarningLevelEle = document.querySelector(".warningLevelSetting");
var setCrictalLevelEle = document.querySelector(".criticalLevelSetting");
//get a reference to the add button
var addButtonSettings = document.querySelector(".addButtonSettings");
//get a reference to the 'Update settings' button
var updateSettingsBtn = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var setCallCost = 0;
var setSmsCost = 0;
var setWarningLevel = 0;
var setCrictalLevel = 0;
// create a variables that will keep track of all three totals.
var callsTotal = 0;
var smsTotal = 0;
var total = 0;

//add an event listener for when the 'Update settings' button is pressed
function settingsBillTotal() {   
    if( setCallCostEle.value && setSmsCostEle.value){
        setCallCost  = Number(setCallCostEle.value);
        setSmsCost = Number(setSmsCostEle.value);
        setWarningLevel = setWarningLevelEle.value;
        setCrictalLevel = setCrictalLevelEle.value;   
        colorUpdate(); 
    }    
}
updateSettingsBtn.addEventListener('click', settingsBillTotal);
//add an event listener for when the add button is pressed
function addSettingsBillTotal() {
    // get the value entered in the billType textfield
    var checkedRadioBtn1 = document.querySelector("input[name='billItemTypeWithSettings']:checked");
    if (checkedRadioBtn1){
        if(total < setCrictalLevel){
            var billItemTypeWithSettings = checkedRadioBtn1.value
            // billItemType will be 'call' or 'sms'
            // update the correct total
            if (billItemTypeWithSettings === "call") {
                callsTotal += setCallCost;
            }
            else if (billItemTypeWithSettings === "sms") {
                smsTotal += setSmsCost;
            }
            
        }
    }
    

    //update the totals that is displayed on the screen.
    if( setCallCostEle.value && setSmsCostEle.value){
        callsTotalElem2.innerHTML = callsTotal.toFixed(2);
        smsTotalElem2.innerHTML = smsTotal.toFixed(2);
        total = callsTotal + smsTotal;
        totalCostElem2.innerHTML = total.toFixed(2);
    // console.log(totalCost);
        colorUpdate();
    //color the total based on the criteria 
    }   
}
addButtonSettings.addEventListener('click', addSettingsBillTotal);

function colorUpdate(){
    if (total >= setCrictalLevel) {
        // adding the danger class will make the text red
        totalCostElem2.classList.add("danger");
        totalCostElem2.classList.remove("warning");
    }
    else if (total >= setWarningLevel) {
        totalCostElem2.classList.add("warning");
        totalCostElem2.classList.remove("danger");
    }
    else{
        totalCostElem2.classList.remove("warning");
        totalCostElem2.classList.remove("danger");
    }
}
//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.