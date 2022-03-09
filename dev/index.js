import dev from './dev'
import publish from './publish'
const config={
    dev,
    publish
}
export default config.dev  //设置测试环境
const TestCafe = require('testcafe');
const testCafe = await TestCafe('localhost', 1337, 1338);
try {
    const Runner = testCafe.createRunner();
    await Runner
        .src('./tests/my-fixture.js')
        .browsers('safari')
        .run();
}
finally {
    await testCafe.close();
}