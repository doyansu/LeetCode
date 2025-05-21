# .\createModule.ps1 -name myFolderName

param (
    [Parameter(Mandatory=$true)]
    [string]$name
)

# 建立資料夾
$folderPath = Join-Path -Path "." -ChildPath $name
if (!(Test-Path $folderPath)) {
    New-Item -Path $folderPath -ItemType Directory | Out-Null
}

# name.ts 初始內容
$nameTsPath = Join-Path -Path $folderPath -ChildPath "$name.ts"
$nameTsContent = @"
function fnc(): number {
    return 0;
}

export const test_funtions = [
    fnc,
];
"@
$nameTsContent | Out-File -Encoding UTF8 -FilePath $nameTsPath -Force

# name.spec.ts 初始內容
$specTsPath = Join-Path -Path $folderPath -ChildPath "$name.spec.ts"
$specTsContent = @"
import { TestCase, test_template } from '../interface/testCase';
import { test_funtions } from './$name';

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
"@
$specTsContent | Out-File -Encoding UTF8 -FilePath $specTsPath -Force

Write-Host "✅ Module '$name' created successfully at: $folderPath"
