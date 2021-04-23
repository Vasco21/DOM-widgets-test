describe('textBill function', function(){
    it('Should return the correct cost of calculated bill type of call then on sms should be 0.00', function(){
        var Bill = textBill()
        Bill.calculates("call")
        assert.equal(Bill.get().call, 2.75)
        assert.equal(Bill.get().sms, 0.00)
        assert.equal(Bill.get().total, 2.75)
    })

    it('Should return the correct cost of calculated bill type of sms then on calls should return 0.00', function(){
        var Bill = textBill()
        Bill.calculates('sms')
        assert.equal(Bill.get().call, 0.00)
        assert.equal(Bill.get().sms, 0.65)
        assert.equal(Bill.get().total, 0.65)
    })

    it('Should return the correct total of cost bills for the passed string or bill entered', function(){
        var Bill = textBill()
        Bill.calculates("call")
        Bill.calculates("sms")
        Bill.calculates("sms")
        Bill.calculates("call")
        assert.equal(Bill.get().call, 5.50);
        assert.equal(Bill.get().sms, 1.30);
        assert.equal(Bill.get().total, 6.80);
    })
});