import { Component, OnInit } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent implements OnInit {
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  appTitle: string = "myapp";
  constructor() { }

  ngOnInit() {
  }

}
