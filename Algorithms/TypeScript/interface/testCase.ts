export interface TestCase {
    name: string,
    inputs: any[],
    expect_result: any,
}

export const test_template = (test_function: any) => (test_case: TestCase) => {
    const caseName = `${test_case.name} use ${test_function.name}`;
    test(caseName, () => {
        const actual_result = test_function(...test_case.inputs);
        expect(actual_result).toEqual(test_case.expect_result);
    });
};