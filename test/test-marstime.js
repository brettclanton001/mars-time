
const MarsTime = require('../marstime.js').MarsTime;
const assert = require('assert');

describe('Year Calculations', function(){
  it('should calculate mars years conforming to the years\
  listed in https://en.wikipedia.org/wiki/Timekeeping_on_Mars',
  function() {
    assert.equal(new MarsTime(new Date("1953-05-24T00:00:01")).getMY(), 0);
    assert.equal(new MarsTime(new Date("1955-04-10T23:59:59")).getMY(), 0);
    assert.equal(new MarsTime(new Date("1955-04-11T23:59:59")).getMY(), 1);
    assert.equal(new MarsTime(new Date("1957-02-25T23:59:59")).getMY(), 1);
    assert.equal(new MarsTime(new Date("1957-02-26T23:59:59")).getMY(), 2);
    assert.equal(new MarsTime(new Date("1959-01-13T23:59:59")).getMY(), 2);
    assert.equal(new MarsTime(new Date("1959-01-14T23:59:59")).getMY(), 3);
    assert.equal(new MarsTime(new Date("1960-11-30T23:59:59")).getMY(), 3);
    assert.equal(new MarsTime(new Date("1960-12-01T23:59:59")).getMY(), 4);
    assert.equal(new MarsTime(new Date("1991-01-03T23:59:59")).getMY(), 19);
    assert.equal(new MarsTime(new Date("1991-01-04T23:59:59")).getMY(), 20);
    assert.equal(new MarsTime(new Date("2009-10-25T23:59:59")).getMY(), 29);
    assert.equal(new MarsTime(new Date("2009-10-26T23:59:59")).getMY(), 30);
    assert.equal(new MarsTime(new Date("2028-08-16T23:59:59")).getMY(), 39);
    assert.equal(new MarsTime(new Date("2028-08-17T23:59:59")).getMY(), 40);
  });
});

var wikipediaExampleTimestamp = "2022-11-25T06:51:07.000";

describe('_getEarthJulianDateTT', function(){
  it('should match the example value provided in https://en.wikipedia.org/wiki/Timekeeping_on_Mars', function(){
    assert.equal(
      new MarsTime(new Date(wikipediaExampleTimestamp))._getEarthJulianDateTT(),
      // 2459908.7863
      2459908.7859259257
    );
  });
});

describe('getMSD', function(){
  it('should match the example value provided in https://en.wikipedia.org/wiki/Timekeeping_on_Mars', function(){
    assert.equal(
      new MarsTime(new Date(wikipediaExampleTimestamp)).getMSD(),
      // 52931.62675
      52931.626746740396
    );
  });
});

describe('getMTC', function(){
  it('should match the example value provided in https://en.wikipedia.org/wiki/Timekeeping_on_Mars', function(){
    assert.equal(
      new MarsTime(new Date(wikipediaExampleTimestamp)).getMTC(),
      // '15:02:31'
      '15:02:30'
    );
  });
});
