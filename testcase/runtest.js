import createTestCafe  from "testcafe";
const TestCafe = require('testcafe');
const testCafe = await TestCafe('localhost', 1337, 1338);
try {
    const Runner = testCafe.createRunner();
    await Runner
        .src('./testcase/login.js')
        .browsers('safari')
        .run();
}
finally {
    await testCafe.close();
}
