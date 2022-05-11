import { Component } from '@angular/core';
import { hello } from '../../../../libs/utils/hello/src/lib/hello';

@Component({
  selector: 'eslint-fix-problem-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = hello('web');
}
