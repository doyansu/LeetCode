export interface TestCase {
    name: string,
    inputs: any[],
    expect_result: any,
}

// 測試一個 function 結果
export const test_template = (test_function: any) => (test_case: TestCase) => {
    const caseName = `${test_case.name} test ${test_function.name}`;
    test(caseName, () => {
        const actual_result = test_function(...test_case.inputs);
        expect(actual_result).toEqual(test_case.expect_result);
    });
};

// 透過 verify_function 來驗證 test_function 結果是否正確
export const test_template_verify_function = (test_function: any, verify_function: any) => (test_case: TestCase) => {
    const caseName = `${test_case.name} test ${test_function.name} verify by ${verify_function.name}`;
    test(caseName, () => {
        const actual_result = test_function(...test_case.inputs);
        const verify_result = verify_function(...test_case.inputs);
        expect(actual_result).toEqual(verify_result);
    });
};