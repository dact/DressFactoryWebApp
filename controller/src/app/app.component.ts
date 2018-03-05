import { CarComponent } from './product/components/car.component';
import {Component} from '@angular/core';
import { EstudiantesComponent } from './estudiantes.component';
import {CompanyComponent} from './company/components/company.component'
import {ProductComponent} from './product/components/product.component'

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  directives:[ProductComponent,CompanyComponent,CarComponent]
})



export class AppComponent { }