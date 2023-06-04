import { Pipe, PipeTransform } from '@angular/core';
import { tafqeet } from './tafqeet';

@Pipe({ name: 'arabicNumber' })
export class ArabicNumberPipe implements PipeTransform {
  transform(value: number): string {
    if (isNaN(value) || value === null || value === undefined) {
      return '';
    }else {
      return tafqeet(value)
    }
    
  }
}