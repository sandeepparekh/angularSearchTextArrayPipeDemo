import { SearchTxtAryPipe } from './pipes/search-txt-ary.pipe';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  names = ['Gelya McMaster', 'Maxwell Irwin', 'Johannes McMaster', 'Davon Irwin'];
  searchtxt: '';
}
