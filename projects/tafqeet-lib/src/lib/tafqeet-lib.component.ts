import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { tafqeet } from './tafqeet';
@Component({
  selector: 'ng-tafqeet',
  template: `
    <p>
        {{arabicString}}
    </p>

    
  `,
  styles: [
  ]
})
export class TafqeetLibComponent{
  @Input() data: any = 123
  arabicString:string=''
  ngOnInit(): void {
    this.arabicString = tafqeet(this.data)
  }

}
