//引入testcafe
import { Selector} from 'testcafe';

    const Logo = Selector('.login_title');
    const username = Selector('#username');
    const password = Selector('#password');
    const vCode = Selector('#vCode');
    const Login = Selector('.loginbtn');
var Pagevar = {
    Logo,
    username,
    password,
    vCode,
    Login,
}

export default Pagevar;