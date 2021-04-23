
describe('CalculateBill Function', function(){
    it('Should return the total amount of the bill after calculating the amount of call and sms that is passed on the argument string', function(){
        assert.equal(2.75, calculateBill('call').total)
    })

    it('Should return the total amount of the bill after calculating the amount of call and sms that is passed on the argument string', function(){
        assert.equal(8.90, calculateBill('call, sms, call, call').total)
    })

    it('Should return 0 when there are no calls or sms in the input string', function(){
        assert.equal(0, calculateBill('This should be anything else it could be a string or a number').total)
    })
})