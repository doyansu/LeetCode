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
`function fnc(): number {
    return 0;
}

export const test_funtions = [
    fnc,
];
`;

fs.writeFileSync(tsFilePath, tsTemplate, 'utf8');

// 建立 name.spec.ts 初始內容
const specTemplate = 
`import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './${name}';

test_funtions.forEach((fnc) => {
    const testCases: TestCase[] = [
        {
            name: 'Example 1',
            inputs: [],
            expect_result: null,
        },
    ];

    const template = test_template(fnc);
    testCases.forEach((testCase) => template(testCase));
});
`;

fs.writeFileSync(specFilePath, specTemplate, 'utf8');

console.log(`✅ Module "${name}" created successfully.`);
