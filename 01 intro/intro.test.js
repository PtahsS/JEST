const {sum, nativeNull} = require('./intro');


describe('Sum function:', () => {

	test('should return sum of two values', () => {
		expect(sum(1, 3)).toBe(4);
		expect(sum(3, 5)).toBe(8);
	})

	test('should return correctly comparing to other', () => {
		expect(sum(2, 3)).toBeGreaterThan(4);
		expect(sum(5, 6)).toBeLessThanOrEqual(89);
	})

	test('should sum 2 float values correctly', () => {
		expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
	})

})

describe('Native Null function', () => {
	test('should return false value null', () => {
		expect(nativeNull()).toBe(null);
		expect(nativeNull()).toBeNull();
		expect(nativeNull()).toBeFalsy();  // Undefined, null, 0, ''
		expect(nativeNull()).toBeDefined();
		expect(nativeNull()).not.toBeTruthy();
		expect(nativeNull()).not.toBeUndefined();

	})
})

