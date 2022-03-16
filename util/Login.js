
import {t} from  'testcafe'
import Pagevar from '../pages/Loginpage'
class Login{
    async Loginadmin(){
        await t
            .typeText(Pagevar.username, "admin")
            .typeText(Pagevar.password, "ad234")
            .typeText(Pagevar.vCode, "0000")
            .click(Pagevar.Login)
            .wait(7000);
    }
}
export default Login=new Login();