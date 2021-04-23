describe('RadioBill Function', function(){
    it('Should return the correct total cost of the calculated bill of sms', function(){
        var radio = radioBill() //get the factoory function
        radio.calculate('sms')
        assert.equal(0.65, radio.getTotals().sms)
    }); it('Should return the correct total cost of the calculated bill of call', function(){
        var radio = radioBill() //get the factoory function
        radio.calculate('call')
        assert.equal(2.75, radio.getTotals().totalOfSmsCall)
    }); it('Should return the correct sum of the entered bills', function(){
        var radio = radioBill() //get the factoory function
        radio.calculate('sms')
        radio.calculate('call')
        radio.calculate('sms')
        radio.calculate('call')
        radio.calculate('sms')
        radio.calculate('call')
        radio.calculate('sms')
        assert.equal(2.60, radio.getTotals().sms)
        assert.equal(8.25, radio.getTotals().call)
        assert.equal(10.85, radio.getTotals().totalOfSmsCall)
    }); it('Should ignore anything that is not call or sms', function(){
        var radio = radioBill() //get the factoory function
        radio.calculate('sms')
        radio.calculate('call')
        radio.calculate('sms')
        radio.calculate('anything')
        assert.equal(1.30, radio.getTotals().sms)
        assert.equal(2.75, radio.getTotals().call)
        assert.equal(4.05, radio.getTotals().totalOfSmsCall)
    }) 
});