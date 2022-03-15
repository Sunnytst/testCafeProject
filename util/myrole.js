import adminLogin from "./Login"

fixture (`Ordner erstellen`);
  test("测试用例1 - 登录", async t => { 
    await t.useRole(adminLogin )
  });