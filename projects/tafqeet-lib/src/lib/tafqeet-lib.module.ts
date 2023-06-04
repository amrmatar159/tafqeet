import { NgModule } from '@angular/core';
import { TafqeetLibComponent } from './tafqeet-lib.component';
import { ArabicNumberPipe } from './arabic-number.pipe';

@NgModule({
  declarations: [
    TafqeetLibComponent,
    ArabicNumberPipe
  ],
  imports: [
  ],
  exports: [
    TafqeetLibComponent
  ]
})
export class TafqeetLibModule { }
