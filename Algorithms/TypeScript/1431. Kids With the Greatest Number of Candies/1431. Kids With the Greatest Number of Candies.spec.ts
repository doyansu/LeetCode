import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './1431. Kids With the Greatest Number of Candies';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [[2,3,5,1,3], 3],
            expect_result: [true,true,true,false,true],
        },
        {
            name: 'Example 2',
            inputs: [[4,2,1,1,2], 1],
            expect_result: [true,false,false,false,false],
        },
        {
            name: 'Example 3',
            inputs: [[12,1,12], 10],
            expect_result: [true,false,true],
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
