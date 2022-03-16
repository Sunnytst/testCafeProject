import adminLogin from "../util/Login"
import { Role } from "testcafe";
var userRole = Role(
	async () => {
		await adminLogin.Loginadmin();
	});
  export default userRole;