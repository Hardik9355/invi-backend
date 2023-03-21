
import { functions } from './signup/index';
import { companyfunctions } from './companydata';
import { clientfunctions } from './clientdata';
import { axiosfunctions } from './axios';
import { invoicefunctions } from './invoicedata';
export const registers = functions.register;
export const logins = functions.loginuser;
export const addcompanies = companyfunctions.addcompanydata;
export const addclients = clientfunctions.addclientdata;
export const getclients = clientfunctions.getclientdata;
export const getcompanydata = companyfunctions.getcompanydata;
export const axiosfunction = axiosfunctions.axiosdata;
export const invoicefunction= invoicefunctions.addinvoicedata;

