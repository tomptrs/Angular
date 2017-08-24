import { 
   Injectable 
} from '@angular/core';  
import { HttpClient } from '@angular/common/http';
import {WeerBericht} from './WeerBericht';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class WeerService {  

    

    constructor(private http: HttpClient){
       
    }

    private subject = new Subject<any>();

    sendMessage(message: any) {
        this.subject.next(message);//{ text: message });
    }
   
   getWeerberichtVandaag(){
       //src="./assets/logo.png">
       this.http.get("./assets/weerbericht.json").subscribe(res => {
           console.log(res);
           this.sendMessage(res);
  });
   }

   /*
   getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

getHeroesSlowly(): Promise<Hero[]> {
  return new Promise(resolve => {
    // Simulate server latency with 2 second delay
    setTimeout(() => resolve(this.getHeroes()), 2000);
  });
}
   */ 

     getWeerberichtVandaagAsync():Promise<WeerBericht>{
       //src="./assets/logo.png">
       let wb:WeerBericht = new WeerBericht();
       wb.Beschrijving = "testje";
       wb.Temperatuur = 22;
       //return Promise.resolve(wb);

       return new Promise(resolve => {
           setTimeout(function() {
               resolve(wb);
           }, 2000);
       })
         
   } 
}
