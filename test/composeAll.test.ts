import { composeAll, type ComposedPredicate } from "../src/index";
import { describe, expect, test } from "vitest";

describe("composeAll", () => {
	test("should return true if all predicates return true", () => {
		const isEven: ComposedPredicate<number> = (x) => x % 2 === 0;
		const isPositive: ComposedPredicate<number> = (x) => x > 0;

		const combinedPredicate = composeAll(isEven, isPositive);

		expect(combinedPredicate(4)).toBe(true);
		expect(combinedPredicate(2)).toBe(true);
		expect(combinedPredicate(6)).toBe(true);
	});

	test("should return false if any predicate returns false", () => {
		const isEven: ComposedPredicate<number> = (x) => x % 2 === 0;
		const isPositive: ComposedPredicate<number> = (x) => x > 0;

		const combinedPredicate = composeAll(isEven, isPositive);

		expect(combinedPredicate(3)).toBe(false); // isEven(3) is false
		expect(combinedPredicate(-2)).toBe(false); // isPositive(-2) is false
		expect(combinedPredicate(-3)).toBe(false); // isEven(-3) and isPositive(-3) are false
	});

	test("should handle an empty list of predicates by always returning true", () => {
		const combinedPredicate = composeAll(); // 引数なし

		expect(combinedPredicate(1)).toBe(true);
		expect(combinedPredicate(0)).toBe(true);
		expect(combinedPredicate(-1)).toBe(true);
		expect(combinedPredicate("hello")).toBe(true); // 型定義上、これは number ではないので本来はコンパイルエラーになるべき。any にするなどで対応
	});

	test("should work with different types", () => {
		const startsWithA: ComposedPredicate<string> = (s) => s.startsWith("A");
		const isLongerThan5: ComposedPredicate<string> = (s) => s.length > 5;

		const combinedPredicate = composeAll(startsWithA, isLongerThan5);

		expect(combinedPredicate("ApplePie")).toBe(true);
		expect(combinedPredicate("Apple")).toBe(false); // isLongerThan5('Apple') is false
		expect(combinedPredicate("Banana")).toBe(false); // startsWithA('Banana') is false
	});

	test("should handle multiple predicates correctly", () => {
		const isGreaterThan10: ComposedPredicate<number> = (x) => x > 10;
		const isLessThan20: ComposedPredicate<number> = (x) => x < 20;
		const isEven: ComposedPredicate<number> = (x) => x % 2 === 0;

		const combinedPredicate = composeAll(isGreaterThan10, isLessThan20, isEven);

		expect(combinedPredicate(12)).toBe(true);
		expect(combinedPredicate(11)).toBe(false); // Not even
		expect(combinedPredicate(22)).toBe(false); // Not less than 20
		expect(combinedPredicate(8)).toBe(false); // Not greater than 10
	});
});
