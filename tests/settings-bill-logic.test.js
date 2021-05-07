describe('The bill with setting factory function' , function(){

    describe('set value' , function(){
    it('should be able to set the call cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCallCost(1.85);
        assert.equal(1.85, settingsBill.getCallCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setCallCost(2.75);
        assert.equal(2.75, settingsBill2.getCallCost());
    });
    it('should be able to set the sms cost', function(){
        let settingsBill = billWithSettings();
        settingsBill.setSmsCost(0.85);
        assert.equal(0.85, settingsBill.getSmsCost());

        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(0.75);
        assert.equal(0.75, settingsBill2.getSmsCost());
    });
    it('should be able to set the sms and call cost', function(){
        let settingsBill = billWithSettings();

        settingsBill.setSmsCost(0.85);
        settingsBill.setCallCost(1.85);

        assert.equal(0.85, settingsBill.getSmsCost());
        assert.equal(1.85, settingsBill.getCallCost());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setSmsCost(0.75);
        settingsBill2.setCallCost(2.75);

        assert.equal(0.75, settingsBill2.getSmsCost());
        assert.equal(2.75, settingsBill2.getCallCost());
    });
    it('should be able to set the warning level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setWarningLev(25);

        assert.equal(25, settingsBill.getWarningLev());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setWarningLev(35);

        assert.equal(35, settingsBill2.getWarningLev());
    });
    it('should be able to set the critical level', function(){
        let settingsBill = billWithSettings();

        settingsBill.setCriticalLev(55);

        assert.equal(55, settingsBill.getCriticalLev());
        
        let settingsBill2 = billWithSettings();
        settingsBill2.setCriticalLev(80);

        assert.equal(80, settingsBill2.getCriticalLev());
    });
    it('should be able to set the warning & critical level', function(){
        let settingsBill = billWithSettings();
        settingsBill.setWarningLev(32);
        settingsBill.setCriticalLev(62);

        assert.equal(32, settingsBill.getWarningLev());
        assert.equal(62, settingsBill.getCriticalLev());

    });
});

describe('use the values', function(){

    it('should be able to use the call cost set', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLev(8);
        settingsBill.setCallCost(2.25);
        settingsBill.setSmsCost(0.85);

        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();

        assert.equal(6.75, settingsBill.getTotalCost());
        assert.equal(6.75, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
        
    });

    it('should be able to use the call cost set for 2 calls at 1.25 each', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLev(8);
        settingsBill.setCallCost(1.25);
        settingsBill.setSmsCost(0.00);

        settingsBill.makeCallCost();
        settingsBill.makeCallCost();

        assert.equal(2.50, settingsBill.getTotalCost());
        assert.equal(2.50, settingsBill.getTotalCallCost());
        assert.equal(0.00, settingsBill.getTotalSmsCost());
        
    });

    it('should be able to send 2 sms at 0.75 each', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLev(8);
        settingsBill.setCallCost(0.00);
        settingsBill.setSmsCost(0.75);

        settingsBill.sendSmsCost();
        settingsBill.sendSmsCost();

        assert.equal(1.50, settingsBill.getTotalCost());
        assert.equal(0.00, settingsBill.getTotalCallCost());
        assert.equal(1.50, settingsBill.getTotalSmsCost());
    });

    it('should be able to send 2 sms at 1.75 each & make 1 call at 2.50', function(){
        let settingsBill = billWithSettings();
        settingsBill.setCriticalLev(8);
        settingsBill.setCallCost(2.50);
        settingsBill.setSmsCost(1.75);

        settingsBill.sendSmsCost();
        settingsBill.sendSmsCost();
        settingsBill.makeCallCost();

        assert.equal(2.50, settingsBill.getTotalCallCost());
        assert.equal(3.50, settingsBill.getTotalSmsCost());
        assert.equal(6.00, settingsBill.getTotalCost());
    });
});

describe('warning level & critical level', function(){
    it("should return a class name of 'warning' if warning level is reached", function(){

        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(1.75);
        settingsBill.setWarningLev(5);
        settingsBill.setCriticalLev(10);

        settingsBill.sendSmsCost();
        settingsBill.sendSmsCost();
        settingsBill.makeCallCost();
        
        assert.equal('warning', settingsBill.totalClassName());

    });
    it("should return a class name of 'critical' if critical level is reached", function(){

        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(1.75);
        settingsBill.setCriticalLev(6.5);

        settingsBill.sendSmsCost();
        settingsBill.sendSmsCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        
        assert.equal('critical', settingsBill.totalClassName());

    });
    it("it should stop the Total Call Cost from increasing once the critical level reached", function(){

        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(1.75);
        settingsBill.setCriticalLev(10);

        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        
        assert.equal('critical', settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost());

    });
    it("it should allow the total to increase after reaching the critical level & then upping the critical level", function(){

        let settingsBill = billWithSettings();
        settingsBill.setCallCost(2.00);
        settingsBill.setSmsCost(0.75);
        settingsBill.setWarningLev(6);
        settingsBill.setCriticalLev(10);

        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        
        assert.equal('critical', settingsBill.totalClassName());
        assert.equal(10, settingsBill.getTotalCallCost());

        settingsBill.setCriticalLev(20);
        assert.equal('warning', settingsBill.totalClassName());
        settingsBill.makeCallCost();
        settingsBill.makeCallCost();
        assert.equal(14, settingsBill.getTotalCallCost());
    });
});
});