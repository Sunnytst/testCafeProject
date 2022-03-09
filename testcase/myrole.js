import { Role } from "testcafe";
import {Login} from "./Login";
import * as help from "./helper";


export const userRole = Role(
	help.websiteUrl+help.urls["login"], 
	async () => {
		await Logintest();
	});