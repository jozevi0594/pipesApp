import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower:string = 'jorge';
  public nameUpper:string = 'JORGE';
  public fullName:string = 'JoRge ZeGaRrA';

  public customDate:Date = new Date();
}
