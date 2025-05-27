import { TestCase, test_template, test_template_verify_function } from '../interface/testCase';
import { test_funtion_list, verify_function } from './2942. Find Words Containing Character';

test_funtion_list.forEach((fnc) => {
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [["leet","code"], 'e'],
            expect_result: [0,1],
        },
        {
            name: 'Example 2',
            inputs: [["abc","bcd","aaaa","cbc"], 'a'],
            expect_result: [0,2],
        },
        {
            name: 'Example 3',
            inputs: [["abc","bcd","aaaa","cbc"], 'z'],
            expect_result: [],
        },
    ];

    const template = test_template(fnc);
    const template_verify = test_template_verify_function(fnc, verify_function);
    
    test_case_list.forEach((testCase) => template(testCase));

    if (verify_function !== undefined) {
        test_case_list.forEach((testCase) => template_verify(testCase));
    }
});
