import { 
   Component 
} from '@angular/core';  

import { WeerBericht} from './WeerBericht';
import { Subscription } from 'rxjs/Subscription';
import { 
   WeerService 
} from './weer.service';  

@Component ({ 
   selector: 'weer', 
   template: '<div><button (click) = "sync()">Call Sync</button><button (click) = "async()">Call Async</button><button (click) = "async2()">Call Async with Subject</button></div>', 
   providers: [WeerService] 
}) 

export class WeerComponent { 
  subscription: Subscription
   message:any;
    constructor(private weerService:WeerService) {
       //?? this.weerService.Register().subscribe(message => { this.message = message;console.log(this.message);});
        //.().subscribe(message => { this.message = message;

            this.weerService.Register().subscribe(message => { 
                this.message = message;
                console.log("in callback van observer")
                console.log(this.message);
            });
    }  

    sync(arg:any){
        //Call sync:
        this.weerService.getWeerberichtVandaag();    
    }

    /*
    getHeroes(): void {
  this.heroService.getHeroes().then(heroes => this.heroes = heroes);
}
    */
    async(arg:any){
        //Call sync:
        let wb:WeerBericht;
        this.weerService.getWeerberichtVandaagAsync().then(data => { wb = data; console.log(wb);});    
    }

    async2(arg:any){
        this.weerService.getWeerberichtVandaagAsync2();
    }
  

   
}  