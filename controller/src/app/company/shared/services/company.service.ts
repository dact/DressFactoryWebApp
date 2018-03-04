import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Company } from '../models/company.model';
import { ICompanyService } from './company.contract';
import { URLCompany } from '../../../shared/resources/urls.resource';

//@Injectable()
export class CompanyService implements ICompanyService{

    private http: Http;
    /*constructor(http: Http) {
        this.http = http;
    }*/

    constructor() {
    }

    /*get():Promise<Company>{
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');

        return this.http.get(URLCompany, { headers: headers})
        .toPromise()
        .then(response => response.json() as Company)
        .catch();
    }*/

    get():Company{
        let company = new Company();
        company.name = "LOUIS BARTON";
        company.img = "img/barton.jpg";
        company.description="Inició sus actividades en el año 1990, vendiendo sus productos en los más importantes almacenes de cadena. En el año de 1992, cambio su estrategia comercial abriendo sus propios puntos de venta. En la actualidad cuenta con 26 almacenes, ubicados en Bogotá, Medellín, Pasto, Tuluá y Pereira.";
        company.contactInfo="Corregimiento Caimalito,Zona franca internacional de Pereira,Bodega B 36, Pereira-Risaralda Telephones: (+57)(6) 315 3742 – 315 3731 info@louisbarton.com";
        return company;
    }
}