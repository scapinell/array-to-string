var operations = require('../index')
var assert = require('assert');

describe('#arrToString', () => {
    it('works with one-element array', () => {
      return operations.arrToStr([1]).then(result => {
        assert.equal(result, '1')
      })
    })

    it('works with few consecutive numbers', () => {
        return operations.arrToStr([1,2,3,4,5,6,7,8,9]).then(result => {
          assert.equal(result, '1-9')
        })
      })
    
    it('works with few groups of consecutive numbers', () => {
        return operations.arrToStr([1,2,3,5,6,7,9,10,11]).then(result => {
          assert.equal(result, '1-3,5-7,9-11')
        })
      })

      it('works with two consecutive numbers', () => {
        return operations.arrToStr([4,5]).then(result => {
          assert.equal(result, '4,5')
        })
      })

      it('works with groups of consecutive numbers and sergregate numbers', () => {
        return operations.arrToStr([1,2,3,4,5,6,100,1091,1999,2000,2001,2002]).then(result => {
          assert.equal(result, '1-6,100,1091,1999-2002')
        })
      })

      it('works with not consecutive numbers', () => {
        return operations.arrToStr([1,3,5,7,9,11]).then(result => {
          assert.equal(result, '1,3,5,7,9,11')
        })
      })
  })