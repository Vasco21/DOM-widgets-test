// get a reference to the sms or call radio buttons
var billItemTypeRadioElemThree = document.querySelector ('.billItemTypeRadio');

// get refences to all the settings fields
var callCostSetElemThree = document.querySelector('.callCostSetting');
var smsCostSettingElemThree = document.querySelector('.smsCostSetting');
var warningLevelSettingElemThree = document.querySelector('.warningLevelSetting');
var criticalLevelSettingElemThree = document.querySelector('.criticalLevelSetting');

//get refences to all the bill type fields
var callCostTotaElemThree = document.querySelector('.callTotalSettings');
var smsCostTotalElemThree = document.querySelector('.smsTotalSettings');
var totalCostsElemThree = document.querySelector('.totalSettings');

//get a reference to the add button
var radioBillAddBtnElemThree = document.querySelector ('.addButtonSettings');

//get a reference to the 'Update settings' button
var updateSetBtn = document.querySelector ('.updateSettings');



var setInst = billWithSettings();


function settingBtn(){
    setInst.setCallCost(Number(callCostSetElemThree.value));
    setInst.setSmsCost(Number(smsCostSettingElemThree.value));
    setInst.setWarningLev(warningLevelSettingElemThree.value);
    setInst.setCriticalLev(criticalLevelSettingElemThree.value);

    addcolors()
   
}
//add an event listener for when the 'Update settings' button is pressed
updateSetBtn.addEventListener('click', settingBtn);

function radioBtnClickedThree(){

    var checkedRadioBillBtnThree = document.querySelector("input[name='billItemTypeWithSettings']:checked");

        var billItem = checkedRadioBillBtnThree.value;
        setInst.SwitchBtn(billItem);

        // billItemType will be 'call' or 'sms'
    
    //update the totals that is displayed on the screen.
    callCostTotaElemThree.innerHTML = setInst.getTotalCallCost().toFixed(2);
    smsCostTotalElemThree.innerHTML = setInst.getTotalSmsCost().toFixed(2);
    totalCostsElemThree.innerHTML = setInst.getTotalCost().toFixed(2);

    addcolors()
  }



function addcolors(){
    totalCostsElemThree.classList.remove("warning");
    totalCostsElemThree.classList.remove("danger");
    totalCostsElemThree.classList.add(setInst.totalClassName());
}
//add an event listener for when the add button is pressed
radioBillAddBtnElemThree.addEventListener('click', radioBtnClickedThree);

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.