
import  'testcafe';
import Pagevar from '../pages/Loginpage.js';
import { Selector } from 'testcafe';
async function Login(){
    fixture ('南昌城管').page ('http://192.168.1.57:84');
//登录
    test('用例1', async t => {
        await t.typeText(Pagevar.username, "admin")
               .typeText(Pagevar.password, "aad234")
               .typeText(Pagevar.vCode, "0000")
               .click(Pagevar.Login)
               .wait(107000);
        
    });
}

Login()