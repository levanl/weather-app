import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-upper-data',
  templateUrl: './upper-data.component.html',
  styleUrls: ['./upper-data.component.scss']
})
export class UpperDataComponent implements OnInit {

  weatherTemp:any
  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private api_service: ApiService
  ) {
    this.matIconRegistry.addSvgIcon(
      "sunny",
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/Group 3.svg')
    )
  }

  ngOnInit(): void {
    this.showWeatherData()
  }

  showWeatherData() {
    this.api_service.getWeatherData().subscribe(result => {
      console.log(result)
      this.weatherTemp = result['main']
      console.log(this.weatherTemp)
    })
  }






}
