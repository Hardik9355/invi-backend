
import { functions } from './signup/index';
import { companyfunctions } from './companydata';
import { clientfunctions } from './clientdata';
import {authorizationfunction} from './authorization';
import { invoicefunctions } from './invoicedata';
export const registers = functions.register;
export const logins = functions.loginuser;
export const addcompanies = companyfunctions.addcompanydata;
export const addclients = clientfunctions.addclientdata;
export const getclients = clientfunctions.getclientdata;
export const getcompanydata = companyfunctions.getcompanydata;

export const getinvoicedatas = invoicefunctions.getinvoicedata;
export const getuserdatas = functions.getuserdata;
export const updatecompanydatas = companyfunctions.updatecompanydata;
export const updateclientdatas = clientfunctions.updateclientdata;
export const invoicefunction = invoicefunctions.addinvoicedata;
export const deleteclientdatas = clientfunctions.deleteclientdata;
export const deletecompanydatas = companyfunctions.deletecompanydata;
export const authorizationfunctions = authorizationfunction.authorize;
