
import  'testcafe';
import Pagevar from '../pages/Loginpage.js';
import  { Role } from 'testcafe';
//登录

const adminLogin = Role('http://192.168.1.204:9001', async t => {
    await t
        .typeText(Pagevar.username, "admin")
        .typeText(Pagevar.password, "ad234")
        .typeText(Pagevar.vCode, "0000")
        .click(Pagevar.Login)
        .wait(7000);
});
export default adminLogin;