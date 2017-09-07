# Angular 4

goeie resource:
https://angular-2-training-book.rangle.io/handout/bootstrapping/file_structure.html
https://angular.io/guide/architecture

Angular is een open source JavaScript framework voor het bouwen van web applicaties.

Angular bestaat uit:

- componenten: componenten helpen om de applicatie modulair op te bouwen, zodat je je applicatie beter kan onderhouden

- TypeScript: is een superset van JavaScript (~MicroSoft)

- Services: code om te sharen tussen de componenten.

## Ontwikkeling

Je hebt volgende tools nodig:

- npm : Node Package Manager : om met open source repositories te kunnen werken. Angular JS heeft dependencies met andere componenten, en npm wordt gebruikt om deze te downloaden, installeren, en toe te voegen aan je eigen project. 

> Installeer : https://www.npmjs.com/

- editor: vb. brackets of Visual Studio Code

- git : om je starters kit te downloaden. Deze starters kit bevat alle nodige code om te kunnen starten met Angular JS (wordt meestal gedaan door alle ontwikkelaars) (Je kan ook gebruik maken van Angular CLI)

https://github.com/angular/quickstart

> git clone https://github.com/angular/quickstart Demo 

> Daarna : npm install


UPGRADE naar angular 4:

> npm install @angular/common@next @angular/compiler@next @angular/compiler-cli@next @angular/core@next @angular/forms@next @angular/http@next @angular/platform-browser@next @angular/platform-browser-dynamic@next @angular/platform-server@next @angular/router@next @angular/animations@next --save

We moeten zeker Typescript 2.1.6 of hoger gebruiken

> npm install typescript@2.2.1 --save


# Introductie TypeScript

TypeScript is een superset van JavaScript ontwikkeld door Microsoft. Dankzijn TypeScript hebben we de mogelijkheid om classes, interfaces naar JavaScript te brengen.

## Declaration In TypeScript 

const om een constante aan te maken, en let om een variabele te declareren:

```
let  name = "TypeScript"; 
name = "nodejs"; 
const pi = 3.141;
```
Eens een variabele een type heeft, kan dit niet meer veranderd worden. Je kan ook het type reeds meegeven (na de variabele gevolgd door een dubbel punt: ):

```
let name: string = "TypeScript";
```

### Types:

```
let isDone: boolean = false;
```


Alle getallen zijn floating point waarden in TypeScript (net zoals in JavaScript).
```
let loc: number = 600;
```

Voor strings kan je dubbele quotes (") , of enkele quotes (') gebruiken:

```
let name = "typescript"; name = "java";
```


TypeScript supporteert ook multiline strings, door gebruik te maken van de backtick:`´`

```
let subject: string = `TypeScript is awesome. Google adapting a language developed at Microsoft, shows how awesome it is.`
```

Nog een voorbeeld:
```
let customerName: string = `Tom`; 
let bedrag: number = 1000; 
let email: string = `Hallo ${customerName}, je bedrag is: ${invoiceAmount}. Thank you.`
```

#### any
Wanneer je het datatype niet weet kan je gebruik maken van any

```
let testVar: any; 
```

#### Void 

Indien geen datatype moet meegegeven worden, kan je gebruik maken van void: (je functie geeft geen waarde terug):

```
function showWarning(): void 
{
   alert("This is a warning")
}
```

## Arrays 


let cities: string[] = ['delhi', 'chennai', 'mumbai']; 
let cities: Array<string> = ['delhi', 'chennai', 'mumbai'];

## Eum

Enums worden gebruikt om een gebruikersvriendelijke naam te geven aan numerieke waarden, bijvoorbeeld:

```
enum Day {Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}; 

let firstDay: Day = Day.Sunday;
```

Default begint de nummering bij 0, maar je kan dit overriden:

```
enum Day {Sunday = 1, Monday, Tuesday, Wednesday, Thursday, Friday, Saturday}; 

enum Direction {North = 2, South = 4, East = 6, West = 8}; 

```

## for of


Om over collecties te loopen kan je gebruik maken van de for of loop:

```
let cities: string[] = ['delhi', 'chennai', 'mumbai'];
for (let city of cities) 
{        
    alert(city); 
}
```

## Functies 

Voorbeelden:

```
function squareOf(i: number): number 
{
 return i * i; 
};

function squareOf(i: number) 
{
 return i * i 
};

```


Je kan functies toewijzen aan variabelen, en functies doorgegeven als parameter. Je kan ook anonymous functies schrijven:

```
let sqr1 = function sqr (i: number) : number 
{
 return i * i; 
 }
 
// anonymous function 
let sqr2 = function (i: number) : number 
{ 
  return i * i; 
}

```
Alternatief voor anonieme functies door gebruik te maken van =>

```
let sqr3 = (i: number) : number => { return i * i;}
```

of
```
let sqr4 = (i: number)  => { return i * i;}
```

// de return is zelfs optioneel:
```
let sqr5 = (i: number) => i * i
```

### Optional and Default values 

Functies kunnen optionele waarden aannemen door gebruik te maken van ?:
```
function getFullName(firstName: string, lastName?: string) : string {
   if(lastName) {
        return firstName + " " + lastName;        
        } 
   else {
        return firstName        
        }
}
```

Default waarden worden als volgt meegegeven:

```
function getFullName(firstName: string, lastName: string = "") : string {       
return (firstName + " " + lastName).trim(); 
}
```

## Klassen

Dankzij TypeScript kunnen we object georienteerd design toepassen in JavaScript:

```
class Book {        
    name: string;        
    purchasedYear: number;
    
    constructor (name: string, purchasedYear: number){                   this.name = name;
        this.purchasedYear = purchasedYear;        
        }
    }
    
let Book1 = new Book('7 habits', 2005)
```

### Overerving

```
class Asset {        
    name: string;        
    purchasedYear: number;
    
    constructor (name: string, purchasedYear: number){                  this.name = name;                
        this.purchasedYear = purchasedYear;        
        }
}

class Book extends Asset {        
    constructor (name: string, purchasedYear: number) {                 super(name, purchasedYear)        
    } 
} 

let book1 = new Book('7-habits', 2013);

```

### Interface

interface iAsset {        
    name: string;        
    purchasedYear: number;        
    age: () => number; 
}


class Book implements iAsset{        
    name: string;        
    purchasedYear: number;
    
    constructor (name: string, purchasedYear: number){                   this.name = name;
        this.purchasedYear = purchasedYear;        
    }        
    
    age() {                
        return (2016 - this.purchasedYear);        
        }
}

let Book1 = new Book('7 habits', 2005) alert(Book1.age)

```
# Gebruik maken van CLI ~ Command Line Interface 

1. npm install -g @angular/cli


Om een nieuw ng4 project te starten type:

> ng new my-project-name

> cd my-project-name

## Hello World

> Ga naar:  src/app/app.component.ts

```

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { name = 'Angular'; }

```
en verander de name property van de AppComponent klasse

Visual Studio Code zal automatisch je bestanden compileren en van je TypeScript files JavaScript files maken. Hiervoor ga je naar je Command Prompt en type je 

>npm start

de Node Package Manager zal een lite web server starten en je Angular Applicatie opstarten.

Werk je met de CLI dan typ je :

> ng serve --open

## Modules

Modules worden gebruikt om logica in je applicatie te creëeren, zodat je verschillende modules aanmaakt om je functionaliteit van je applicatie te verdelen.

De root module is : app.module.ts in je app folder.

```

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```
De import statements worden gebruikt om functionaliteit van andere modules in te laden.

de @NgModule decorator wordt gebruikt om de imports, declarations en bootstrap te definiëren:

- BrowserModules: is default voor web based angular applicaties

- bootstrap: geeft aan welke componenten te 'bootstrappen' in de applicatie, zodat de functionaliteit kan gebruikt worden in de appliatie. Als je de component in de bootstrap array hebt gezet, moet je hem ook declareren, zodat de andere componenten hem kunnen gebruiken.

## Anatomy van een Angular 2 applicatie

Een applicatie bestaat uit verschillende componenten die elke een logisch deel van de functionaliteit bevat. Verder kan je gebruik maken van services die worden gebruikt om code tussen de verschillende componenten te delen.

Een component bestaat uit :

- Klasse: bevat properties en methodes (zoals een C# klasse)

- Metadata: extra info voor de angular klasse

- Template (is de HTML view): render de view van de applicatie

En elke applicatie is opgebouwd uit modules ( elke applicatie heeft minstens een root module), die dan uit verschillende componenten kan bestaan.

## Componenten

Ga naar app.component.ts:

### Klasse

```

export class AppComponent  { name = 'Angular'; }
 
```

- We maken de klasse AppComponent aan, en gebruiken het keywoord export om aan te duiden dat de component ook in andere modules kan gebruikt worden.

- name is een property

> TODO: Maak een nieuwe property aan

```

export class AppComponent  { 
  
  name = 'Angular'; 
  woonplaats:string = "Westerlo";


}

```

### Template

De template is de view die in de applicatie moet gerendered worden, en bevat 

- HTML Code
- Class Properties

```

 template: `<h1>Hello {{name}}</h1>`,
 
  ```
  
  Hier zie je dat we gebruik maken van de name property van de klasse die wordt gelinkt in de HTML code.
  
  ### Metadata
  
  Dit wordt gebruikt om de Angular JS klasse met extra informatie te decoreren.
  

```

import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent  { 
  
  name = 'Angular'; 
  woonplaats:string = "Westerlo";


}

```

In bovenstaand voorbeeld importeren we de component decorator van de angular/core module.

Daarna gebruiken we de @Component om zelf onze component te definiëren.

De component heeft een selector "my-app". Dit is onze HTML tag die we in onze hoofd HTML pagina kunnen gebruiken (index.html)

```

<body>
    <my-app>Loading AppComponent content here ...</my-app>
  </body>
  
```

####  template methoden

Inline template: 

```
 template: `<h1>Hello {{name}}</h1>`,
 
```


Template URL:

```

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'  
})
```

De app.component.html ziet er dan bijvoorbeeld als volgt uit:

```

<h1>Hello {{name}}</h1> 
<p>bla bla bla</p>
<p>{{woonplaats}}</p>

```

## Directives

Een directive is een custom HTML element om de kracht van HTML verder uit te breiden.

Als we naar het app.module.ts bestand kijken

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

```

zien we dat BrowserModule gedefinieerd is. Door deze module te definiëren kunnen we gebruik maken van de

- ngif
- ngfor

directives.

### ngif

Deze directive wordt gebruikt om elementen aan je HTML code toe te voegen indien deze waar (true) zijn.

```
export class AppComponent  { 
  
  name = 'Angular'; 
  woonplaats:string = "Westerlo";
  status:boolean = true;

}
```

In de HTML template coderen we bijvoorbeeld

```

<div *ngIf = "status"> Toon deze div!!!</div>

```

### ngFor

de ngFor loop wordt gebruikt om elementen uit een lijst te tonen

Ik maak de property lijst aan:

```

export class AppComponent  { 
  
  name = 'Angular'; 
  woonplaats:string = "Westerlo";
  status:boolean = false;
  lijst = ["Tom","Hannes","Mieke","Arno"];

  namen = [{
    "naam":"Peeters",
    "voornaam":"Tom"
  },
 {
    "naam":"Vandeperre",
    "voornaam":"Mieke"
  }
  ];

}

```
En toon de lijst in de View:

```

<ul *ngFor = "let item of lijst">
    <li>{{item}}</li>
</ul>


<ul *ngFor = "let item of namen">
    <li>{{item.naam}} - {{item.voornaam}}</li>
</ul>

```

# Databinding

zie ngFor


# 2-wegs databinding

Met Angular 2 kunnen we gebruik maken van forms die door de ngModel directive 2-way binding kunnen aanbieden.

We maken bijvoorbeeld eerst een model aan:

Product.ts

```
export class Product { 
   constructor ( 
      public productid: number, 
      public productname: string 
   ) {  } 
}
```

# Display data

We leggen de display van data uit aan de hand van een voorbeeld:

We maken een nieuwe componenent aan:

```

import {
   Component
} from '@angular/core';

@Component ({
   selector: 'binding',
   templateUrl: 'app/binding.component.html'
})

export class BindingComponent {
   property: string = 'Angular JS2';
   lijst: string[] = ["binding 1", "binding 2", "binding 3"];
}

```
De klasse BindingComponent heeft een string en array property.

In de View: binding.component.html coderen we:

```

<div>
   binding a property {{property}}<br>
   The first element is {{lijst[0]}}<br>
   The second second is {{lijst[1]}}<br>
   The third thirtd is {{lijst[2]}}<br>
</div>

```

We binding de properties via {{}}.


### Binding UI properties

```

<div>
   <input [value] = "name" (input) = "name = $event.target.value">
   {{name}}
</div>

```

- [value] = "name" : om de name variabele tussen {{}} te binden aan de value property van het input element.

- (input) = "name = $event.target.value" : een declaratieve manier om een expressie aan het input element te binden.

- "name = $event.target.value" : de expression wordt uitgevoerd wanneer input event wordt afgevuurd.

Een voorbeeld hoe we rechtstreeks aan een property binden:

```
<div>
   binding a property {{property}}<br>
   The first element is {{lijst[0]}}<br>
   The second second is {{lijst[1]}}<br>
   The third thirtd is {{lijst[2]}}<br>
</div>

<div>
   <input [value] = "property" (input) = "property = $event.target.value">
   {{property}}
</div>

```

# Events

We gaan een click event van een button implementeren die een property op true of false zal zetten.

```

<div> 
   {{status}} 
   <button (click) = "clicked()">Click</button> 
</div> 

```
```

export class BindingComponent {
   property: string = 'Angular JS2';
   lijst: string[] = ["binding 1", "binding 2", "binding 3"];

   status:boolean = true;

  
   
   clicked(event:any){
       console.log("test")
        this.status = !this.status;
   }
}

```

# Project 1 : Guess the number

Beschrijving componenten

Model	: bewaren van de business data
View : Voorstelling van de user interface

Component	: Verantwoordelijk voor de coordinatie tussen model en view

 Ter verduidelijking bouwen we een "Raad het getal" applicatie. We trachten het model eerst op te bouwen door naar de UI en het gedrag van de UI (button click,..) te kijken. 

## Requirements & Model

[Aanmaak van het random getal: bewaren we in de variabele "origineel"]
[Mogelijkheid om een getal te raden: bewaren we in de variabele "guess"]
[Bijhouden hoeveel keer je gegokt hebt: bewaren we in de variabele "aantalPogingen"]
[De gebruiker hints geven op basis van de inut: bewaren we in de variabele "afwijking"]

We maken een klasse Guess aan:

```

 export class Guess{

    origineelGetal:number;
    gok:number;
    aantalPogingen:number;
    afwijking:number;

    constructor(){
        this.origineelGetal = Math.round(Math.random()*1000);
        this.aantalPogingen = 0;
    }

    DoeGok(getal:number){
        this.gok = getal;
        this.aantalPogingen++;
        this.afwijking = this.gok-this.origineelGetal;
    }
 }

```

Nu maken we onze guess.component aan:

```

import {
   Component
} from '@angular/core';

import { Guess } from './guessModel';

@Component ({
   selector: 'guess',
   templateUrl: 'app/guess.component.html'
})

export class GuessComponent {  

  deGok:Guess;

  constructor(){
      this.deGok = new Guess();
  }
   
   verify(getal:string){
       console.log(getal);
       this.deGok.DoeGok(parseInt(getal));
        console.log(this.deGok.afwijking);
        console.log(this.deGok.origineelGetal);
   }

    restart(event:any){
       console.log("restart");
   }
}

```
We importeren ons guess model, zodat we in onze component kunnen gebruik maken van de klasse Guess.

Onze view ziet er als volgt uit:

```

 <div>
        <h1>Guess the number</h1>
        your guess: 
       
        <input #gokje value="0">
        <br />
        <button (click) = "verify(gokje.value)" >Verify</button>
        <button (click) = "restart()">Restart</button>


        <p *ngIf = "deGok.afwijking > 0">Te hoog</p>
        <p *ngIf = "deGok.afwijking == 0">Juist!!!</p>
        <p *ngIf = "deGok.afwijking < 0">Te laag!!</p>

        <p>Aantal gokken: {{deGok.aantalPogingen}}</p>
    </div>
    
  ```
 
# Project 2 : WorkOut App

## Requirements

Deze workout app is een planning voor fitness oefeningen om binnen de 5 minuten 10 oefeningen achtereenvolgens uit te voeren. Dus we moeten 10 oefeningen voorzien waarbij elke oefening 30 seconden duurt, gevolgd door een rust periode. Na de rust wordt automatisch de volgende oefening gestart.

De workout starten
Voorzie step-by-step instructies hoe men de oefening moet uitvoeren
Een timer om te kijken hoeveel tijd nog rest voor de oefening
Notificatie aan de gebruiker wanneer de oefening gedaan is, en automatisch naar de volgende oefening overgaan
Om de juiste taal te spreken is een workout een serie oefeningen uitgevoerd in een bepaalde volgorde met een bepaalde tijdsduur.

Een oefening heeft:

Naam
Titel (aan de gebruiker getoond)
Beschrijving
Instructies
Model

Uit de requirements halen we ons model:

```

export class Oefening{
    naam:string;
    titel:string;
    beschrijving:string;
    tijdsduur:number;
    constructor(naam:string,titel:string,beschrijving:string,tijdsduur:number){
        console.log(naam);
        this.naam = naam;
        this.titel = titel;
        this.beschrijving = beschrijving;
        this.tijdsduur = tijdsduur;
    }
}


import { Oefening } from './oefening';

export class WorkOutPlan{
    Naam:string;
    Oefeningen: Oefening[] 
    Titel:string;
    RustTussenOefeningen:number;

}


```

(Eigenlijk hebben we in deze oefening misschien geen WorkOutPlan nodig, omdat we maar 1 workoutplan implementeren met daarin enkele oefeningen, dus hebben we met de klasse Oefening meer dan genoeg. Maar voor de toekomst kunnen we het met de klasse WorkOutPlan makkelijker uitbreiden met nieuwe plannen en oefeningen.

## Bouwen van de fitness component

```

import {
   Component,OnInit
} from '@angular/core';

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

import { Oefening } from './oefening';
import {WorkOutPlan} from './workoutplan';

@Component ({
   selector: 'fitnes',
   templateUrl: 'app/fitnes.component.html'
})

export class FitnesComponent implements OnInit {  

    workoutplan:WorkOutPlan;
    huidigeoefening:Oefening;
   private subject = new Subject<any>();
    message: any;
    subscription: Subscription
    

    sendMessage(message: number) {
        this.subject.next(message);//{ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }


  constructor(){
//subscribe
 this.subscription = this.getMessage().subscribe(message => { this.message = message;
       
        console.log(message);
        if (message == this.huidigeoefening.tijdsduur)
            {
                console.log("TIJDSDUUR OVER");
                this.clearInterval();
            }
    });

      console.log("in ctor");
    this.workoutplan = new WorkOutPlan();
    this.workoutplan.Oefeningen = new Array();
    this.workoutplan.Naam = "WP 1";
    this.workoutplan.Titel = "WP 1";
    this.workoutplan.RustTussenOefeningen = 15;
    this.CreateOefeningen();

    let oef = this.workoutplan.Oefeningen.pop();
    console.log(oef);
    
    if(typeof oef != "undefined")
        this.startOefeningen(oef);
  }

   ngOnInit() {
    console.log("On Init");
  }

  


  CreateOefeningen():void{
      console.log("in create oefening");
    this.workoutplan.Oefeningen.push(new Oefening("springen","springen","enkele seconden in het rond springen",3));
    this.workoutplan.Oefeningen.push(new Oefening("lopen","lopen","enkele seconden in het rond lopen",2));
    this.workoutplan.Oefeningen.push(new Oefening("pompen","pompen","enkele seconden in het rond pompen",3));
    this.workoutplan.Oefeningen.push(new Oefening("optrekken","optrekken","enkele seconden in het rond optrekken",2));
  }

  startOefeningen(oefening:Oefening) {
        console.log("start oefeningen")
        console.log(oefening);
        this.huidigeoefening = oefening;     
      
        this.startInterval();
    };

    intervalId:any;
    tellerInterval:number=0;
    
    
    startInterval(){
        this.tellerInterval = 0;
        this.intervalId = setInterval(() => {  
        this.tellerInterval++;
        console.log(this.tellerInterval);
        this.sendMessage(this.tellerInterval);
    }, 1000);
    }//end start interval

clearInterval(){
    clearInterval(this.intervalId);
    //start a nieuwe oefening
     this.startOefeningen(this.workoutplan.Oefeningen.pop());
}

   
}

```
In de constructor functie starten we de startWorkOut. Hier gaan we eerst een workoutplan aanmaken en uiteindelijk dit plan met hierin de oefeningen te starten.


Bij de startoefening methode (als argument de oefening die moet getoond worden), wordt de startInterval methode gestart, die een teller initieert totdat de oefening gedaan is.

In Angular1 had men een watch functionaliteit die in de 2+ versies niet meer bestaat. In plaats daarvan maakt men gebruik van het observer patroon.

## Observable data

ow that we have seen how to use an observable data service, let's see how we can build one using RxJs.

The heart of an observable data service is the RxJs Subject. Subjects implement both the Observer and the Observable interfaces, meaning that we can use them to both emit values and register subscriptors.

The subject is nothing more than a traditional event bus, but much more powerful as it provides all the RxJs functional operators with it. But, at its heart, we simply use it to subscribe just like you would with a regular observable:

## Observables

An exciting new feature used with Angular is the Observable. This isn't an Angular specific feature, but rather a proposed standard for managing async data that will be included in the release of ES7. Observables open up a continuous channel of communication in which multiple values of data can be emitted over time. From this we get a pattern of dealing with data by using array-like operations to parse, modify and maintain data. Angular uses observables extensively - you'll see them in the HTTP service and the event system.

```

import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';

private subject = new Subject<any>();

sendMessage(message: number) {
        this.subject.next(message);//{ text: message });
    }
 
    clearMessage() {
        this.subject.next();
    }
 
    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    
     startInterval(){
        this.tellerInterval = 0;
        this.intervalId = setInterval(() => {  
        this.tellerInterval++;
        console.log(this.tellerInterval);
        this.sendMessage(this.tellerInterval);
    }, 1000);
    }//end start interval
    
    

```

Subscribe jezelf aan het subject:

```
    message: any;
    subscription: Subscription
    
     constructor(){
//subscribe
 this.subscription = this.getMessage().subscribe(message => { this.message = message;
       
        console.log(message);
        if (message == this.huidigeoefening.tijdsduur)
            {
                console.log("TIJDSDUUR OVER");
                this.clearInterval();
            }
    });
    
```

# Service

Een service wordt gebruikt om functionaliteit over te brengen naar verschillende modules of verschillende componenten. Bijvoorbeeld toegang naar een dataservice die verschillende modules nodig hebben.

Eerst maak je een klasse aan die een injectable decorator heeft. Deze decorator laat toe dat de klasse in elke module kan geïnjecteerd worden.

@Injectable() 
   export class classname {  
}

Bijvoorbeeld maken we een weerservice aan:

```

import { 
   Injectable 
} from '@angular/core';  

import {WeerBericht} from './WeerBericht';

@Injectable()
export class WeerService {  

    private berichten:WeerBericht[];

    constructor(){
        this.berichten.push(new WeerBericht(18,"bewolkt"));
        this.berichten.push(new WeerBericht(23,"zonnig"));
        this.berichten.push(new WeerBericht(15,"regenachtig"));
    }
   
   getWeerberichtVandaag():WeerBericht{
       return this.berichten[0];
   } 
}

```

De weercomponent ziet er als volgt uit:

```

import { 
   Component 
} from '@angular/core';  

import { WeerBericht} from './WeerBericht';

import { 
   WeerService 
} from './weerservice';  

@Component ({ 
   selector: 'weer', 
   template: '<div>{{ value | json }}</div>', 
   providers: [WeerService] 
}) 

export class AppComponent { 
   value: WeerBericht;
   constructor(private _weerService: WeerService) { }  

   ngOnInit(): void { 
      this.value = this._weerService.getWeerberichtVandaag()
   } 
}  

```

Eerst importeren we de weerservice module in onze component, waarna we de service registeren als een provider.

In de constructor definiëren we een _weerService variabele van het type WeerService zodat we deze in de component kunnen gebruiken.

## We gebruiken het new keywoord niet om onze service te instantiëren

In de AppComponent (bovenstaande) kan je een nieuwe WeerService instantie maken zoals:

weerService = new WeerService(); // don't do this !

Waarom doen we dit niet? : 

- Op deze manier moet de component weten hoe je de WeerService moet aanmaken. Indien je aan de WeerService constructor verandering aanbrengt, zal je ook hier moeten updaten.

- Je maakt steeds een nieuwe service aan bij het gebruik van new. Maar wat indien je weerberichten gecached hebt en dit met andere deelt.


## Injecteer de WeerService

Dus in plaats van het new keywoord gebruiken we een constructor met een private property:

```

 constructor(private weerService:WeerService) {

        
    }  
    
``` 

De constructor zelf doet niets, maar er wordt een private parameter van WeerService meegegeven, wat de injectie is. Nu weet Angular om een instantie van HeroService aan te maken bij create van de AppComponent.

Om de injector mee te geven dat hij een WeerService moet maken moeten we in de providers array de WeerService meegegeven:

```

@Component ({ 
   selector: 'weer', 
   template: '<div><button (click) = "sync()">Call Sync</button><button (click) = "async()">Call Async</button></div>', 
   providers: [WeerService] 
}) 

```

De providers array zegt tegen Angular om een instantie van WeerService te maken waneer de AppComponent te maken. De AppComponent ,maar ook de child-components, kunnen gebruik maken van deze service.


## Async services en Promises

De WeerService retourneert onmiddellijk een Weerbericht, of anders gezegd: synchroon:

```
  getWeerBerichtSync(){
        let wb:WeerBericht = new WeerBericht();
        wb.Beschrijving = "testje";
        wb.Temperatuur = 22;

        return wb;
    }
    
```
De kans is groot dat de service data ophaalt van een remote server, of data uit een database ophaalt zodat gebruikers niet kunnen wachten totdat de server geantwoord heeft. Je mag de User Interface niet blokkeren wanneer je aan het wachten bent.

Om enige coordinatie te hebben tussen je antwoord en de view, kan je gebruik maken van Promises, wat een asynchrone techniek is om bijvoorbeeld je weerbericht op te halen.

Een Promise belooft een callback wanneer je resultaten klaar zijn. Je vraagt aan een asynchrone service om wat werk te doen, en geeft een callback functie mee. De service zal dan het werk doen en tenslotte de callback funtie oproepen met de resultaten of een error.

### Update van het sturen van het weerbericht (in de service)

```

 getWeerberichtVandaagAsync():Promise<WeerBericht>{
      
       let wb:WeerBericht = new WeerBericht();
       wb.Beschrijving = "testje";
       wb.Temperatuur = 22;
       return Promise.resolve(wb);
         
   } 
   
```

of je zorgt voor wat latency:

```

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
   
```

We gevende callback function als een argument van de Promise then methode in de component:

```
 async(arg:any){
        //Call sync:
        let wb:WeerBericht;
        this.weerService.getWeerberichtVandaagAsync().then(data => { wb = data;             console.log(wb);});    
    }
    
```


Meer uitleg over Promises:
> http://exploringjs.com/es6/ch_promises.html



# Crud

We maken in de src folder een json bestand aan: namen.json

```

[{
    "Id":1,
   "Naam": "Tom",
   "Voornaam": "Peeters"
},

{
    "Id":2,
   "Naam": "Mieke",
   "Voornaam": "Vandeperre"
}]

```

Nu maken we een interface aan in TypeScript. Deze interface definieert een Persoon uit onze namen.json file.

Daarna passen we de app.module.ts file aan:

```
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';

@NgModule({
  imports:      [ BrowserModule,HttpModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```
=> We voegen hier de HttpModule toe.

Nu maken we onze persoon service aan:

personen.service.ts:

```

import { Injectable } from '@angular/core';
import { Http , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { IPersoon } from './Persoon';

@Injectable()
export class PersonenService {
   private _producturl='app/namen.json';
   constructor(private _http: Http){}
   
   getproducts(): Observable<IPersoon[]> {
      return this._http.get(this._producturl)
      .map((response: Response) => <IPersoon[]> response.json())
      .do(data => console.log(JSON.stringify(data)));
   }
}

```

- De import {Http, Response} van '@angular/http' wordt gebruikt om de http functie aan te spreken om de data van namen.json af te halen.

- Om gebruik  te maken van het Reactive framework om zo een Observable variabele te maken moet men dit implementeren:

```
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
```
Dit observable framework wordt gebruikt om veranderingen in de http response te detecteren om dit dan terug te sturen naar de hoofd applicatie.

- er wordt ook een variabele van het type Http aangemaakt om de response van de datasource op te vangen.

Nu moeten we de app.component.ts file nog aanpassen:
Next, we define a variable of the type Http which will be used to get the response from the data source.


# HttpClient!!

https://alligator.io/angular/httpclient-intro/

Om de HttpClient module te activeren, importeren we deze in de app module:

```

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

En vanaf nu kunnen we de HttpClient gebruiken:

```
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
 

  constructor(private _http:HttpClient){

  }

}

```

Om een Get request te sturen naar mijn REST service doe ik bijvoorbeeld:

```
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeerBericht } from './WeerBericht';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  berichten:WeerBericht[];

  constructor(private _http:HttpClient){

  }

  GetWeerbericht(){
   this._http.get<WeerBericht[]>("http://localhost:37565/api/weer").subscribe(res=>{
      for(var i=0;i<res.length;i++)
        console.log(res[i].beschrijving);
     
      this.berichten = res;
   });
  }

}
```

# Gebruik maken van Material Design

https://medium.com/codingthesmartway-com-blog/using-material-design-in-angular-2-83a3128c58b7

## Installing Dependencies

> npm install --save @angular/material @angular/animations

Open /src/app/app.module.ts file en importeer de geïnstalleerde packages:

> import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

> import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';


We hebben 6 verschillende modules toegevoegd:
material buttons, cards, menus, toolbars and icons

En nu voegen we ze toe aan de imports van @NgModule:

```
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule,MdInputModule,MdMenuModule,MdToolbarModule,MdListModule,MdDialogModule,MdCardModule,MdDatepickerModule,MdNativeDateModule} from '@angular/material';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,MdButtonModule, MdCheckboxModule,MdInputModule,MdMenuModule,MdToolbarModule,MdListModule,MdDialogModule,MdCardModule,MdDatepickerModule,MdNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

> https://material.angular.io/components

Defining a Default Material Style

In our /src/styles.css file, which is generated by the Angular CLI, let's add the following:

In de /src/styles.css file (gegenereerd door Angular CLI) voegen we dit toe:

```
@import '~@angular/material/prebuilt-themes/indigo-pink.css';

body {
    padding: 2em 23em;
    background:lightgray;
}
```

In plaats van indigo-pink.css , kan je ook volgende settings nemen:

- deeppurple-amber.css
- indigo-pink.css
- pink-bluegrey.css
- purple-green.css

In index.html voegen we ook volgende lijnen toe:

```
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic">
```

Hier importeren we het material design icon font, en Roboto font (gebruikt door Material Design).

In app.component.html schrijven we bijvoorbeeld:

```

<md-form-field>
  <input mdInput [mdDatepicker]="picker" placeholder="Choose a date">
  <md-datepicker-toggle mdSuffix [for]="picker"></md-datepicker-toggle>
  <md-datepicker #picker></md-datepicker>
</md-form-field>
```
