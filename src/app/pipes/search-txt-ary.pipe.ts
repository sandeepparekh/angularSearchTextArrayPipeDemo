import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchTxtAry'
})
export class SearchTxtAryPipe implements PipeTransform {

  transform(value: any, q: string): any {
    if (!q) {
      return value;
    }

    if (q === '') {
      return value;
    }

    return value.filter(function (w) {
      return w.indexOf(q) >= 0;
    });
  }
}
