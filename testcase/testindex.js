import 'testcafe';
import CreatCase from "../util/CreatCase";
import Pagevar from '../pages/Loginpage.js';
import indexPagevar from '../pages/indexpage.js';
import casePagevar from '../pages/Ordinarycasespage.js';
import Login from '../util/Login'
fixture (`测试登录`)
  .page('http://192.168.1.208:9001/passport/?service=%2Fzfba%2Findex.html%23')
  .beforeEach(async t => {
     await Login.Loginadmin();
  });
  test("测试用例2 - 登记案件", async t => { 
    console.log("登记案件");
    await t
      .click(casePagevar.CreatCase)
      .wait(17000);
    //    await CreatCase.clickcreatbutton();
    console.log("测试登记普通程序");
  }); 

