import { Component, OnInit } from '@angular/core';
// const { Tafgeet } = require("tafgeet-arabic");
@Component({
  selector: 'app-sample-tafqeet-demo',
  templateUrl: './sample-tafqeet-demo.component.html',
  styleUrls: ['./sample-tafqeet-demo.component.scss']
})
export class SampleTafqeetDemoComponent implements OnInit {
  testNumber=96021

  constructor() {
    
  }
  ngOnInit(): void {
    // this.stringText = new Tafgeet(55000051000.2, 'EGP').parse();
  }


}
