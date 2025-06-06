// createModule.js
// 用法: 在 TypeScript 資料夾內輸入指令
// node createModule.js myFolderName
const fs = require('fs');
const path = require('path');

const name = process.argv[2];
if (!name) {
  console.error("請輸入檔案名稱，例如: node createModule.js myFunction");
  process.exit(1);
}

const folderPath = path.join(__dirname, name);
const tsFilePath = path.join(folderPath, `${name}.ts`);
const specFilePath = path.join(folderPath, `${name}.spec.ts`);

// 建立資料夾
if (!fs.existsSync(folderPath)) {
  fs.mkdirSync(folderPath);
}

// 建立 name.ts 初始內容
const tsTemplate = 
`function fnc(n: number): number {
    return n;
}

export const test_funtion_list = [
    fnc,
];

export const verify_function: any = undefined;
`;

fs.writeFileSync(tsFilePath, tsTemplate, 'utf8');

// 建立 name.spec.ts 初始內容
const specTemplate = 
`import { TestCase, test_template } from '../interface/testCase';
import { get_random_integer } from '../interface/commonFuntions';
import { test_funtion_list, verify_function } from './${name}';

test_funtion_list.forEach((test_funtion) => {
    // default test case
    const test_case_list: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [0],
            expect_result: null,
        },
    ];

    // init romdom test case
    if (verify_function !== undefined) {
        for (let i = 0; i < 0; ++i) {
            let inputs: any[] = [get_random_integer(0, 1)];
            let random_test_case: TestCase = {
                name: \`Random Example \${i}\`,
                inputs: inputs,
                expect_result: verify_function(...inputs),
            };
            test_case_list.push(random_test_case);
        }
    }

    // start test
    const template = test_template(test_funtion);
    test_case_list.forEach((test_case) => template(test_case));
});
`;

fs.writeFileSync(specFilePath, specTemplate, 'utf8');

console.log(`✅ Module "${name}" created successfully.`);
