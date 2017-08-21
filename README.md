# Angular 2

Angular 2 is een open source JavaScript framework voor het bouwen van web applicaties.

Angular 2 bestaat uit:

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

de @NgModule decorator wordt gebruikt om de imports, declarations en bootstap te definiëren:

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

> Maak een nieuwe property aan

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


