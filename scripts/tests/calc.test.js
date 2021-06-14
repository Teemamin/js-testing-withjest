const addition = require('../calc')

//first describe is the overall thing being tested
//nested dicribes are the differnt functionalites of the main component
describe('calculator',()=>{
    describe('addition', ()=>{
        test('should return 42 for 20 + 22', ()=>{
            expect(addition(20,22)).toBe(42)
        })
        test('should return 73 for 42 + 31', ()=>{
            expect(addition(42,31)).toBe(73)
        })

    })
    describe('multiplication', ()=>{

    })
    describe('subtraction', ()=>{

    })
    describe('division', ()=>{

    })
})