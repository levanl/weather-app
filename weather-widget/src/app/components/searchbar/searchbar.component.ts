import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  myForm: FormGroup;

  constructor (private fb: FormBuilder) {}


  ngOnInit(): void {
    this.myForm = this.fb.group({
      cityName: ''
    })
  }

}
