# Step by Step Tutorial
## 1. Generate Application
Go to the folder where you want to create a new Angular Application and start your preffered cmd tool.
The project name used is eport.

To iniitalize the new Angular App and add some components use following commands:

```console
ng new eport --routing
cd eport
ng serve --open to show
ng generate component home
ng generate component list
```
## 2. Add Routing
Add the paths to your app-routing.module.ts:
```console
const routes: Routes = [
  { path: 'index', component: HomeComponent},
  { path: 'list', component: ListComponent}
];
```

Delete the content of app.component.html and replace it with:
  
```html
<nav>
<ul>
	<li><a routerLink="/index" routerLinkActive="active">Home</a></li>
	<li><a routerLink="/list" routerLinkActive="active">List</a></li>
</ul>
</nav>
<router-outlet></router-outlet>
```

This should make a little navigation list that roots to the components correctly.

## 3. Add a List to your Application
	
Create 2 new files in the app directory listelement.ts and list.ts.

listelement.ts:
```typescript
export interface Listelement {
	id: number;
	value: string;
}
```

list.ts
```typescript
import { Listelement } from './listelement';

export const LIST: Listelement[] = [
	{ id:1, value: "First"},
	{ id: 2, value: "Second"}
];
```
The list.component.ts needs to import the 2 new modules
 and in the OnInit elment the list must be set:
```typescript
import { Listelement } from '../listelement';
import { LIST } from '../list';

export class ListComponent implements OnInit {
list = LIST;
  constructor() { }
  ngOnInit(): void {
  }
}
```

To show the list in the view the list.component.html needs to be changed to:
```html
<h2>Liste</h2>
<li *ngFor="let listelement of list" (click)="onSelect(listelement)">
    <span>{{listelement.id}}  {{listelement.value}}</span>
</li>
```

## 4. Details and Click Event

To add a click event to your listelements you need to change the html to:
```html
<h2>Liste</h2>
<li *ngFor="let listelement of list" (click)="onSelect(listelement)">
    <span>{{listelement.id}}  {{listelement.value}}</span>
</li>
```
The list.component.ts needs to implement the method onSelect. It looks like that:
```typescript
export class ListComponent implements OnInit {
list = LIST;
selectedElement: Listelement;
  constructor() { }

  ngOnInit(): void {
  }
  onSelect(selectedElement: Listelement): void {
    this.selectedElement = selectedElement;
  }
}
```

To see the details of a selected element you need to add this below your current html:
```html
<div *ngIf="selectedElement">
<h2>{{selectedElement.value}} Details</h2>
<div><span>id: </span> {{selectedElement.id}} </div>
<div>
<label>Wert:
    <input [(ngModel)]="selectedElement.value" placeholer="value" />
</label>
</div>
</div>
``` 

As you can see there is a input form to change the properties of an elment.
To make forms work you need to add an import to your app.module.ts:
	
```typescript
import { FormsModule } from '@angular/forms'; 
imports: [
  BrowserModule,
  FormsModule
],
```

## 5. Styling	

To add a style to your selected element simpy change your list line in your html to this:
```html
<li *ngFor="let listelement of list" (click)="onSelect(listelement)" [class.selected]="listelement === selectedElement">
```

Now you can use this class in your list.component.css to style your selected item:

```css
li.selected {
    color: blue;
}
```	  
