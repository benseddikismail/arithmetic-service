const { add } = require('../arithmetica');


test('2 + 3 is equal to 5', () => {
    expect(add(2, 3)).toBe(5);
});

test('9 + 3 is equal to 12', () => {
    expect(add(9, 3)).toBe(12);
});

test('5 + 5 is equal to 10', () => {
    expect(add(5, 5)).toBe(10);
});