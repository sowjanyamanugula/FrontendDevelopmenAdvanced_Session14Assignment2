import { Component } from '@angular/core';
import {PublicapiserviceService} from './publicapiservice.service';
import { MycomponentComponent } from './mycomponent/mycomponent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PublicapiserviceService]
})
export class AppComponent {
  title = 'app works!';
}
