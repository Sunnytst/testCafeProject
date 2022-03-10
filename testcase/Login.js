import 'testcafe';
import Loginpage from '../pages/Loginpage';
console.log(Loginpage.username)
async function Logintest(){
    fixture('南昌城管城管')
        .page('http://192.168.1.57:84/');

    // 登录
    test('用例1', async t => {
        await t.typeText(Loginpage.username, "admin")
               .typeText(Loginpage.password, "aad234")
               .typeText(Loginpage.vCode, "0000")
               .click(Loginpage.Login)
               .wait(7000);
        
    });
}
