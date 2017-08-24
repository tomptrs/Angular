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
   template: '<div><button (click) = "sync()">Call Sync</button><button (click) = "async()">Call Async</button></div>', 
   providers: [WeerService] 
}) 

export class WeerComponent { 
  subscription: Subscription
   
    constructor(private weerService:WeerService) {

        
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
  

   
}  