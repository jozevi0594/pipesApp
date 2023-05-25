import { Component } from '@angular/core';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  public name: string='Jorge';
  public gender:'male'|'female'='male';
  public invitationMap={
    'male':'invitarlo',
    'female':'invitarla'
  };

  changeClient():void{
    this.name='Melissa';
    this.gender='female';
  }
  public clients:string[]=['Maria','Pedro','Fernando','Hernando','Melissa','Jorge']
  public clientsMap={
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos un cliente esperando.',
    '=2':'tenemos 2 personas esperando.',
    'other':'tenemos # clientes esperando.',
  }

  deleteClient():void{
    this.clients.shift();
  }

  public person={
    name:'Jorge',
    age:'28',
    address:'Trujillo, Peru'
  }

  public myObservableTimer = interval(2000).pipe(
    tap(value => console.log('tap',value))
  );

  public promiseValue = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve('tenemos data en la promesa.')
    },3500);
  })
}
