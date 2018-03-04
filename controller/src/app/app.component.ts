import {Component} from '@angular/core';
import { EstudiantesComponent } from './estudiantes.component';
import {CompanyComponent} from './company/components/company.component'

@Component({
  selector: 'my-app',
  templateUrl: './src/app/app.component.html',
  directives:[EstudiantesComponent,CompanyComponent]
})
export class AppComponent { }