import adminLogin from "./Loginrole"
import CreatCase from "./CreatCase"
fixture (`测试登录`)
  test("测试用例1 - 登录", async t => { 
    await t
        .useRole(adminLogin )
        .wait(7000);;
    console.log("测试登录");
  });
  test("测试用例2 - 登记案件", async t => { 
    await CreatCase.clickcreatbutton();
    await t
        .wait(7000);
    console.log("测试登记普通程序");
  });