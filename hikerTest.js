'use strict';

const answer = require('./hiker.js');
const expect = global.expect;

describe('Should Style: Answer', function () {
  it('should return 24 variations of "Biro"?', function () {
    expect(answer("biro")).to.equal(24);
  });
  it('should return 60 variations of "Happy"?', function () {
    expect(answer("happy")).to.equal(60);
  });
  it('should return 6 variations of "two"?', function () {
    expect(answer("two")).to.equal(6);
  });
  it('should return 120 variations of "Devon"?', function () {
    expect(answer("Devon")).to.equal(120);
  });
  it('should return 2520 variations of "Quentin"?', function () {
    expect(answer("Quentin")).to.equal(2520);
  });
});
