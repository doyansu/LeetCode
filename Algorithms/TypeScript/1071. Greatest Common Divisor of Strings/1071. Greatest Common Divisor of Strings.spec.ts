import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './1071. Greatest Common Divisor of Strings';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: ["ABCABC", "ABC"],
            expect_result: "ABC",
        },
        {
            name: 'Example 2',
            inputs: ["ABABAB", "ABAB"],
            expect_result: "AB",
        },
        {
            name: 'Example 3',
            inputs: ["LEET", "CODE"],
            expect_result: "",
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
