import { get, getByHour, getNow} from '../src/index'

describe("get function", () => {
	test("should return MORNING when epoch is 8am", () => {
		const epoch = 1699689600000; // 8am on 11/11/2023
		const result = get(epoch);
		expect(result).toBe("MORNING");
	}
	);
	test("should return AFTERNOON when epoch is 2pm", () => {
		const epoch = 1699711200000; // 2pm on 11/11/2023
		const result = get(epoch);
		expect(result).toBe("AFTERNOON");
	}
	);
	test("should return EVENING when epoch is 8pm", () => {
		const epoch = 1699732800000; // 8pm on 11/11/2023
		const result = get(epoch);
		expect(result).toBe("EVENING");
	}
	);
});

describe("getByHour function", () => {
	test("should return MORNING when hour is 8", () => {
		const hour = 8;
		const result = getByHour(hour);
		expect(result).toBe("MORNING");
	});

	test("should return AFTERNOON when hour is 14", () => {
		const hour = 14;
		const result = getByHour(hour);
		expect(result).toBe("AFTERNOON");
	});

	test("should return EVENING when hour is 20", () => {
		const hour = 20;
		const result = getByHour(hour);
		expect(result).toBe("EVENING");
	});
});

describe("getNow function", () => {
	test("should return current day part", () => {
		const result = getNow();
		expect(['MORNING', 'AFTERNOON', 'EVENING']).toContain(result);
	});
});