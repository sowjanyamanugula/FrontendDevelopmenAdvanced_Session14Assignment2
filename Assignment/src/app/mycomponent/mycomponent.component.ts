import { Component, OnInit } from '@angular/core';
import {PublicapiserviceService} from '../publicapiservice.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})
export class MycomponentComponent implements OnInit {
  objects:any=[];
  constructor(private _myservice:PublicapiserviceService) { }

  ngOnInit() {
     this._myservice.getforeignexchange()
          .subscribe(resforiegndata => this.objects = resforiegndata);
          console.log(this.objects);
  }

}
