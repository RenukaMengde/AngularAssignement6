import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <html>
    <body>
        <h1>Marvellous Infosystem</h1>
        <input type="text" name="text" id="text1"/>
    </body>
</html>
  `,
  styles: [`
  h1{
    color : Red;
  }
  `]
})
export class AppComponent {
  title = 'Assignment6';
}
