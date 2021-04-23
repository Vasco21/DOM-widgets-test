describe('settingbill function', function(){
    it('should be able to set the call cost', function(){
        let billSetting = settingBill();

        billSetting.setCallCost(1.85);
        assert.equal(1.85, billSetting.getCallCost());

        let billSettingCall = settingBill();
        billSettingCall.setCallCost(2.80);
        assert.equal(2.80, billSettingCall.getCallCost());
        
    })
    it('should be able to set the Sms cost', function(){
        let billSetting = settingBill();
        billSetting.setSmsCost(0.85)
        assert.equal(0.85, billSetting.getSmsCost());

        let billSettingSms = settingBill();
        billSettingSms.setSmsCost(0.95);
        assert.equal(0.95, billSettingSms.getSmsCost());
    })

    it('should be able to set the call and Sms cost', function(){
        let billSetting = settingBill();
        
        billSetting.setCallCost(1.85);
        billSetting.setSmsCost(0.95)
        assert.equal(1.85, billSetting.getCallCost());
        assert.equal(0.95, billSetting.getSmsCost());
    })
    it('should be able to set the warning level cost', function(){
        let billSetting = settingBill();
        
        billSetting.setWarningLevel(20);
        assert.equal(20, billSetting.getWarningLevel());
        
    })

    it('should be able to set the Critical level cost', function(){
        let billSetting = settingBill();
        
        billSetting.setCriticalLevel(45);
        assert.equal(45, billSetting.getCriticalLevel());
        
    })
    describe('set values function', function(){
        it('should be able to use the call cost set', function(){
            
            let billSetting = settingBill();
            billSetting.setCriticalLevel(10);
            
            billSetting.setCallCost(2.25);
            billSetting.setSmsCost(0.85);
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
    
            assert.equal(6.75, billSetting.getTatolCost());
            assert.equal(6.75, billSetting.getTatolCallCost());
            assert.equal(0.00, billSetting.getTatolSmsCost())
        });
        
        it('should be able to use the call cost set for 2 calls at 1.35 each', function(){
            
            let billSetting = settingBill();
            billSetting.setCriticalLevel(10);
            
            billSetting.setCallCost(1.25);
            billSetting.setSmsCost(0.85);
    
            billSetting.makeCall();
            billSetting.makeCall();
    
            assert.equal(2.50, billSetting.getTatolCost());
            assert.equal(2.50, billSetting.getTatolCallCost());
            assert.equal(0.00, billSetting.getTatolSmsCost())
        });
        it('should be able to send 2 sms at 0.85 each', function(){
            
            let billSetting = settingBill();
            billSetting.setCriticalLevel(10);
            
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
    
            billSetting.sendSms();
            billSetting.sendSms();
    
            assert.equal(1.70, billSetting.getTatolCost());
            assert.equal(0.00, billSetting.getTatolCallCost());
            assert.equal(1.70, billSetting.getTatolSmsCost());
        });
        it('should be able to send 2 sms at 0.85 each and 1 call at 1.00', function(){
            
            let billSetting = settingBill();
            billSetting.setCriticalLevel(10);
            
            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
    
            billSetting.sendSms();
            billSetting.makeCall();
            billSetting.sendSms();
    
            assert.equal(3.05, billSetting.getTatolCost());
            assert.equal(1.35, billSetting.getTatolCallCost());
            assert.equal(1.70, billSetting.getTatolSmsCost());
        });
    });
    describe("warning and critical level", function(){
        it("should return the class name of 'warning' if the warning level is reached", function(){
            let billSetting = settingBill();

            billSetting.setCallCost(1.35);
            billSetting.setSmsCost(0.85);
            billSetting.setWarningLevel(5)
            billSetting.setCriticalLevel(10)
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
  
            assert.equal("warning", billSetting.totalClassName());
        });
        it("should return the class name of 'critical' if the critical level has been reached", function(){
            let billSetting = settingBill();

            billSetting.setCallCost(2.50);
            billSetting.setSmsCost(0.95);
            billSetting.setCriticalLevel(10)
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
  
            assert.equal("critical", billSetting.totalClassName());
        });
        it("should return stop the total call cost increasing  when the critical level has been reached", function(){
            let billSetting = settingBill();

            billSetting.setCallCost(2.50);
            billSetting.setSmsCost(0.95);
            billSetting.setCriticalLevel(10)
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
  
            assert.equal("critical", billSetting.totalClassName());
            assert.equal(10, billSetting.getTatolCallCost());
        });
        it("should allow total to increase to update after recging critical level & then upping the critical level ", function(){
            let billSetting = settingBill();
               

            billSetting.setCallCost(2.50);
            billSetting.setSmsCost(0.95);
            billSetting.setWarningLevel(8)
            billSetting.setCriticalLevel(10);
           
    
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
            billSetting.makeCall();
  
            assert.equal("critical", billSetting.totalClassName());
            assert.equal(10, billSetting.getTatolCallCost());

            billSetting.setCriticalLevel(20);
            assert.equal("warning", billSetting.totalClassName());
            billSetting.makeCall();
            billSetting.makeCall();
            assert.equal(15, billSetting.getTatolCallCost());
            
        });
    }); 
});

