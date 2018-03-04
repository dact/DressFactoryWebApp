import { Company } from '../models/company.model';

export interface ICompanyService {
    //get():Promise<Company>;
    get():Company;
}