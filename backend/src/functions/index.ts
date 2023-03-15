
import { functions } from './signup/index';
import { companyfunctions } from './companydata';
import { clientfunctions } from './clientdata';
export const registers = functions.register;
export const logins = functions.loginuser;
export const addcompanies = companyfunctions.addcompanydata;
export const addclients = clientfunctions.addclientdata;

