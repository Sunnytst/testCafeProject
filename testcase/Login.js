
import  'testcafe';
import Pagevar from '../pages/Loginpage.js';
import { Role } from 'testcafe';
import { Selector } from 'testcafe';
async function Login(){
    fixture ('荣昌执法').page ('http://192.168.1.204:9001');
//登录
    test('用例1', async t => {
        await t.typeText(Pagevar.username, "admin")
               .typeText(Pagevar.password, "ad234")
               .typeText(Pagevar.vCode, "0000")
               .click(Pagevar.Login)
               .wait(1007000);
        
    });
}

Login()