
import { functions } from './signup/index';
import { companyfunctions } from './companydata';
export const registers = functions.register;
export const logins = functions.loginuser;
export const addcompanies = companyfunctions.addcompanydata;
