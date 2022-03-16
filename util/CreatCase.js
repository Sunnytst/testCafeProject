
import  'testcafe';
import Pagevar from '../pages/Ordinarycasespage.js';
class CreatCase {
    async clickcreatbutton(){
        await t
            .click(Pagevar.CreatCase)
        console.log("打印"+Pagevar.CreatCase);
    };
}
export default CreatCase=new CreatCase();